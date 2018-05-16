using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Repositories
{
    public interface IPasswordRepository<TKey> : IRepository<Password, TKey>
        where TKey : IEquatable<TKey>
    {
        void Update(Password password);
    }
}
