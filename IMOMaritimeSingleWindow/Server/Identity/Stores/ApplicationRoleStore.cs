using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using IMOMaritimeSingleWindow.Data;
using System.Threading;

namespace IMOMaritimeSingleWindow.Identity
{
    public class ApplicationRoleStore

        : RoleStore<ApplicationRole, UserDbContext, Guid, ApplicationUserRole, ApplicationRoleClaim>,
          IQueryableRoleStore<ApplicationRole>,
          IRoleStore<ApplicationRole>, IDisposable

    {
        public ApplicationRoleStore(UserDbContext context)
            : base(context)
        {
        }

    }
}
