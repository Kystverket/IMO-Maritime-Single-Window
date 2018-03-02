using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Country
    {
        public Country()
        {
            County = new HashSet<County>();
            Location = new HashSet<Location>();
            ShipCertificate = new HashSet<ShipCertificate>();
            ShipFlagCode = new HashSet<ShipFlagCode>();
            ShipMmsiMidCode = new HashSet<ShipMmsiMidCode>();
        }

        public int CountryId { get; set; }
        public string Country1 { get; set; }
        public string TwoCharCode { get; set; }
        public string ThreeCharCode { get; set; }
        public string CallCode { get; set; }
        public bool IsActive { get; set; }

        public ICollection<County> County { get; set; }
        public ICollection<Location> Location { get; set; }
        public ICollection<ShipCertificate> ShipCertificate { get; set; }
        public ICollection<ShipFlagCode> ShipFlagCode { get; set; }
        public ICollection<ShipMmsiMidCode> ShipMmsiMidCode { get; set; }
    }
}
