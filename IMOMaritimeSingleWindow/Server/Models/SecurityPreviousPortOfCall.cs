using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class SecurityPreviousPortOfCall
    {
        public long SecurityPreviousPortOfCallId { get; set; }
        public int? LocationId { get; set; }
        public DateTimeOffset? ArrivalDateTime { get; set; }
        public DateTimeOffset? DepartureDateTime { get; set; }
        public long? SecurityLevelId { get; set; }
        public string AdditionalSecurityMeasures { get; set; }
        public int? SequenceNumber { get; set; }
        public long? FalSecurityId { get; set; }

        public Location Location { get; set; }
        public SecurityLevel SecurityLevel { get; set; }
        public FalSecurity FalSecurity { get; set; }
    }
}
