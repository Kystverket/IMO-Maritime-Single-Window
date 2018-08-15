using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class FalSecurity
    {
        public FalSecurity()
        {
            ShipToShipActivity = new HashSet<ShipToShipActivity>();
        }

        public long FalSecurityId { get; set; }
        public bool? ShipHasValidSspOnBoard { get; set; }
        public string OtherRelatedInfo { get; set; }
        public long? CompanySecurityOfficerId { get; set; }
        public long? SecurityLevelId { get; set; }
        public int? PortCallId { get; set; }

        public CompanySecurityOfficer CompanySecurityOfficer { get; set; }
        public PortCall PortCall { get; set; }
        public SecurityLevel SecurityLevel { get; set; }
        public ICollection<ShipToShipActivity> ShipToShipActivity { get; set; }
    }
}
