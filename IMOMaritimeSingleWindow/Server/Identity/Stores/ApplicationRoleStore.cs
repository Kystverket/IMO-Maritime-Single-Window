using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Identity.Models;
using System.Threading;

namespace IMOMaritimeSingleWindow.Identity
{
    public class ApplicationRoleStore

        : RoleStore<ApplicationRole, usertestContext, Guid, ApplicationUserRole, ApplicationRoleClaim>,
          IQueryableRoleStore<ApplicationRole>,
          IRoleStore<ApplicationRole>, IDisposable

    {
        public ApplicationRoleStore(usertestContext context)
            : base(context)
        {
        }

    }
}
