using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class ShipSource
    {
        public ShipSource()
        {
            Ship = new HashSet<Ship>();
        }

        public int ShipSourceId { get; set; }
        public string ShipSource1 { get; set; }
        public string Description { get; set; }

        public ICollection<Ship> Ship { get; set; }
    }
}
