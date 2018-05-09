using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Data;
using Microsoft.EntityFrameworkCore;

namespace IMOMaritimeSingleWindow.Repositories
{
    public class ClaimRepository : Repository<Claim, Guid>, IClaimRepository<Guid>
    {
        public ClaimRepository(open_ssnContext context) : base(context)
        {
        }
    }
}
