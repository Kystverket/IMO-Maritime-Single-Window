using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Data;
using Microsoft.EntityFrameworkCore;

namespace IMOMaritimeSingleWindow.Repositories
{
    public class ClaimRepository : EFConcreteRepository<Claim, Guid>, IClaimRepository<Guid>
    {
        public ClaimRepository(IDbContext context) : base(context)
        {
        }
    }
}
