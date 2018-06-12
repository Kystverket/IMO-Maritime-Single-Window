using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Data;
using Microsoft.EntityFrameworkCore;

namespace IMOMaritimeSingleWindow.Repositories
{
    public class RoleClaimsRepository : EFConcreteRepository<RoleClaim, Guid>, IRoleClaimsRepository<Guid>
    {
        public RoleClaimsRepository(IDbContext context) : base(context)
        {
        }

        public void AddClaimsToRole(IEnumerable<Claim> claims, Guid roleId)
        {
            var role = Context.Set<Role>().First(r => r.RoleId == roleId);
            foreach (var claim in claims)
            {
                Add(new RoleClaim
                {
                    Role = role,
                    Claim = claim
                });
            }
        }

        public IEnumerable<Claim> GetClaimsForRole(Guid roleId)
        {
            //Need to get latest db model to have the correct assocciations
            //var claims = open_ssnContext.Set<RoleClaim>().Where(...);
            var roleClaims = Find(rc => rc.RoleId == roleId).ToList();
            
            var claims = roleClaims.Join(Context.Set<Claim>(),
                rc => rc.ClaimId,
                c => c.ClaimId,
                (rc, c) => new Claim {
                    ClaimId = c.ClaimId,
                    ClaimTypeId = c.ClaimTypeId,
                    ClaimType = c.ClaimType,
                    ClaimValue = c.ClaimValue
                }).AsEnumerable();
            //var claims = Context.Set<Claim>().Where(c => c.RoleClaim.Where(cc => cc.RoleClaimId == role.).AsEnumerable();
            //var claims =
            //             from rc in Context.Set<RoleClaim>() let roleClaim = rc
            //             join c in Context.Set<Claim>()
            //              on roleClaim.ClaimId equals c
            //              into claimIds
            //             select new Claim {  }
            //return claims.AsEnumerable();
            return claims.ToList();
        }

        public IEnumerable<Role> GetRolesForClaim(Guid claimId)
        {
            //Get the roleclaims that contain the claim id
            var roleClaims = Context.Set<RoleClaim>()
                .Where(rc => rc.ClaimId == claimId).ToList();

            //Get the roles that matches the role id in the roleclaims
            var roles = Context.Set<Role>().Join(roleClaims,
                r => r.RoleId,
                rc => rc.RoleId,
                (r, rc) => new Role { Name = r.Name, Description = r.Description })
                .AsEnumerable();
            return roles;
        }
    }
}
