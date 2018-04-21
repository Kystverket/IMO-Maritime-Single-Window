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

        public string ClaimValue { get; set; }
        public string Discriminator { get; set; }
        public int ClaimId { get; set; }
        public int ClaimTypeId { get; set; }

        public ClaimType ClaimType { get; set; }
        public ICollection<RoleClaim> RoleClaim { get; set; }
    }
}
