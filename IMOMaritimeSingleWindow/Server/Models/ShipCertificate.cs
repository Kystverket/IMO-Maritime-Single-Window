using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class ShipCertificate
    {
        public int ShipCertificateId { get; set; }
        public int CountryId { get; set; }
        public int OrganizationId { get; set; }
        public int ShipCertificateTypeId { get; set; }
        public int ShipId { get; set; }
        public DateTime? IssueDate { get; set; }
        public DateTime? ExpireDate { get; set; }
        public string Description { get; set; }

        public Country Country { get; set; }
        public Organization Organization { get; set; }
        public Ship Ship { get; set; }
        public ShipCertificateType ShipCertificateType { get; set; }
    }
}
