using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class RoleClaim
    {
        public int RoleClaimId { get; set; }
        public int RoleId { get; set; }
        public int ClaimId { get; set; }

        public Claim Claim { get; set; }
        public Role Role { get; set; }
    }
}
