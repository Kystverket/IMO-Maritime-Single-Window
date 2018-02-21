using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class County
    {
        public County()
        {
            Council = new HashSet<Council>();
        }

        public int CountyId { get; set; }
        public int CountryId { get; set; }
        public string CountyName { get; set; }
        public string CountyNo { get; set; }
        public string CountyGeometry { get; set; }

        public Country Country { get; set; }
        public ICollection<Council> Council { get; set; }
    }
}
