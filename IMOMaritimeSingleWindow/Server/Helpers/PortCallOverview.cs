using System;
using System.Collections.Generic;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Helpers
{
    public class PortCallOverview
    {
        public PortCallOverview(){}

        public PortCall PortCall {get; set;}
        public ShipOverview ShipOverview {get; set;}
        public LocationOverview LocationOverview {get; set;}
        public LocationOverview PreviousLocationOverview {get; set;}
        public LocationOverview NextLocationOverview {get; set;}
        public List<OrganizationPortCall> ClearanceList {get; set;}
    }
}