using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Claim = System.Security.Claims.Claim;

namespace IMOMaritimeSingleWindow.Repositories.Interfaces
{
    public interface IUserClaimRepository<TKey> : IRepository<Claim, TKey>
        where TKey : IEquatable<TKey>
    {

    }
}
