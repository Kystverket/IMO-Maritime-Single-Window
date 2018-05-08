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

        public Guid ClaimId { get; set; }
        public Guid? ClaimTypeId { get; set; }
        public string ClaimValue { get; set; }
        public string Discriminator { get; set; }

        public ClaimType ClaimType { get; set; }
        public ICollection<RoleClaim> RoleClaim { get; set; }
    }
}
