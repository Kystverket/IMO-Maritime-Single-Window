using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class InternationalShipSecurityCertificate
    {
        public InternationalShipSecurityCertificate()
        {
            Ship = new HashSet<Ship>();
        }

        public DateTime? ExpiryDate { get; set; }
        public long IsscId { get; set; }
        public int? RsoIssuerId { get; set; }
        public string CertificateNumber { get; set; }
        public int? GovernmentIssuerId { get; set; }
        public bool? IssuedByGovernment { get; set; }

        public Country GovernmentIssuer { get; set; }
        public Organization RsoIssuer { get; set; }
        public ICollection<Ship> Ship { get; set; }
    }
}
