using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class ShipPowerType
    {
        public ShipPowerType()
        {
            Ship = new HashSet<Ship>();
        }

        public int ShipPowerTypeId { get; set; }
        public string ShipPowerType1 { get; set; }
        public string SystemName { get; set; }
        public string Description { get; set; }

        public ICollection<Ship> Ship { get; set; }
    }
}
