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
        public EFConcreteRepository(open_ssnContext context) : base(context)
        {
        }
        public EFConcreteRepository(TestContext context) : base(context)
        {

        }

        public EFConcreteRepository(open_ssnContext_base context) : base(context)
        {

        }

        public open_ssnContext_base open_ssnContext
        {
            get { return Context as open_ssnContext_base; }
        }
    }
}
