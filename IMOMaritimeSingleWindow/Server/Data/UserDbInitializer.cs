using System;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Threading;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design.Internal;
using IMOMaritimeSingleWindow.Models.Entities;
using Microsoft.AspNetCore.Identity;
using IMOMaritimeSingleWindow.Helpers;
using Microsoft.Extensions.Logging;

using IMOMaritimeSingleWindow.ViewModels;

namespace IMOMaritimeSingleWindow.Data
{
    public class UserDbInitializer : IDisposable, IUserDbInitializer
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;
        //private readonly ILogger<UserDbInitializer> _logger;
        private readonly UserDbContext _userDbContext;

        //Hack because class does not yet have permission to access local files
        public SeedItems SeedItems { get; set; }

        private List<ApplicationUser> ApplicationUsers { get; set; }
        private List<Person> Persons { get; set; }



        public UserDbInitializer(
            UserManager<ApplicationUser> userManager,
            RoleManager<ApplicationRole> roleManager
            //,ILogger<UserDbInitializer> logger
            , UserDbContext context,
            SeedItems seedItems
            )
        {
            _userManager = userManager;
            _roleManager = roleManager;
            //_logger = logger;
            _userDbContext = context;
            SeedItems = seedItems;
        }

        public void Dispose()
        {
            Console.WriteLine("disposed of");
        }

        /*
        public void Seed()
        {
            Task.Run(async () => { await SeedAsync(); }).Wait();
        }
        */

        private Task ResolveUsers()
        {
            var userModels = JsonConvert.DeserializeObject<List<RegistrationWithPasswordViewModel>>(SeedItems.UserBase);
            if (userModels == null)
                throw new TaskCanceledException("Could not convert to JSON or JSON is empty");

            foreach (var userModel in userModels)
            {
                ApplicationUser appUser = new ApplicationUser
                {
                    Email = userModel.Email,
                    UserName = userModel.Email
                };
                ApplicationUsers.Add(appUser);
            }
            return Task.CompletedTask;
        }

        public async Task EnsureSeeded()
        {
            if (!_userManager.Users.Any())
            {
                await SeedUsersAsync();
                await SeedRolesAsync();
            }
            await SeedUsersToRolesAsync();
        }

        public async Task SeedUsersAsync()
        {
            List<RegistrationWithPasswordViewModel> userModels = new List<RegistrationWithPasswordViewModel>();
            userModels = JsonConvert.DeserializeObject<List<RegistrationWithPasswordViewModel>>(SeedItems.UserBase);

            List<Person> persons = new List<Person>();
            List<Password> passwords = new List<Password>();

            foreach (var userModel in userModels)
            {
                ApplicationUser appUser = new ApplicationUser
                {
                    Email = userModel.Email,
                    UserName = userModel.Email,
                    EmailConfirmed = true
                };

                var result = await _userManager.CreateAsync(appUser, userModel.Password);

                if (result.Succeeded)
                {
                    var user = await _userManager.FindByEmailAsync(appUser.Email);

                    persons.Add(new Person
                    {
                        FirstName = userModel.FirstName,
                        LastName = userModel.LastName,
                        IdentityId = user.Id
                    });

                    passwords.Add(new Password
                    {
                        IdentityId = user.Id,
                        PasswordHash = user.PasswordHash
                    });
                }
                else
                {
                    throw new TaskCanceledException("user could not be created");
                }
                
            }
            _userDbContext.AddRange(persons);
            _userDbContext.AddRange(passwords);
            _userDbContext.SaveChanges();
            
        }

        private async Task SeedRolesAsync()
        {
            JArray roleArray = JArray.Parse(SeedItems.RoleBase);
            var roleNames = roleArray.ToObject<List<string>>();

            foreach(var roleName in roleNames)
            {
                var role = new ApplicationRole(roleName);
                await _roleManager.CreateAsync(role);
                await _roleManager.AddClaimAsync(role, new System.Security.Claims.Claim
                (System.Security.Claims.ClaimTypes.Role, roleName));
            }
            
        }

        private async Task SeedUsersToRolesAsync()
        {
            List<UserRoleSeed> usersRoles = new List<UserRoleSeed>();
            usersRoles = JsonConvert.DeserializeObject<List<UserRoleSeed>>(SeedItems.UserRoleBase);

            foreach (var user in usersRoles)
            {
                var appUser = await _userManager.FindByEmailAsync(user.Email);
                if (appUser == null)
                    continue;
                await _userManager.AddToRolesAsync(appUser, user.Roles);
            }
        }


        public async Task SeedAsync(CancellationToken cancellationToken = default(CancellationToken))
        {
            if (cancellationToken.IsCancellationRequested)
            {
                /*var calledMethod = System.Reflection.MethodBase.GetCurrentMethod();
                _logger.LogError(nameof(UserDbInitializer) + $".{calledMethod}() was requested aborted");*/
                cancellationToken.ThrowIfCancellationRequested();
            }
            else
            {
                await SeedMiscAsync();

            }
                
        }

        private async Task SeedAdminAsync()
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

        private async Task SeedMiscAsync()
        {
            await SeedMiscRolesAsync();
            await SeedMiscUsersAsync();
        }

        private async Task SeedMenuRightsAsync()
        {
            var adminRole = await _roleManager.FindByNameAsync(Constants.Strings.UserRoles.Admin);
            var claims = new List<System.Security.Claims.Claim> {
                new System.Security.Claims.Claim("Menu", Constants.Strings.MenuEntries.USERS),
                new System.Security.Claims.Claim("Menu", Constants.Strings.MenuEntries.SHIPS),
                new System.Security.Claims.Claim("Menu", Constants.Strings.MenuEntries.LOCATION),
                new System.Security.Claims.Claim("Menu", Constants.Strings.MenuEntries.COMPANIES),
                new System.Security.Claims.Claim("Menu", Constants.Strings.MenuEntries.PORT_CALL)
            };

            foreach(var claim in claims)
                await _roleManager.AddClaimAsync(adminRole, claim);

            var agentRole = await _roleManager.FindByNameAsync(Constants.Strings.UserRoles.Agent);
            await _roleManager.AddClaimAsync(
                agentRole,
                new System.Security.Claims.Claim("Menu", Constants.Strings.MenuEntries.PORT_CALL)
            );
        }

        private async Task SeedTestBaseAsync()
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

        private async Task SeedUser(string email)
        {
            var user = new ApplicationUser
            {
                Email = email,
                EmailConfirmed = false
            };
            await _userManager.CreateAsync(user);
        }

        private async Task SeedUser(string email, string password)
        {
            var user = new ApplicationUser
            {
                Email = email,
                EmailConfirmed = true
            };
            await _userManager.CreateAsync(user, password);
        }

        private async Task SeedUsersToRoles(IList<string> userNames, IList<string> roles)
        {
            foreach(string userName in userNames)
            {
                if (string.IsNullOrWhiteSpace(userName))
                    throw new ArgumentNullException("Username", "Username is empty.");
                foreach (string roleName in roles)
                {
                    if (string.IsNullOrWhiteSpace(roleName))
                        throw new ArgumentNullException("Rolename", "Rolename is empty.");
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
