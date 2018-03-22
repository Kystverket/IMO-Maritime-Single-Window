

using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Models.Entities;
using IMOMaritimeSingleWindow.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
 

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")] 
    public class AccountsController : Controller
    {
        private readonly UserDbContext _appDbContext;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IMapper _mapper;

        public AccountsController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IMapper mapper, UserDbContext appDbContext)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _mapper = mapper;
            _appDbContext = appDbContext;
        }

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
            
            if(userIdentity.NormalizedUserName == "ADMIN")
            {
                var user = await _userManager.FindByNameAsync(userIdentity.NormalizedUserName);
                await _userManager.AddToRoleAsync(user, "admin");
            }

            //await _appDbContext.Persons.AddAsync(new Person { IdentityId = userIdentity.Id});
            await _appDbContext.SaveChangesAsync();

            return new OkObjectResult("Account created");
        }
    }
}
