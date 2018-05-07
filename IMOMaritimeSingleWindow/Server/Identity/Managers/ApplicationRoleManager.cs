using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Identity;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Identity.Stores;
using System.Threading.Tasks;
using System.Linq;

namespace IMOMaritimeSingleWindow.Identity
{
    public class ApplicationRoleManager : RoleManager<ApplicationRole>
    {

        public ApplicationRoleManager(
            IRoleStore<ApplicationRole> roleStore,
            IEnumerable<IRoleValidator<ApplicationRole>> roleValidator,
            ILookupNormalizer lookupNormalizer,
            IdentityErrorDescriber identityErrorDescriber,
            ILogger<RoleManager<ApplicationRole>> logger
        ) : base(roleStore, roleValidator, lookupNormalizer, identityErrorDescriber, logger)
        { }
        
        public Task<IList<string>> GetAllRoles()
        {
            var roleStore = Store as RoleStore;

            var roles = roleStore.GetAllRoles().GetAwaiter().GetResult();
            List<string> roleNames = new List<string>();
            foreach (var role in roles)
            {
                roleNames.Add(role.Name);
            }
            return Task.FromResult<IList<string>>(roleNames);
        }

    }
}
