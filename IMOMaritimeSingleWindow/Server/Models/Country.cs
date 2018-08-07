using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Country
    {
        public Country()
        {
            County = new HashSet<County>();
            IdentityDocument = new HashSet<IdentityDocument>();
            Location = new HashSet<Location>();
            PersonOnBoardCountryOfBirth = new HashSet<PersonOnBoard>();
            PersonOnBoardNationality = new HashSet<PersonOnBoard>();
            ShipCertificate = new HashSet<ShipCertificate>();
            ShipFlagCode = new HashSet<ShipFlagCode>();
            ShipMmsiMidCode = new HashSet<ShipMmsiMidCode>();
        }

        public int CountryId { get; set; }
        public string Name { get; set; }
        public string TwoCharCode { get; set; }
        public string ThreeCharCode { get; set; }
        public string CallCode { get; set; }
        public bool IsActive { get; set; }

        public ICollection<County> County { get; set; }
        public ICollection<IdentityDocument> IdentityDocument { get; set; }
        public ICollection<Location> Location { get; set; }
        public ICollection<PersonOnBoard> PersonOnBoardCountryOfBirth { get; set; }
        public ICollection<PersonOnBoard> PersonOnBoardNationality { get; set; }
        public ICollection<ShipCertificate> ShipCertificate { get; set; }
        public ICollection<ShipFlagCode> ShipFlagCode { get; set; }
        public ICollection<ShipMmsiMidCode> ShipMmsiMidCode { get; set; }
    }
}
