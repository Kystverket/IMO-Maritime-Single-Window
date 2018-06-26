using IMOMaritimeSingleWindow.Models;
using System;

namespace IMOMaritimeSingleWindow.Repositories
{
    public interface IUserTokenRepository<TKey> : IRepository<UserToken, TKey>
        where TKey : IEquatable<TKey>
    {
        UserToken FindBy(TKey userId, string loginProvider, string name);
    }
}
