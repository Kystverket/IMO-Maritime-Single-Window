using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class FalShipStores
    {
        public long FalShipStoresId { get; set; }
        public int? SequenceNumber { get; set; }
        public string ArticleName { get; set; }
        public string ArticleCode { get; set; }
        public float? Quantity { get; set; }
        public string LocationOnBoard { get; set; }
        public string LocationOnBoardCode { get; set; }
        public int? MeasurementTypeId { get; set; }
        public int? PortCallId { get; set; }

        public MeasurementType MeasurementType { get; set; }
        public PortCall PortCall { get; set; }
    }
}
