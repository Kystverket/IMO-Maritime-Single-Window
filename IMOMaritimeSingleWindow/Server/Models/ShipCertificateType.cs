using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class ShipCertificateType
    {
        public ShipCertificateType()
        {
            ShipCertificate = new HashSet<ShipCertificate>();
        }

        public int ShipCertificateTypeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<ShipCertificate> ShipCertificate { get; set; }
    }
}
