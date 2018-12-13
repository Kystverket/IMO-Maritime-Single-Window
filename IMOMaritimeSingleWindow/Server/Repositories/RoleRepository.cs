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
        public RoleRepository(IDbContext context) : base(context)
        {
        }

        public Role GetByNormalizedName(string normalizedRoleName)
        {
            return DbSet.Where(role =>
                role.Description.ToLower() == normalizedRoleName.ToLower())
                .FirstOrDefault();
        }

        public Role GetByRoleName(string roleName)
        {
            return DbSet
                .Where(role => role.Name == roleName)
                .FirstOrDefault();
        }
    }
}
