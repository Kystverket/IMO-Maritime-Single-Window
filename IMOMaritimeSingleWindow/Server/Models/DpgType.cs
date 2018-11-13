using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class DpgType
    {
        public DpgType()
        {
            Dpg = new HashSet<Dpg>();
        }

        public int DpgTypeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        [MaxLength(100)]
        public string ShortName { get; set; }

        public ICollection<Dpg> Dpg { get; set; }
    }
}
