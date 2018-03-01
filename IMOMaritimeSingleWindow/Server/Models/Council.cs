using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Council
    {
        public Council()
        {
            Location = new HashSet<Location>();
        }

        public int CouncilId { get; set; }
        public int CountyId { get; set; }
        public string CouncilName { get; set; }
        public string CouncilNo { get; set; }

        public County County { get; set; }
        public ICollection<Location> Location { get; set; }
    }
}
