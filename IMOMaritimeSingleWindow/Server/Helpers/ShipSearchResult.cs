using System;

namespace IMOMaritimeSingleWindow.Helpers {
    public class ShipSearchResult {
        
        public ShipSearchResult() {
        }

        public int ShipId { get; set; }
        public string ShipName { get; set; }
        public string CallSign { get; set; }
        public string ImoNo { get; set; }
        public string MmsiNo { get; set; }

    }
}