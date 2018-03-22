using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design.Internal;
using IMOMaritimeSingleWindow.Models.Entities;
using Microsoft.AspNetCore.Identity;

namespace IMOMaritimeSingleWindow.Data
{
    public class UserDbInitializer
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;

        public UserDbInitializer(UserManager<ApplicationUser> userManager, RoleManager<ApplicationRole> roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }


        public void Seed()
        {
            Task.Run(async () => { await SeedAsync(); }).Wait();
        }

        public async Task SeedAsync()
        {
            
            //If no roles exist
            if(!_roleManager.Roles.Any())
            {
                var adminRole = new ApplicationRole("admin");
                await _roleManager.CreateAsync(adminRole);
                //Also add a default claim associated with that role
                await _roleManager.AddClaimAsync(adminRole, new System.Security.Claims.Claim
                (System.Security.Claims.ClaimTypes.Role, "admin"));
            }

            if(_userManager.FindByNameAsync("admin") != null)
            {
                var user = new ApplicationUser
                {
                    UserName = "admin",
                    Email = "admin@test.no",
                    EmailConfirmed = true
                };
                await _userManager.CreateAsync(user, "Tester123");
                
                await _userManager.AddToRoleAsync(user, "admin");
            }
            await Task.FromResult(0);
        }
    }
}
