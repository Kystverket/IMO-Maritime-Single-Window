using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using IMOMaritimeSingleWindow.Data;

namespace IMOMaritimeSingleWindow.Repositories
{
    public class Repository<TEntity, TKey> : RepositoryBase<TEntity, TKey>
        where TEntity : class
        where TKey : IEquatable<TKey>
    {
        public Repository(userdbContext context) : base(context)
        {
        }

        public userdbContext UserDbContext
        {
            get { return Context as userdbContext; }
        }
    }
}
