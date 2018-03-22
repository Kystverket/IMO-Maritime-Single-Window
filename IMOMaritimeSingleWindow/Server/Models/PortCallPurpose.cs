using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class PortCallPurpose
    {
        public PortCallPurpose()
        {
            PortCallHasPortCallPurpose = new HashSet<PortCallHasPortCallPurpose>();
        }

        public int PortCallPurposeId { get; set; }
        public string PortCallPurpose1 { get; set; }

        public ICollection<PortCallHasPortCallPurpose> PortCallHasPortCallPurpose { get; set; }
    }
}
