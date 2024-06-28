using System;
using System.Security.Claims;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Auth;
using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;
using System.Linq;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IJwtFactory _jwtFactory;
        private readonly JwtIssuerOptions _jwtOptions;
        private readonly ILogger<AuthController> _logger;

        public AuthController(UserManager<ApplicationUser> userManager,
                              SignInManager<ApplicationUser> signInManager,
                              IJwtFactory jwtFactory,
                              IOptions<JwtIssuerOptions> jwtOptions,
                              ILogger<AuthController> logger)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _jwtFactory = jwtFactory;
            _jwtOptions = jwtOptions.Value;
            _logger = logger;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] CredentialsViewModel credentials)
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
                    return StatusCode(StatusCodes.Status403Forbidden, ModelState);
                case (int)Constants.LoginStates.Disabled:
                    _logger.LogWarning("User Account Disabled");
                    return BadRequest(Errors.AddErrorToModelState("login_failure", "Account has been disabled. Please contact Administrator.", ModelState));
                default:
                    return Forbid();
            }

            var identity = await GetClaimsIdentity(userName);
            if (identity == null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
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
            if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(password))
                return (int)Constants.LoginStates.InvalidCredentials;

            var _user = await _userManager.FindByNameAsync(userName);
            if (_user == null)
            {
                _logger.LogDebug("User is null");
                return (int)Constants.LoginStates.InvalidCredentials;
            }

            if (_user != null && (!_user.IsActive))
            {
                _logger.LogDebug("User Account Disabled");
                return (int)Constants.LoginStates.Disabled;
            }

            var result = await _signInManager.CheckPasswordSignInAsync(_user, password, lockoutOnFailure: true);
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
            var roleName = (await _userManager.GetRolesAsync(user)).FirstOrDefault();
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
            return Ok();
        }
    }
}