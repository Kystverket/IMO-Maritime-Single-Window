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
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<Ship> Ship { get; set; }
    }
}
