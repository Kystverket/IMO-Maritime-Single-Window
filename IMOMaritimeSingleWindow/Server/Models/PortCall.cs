using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class PortCall
    {
        public PortCall()
        {
            InversePreviousPortCall = new HashSet<PortCall>();
            PortCallHasPortCallPurpose = new HashSet<PortCallHasPortCallPurpose>();
            PortCallHistory = new HashSet<PortCallHistory>();
        }

        public int PortCallId { get; set; }
        public int ShipId { get; set; }
        public int ArrivalLocationId { get; set; }
        public int DepartureLocationId { get; set; }
        public int? PreviousPortCallId { get; set; }
        public int PortCallStatusId { get; set; }
        public string Remark { get; set; }
        public DateTime? DepartureLocationEtd { get; set; }
        public bool? DepartureLocationTimeIsActual { get; set; }
        public DateTime? ArrivalLocationEta { get; set; }
        public DateTime? ArrivalLocationEtd { get; set; }
        public bool? ArrivalLocationTimeIsActual { get; set; }

        public Location ArrivalLocation { get; set; }
        public Location DepartureLocation { get; set; }
        public PortCallStatus PortCallStatus { get; set; }
        public PortCall PreviousPortCall { get; set; }
        public Ship Ship { get; set; }
        public ICollection<PortCall> InversePreviousPortCall { get; set; }
        public ICollection<PortCallHasPortCallPurpose> PortCallHasPortCallPurpose { get; set; }
        public ICollection<PortCallHistory> PortCallHistory { get; set; }
    }
}
