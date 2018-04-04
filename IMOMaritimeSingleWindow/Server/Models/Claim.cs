using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Claim
    {
        public Claim()
        {
            RoleClaim = new HashSet<RoleClaim>();
        }

        public int ClaimId { get; set; }
        public string Name { get; set; }

        public ICollection<RoleClaim> RoleClaim { get; set; }
    }
}
