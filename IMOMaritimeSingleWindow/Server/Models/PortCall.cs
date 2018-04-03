using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class PortCall
    {
        public PortCall()
        {
            CustomsCargo = new HashSet<CustomsCargo>();
            DpgOnBoard = new HashSet<DpgOnBoard>();
            PortCallHasPortCallPurpose = new HashSet<PortCallHasPortCallPurpose>();
        }

        public int PortCallId { get; set; }
        public int? NextLocationId { get; set; }
        public int? PreviousLocationId { get; set; }
        public int LocationId { get; set; }
        public int ShipId { get; set; }
        public int PortCallStatusId { get; set; }
        public string Remark { get; set; }
        public DateTime? PreviousLocationEtd { get; set; }
        public DateTime? PreviousLocationAtd { get; set; }
        public DateTime LocationEtd { get; set; }
        public DateTime? LocationAtd { get; set; }
        public DateTime LocationEta { get; set; }
        public DateTime? LocationAta { get; set; }
        public DateTime? NextLocationEta { get; set; }
        public DateTime? NextLocationAta { get; set; }
        public int? PersonId { get; set; }

        public Location Location { get; set; }
        public Location NextLocation { get; set; }
        public Person Person { get; set; }
        public PortCallStatus PortCallStatus { get; set; }
        public Location PreviousLocation { get; set; }
        public Ship Ship { get; set; }
        public ICollection<CustomsCargo> CustomsCargo { get; set; }
        public ICollection<DpgOnBoard> DpgOnBoard { get; set; }
        public ICollection<PortCallHasPortCallPurpose> PortCallHasPortCallPurpose { get; set; }
    }
}
