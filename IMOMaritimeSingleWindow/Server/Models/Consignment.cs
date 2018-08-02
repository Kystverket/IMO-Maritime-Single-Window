using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Consignment
    {
        public Consignment()
        {
            CargoItem = new HashSet<CargoItem>();
        }

        public long ConsignmentId { get; set; }
        public int? PortCallId { get; set; }
        public int? PortOfLoadingId { get; set; }
        public int? PortOfDischargeId { get; set; }
        public string Remark { get; set; }

        public PortCall PortCall { get; set; }
        public Location PortOfDischarge { get; set; }
        public Location PortOfLoading { get; set; }
        public ICollection<CargoItem> CargoItem { get; set; }
    }
}
