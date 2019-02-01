using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public enum LOCATION_TYPES
    {
        HARBOUR
    }
    public partial class LocationType
    {
        public LocationType()
        {
            Location = new HashSet<Location>();
        }

        public int LocationTypeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string EnumValue { get; set; }


        public ICollection<Location> Location { get; set; }
    }
}
