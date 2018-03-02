using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class PortCallHasPortCallPurpose
    {
        public int PortCallHasPortCallPurposeId { get; set; }
        public int PortCallId { get; set; }
        public int PortCallPurposeId { get; set; }

        public PortCall PortCall { get; set; }
        public PortCallPurpose PortCallPurpose { get; set; }
    }
}
