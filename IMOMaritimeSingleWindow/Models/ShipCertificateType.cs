using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class ShipCertificateType
    {
        public ShipCertificateType()
        {
            ShipCertificateNavigation = new HashSet<ShipCertificate>();
        }

        public int ShipCertificateTypeId { get; set; }
        public string ShipCertificate { get; set; }
        public string Description { get; set; }

        public ICollection<ShipCertificate> ShipCertificateNavigation { get; set; }
    }
}
