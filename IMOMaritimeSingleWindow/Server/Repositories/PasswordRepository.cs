using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Repositories
{
    public class PasswordRepository : Repository<Password, Guid>, IPasswordRepository<Guid>
    {
        public PasswordRepository(open_ssnContext context) : base(context)
        {
        }
        
    }
}
