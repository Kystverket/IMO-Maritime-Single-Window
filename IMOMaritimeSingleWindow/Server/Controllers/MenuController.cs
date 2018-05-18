using System;
using System.Net.Http;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;

using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Identity; using IMOMaritimeSingleWindow.Identity.Models;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class MenuController : Controller
    {
        private UserManager<ApplicationUser> _userManager;
        private RoleManager<ApplicationRole> _roleManager;
        private IAuthorizationService _authorizationService;

        public MenuController(
            UserManager<ApplicationUser> userManager,
            RoleManager<ApplicationRole> roleManager,
            IAuthorizationService authorizationService)
        { 
            _userManager = userManager;
            _roleManager = roleManager;
            _authorizationService = authorizationService;
            }


        [Authorize]
        [HttpGet("entries")]
        public IActionResult GetMenuEntries()
        {
            var menuEntries = User.FindAll(claim => claim.Type == "Menu").ToList();
            return Ok(menuEntries);
        }


    }
}
