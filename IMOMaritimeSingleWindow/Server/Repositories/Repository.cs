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
        public Repository(open_ssnContext context) : base(context)
        {
        }

        public open_ssnContext open_ssnContext
        {
            get { return Context as open_ssnContext; }
        }
    }
}
