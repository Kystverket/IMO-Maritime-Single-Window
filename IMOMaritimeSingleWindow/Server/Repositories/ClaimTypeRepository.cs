using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Data;
using Microsoft.EntityFrameworkCore;

namespace IMOMaritimeSingleWindow.Repositories
{
    public class ClaimTypeRepository : EFConcreteRepository<ClaimType, Guid>, IClaimTypeRepository<Guid>
    {
        public ClaimTypeRepository(IDbContext context) : base(context)
        {
        }
    }
}
