using System;

namespace IMOMaritimeSingleWindow.Repositories
{
    public interface IUnitOfWork<TKey> : IDisposable
        where TKey : IEquatable<TKey>
    {
        IClaimRepository<TKey> Claims { get; }
        IClaimTypeRepository<TKey> ClaimTypes { get; }
        IPasswordRepository<TKey> Passwords { get; }
        IPersonRepository<TKey> Persons { get; }
        IRoleClaimsRepository<TKey> RoleClaims { get; }
        IRoleRepository<TKey> Roles { get; }
        IUserRepository<TKey> Users { get; }
        IUserTokenRepository<TKey> UserTokens { get; }

        int Complete();
    }
}
