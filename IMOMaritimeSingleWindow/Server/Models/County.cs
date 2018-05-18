using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class County
    {
        public County()
        {
            Municipality = new HashSet<Municipality>();
        }

        public int CountyId { get; set; }
        public int CountryId { get; set; }
        public string Name { get; set; }
        public string CountyNo { get; set; }
        public string Geometry { get; set; }

        public Country Country { get; set; }
        public ICollection<Municipality> Municipality { get; set; }
    }
}
