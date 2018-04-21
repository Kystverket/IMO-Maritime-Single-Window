using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Claim = System.Security.Claims.Claim;

namespace IMOMaritimeSingleWindow.Repositories
{
    //Should be Claim as a custom defined entity, but that one wasn't scaffolded yet ^^
    interface IRoleClaimsRepository : IRepository<Claim, Guid>
    {
        IEnumerable<Claim> GetClaimsForRole(Guid id);
        IEnumerable<Claim> GetClaimsForRole(string roleName);
    }
}
