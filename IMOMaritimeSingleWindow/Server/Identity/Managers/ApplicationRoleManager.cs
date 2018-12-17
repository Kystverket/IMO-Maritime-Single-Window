using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Identity;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Identity.Stores;
using System.Threading.Tasks;
using System.Linq;
using IMOMaritimeSingleWindow.Models;

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

        /// <summary>
        /// Gets the names of all possible roles in the system
        /// </summary>
        /// <returns>A list of rolenames</returns>
        public async Task<IList<Role>> GetAllRoles()
        {
            var roleStore = Store as RoleStore;

            var roles = await roleStore.GetAllRoles();

            return roles;
        }

    }
}
