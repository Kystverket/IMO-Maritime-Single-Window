using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class ImoHazardClass
    {
        public ImoHazardClass()
        {
            Dpg = new HashSet<Dpg>();
            InverseParentImoHazardClass = new HashSet<ImoHazardClass>();
        }

        public int ImoHazardClassId { get; set; }
        public int? ParentImoHazardClassId { get; set; }
        public string ImoHazardClassName { get; set; }
        public string Description { get; set; }

        public ImoHazardClass ParentImoHazardClass { get; set; }
        public ICollection<Dpg> Dpg { get; set; }
        public ICollection<ImoHazardClass> InverseParentImoHazardClass { get; set; }
    }
}
