using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class ShipLengthType
    {
        public ShipLengthType()
        {
            Ship = new HashSet<Ship>();
        }

        public int ShipLengthTypeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<Ship> Ship { get; set; }
    }
}
