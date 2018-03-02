using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class PortCallHistory
    {
        public int PortCallHistoryId { get; set; }
        public int PortCallId { get; set; }

        public PortCall PortCall { get; set; }
    }
}
