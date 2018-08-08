using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class CargoItem
    {
        public long CargoItemId { get; set; }
        public long? ConsignmentId { get; set; }
        public string ShippingMarks { get; set; }
        public string ContainerIdentification { get; set; }
        public int? NumberOfPackages { get; set; }
        public long? PackageTypeId { get; set; }
        public string HsCode { get; set; }
        public decimal? GrossVolume { get; set; }
        public decimal? GrossWeight { get; set; }
        public string Description { get; set; }

        public Consignment Consignment { get; set; }
        public PackageType PackageType { get; set; }
    }
}
