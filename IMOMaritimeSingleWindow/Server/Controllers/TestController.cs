using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using IMOMaritimeSingleWindow.Models.Entities;
using Microsoft.AspNetCore.Identity;
using IMOMaritimeSingleWindow.ViewModels;
using AutoMapper;
using IMOMaritimeSingleWindow.Data;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class TestController : Controller
    {

        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly UserRoleManager<ApplicationUser, Guid, ApplicationRole, Guid> _userRoleManager;
        private readonly IMapper _mapper;

        public TestController(UserManager<ApplicationUser> userManager,
            RoleManager<ApplicationRole> roleManager,
            UserRoleManager<ApplicationUser, Guid, ApplicationRole, Guid> userRoleManager,
            IMapper mapper)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _userRoleManager = userRoleManager;
            _mapper = mapper;
        }

        [Authorize(Policy = "AdminUser")]
        // GET /api/test/admindata
        [HttpGet("admindata")]
        public JsonResult GetAdminData()
        {
            int totalBansThisWipe = 8;
            List<string> dataList = new List<string>
            {
                "Wipe is scheduled for 8 PM CET on fridays, but admins can join 10 minutes earlier via this link: url",
                $"{totalBansThisWipe} players have been banned from the server this wipe"
            };
            return Json(dataList);
        }
        

        /**
        [HttpPost("userclaims")]
        public async Task<JsonResult> GetUserClaims([FromBody]RegistrationViewModel model)
        {
            var userIdentity = _mapper.Map<ApplicationUser>(model);
            var user = await _userManager.FindByEmailAsync(userIdentity.Email);
            var claims = await _userManager.GetClaimsAsync(user);
            return Json(claims);
        }
        */

        [HttpPost("seed")]
        public async Task SeedDatabase()
        {
            UserDbInitializer userDbInitializer = new UserDbInitializer(_userManager, _roleManager);
            await userDbInitializer.SeedAsync();
        }
        
        [HttpPost("getuserclaims")]
        public async Task<JsonResult> GetUserClaims([FromBody]UserViewModel model)
        {
            if (!ModelState.IsValid)
                return new JsonResult(null);
            var userIdentity = _mapper.Map<ApplicationUser>(model);
            var user = await _userManager.FindByNameAsync(userIdentity.UserName);
            var claims = await _userRoleManager.GetClaimsAsync(user);
            return Json(claims);
        }


        [HttpGet("getuserclaims/{userName}")]
        public async Task<JsonResult> GetUserClaims(string userName)
        {
           
            var user = await _userManager.FindByNameAsync(userName);
            if (user == null)
            {
                var jsonRes = new JsonResult($"User with username '{userName}' not found")
                {
                    StatusCode = 404
                };
                return jsonRes;
            }
            var claims = await _userRoleManager.GetClaimsAsync(user);
            return Json(claims);
        }

        [Authorize(Policy = "Port Call Registration")]
        [HttpGet("canregisterportcall")]
        public IActionResult CanRegisterPortCall()
        {
            //Authorization checks are made ... ^
            return new OkObjectResult("Port call registration granted");
        }

    }



}
