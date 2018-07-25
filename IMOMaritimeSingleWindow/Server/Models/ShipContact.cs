using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class ShipContact
    {
        public int ShipContactId { get; set; }
        public int ContactMediumId { get; set; }
        public int ShipId { get; set; }
        public bool IsPreferred { get; set; }
        public string ContactValue { get; set; }
        public string Comments { get; set; }

        public ContactMedium ContactMedium { get; set; }
        public Ship Ship { get; set; }
    }
}
