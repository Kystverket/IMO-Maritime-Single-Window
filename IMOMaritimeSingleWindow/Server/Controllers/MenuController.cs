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

namespace IMOMaritimeSingleWindow.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class MenuController : Controller
    {
        private UserManager<IdentityUser> _userManager;
        private RoleManager<IdentityRole> _roleManager;
        private IAuthorizationService _authorizationService;

        public MenuController(
            UserManager<IdentityUser> userManager,
            RoleManager<IdentityRole> roleManager,
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
            var roles = from claim in user.Claims
                        where claim.Type.Equals(Constants.Strings.JwtClaimIdentifiers.Rol)
                        select claim.Value;

            List<Claim> menuEntries = new List<Claim>();
            foreach (var role in roles)
            {
                var appRole = await _roleManager.FindByNameAsync("role");
                var claimsForRole = await _roleManager.GetClaimsAsync(appRole);
                menuEntries = menuEntries.Union(claimsForRole).ToList();
            }

            return Ok(menuEntries);
           
        }


    }
}
