using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.IdentityModels;

namespace IMOMaritimeSingleWindow.Repositories
{
    interface IUserRepository<TKey> : IRepository<User, TKey>
        where TKey : IEquatable<TKey>
    {
        User GetByUserName(string userName);
        User GetByEmail(string email);
    }
}
