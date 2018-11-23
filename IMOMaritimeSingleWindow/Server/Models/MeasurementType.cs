using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class MeasurementType
    {
        public MeasurementType()
        {
            FalShipStores = new HashSet<FalShipStores>();
            DpgOnBoard = new HashSet<DpgOnBoard>(); 
        }

        public int MeasurementTypeId { get; set; }
        public string Name { get; set; }

        public ICollection<FalShipStores> FalShipStores { get; set; }
        public ICollection<DpgOnBoard> DpgOnBoard { get; }
    }
}
