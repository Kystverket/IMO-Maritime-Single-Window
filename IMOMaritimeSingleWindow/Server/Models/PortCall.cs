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
            OrganizationPortCall = new HashSet<OrganizationPortCall>();
            PortCallDetails = new HashSet<PortCallDetails>();
            PortCallHasPortCallPurpose = new HashSet<PortCallHasPortCallPurpose>();
        }

        public int PortCallId { get; set; }
        public int? NextLocationId { get; set; }
        public int? PreviousLocationId { get; set; }
        public int LocationId { get; set; }
        public int ShipId { get; set; }
        public int PortCallStatusId { get; set; }
        public string Remark { get; set; }
        public DateTimeOffset? PreviousLocationEtd { get; set; }
        public DateTimeOffset? PreviousLocationAtd { get; set; }
        public DateTimeOffset LocationEtd { get; set; }
        public DateTimeOffset? LocationAtd { get; set; }
        public DateTimeOffset LocationEta { get; set; }
        public DateTimeOffset? LocationAta { get; set; }
        public DateTimeOffset? NextLocationEta { get; set; }
        public DateTimeOffset? NextLocationAta { get; set; }
        public Guid? UserId { get; set; }

        public Location Location { get; set; }
        public Location NextLocation { get; set; }
        public PortCallStatus PortCallStatus { get; set; }
        public Location PreviousLocation { get; set; }
        public Ship Ship { get; set; }
        public User User { get; set; }
        public ICollection<CustomsCargo> CustomsCargo { get; set; }
        public ICollection<DpgOnBoard> DpgOnBoard { get; set; }
        public ICollection<OrganizationPortCall> OrganizationPortCall { get; set; }
        public ICollection<PortCallDetails> PortCallDetails { get; set; }
        public ICollection<PortCallHasPortCallPurpose> PortCallHasPortCallPurpose { get; set; }
    }
}
