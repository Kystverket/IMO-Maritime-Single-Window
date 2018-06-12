using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using IMOMaritimeSingleWindow.Data;

namespace IMOMaritimeSingleWindow.Repositories
{
    public class EFConcreteRepository<TEntity, TKey> : EFGenericRepository<TEntity, TKey>
        where TEntity : class
        where TKey : IEquatable<TKey>
    {
        public EFConcreteRepository(IDbContext context) : base(context as DbContext)
        {
        }
    }
}
