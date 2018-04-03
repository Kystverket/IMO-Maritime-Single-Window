using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class ShipStatus
    {
        public ShipStatus()
        {
            Ship = new HashSet<Ship>();
        }

        public int ShipStatusId { get; set; }
        public string ShipStatus1 { get; set; }
        public string Description { get; set; }

        public ICollection<Ship> Ship { get; set; }
    }
}
