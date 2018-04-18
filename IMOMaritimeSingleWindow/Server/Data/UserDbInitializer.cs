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
using IMOMaritimeSingleWindow.Identity;
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

        public async Task EnsureSeeded()
        {
            if (!_userManager.Users.Any())
            {
                await SeedUsersAsync();
                if (!_roleManager.Roles.Any())
                    await SeedRolesAsync();
                await SeedUsersToRolesAsync();
            }
                
            
            await SeedMenuRightsAsync();
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

            await SeedRoles(roleNames);
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
                
                foreach (var role in user.Roles)
                {
                    var claim = new System.Security.Claims.Claim(System.Security.Claims.ClaimTypes.Role, role);
                    await _userManager.AddClaimAsync(appUser, claim);
                }
                    
                
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
                await SeedUsersAsync();
            }
                
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

        private async Task SeedRoles(IList<string> roleNames)
        {
            foreach (var roleName in roleNames)
            {
                if (string.IsNullOrWhiteSpace(roleName))
                    throw new ArgumentNullException("Rolename is empty.");
                var role = new ApplicationRole(roleName);
                var result = await _roleManager.CreateAsync(role);
                if (result.Succeeded)
                    await _roleManager.AddClaimAsync(role, new System.Security.Claims.Claim
                                        (System.Security.Claims.ClaimTypes.Role, roleName));
                else
                    throw new TaskCanceledException("role could not be created");
            }
        }

    }
}
