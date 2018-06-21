
/*  This was adopted from an example project written by
 *  author: Marc Macniel (https://github.com/mmacneil)
 *  cited in a blog post
 *  url: https://fullstackmark.com/post/13/jwt-authentication-with-aspnet-core-2-web-api-angular-5-net-core-identity-and-facebook-login
 *  demonstrating how to implement a framework for authenticating users with JWT
 *  in an ASP.NET Core 2/Angular 5 web application.
 *  
 *  The original class this class is based upon can be found on the project's GitHub repository
 *  url: https://github.com/mmacneil/AngularASPNETCore2WebApiAuth
 *  file url: https://github.com/mmacneil/AngularASPNETCore2WebApiAuth/blob/master/src/Controllers/AuthController.cs
 */

using System;
using System.Security.Claims;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Auth;
using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Identity;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;



namespace IMOMaritimeSingleWindow.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        //private readonly UserRoleManager<ApplicationUser, Guid, ApplicationRole, Guid> _userRoleManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IJwtFactory _jwtFactory;
        private readonly JwtIssuerOptions _jwtOptions;
        private readonly ILogger<AuthController> _logger;

        public AuthController(UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            //UserRoleManager<ApplicationUser, Guid, ApplicationRole, Guid> userRoleManager,
            IJwtFactory jwtFactory,
            IOptions<JwtIssuerOptions> jwtOptions,
            ILogger<AuthController> logger)
        {
            _userManager = userManager;
            //_userRoleManager = userRoleManager;
            _signInManager = signInManager;
            _jwtFactory = jwtFactory;
            _jwtOptions = jwtOptions.Value;
            _logger = logger;
        }

        // POST api/auth/login
        [AllowAnonymous]
        //[ValidateAntiForgeryToken]
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]CredentialsViewModel credentials)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userName = credentials.UserName;
            var password = credentials.Password;

            // Verify credentials
            int res = await VerifyCredentials(userName, password);
            switch (res)
            {
                case (int)Constants.LoginStates.OK:
                    _logger.LogDebug("Valid credentials");
                    break;
                case (int)Constants.LoginStates.InvalidCredentials:
                    _logger.LogDebug("Invalid credentials");
                    ModelState.AddModelError(string.Empty, "Invalid login attempt:");
                    return BadRequest(Errors.AddErrorToModelState("login_failure", "Invalid credentials.", ModelState));
                case (int)Constants.LoginStates.LockedOut:
                    _logger.LogWarning("User account is locked out.");
                    var forbiddenRequestObject = BadRequest(ModelState);
                    forbiddenRequestObject.StatusCode = Microsoft.AspNetCore.Http.StatusCodes.Status403Forbidden;
                    return forbiddenRequestObject;
                default:
                    return new ForbidResult();
            }

            var identity = await GetClaimsIdentity(userName);
            if (identity == null)
            {
                return StatusCode(Microsoft.AspNetCore.Http.StatusCodes.Status500InternalServerError);
            }

            var jwt = await Tokens.GenerateJwt(identity, _jwtFactory, credentials.UserName, _jwtOptions, new JsonSerializerSettings { Formatting = Formatting.Indented });
            _logger.LogInformation(jwt);
            return new ContentResult
            {
                Content = jwt,
                ContentType = "application/json; charset=utf-8",
                StatusCode = 200
            };
        }

        private async Task<int> VerifyCredentials(string userName, string password)
        {
            // Check for empty username
            if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(password))
                return (int)Constants.LoginStates.InvalidCredentials;

            // Verify that user exists
            var _user = await _userManager.FindByNameAsync(userName);
            if (_user == null)
            {
                _logger.LogDebug("User is null");
                return (int)Constants.LoginStates.InvalidCredentials;
            }

            // Verify username and password match
            Microsoft.AspNetCore.Identity.SignInResult result = await _signInManager.CheckPasswordSignInAsync(_user, password, lockoutOnFailure: true);
            if (result.Succeeded)
            {
                _logger.LogInformation("User logged in successfully");
                return (int)Constants.LoginStates.OK;
            }
            else if (result.IsLockedOut)
                return (int)Constants.LoginStates.LockedOut;
            else
            {
                var noFailed = await _userManager.GetAccessFailedCountAsync(_user);
                _logger.LogInformation($"Invalid login attempt\nNumber of invalid login attempts thus far: {noFailed}");
                return (int)Constants.LoginStates.InvalidCredentials;
            }
        }

        private async Task<ClaimsIdentity> GetClaimsIdentity(string userName)
        {
            var user = await _userManager.FindByNameAsync(userName);
            var claims = await _userManager.GetClaimsAsync(user);

            _logger.LogInformation($"Generating JWT for user {user.Id}");
            var userManager = _userManager as UserManager;
            var roleName = await userManager.GetRoleNameAsync(user);
            return await Task.FromResult(_jwtFactory.GenerateClaimsIdentity<Guid>(userName, user.Id, roleName, claims));
        }
        
        [Authorize]
        [Route("isAdmin")]
        public IActionResult IsAdmin()
        {
            bool isAdmin = HttpContext.User.IsInRole(Constants.Strings.UserRoles.Admin);
            return Ok(isAdmin);
        }

        [Authorize]
        [HttpGet("hasValidToken")]
        public IActionResult HasValidToken()
        {
            return Ok(true);
        }

    }
}
