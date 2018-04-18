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
using IMOMaritimeSingleWindow.Identity;

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
        [HttpGet("menuEntries")]
        public async Task<IActionResult> GetMenuEntries()
        {
            var user = Request.HttpContext.User;
            var roles = user
                .FindAll(claim => claim.Type == ClaimTypes.Role)
                .Select(x => x.Value);

            List<string> menuEntries = new List<string>();
            foreach (var role in roles)
            {
                var appRole = await _roleManager.FindByNameAsync(role);
                var claimsForRole = await _roleManager.GetClaimsAsync(appRole);
                var menuClaims = from claim in claimsForRole
                                 where claim.Type.Equals("Menu")
                                 select claim.Value;
                menuClaims = menuClaims.ToList();
                menuEntries = menuClaims.Union(menuEntries).ToList();
            }

            return Json(new
            {
                menu_entries = menuEntries
            });
           
        }


    }
}
