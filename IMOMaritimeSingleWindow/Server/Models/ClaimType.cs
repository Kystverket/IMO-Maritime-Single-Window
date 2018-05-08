using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class ClaimType
    {
        public ClaimType()
        {
            Claim = new HashSet<Claim>();
        }

        public Guid ClaimTypeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<Claim> Claim { get; set; }
    }
}
