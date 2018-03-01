using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class LocationType
    {
        public LocationType()
        {
            Location = new HashSet<Location>();
        }

        public int LocationTypeId { get; set; }
        public string LocationType1 { get; set; }
        public string SystemName { get; set; }
        public string Description { get; set; }

        public ICollection<Location> Location { get; set; }
    }
}
