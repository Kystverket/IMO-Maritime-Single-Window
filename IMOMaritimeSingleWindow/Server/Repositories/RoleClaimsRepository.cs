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
    public class RoleClaimsRepository : Repository<Claim, Guid>, IRoleClaimsRepository<Guid>
    {
        public RoleClaimsRepository(open_ssnContext context) : base(context)
        {
        }

        public Claim Get(Guid id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Claim> GetClaimsForRole(Guid id)
        {
            //Need to get latest db model to have the correct assocciations
            //var claims = UserDbContext.Set<RoleClaim>().Where(...);

            throw new NotImplementedException();
        }

        public IEnumerable<Claim> GetClaimsForRole(string roleName)
        {
            //open_ssnContext.Set<RoleClaim>().
              //  Where(roleClaim => roleClaim.Role);

            //var claims =
            throw new NotImplementedException();

        }
    }
}
