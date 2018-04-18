using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Identity;

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



    }
}
