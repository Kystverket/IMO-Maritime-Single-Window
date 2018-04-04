using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design.Internal;
using IMOMaritimeSingleWindow.Models.Entities;
using Microsoft.AspNetCore.Identity;
using IMOMaritimeSingleWindow.Helpers;

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
            
            var adminRole = new ApplicationRole("admin");
            await _roleManager.CreateAsync(adminRole);
            //Also add a default claim associated with that role
            await _roleManager.AddClaimAsync(adminRole, new System.Security.Claims.Claim
            (System.Security.Claims.ClaimTypes.Role, "admin"));

            ApplicationUser user;
            if(_userManager.FindByNameAsync("admin") != null)
            {
                user = new ApplicationUser
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

        public async Task SeedMiscAsync()
        {
            await SeedMiscRolesAsync();
            await SeedMiscUsersAsync();
        }
        public async Task SeedTestBaseAsync()
        {
            List<string> users = new List<string> { "user1", "user2", "user3" };
            List<string> roles = new List<string> { "role1", "role2", "role3" };
            string password = "Password123";
            //Create users
            foreach (string user in users)
                await SeedUser(user, password);
            await SeedRoles(roles);
            await SeedUsersToRoles(users, roles);
        }

        private async Task SeedMiscRolesAsync()
        {
            var agentRole = new ApplicationRole("agent");
            var customsOfficerRole = new ApplicationRole("customs_officer");
            await _roleManager.CreateAsync(agentRole);
            await _roleManager.CreateAsync(customsOfficerRole);

            await _roleManager.AddClaimAsync(agentRole, new System.Security.Claims.Claim
                (System.Security.Claims.ClaimTypes.Role, Constants.Strings.UserRoles.Agent));
            await _roleManager.AddClaimAsync(customsOfficerRole, new System.Security.Claims.Claim
                (System.Security.Claims.ClaimTypes.Role, "customs_officer"));
        }

        private async Task SeedMiscUsersAsync()
        {
            var agentUser = new ApplicationUser
            {
                UserName = "agent",
                Email = "agent@test.no",
                EmailConfirmed = true
            };
            var customsOfficerUser = new ApplicationUser
            {
                UserName = "customs_officer",
                Email = "customs_officer@test.no",
                EmailConfirmed = true
            };

            await _userManager.CreateAsync(agentUser, "Agent123");
            await _userManager.AddToRoleAsync(agentUser, "agent");

            await _userManager.CreateAsync(customsOfficerUser, "Cust123");
            await _userManager.AddToRoleAsync(customsOfficerUser, "customs_officer");
        }

        private async Task SeedUser(string userName, string password)
        {
            var user = new ApplicationUser
            {
                UserName = userName,
                Email = $"{userName}@test.no",
                EmailConfirmed = true
            };
            await _userManager.CreateAsync(user, password);
        }

        private async Task SeedUsersToRoles(IList<string> userNames, IList<string> roles)
        {
            foreach(string userName in userNames)
            {
                if (string.IsNullOrWhiteSpace(userName))
                    throw new ArgumentNullException("Username is empty.");
                foreach (string roleName in roles)
                {
                    if (string.IsNullOrWhiteSpace(roleName))
                        throw new ArgumentNullException("Rolename is empty.");
                    ApplicationRole role;
                    if ((role = await _roleManager.FindByNameAsync(roleName)) == null)
                        throw new ArgumentException($"role \"{roleName}\" does not exist");
                    var user = await _userManager.FindByNameAsync(userName);
                    await _userManager.AddToRoleAsync(user, roleName);
                }
            }

        }

        private async Task SeedRoles(IList<string> rolesNames)
        {
            foreach (string roleName in rolesNames)
            {
                if (string.IsNullOrWhiteSpace(roleName))
                    throw new ArgumentNullException("Rolename is empty.");
                var role = new ApplicationRole(roleName);
                await _roleManager.CreateAsync(role);
                
                var claim = new System.Security.Claims.Claim(
                    System.Security.Claims.ClaimTypes.Role, roleName);
                await _roleManager.AddClaimAsync(role, claim);
            }
        }

    }
}
