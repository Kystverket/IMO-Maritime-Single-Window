using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace IMOMaritimeSingleWindow.Models
{
    public enum SHIP_STORE_ERRORS
    {
        QUANTITY,
        NAME_OF_ARTICLE
    }
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
        [NotMapped]
        public List<SHIP_STORE_ERRORS> Errors { get; set; }
        [NotMapped]
        public int? ExcelRowNum { get; set; }
        [NotMapped]
        public List<string> ErrorMessages { get; set; }
        public MeasurementType MeasurementType { get; set; }
        public PortCall PortCall { get; set; }
    }
}
