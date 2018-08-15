using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class ShipToShipActivity
    {
        public long ShipToShipActivityId { get; set; }
        public DateTimeOffset? FromDate { get; set; }
        public DateTimeOffset? ToDate { get; set; }
        public int? ActivityTypeId { get; set; }
        public int? LocationId { get; set; }
        public float? Latitude { get; set; }
        public float? Longitude { get; set; }
        public long? FalSecurityId { get; set; }

        public PortCallPurpose ActivityType { get; set; }
        public FalSecurity FalSecurity { get; set; }
        public Location Location { get; set; }
    }
}
