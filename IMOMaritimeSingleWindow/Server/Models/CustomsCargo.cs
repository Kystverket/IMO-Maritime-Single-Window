using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class CustomsCargo
    {
        public int CustomsCargoId { get; set; }
        public int CustomsCargoTypeId { get; set; }
        public string LocationInPort { get; set; }
        public string CargoHandlingAgent { get; set; }
        public string Remark { get; set; }
        public int PortCallId { get; set; }

        public CustomsCargoType CustomsCargoType { get; set; }
        public PortCall PortCall { get; set; }
    }
}
