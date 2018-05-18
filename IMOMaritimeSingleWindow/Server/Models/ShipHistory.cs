using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class ShipHistory
    {
        public int ShipHistoryId { get; set; }
        public int ShipId { get; set; }
        public int ShipTypeId { get; set; }
        public int ShipStatusId { get; set; }
        public int ShipSourceId { get; set; }
        public int? ShipFlagCodeId { get; set; }
        public int? ImoNo { get; set; }
        public int? YearOfBuild { get; set; }
        public int? MmsiNo { get; set; }
        public string Name { get; set; }
        public string CallSign { get; set; }
        public int? DeadweightTonnage { get; set; }
        public int? GrossTonnage { get; set; }
        public int ShipLengthTypeId { get; set; }
        public float? Length { get; set; }
        public int ShipBreadthTypeId { get; set; }
        public float? Breadth { get; set; }
        public int ShipPowerTypeId { get; set; }
        public int? Power { get; set; }
        public float? Height { get; set; }
        public float? Draught { get; set; }
        public int ShipHullTypeId { get; set; }
        public bool? HasSideThrusters { get; set; }
        public bool? HasSideThurstersFront { get; set; }
        public bool? HasSideThrustersBack { get; set; }
        public DateTime ValidFromDate { get; set; }
        public DateTime ValidToDate { get; set; }
        public string Remark { get; set; }
        public bool IsVerified { get; set; }
        public int? OrganizationId { get; set; }

        public Ship Ship { get; set; }
    }
}
