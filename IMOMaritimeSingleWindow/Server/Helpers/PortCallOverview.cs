using System;
using System.Collections.Generic;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Helpers
{
    public class PortCallOverview
    {
        public PortCallOverview() { }

        public PortCall PortCall { get; set; }
        public Ship Ship { get; set; }
        public Location Location { get; set; }
        public List<OrganizationPortCall> ClearanceList { get; set; }
        public string Status { get; set; }
    }
}