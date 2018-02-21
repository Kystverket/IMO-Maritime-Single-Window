using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class ShipMmsiMidCode
    {
        public int ShipMmsiMidCodeId { get; set; }
        public int CountryId { get; set; }
        public int MidCode { get; set; }

        public Country Country { get; set; }
    }
}
