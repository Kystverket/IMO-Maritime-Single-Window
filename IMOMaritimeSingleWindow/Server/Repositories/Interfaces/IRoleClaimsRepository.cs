using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Repositories
{
    //Should be Claim as a custom defined entity, but that one wasn't scaffolded yet ^^
    public interface IRoleClaimsRepository<TKey> : IRepository<RoleClaim, TKey>
        where TKey : IEquatable<TKey>
    {
        IEnumerable<Claim> GetClaimsForRole(TKey roleId);
        IEnumerable<Role> GetRolesForClaim(TKey claimId);
        void AddClaimsToRole(IEnumerable<Claim> claims, TKey roleId);
    }
}
