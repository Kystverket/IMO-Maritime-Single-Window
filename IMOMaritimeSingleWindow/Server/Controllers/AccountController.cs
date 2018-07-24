
/*  This was adopted from an example project written by
 *  author: Marc Macniel (https://github.com/mmacneil)
 *  cited in a blog post
 *  url: https://fullstackmark.com/post/13/jwt-authentication-with-aspnet-core-2-web-api-angular-5-net-core-identity-and-facebook-login
 *  demonstrating how to implement a framework for authenticating users with JWT
 *  in an ASP.NET Core 2/Angular 5 web application.
 *
 *  The original class this class is based upon can be found on the project's GitHub repository
 *  url: https://github.com/mmacneil/AngularASPNETCore2WebApiAuth
 *  file url: https://github.com/mmacneil/AngularASPNETCore2WebApiAuth/blob/master/src/Controllers/AccountsController.cs
 */

using AutoMapper;
using IMOMaritimeSingleWindow.Auth;
using IMOMaritimeSingleWindow.Extensions;
using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Identity;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Claims = IMOMaritimeSingleWindow.Helpers.Constants.Strings.Claims;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class AccountController : Controller, IAccountController
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IMapper _mapper;

        private readonly IHostingEnvironment _env;
        public AccountController(
            UserManager<ApplicationUser> userManager,
            RoleManager<ApplicationRole> roleManager,
            SignInManager<ApplicationUser> signInManager,
            IMapper mapper,
            IHostingEnvironment env
            )
        {
            _env = env;
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
            _mapper = mapper;
        }

        // [HasClaim(Claims.Types.USER, Claims.Values.REGISTER)]
        // POST api/account/user
        [HttpPost("user/test")]
        public async Task<IActionResult> RegisterTest([FromBody]RegistrationViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var applicationUser = _mapper.Map<ApplicationUser>(model);

            // Validate user and try to create new user in the backing store
            var result = await _userManager.CreateAsync(applicationUser);

            if (!result.Succeeded) return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

            // Functionality for sending email to user with new account, so that they can set their own password
            var callbackUrl = await GenerateEmailConfirmationLinkAsync(applicationUser);

            // Construct message
            var infotext = $"An email has been sent to {applicationUser.Email} containing the confirmation link: {callbackUrl}";
            return Ok(infotext);
        }

        [HasClaim(Claims.Types.USER, Claims.Values.REGISTER)]
        // POST api/account/user
        [HttpPost("user/")]
        public async Task<IActionResult> Register([FromBody]RegistrationViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var applicationUser = _mapper.Map<ApplicationUser>(model);

            // Validate user and try to create new user in the backing store
            var result = await _userManager.CreateAsync(applicationUser);

            if (!result.Succeeded) return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

            // Functionality for sending email to user with new account, so that they can set their own password
            var callbackUrl = await GenerateEmailConfirmationLinkAsync(applicationUser);

            // Send confirmation link to user's registered email address

            return new OkObjectResult($"Account created. Confirmation link sent to {model.Email}");
        }

        [HasClaim(Claims.Types.USER, Claims.Values.REGISTER)]
        // POST api/account/user
        [HttpPost("user")]
        public async Task<IActionResult> RegisterWithPassword([FromBody]RegistrationWithPasswordViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Tries to map the model to an object of type ApplicationUser
            var userIdentity = _mapper.Map<ApplicationUser>(model);

            // Verify the role the user is attempted added to exists
            var role = await _roleManager.FindByNameAsync(model.RoleName);
            if (role == null)
                return BadRequest($"The role \"{model.RoleName}\" does not exist! User not created.");

            // Validate user and try to create new user with given password in the backing store
            var result = await _userManager.CreateAsync(userIdentity, model.Password);
            if (!result.Succeeded)
                return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

            var addedUser = await _userManager.FindByEmailAsync(model.Email);
            // Add the user to the specified role
            result = await _userManager.AddToRoleAsync(addedUser, model.RoleName);
            if (!result.Succeeded)
                return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

            return new OkObjectResult("Account created");
        }
        
        /// <summary>
        ///
        /// </summary>
        /// <param name="userId"></param>
        /// <param name="emailConfirmationToken"></param>
        /// <returns>A password reset token used by the application to
        /// let the user assign their own password to their account.</returns>
        [AllowAnonymous]
        [HttpPost("user/email/confirm")]
        public async Task<IActionResult> ConfirmEmail(string userId, [Bind(Prefix="token")] string emailConfirmationToken)
        {
            var emConToken = Uri.UnescapeDataString(emailConfirmationToken);
            if (userId == null || emailConfirmationToken == null)
                return BadRequest();

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
                return BadRequest();

            var emailVerificationResult = await _userManager.ConfirmEmailAsync(user, emConToken);
            if (!emailVerificationResult.Succeeded)
            {
                #if !RELEASE
                    return BadRequest(emailVerificationResult.Errors);
                #else
                    return BadRequest();
                #endif
            }

            var passwordChangeToken = await _userManager.GeneratePasswordResetTokenAsync(user);
            return Json(passwordChangeToken);
            //return Ok(true);
        }

        /// <summary>
        /// Lets a logged in user change their password.
        /// </summary>
        /// <param name="model"></param>
        /// <returns> An HTTP 200 OK reponse if the password was successfully changed. </returns>
        [HttpPut("user/password/change")]
        public async Task<IActionResult> ChangePassword([FromBody]ChangePasswordViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = this.GetUserId();
            var user = await _userManager.FindByIdAsync(userId);

            if (user == null)
                return BadRequest();

            var result = await _userManager.ChangePasswordAsync(user, model.CurrentPassword, model.NewPassword);
            if (result.Succeeded)
                return Ok("Password changed");
            return BadRequest();
        }

        /// <summary>
        /// Lets a user change their password after verification
        /// of account ownership (i.e. via email link).
        /// </summary>
        /// <param name="model"></param>
        /// <returns> An HTTP 200 OK reponse if the provided password
        /// reset token was valid and the password was successfully reset. </returns>
        [AllowAnonymous]
        [HttpPut("user/password/reset")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordViewModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            if (model.UserId == null || model.NewPassword == null || model.PasswordResetToken == null)
                return BadRequest();

            var user = await _userManager.FindByIdAsync(model.UserId);
            if (user == null)
                return BadRequest();

            var passwordResetToken = Uri.UnescapeDataString(model.PasswordResetToken);
            var result = await _userManager.ResetPasswordAsync(user, passwordResetToken, model.NewPassword);
            if (result.Succeeded)
                return Ok("Password changed");

            return BadRequest();
        }

        /// <summary>
        /// Sends a password reset link to the user.
        /// </summary>
        /// <param name="userName"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpGet("user/password/forgotten")]    // Should be post with body
        public async Task<IActionResult> SendPasswordResetLink(string userName)
        {
            if (String.IsNullOrEmpty(userName))
                return BadRequest(nameof(userName));
            var applicationUser = await _userManager.FindByEmailAsync(userName);
            if(applicationUser == null)
                return BadRequest();

            var userId = await _userManager.GetUserIdAsync(applicationUser);
            var user = await _userManager.FindByIdAsync(userId);
            var passwordResetLink = await GeneratePasswordResetLinkAsync(applicationUser);
            // Send email to user

            // For now returns link to webclient
            return Ok(passwordResetLink);
        }



        /// <summary>
        /// Gets the roles assignable to users.
        /// </summary>
        /// <returns>A list of rolenames</returns>
        [Authorize(Roles = Constants.Strings.UserRoles.Admin + ", " + Constants.Strings.UserRoles.SuperAdmin)]
        [HttpGet("roles")]
        public async Task<IActionResult> GetAllRoles()
        {
            var roleMan = _roleManager as ApplicationRoleManager;
            var roleNames = await roleMan.GetAllRoles();
            roleNames.Remove(Constants.Strings.UserRoles.SuperAdmin);
            return Ok(roleNames);
        }

        /// <summary>
        /// Gets the username of the logged in user
        /// </summary>
        /// <returns>Username as a string</returns>
        [Authorize]
        [HttpGet("user/name")]
        public async Task<IActionResult> GetUserName()
        {
            var userId = this.GetUserId();
            var user = await _userManager.FindByIdAsync(userId);
            return Json(user.UserName);
        }

        /// <summary>
        /// Gets the user by email address
        /// </summary>
        /// <param name="email">The email address of the user</param>
        /// <returns></returns>
        [Authorize(Roles = Constants.Strings.UserRoles.Admin + ", " + Constants.Strings.UserRoles.SuperAdmin)]
        [HttpGet("user/{email}")]
        public async Task<IActionResult> GetUserByEmail(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            return Json(user);
        }

        /// <summary>
        /// Checks whether a user with the given email address has been created already.
        /// </summary>
        /// <param name="email">The email address to search by</param>
        /// <returns>A boolean</returns>
        [Authorize(Roles = Constants.Strings.UserRoles.Admin + ", " + Constants.Strings.UserRoles.SuperAdmin)]
        [HttpGet("emailTaken/{email}")]
        public async Task<IActionResult> EmailTaken(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            return Ok(user != null);
        }

        /// <summary>
        /// Gets the claims of the logged in user
        /// </summary>
        /// <returns>A list of claims</returns>
        [Authorize]
        [HttpGet("user/claims")]
        public async Task<IActionResult> GetUserClaims()
        {
            var userId = this.GetUserId();
            var user = await _userManager.FindByIdAsync(userId);
            var claims = await _userManager.GetClaimsAsync(user);
            return Json(claims);
        }


        #region Helper methods


        private async Task<Uri> GenerateEmailConfirmationLinkAsync(ApplicationUser applicationUser)
        {
            var emailConfirmationToken = await _userManager.GenerateEmailConfirmationTokenAsync(applicationUser);

            QueryBuilder queryBuilder = new QueryBuilder(
                new Dictionary<string, string>()
                {
                    { "userId", applicationUser.Id.ToString() },
                    { "token", emailConfirmationToken }
                }
            );

            UriBuilder uriBuilder = new UriBuilder(GetCallBackUri(Constants.Strings.ClientUris.EMAILCONFIRMATION))
            {
                Query = queryBuilder.ToString()
            };

            return uriBuilder.Uri;
        }

        private async Task<Uri> GeneratePasswordResetLinkAsync(ApplicationUser applicationUser)
        {
            var passwordResetToken = await _userManager.GeneratePasswordResetTokenAsync(applicationUser);

            QueryBuilder queryBuilder = new QueryBuilder(
                new Dictionary<string, string>()
                {
                    { "userId", applicationUser.Id.ToString() },
                    { "token", passwordResetToken }
                }
            );

            UriBuilder uriBuilder = new UriBuilder(GetCallBackUri(Constants.Strings.ClientUris.RESETPASSWORD))
            {
                Query = queryBuilder.ToString()
            };

            return uriBuilder.Uri;
        }

        private Uri GetCallBackUri()
        {
            int PORT = _env.IsDevelopment() ? 4200 : 80;

            UriBuilder uriBuilder = new UriBuilder
            {
                Scheme = Request.Scheme,
                Host = Request.Host.Host,
                Port = PORT
            };
            return uriBuilder.Uri;
        }
        // Returns an URI pointing to the route in the web application
        private Uri GetCallBackUri(string route)
        {
            int PORT = _env.IsDevelopment() ? 4200 : 80;

            UriBuilder uriBuilder = new UriBuilder
            {
                Scheme = Request.Scheme,
                Host = Request.Host.Host,
                Path = route,
                Port = PORT
            };
            return uriBuilder.Uri;
        }


        private Uri GetRequestUri()
        {
            UriBuilder uriBuilder = new UriBuilder
            {
                Scheme = Request.Scheme,
                Host = Request.Host.Host,
                Path = Url.Action(action: this.GetActionName(), controller: this.GetControllerName()),
                Port = HttpContext.Connection.LocalPort
            };
            return uriBuilder.Uri;

        }

        private Uri GetAbsoluteUri()
        {
            UriBuilder uriBuilder = new UriBuilder
            {
                Scheme = Request.Scheme,
                Host = Request.Host.Host,
                Path = Request.Path.ToString(),
                Query = Request.QueryString.ToString(),
                Port = HttpContext.Connection.LocalPort
            };
            return uriBuilder.Uri;
        }


#endregion

    }
}
