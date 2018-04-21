using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.IdentityModels;
using IMOMaritimeSingleWindow.Data;
using Claim = System.Security.Claims.Claim;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace IMOMaritimeSingleWindow.Repositories
{
    public class RoleClaimsRepository : Repository<Claim, Guid>, IRoleClaimsRepository
    {
        public RoleClaimsRepository(userdbContext context) : base(context)
        {
        }

        public IEnumerable<Claim> GetClaimsForRole(Guid id)
        {
            //Need to get latest db model to have the correct assocciations
            //var claims = UserDbContext.Set<RoleClaim>().Where(...);

            throw new NotImplementedException();
        }

        public IEnumerable<Claim> GetClaimsForRole(string roleName)
        {
            throw new NotImplementedException();

        }
    }
}
