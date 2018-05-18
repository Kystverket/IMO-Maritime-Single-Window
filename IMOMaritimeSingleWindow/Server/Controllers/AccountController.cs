using System.Linq;
using System;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Identity;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.ViewModels;
using IMOMaritimeSingleWindow.Auth;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Policies = IMOMaritimeSingleWindow.Helpers.Constants.Strings.Policies;
using Claims = IMOMaritimeSingleWindow.Helpers.Constants.Strings.Claims;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly ApplicationUserManager _userManager;
        private readonly ApplicationRoleManager _roleManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IMapper _mapper;

        public AccountController(
            ApplicationUserManager userManager,
            ApplicationRoleManager roleManager,
            SignInManager<ApplicationUser> signInManager,
            IMapper mapper
            )
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
            _mapper = mapper;
        }

        [HasClaim(Claims.Types.USER, Claims.Values.REGISTER)]
        // POST api/accounts/register
        [HttpPost("user/")]
        public async Task<IActionResult> Register([FromBody]RegistrationViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = _mapper.Map<ApplicationUser>(model);

            var result = await _userManager.CreateAsync(userIdentity);

            //TODO: Implement functionality for sending email to user with new account, so that they can set their own password

            if (!result.Succeeded) return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

            return new OkObjectResult("Account created");
        }

        [HasClaim(Claims.Types.USER, Claims.Values.REGISTER)]
        // POST api/accounts/register
        [HttpPost("user/withpw")]
        public async Task<IActionResult> RegisterWithPassword([FromBody]RegistrationWithPasswordViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = _mapper.Map<ApplicationUser>(model);

            var role = await _roleManager.FindByNameAsync(model.RoleName);
            if(role == null)
                return BadRequest($"The role \"{model.RoleName}\" does not exist! User not created.");

            var result = await _userManager.CreateAsync(userIdentity, model.Password);
            if (!result.Succeeded)
                return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));
            // Add the user to the specified role
            result = await _userManager.AddToRoleAsync(userIdentity, model.RoleName);
            if (!result.Succeeded)
                return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));
            
            return new OkObjectResult("Account created");
        }
        
        
        [Authorize(Roles = Constants.Strings.UserRoles.Admin + ", " + Constants.Strings.UserRoles.SuperAdmin)]
        [HttpGet("roles")]
        public IActionResult GetAllRoles()
        {
            var roleMan = _roleManager as ApplicationRoleManager;
            var roleNames = roleMan.GetAllRoles().GetAwaiter().GetResult();
            roleNames.Remove("super_admin");
            return Ok(roleNames);
        }

        [Authorize(Roles = Constants.Strings.UserRoles.Admin + ", " + Constants.Strings.UserRoles.SuperAdmin)]
        [HttpGet("user/{email}/exists")]
        public async Task<IActionResult> UserExists(string email)
        {
            bool exists = await _userManager.FindByEmailAsync(email) != null;
            return Json(exists);
        }

        [Authorize]
        [HttpGet("user/name")]
        public async Task<IActionResult> GetUserName()
        {
            var idClaim = User.Claims.FirstOrDefault(cl => cl.Type == Constants.Strings.JwtClaimIdentifiers.Id);
            var userId = idClaim.Value;
            var user = await _userManager.FindByIdAsync(userId);
            return Json(user.UserName);
        }

        [Authorize(Roles = Constants.Strings.UserRoles.Admin + ", " + Constants.Strings.UserRoles.SuperAdmin)]
        [HttpGet("user/{email}")]
        public async Task<IActionResult> GetUserByEmail(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            return Json(user);
        }

        [Authorize]
        [HttpGet("user/claims")]
        public async Task<IActionResult> GetUserClaims()
        {
            var userIdClaim = User.Claims.Where(usr => usr.Type == Constants.Strings.JwtClaimIdentifiers.Id).FirstOrDefault();
            if (userIdClaim == null)
                return new BadRequestObjectResult("id not present on jwt");
            var userId = userIdClaim.Value;

            var user = await _userManager.FindByIdAsync(userId);
            var claims = await _userManager.GetClaimsAsync(user);
            return Json(claims);
        }

    }
}
