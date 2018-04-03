using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class DpgType
    {
        public DpgType()
        {
            Dpg = new HashSet<Dpg>();
        }

        public int DpgTypeId { get; set; }
        public string DpgTypeName { get; set; }
        public string Description { get; set; }

        public ICollection<Dpg> Dpg { get; set; }
    }
}
