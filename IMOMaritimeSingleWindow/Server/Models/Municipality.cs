using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Municipality
    {
        public Municipality()
        {
            Location = new HashSet<Location>();
        }

        public int MunicipalityId { get; set; }
        public int CountyId { get; set; }
        public string Name { get; set; }
        public string MunicipalityNo { get; set; }

        public County County { get; set; }
        public ICollection<Location> Location { get; set; }
    }
}
