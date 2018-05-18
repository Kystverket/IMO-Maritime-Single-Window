using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class ContactMedium
    {
        public ContactMedium()
        {
            ShipContact = new HashSet<ShipContact>();
        }

        public int ContactMediumId { get; set; }
        public string ContactMediumType { get; set; }
        public string Description { get; set; }

        public ICollection<ShipContact> ShipContact { get; set; }
    }
}
