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
        public int? IssuerId { get; set; }
        public string CertificateNumber { get; set; }

        public Organization Issuer { get; set; }
        public ICollection<Ship> Ship { get; set; }
    }
}
