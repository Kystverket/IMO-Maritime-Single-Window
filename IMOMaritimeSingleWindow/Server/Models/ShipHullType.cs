using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class ShipHullType
    {
        public ShipHullType()
        {
            Ship = new HashSet<Ship>();
        }

        public int ShipHullTypeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<Ship> Ship { get; set; }
    }
}
