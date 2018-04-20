using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class OrganizationPortCall
    {
        public int OrganizationPortCallId { get; set; }
        public int OrganizationId { get; set; }
        public int PortCallId { get; set; }
        public string Remark {get; set;}
        public bool? Cleared {get; set;}

        public Organization Organization { get; set; }
        public PortCall PortCall { get; set; }
    }
}
