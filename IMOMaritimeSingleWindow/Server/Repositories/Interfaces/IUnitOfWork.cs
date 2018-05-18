using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.Repositories
{
    public interface IUnitOfWork<TKey> : IDisposable
        where TKey : IEquatable<TKey>
    {
        IUserRepository<TKey> Users { get; }
        IRoleClaimsRepository<TKey> RoleClaims { get; }
        IPasswordRepository<TKey> Passwords { get; }
        IPersonRepository<TKey> Persons { get; }
        int Complete();
    }
}
