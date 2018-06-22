using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Repositories
{
    public class PasswordRepository : EFConcreteRepository<Password, Guid>, IPasswordRepository<Guid>
    {
        public PasswordRepository(IDbContext context) : base(context)
        {
        }

    }
}
