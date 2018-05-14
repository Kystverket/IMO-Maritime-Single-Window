using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using IMOMaritimeSingleWindow.Identity; using IMOMaritimeSingleWindow.Identity.Models;
using Microsoft.AspNetCore.Identity;
using IMOMaritimeSingleWindow.ViewModels;
using IMOMaritimeSingleWindow.Repositories;
using AutoMapper;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Helpers;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class TestController : Controller
    {
        private readonly IUnitOfWork<Guid> _unitOfWork;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;
        //private readonly UserRoleManager<ApplicationUser, Guid, ApplicationRole, Guid> _userRoleManager;
        private readonly IMapper _mapper;

        public TestController(UserManager<ApplicationUser> userManager,
            RoleManager<ApplicationRole> roleManager,
            //UserRoleManager<ApplicationUser, Guid, ApplicationRole, Guid> userRoleManager,
            IMapper mapper,
            IUnitOfWork<Guid> unitOfWork)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            //_userRoleManager = userRoleManager;
            _mapper = mapper;
            _unitOfWork = unitOfWork;
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
            var claims = await _userManager.GetClaimsAsync(user);
            //var claims = await _userRoleManager.GetClaimsAsync(user);

            return Json(claims);
        }

        [Authorize(AuthenticationSchemes = default)]
        [Authorize(Policy = "Port Call Registration")]
        [HttpGet("canregisterportcall")]
        public IActionResult CanRegisterPortCall()
        {
            //Authorization checks are made ... ^
            return new OkObjectResult("Port call registration granted");
        }

        [Authorize(Policy = "PortCallClearance")]
        [HttpGet("canSetPortCallClearance")]
        public IActionResult CanClearPortCall()
        {
            return Ok(true);
        }

    }



}
