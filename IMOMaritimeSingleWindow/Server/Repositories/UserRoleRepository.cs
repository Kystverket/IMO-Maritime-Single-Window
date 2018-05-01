using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Repositories
{
    public class UserRoleRepository : Repository<UserRole, Guid>, IUserRoleRepository<Guid>
    {
        public UserRoleRepository(open_ssnContext context) : base(context)
        {
        }



    }
}
