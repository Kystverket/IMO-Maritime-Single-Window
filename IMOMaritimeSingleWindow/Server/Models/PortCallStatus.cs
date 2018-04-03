using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class PortCallStatus
    {
        public PortCallStatus()
        {
            PortCall = new HashSet<PortCall>();
        }

        public int PortCallStatusId { get; set; }
        public string PortCallStatus1 { get; set; }
        public string Description { get; set; }

        public ICollection<PortCall> PortCall { get; set; }
    }
}
