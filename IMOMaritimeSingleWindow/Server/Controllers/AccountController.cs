
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
using IMOMaritimeSingleWindow.Services;
using IMOMaritimeSingleWindow.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
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
        private readonly UserManager _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IEmailSender _emailSender;
        private readonly IMapper _mapper;
        private readonly ILogger<AccountController> _logger;

        private readonly IHostingEnvironment _env;
        public AccountController(
            UserManager<ApplicationUser> userManager,
            RoleManager<ApplicationRole> roleManager,
            SignInManager<ApplicationUser> signInManager,
            IEmailSender emailSender,
            IMapper mapper,
            IHostingEnvironment env,
            ILogger<AccountController> logger
            )
        {
            _userManager = userManager as UserManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
            _emailSender = emailSender;
            _mapper = mapper;
            _env = env;
            _logger = logger;
        }

        [HasClaim(Claims.Types.USER, Claims.Values.REGISTER)]
        // POST api/account/user
        [HttpPost("user")]
        public async Task<IActionResult> Register([FromBody]RegistrationViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Tries to map the model to an object of type ApplicationUser
            var applicationUser = _mapper.Map<ApplicationUser>(model);

            // Verify the role the user is attempted added to exists
            var role = await _roleManager.FindByNameAsync(model.RoleName);
            if (role == null)
                return BadRequest($"The role \"{model.RoleName}\" does not exist! User not created.");

            // Validate user and try to create new user with given password in the backing store
            var result = await _userManager.CreateAsync(applicationUser);
            if (!result.Succeeded)
                return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

            var addedUser = await _userManager.FindByEmailAsync(model.Email);
            // Add the user to the specified role
            result = await _userManager.AddToRoleAsync(addedUser, model.RoleName);
            if (!result.Succeeded)
                return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

            var callbackUrl = await GenerateEmailConfirmationLinkAsync(addedUser);

            // Compose email

            var subject = "IMO-MSW account registration";
            var htmlLink = $"<a href='{callbackUrl}'>website</a>";
            var message = $"An account has been created for you for use on the IMO Maritime Single Window {htmlLink}.";
            message += "<br>Please click the link to visit the website in order to assign a password to your account.";

            // Send confirmation link to user's registered email address
            var emailSendResult = await _emailSender.SendHtml(subject, message, recipient: model.Email);
            if (!emailSendResult.Succeeded)
            {
                _logger.LogError($"Failed to send email to user {model.Email}");
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            _logger.LogDebug($"Email sent to {model.Email}");

            _logger.LogDebug($"Account created. Confirmation link sent to {model.Email}");
            return Ok();
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
            if (String.IsNullOrWhiteSpace(userId) || String.IsNullOrWhiteSpace(emailConfirmationToken))
                return BadRequest();
            
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
                return BadRequest();

            // Parse URI query parameter
            var _emailConfirmationToken = Uri.UnescapeDataString(emailConfirmationToken);

            var emailVerificationResult = await _userManager.ConfirmEmailAsync(user, _emailConfirmationToken);
            if (!emailVerificationResult.Succeeded)
            {
                #if !RELEASE
                    return BadRequest(emailVerificationResult.Errors);
                #else
                    return BadRequest();
                #endif
            }

            var passwordChangeToken = await _userManager.GeneratePasswordResetTokenAsync(user);
            return Ok(passwordChangeToken);
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
                return Ok();
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
                return BadRequest(ModelState);
            
            var user = await _userManager.FindByIdAsync(model.UserId);
            if (user == null)
                return BadRequest();

            // Parse URI query parameter
            var passwordResetToken = Uri.UnescapeDataString(model.PasswordResetToken);

            var passwordResetResult = await _userManager.ResetPasswordAsync(user, passwordResetToken, model.NewPassword);
            if (passwordResetResult.Succeeded)
            {
                // log($"Password changed for user {user.Email}");
                return Ok();
            }
            return BadRequest();
        }

        /// <summary>
        /// Lets a user request a password reset link 
        /// to their email account in the event that the 
        /// user has forgotten their password. 
        /// </summary>
        /// <param name="userName"></param>
        /// <returns>A password reset link</returns> 
        [AllowAnonymous]
        [HttpGet("user/password/forgotten")]    // Should be post with body
        public async Task<IActionResult> ForgotPassword(string userName)
        {
            if (String.IsNullOrEmpty(userName))
                return BadRequest(nameof(userName));

            var user = await _userManager.FindByEmailAsync(userName);
            if(user == null)
                return BadRequest();

            var userId = await _userManager.GetUserIdAsync(user);
            var passwordResetLink = await GeneratePasswordResetLinkAsync(user);
            if (passwordResetLink == null)
                return BadRequest();
            // Send email to user

            var subject = "Password reset request";
            var message = "<p>A reset of your password was requested. Please click the link below to reset your password:</p>";
            message += $"<br><a href='{passwordResetLink}'>Password reset link</a>";
            message += "<br><p>If you did not request this password reset, please ignore this message.</p>";

            var result = await _emailSender.SendHtml(subject, message, recipient: user.Email);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError);

            // log($"Reset link sent to {userName}");
            return Ok();
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
        /// Gets the display name of the logged in user
        /// </summary>
        /// <returns>Display name as a string</returns>
        [Authorize]
        [HttpGet("user/displayName")]
        public async Task<IActionResult> GetDisplayName()
        {
            var userId = this.GetUserId();
            var user = await _userManager.FindByIdAsync(userId);
            var displayName = _userManager.GetDisplayName(user);
            return Ok(displayName);
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

            UriBuilder uriBuilder = new UriBuilder(GetCallBackUri(Constants.Strings.ClientURIs.EMAILCONFIRMATION))
            {
                Query = queryBuilder.ToString()
            };

            return uriBuilder.Uri;
        }

        private async Task<Uri> GeneratePasswordResetLinkAsync(ApplicationUser applicationUser)
        {
            var passwordResetToken = await _userManager.GeneratePasswordResetTokenAsync(applicationUser);
            if (passwordResetToken == null)
                return null;

            QueryBuilder queryBuilder = new QueryBuilder(
                new Dictionary<string, string>()
                {
                    { "userId", applicationUser.Id.ToString() },
                    { "token", passwordResetToken }
                }
            );

            UriBuilder uriBuilder = new UriBuilder(GetCallBackUri(Constants.Strings.ClientURIs.RESETPASSWORD))
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
