using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Repositories
{
    public class RoleRepository : EFConcreteRepository<Role, Guid>, IRoleRepository<Guid>
    {
        public RoleRepository(open_ssnContext_base context) : base(context)
        {
        }

        public Role GetByNormalizedName(string normalizedRoleName)
        {
            return open_ssnContext.Set<Role>()
                .Where(role => role.NormalizedName == normalizedRoleName)
                .FirstOrDefault();
        }

        public Role GetByRoleName(string roleName)
        {
            return open_ssnContext.Set<Role>()
                .Where(role => role.Name == roleName)
                .FirstOrDefault();
        }
    }
}
