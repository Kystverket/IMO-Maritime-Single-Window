using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Data;
using Microsoft.EntityFrameworkCore;

namespace IMOMaritimeSingleWindow.Repositories
{
    public class ClaimTypeRepository : Repository<ClaimType, Guid>, IClaimTypeRepository<Guid>
    {
        public ClaimTypeRepository(open_ssnContext context) : base(context)
        {
        }
    }
}
