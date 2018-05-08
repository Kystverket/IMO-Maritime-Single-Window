using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Repositories
{
    public interface IClaimRepository<TKey> : IRepository<Claim, TKey>
        where TKey : IEquatable<TKey>
    {

    }
}
