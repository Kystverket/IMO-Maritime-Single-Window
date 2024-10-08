using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class DpgOnBoard
    {
        public int DpgOnBoardId { get; set; }
        public int DpgId { get; set; }
        public int PortCallId { get; set; }
        public bool PlacedInContainer { get; set; }
        public string TransportUnitIdentification { get; set; }
        public string LocationOnBoard { get; set; }
        public decimal? GrossWeight { get; set; }
        public decimal? NetWeight { get; set; }

        public Dpg Dpg { get; set; }
        public PortCall PortCall { get; set; }

        [ForeignKey("MeasurementTypeId")]
        public MeasurementType MeasurementType { get; set; }
        public int MeasurementTypeId { get; set; }
    }
}
