using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;

using IMOMaritimeSingleWindow.Models.Entities;
using IMOMaritimeSingleWindow.Data;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class SeedController : Controller
    {
        
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly UserRoleManager<ApplicationUser, Guid, ApplicationRole, Guid> _userRoleManager;
        private readonly UserDbInitializer _userDbInitializer;

        public SeedController(UserManager<ApplicationUser> userManager,
            RoleManager<ApplicationRole> roleManager,
            UserRoleManager<ApplicationUser, Guid, ApplicationRole, Guid> userRoleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _userRoleManager = userRoleManager;
            _userDbInitializer = new UserDbInitializer(_userManager, _roleManager);
        }

        [HttpPost("seedAdmin")]
        public async Task SeedAdmin()
        {
            await _userDbInitializer.SeedAsync();
        }

        [HttpPost("seedMisc")]
        public async Task SeedMisc()
        {
            await _userDbInitializer.SeedMiscAsync();
        }

    }
}
