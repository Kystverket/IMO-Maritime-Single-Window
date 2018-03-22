using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class ShipType
    {
        public ShipType()
        {
            Ship = new HashSet<Ship>();
        }

        public int ShipTypeId { get; set; }
        public int ShipTypeGroupId { get; set; }
        public string ShipType1 { get; set; }
        public string Description { get; set; }

        public ShipTypeGroup ShipTypeGroup { get; set; }
        public ICollection<Ship> Ship { get; set; }
    }
}
