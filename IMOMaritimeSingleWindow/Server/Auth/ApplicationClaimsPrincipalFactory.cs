using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Identity;

using IMOMaritimeSingleWindow.Identity;
using Microsoft.Extensions.Options;
using System.Security.Claims;
using Microsoft.Extensions.DependencyInjection;
namespace IMOMaritimeSingleWindow.Auth
{
    public class ApplicationClaimsPrincipalFactory : UserClaimsPrincipalFactory<ApplicationUser, ApplicationRole>
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;
        public ApplicationClaimsPrincipalFactory(
        UserManager<ApplicationUser> userManager
        , RoleManager<ApplicationRole> roleManager
        , IOptions<IdentityOptions> optionsAccessor)
    :   base(userManager, roleManager, optionsAccessor)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }

        public async override Task<ClaimsPrincipal> CreateAsync(ApplicationUser user)
        {
            var principal = await base.CreateAsync(user);
            var user_roles = await _userManager.GetRolesAsync(user);
            foreach(string rolename in user_roles)
            {
                ApplicationRole role = await _roleManager.FindByNameAsync(rolename);

                //Get claims associated with given role
                var claims = await _roleManager.GetClaimsAsync(role);
                //Adds claims to principal
                ((ClaimsIdentity)principal.Identity).AddClaims(claims);
            }
            return principal;
        }
    }
}
