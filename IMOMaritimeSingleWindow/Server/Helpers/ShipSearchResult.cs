using System;

namespace IMOMaritimeSingleWindow.Helpers {
    public class ShipSearchResult {
        
        public ShipSearchResult() {
        }

        public int ShipId { get; set; }
        public int ShipHullTypeId { get; set; }
        public int ShipStatusId { get; set; }
        public int? ShipPowerTypeId { get; set; }
        public int? ShipBreadthTypeId { get; set; }
        public int? ShipLengthTypeId { get; set; }
        public int ShipSourceId { get; set; }
        public int ShipFlagCodeId { get; set; }
        public int? CompanyId { get; set; }
        public int ShipTypeId { get; set; }
        public int? ImoNo { get; set; }
        public int? YearOfBuild { get; set; }
        public int? MmsiNo { get; set; }
        public string ShipName { get; set; }
        public string CallSign { get; set; }
        public int? DeadweightTonnage { get; set; }
        public int? GrossTonnage { get; set; }
        public float? ShipLength { get; set; }
        public float? Breadth { get; set; }
        public int? Power { get; set; }
        public float? Height { get; set; }
        public float? Draught { get; set; }
        public bool? HasSideThrusters { get; set; }
        public bool? HasSideThrustersFront { get; set; }
        public bool? HasSideThrustersBack { get; set; }
        public string Remark { get; set; }
        public string TwoCharCode { get; set; }
        public string ShipTypeName { get; set; }

    }
}