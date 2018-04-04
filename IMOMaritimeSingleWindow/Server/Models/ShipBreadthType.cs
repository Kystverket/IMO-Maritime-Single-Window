using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class ShipBreadthType
    {
        public ShipBreadthType()
        {
            Ship = new HashSet<Ship>();
        }

        public int ShipBreadthTypeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<Ship> Ship { get; set; }
    }
}
