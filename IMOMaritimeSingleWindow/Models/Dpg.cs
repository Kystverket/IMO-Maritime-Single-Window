using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Dpg
    {
        public Dpg()
        {
            DpgOnBoard = new HashSet<DpgOnBoard>();
        }

        public int DpgId { get; set; }
        public int DpgTypeId { get; set; }
        public string TextualReference { get; set; }
        public int? ImoHazardClassId { get; set; }
        public string UnNumber { get; set; }
        public string PackingGroup { get; set; }
        public decimal? FlashPoint { get; set; }
        public int? MarpolCategoryId { get; set; }
        public string MarpolOilType { get; set; }

        public DpgType DpgType { get; set; }
        public ImoHazardClass ImoHazardClass { get; set; }
        public MarpolCategory MarpolCategory { get; set; }
        public ICollection<DpgOnBoard> DpgOnBoard { get; set; }
    }
}
