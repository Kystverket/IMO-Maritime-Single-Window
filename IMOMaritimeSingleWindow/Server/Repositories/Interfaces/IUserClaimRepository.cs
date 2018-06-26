using IMOMaritimeSingleWindow.Models;
using System;

namespace IMOMaritimeSingleWindow.Repositories
{
    public interface IUserClaimRepository<TKey> : IRepository<Claim, TKey>
        where TKey : IEquatable<TKey>
    {

    }
}
