using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class OrganizationPortCall
    {
        public int OrganizationPortCallId { get; set; }
        public int OrganizationId { get; set; }
        public int PortCallId { get; set; }

        public Organization Organization { get; set; }
        public PortCall PortCall { get; set; }
    }
}
