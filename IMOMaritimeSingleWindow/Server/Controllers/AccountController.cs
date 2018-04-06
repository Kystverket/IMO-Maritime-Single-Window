using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Models.Entities;
using IMOMaritimeSingleWindow.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
 

namespace IMOMaritimeSingleWindow.Controllers
{
    //[Authorize]
    [Route("api/[controller]")] 
    public class AccountController : Controller
    {
        private readonly UserDbContext _appDbContext;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IMapper _mapper;

        public AccountController(
            UserManager<ApplicationUser> userManager,
            RoleManager<ApplicationRole> roleManager,
            SignInManager<ApplicationUser> signInManager,
            IMapper mapper,
            UserDbContext appDbContext)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
            _mapper = mapper;
            _appDbContext = appDbContext;
        }

        [Authorize(Roles = "admin")]
        // POST api/accounts/register
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]RegistrationViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = _mapper.Map<ApplicationUser>(model);

            var result = await _userManager.CreateAsync(userIdentity, model.Password);

            if (!result.Succeeded) return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));
            

            //await _appDbContext.Persons.AddAsync(new Person { IdentityId = userIdentity.Id});
            await _appDbContext.SaveChangesAsync();

            return new OkObjectResult("Account created");
        }

        //[Authorize(Roles = "admin")]
        [HttpGet("getrole/all")]
        public IActionResult GetAllRoles()
        {
            var rolesQueryAble = _roleManager.Roles;
            var roles = from role in rolesQueryAble
                        select role.Name;
            
            return Json(roles);
        }


        [HttpGet("getrole")]
        public IActionResult GetRole()
        {
            var userClaimsPrincipal = Request.HttpContext.User;
            var role = userClaimsPrincipal.Claims
                .Where(c => c.Type == System.Security.Claims.ClaimTypes.Role)
                .Select(f => f.Value);
            return Json(role);
        }

    }
}
