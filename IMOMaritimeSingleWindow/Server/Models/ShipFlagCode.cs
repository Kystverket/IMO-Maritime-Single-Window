using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class ShipFlagCode
    {
        public ShipFlagCode()
        {
            Ship = new HashSet<Ship>();
        }

        public int ShipFlagCodeId { get; set; }
        public int CountryId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public Country Country { get; set; }
        public ICollection<Ship> Ship { get; set; }
    }
}
