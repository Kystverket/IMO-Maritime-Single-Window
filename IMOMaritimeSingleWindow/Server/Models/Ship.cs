using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Ship
    {
        public Ship()
        {
            PortCall = new HashSet<PortCall>();
            ShipCertificate = new HashSet<ShipCertificate>();
            ShipContact = new HashSet<ShipContact>();
            ShipHistory = new HashSet<ShipHistory>();
        }

        public int ShipId { get; set; }
        public int ShipHullTypeId { get; set; }
        public int ShipStatusId { get; set; }
        public int? ShipPowerTypeId { get; set; }
        public int? ShipBreadthTypeId { get; set; }
        public int? ShipLengthTypeId { get; set; }
        public int? ShipSourceId { get; set; }
        public int ShipFlagCodeId { get; set; }
        public int? OrganizationId { get; set; }
        public int ShipTypeId { get; set; }
        public int? YearOfBuild { get; set; }
        public string Name { get; set; }
        public string CallSign { get; set; }
        public int? DeadweightTonnage { get; set; }
        public int? GrossTonnage { get; set; }
        public float? Length { get; set; }
        public float? Breadth { get; set; }
        public int? Power { get; set; }
        public float? Height { get; set; }
        public float? Draught { get; set; }
        public bool? HasSideThrusters { get; set; }
        public bool? HasSideThrustersFront { get; set; }
        public bool? HasSideThrustersBack { get; set; }
        public string Remark { get; set; }
        public int? CertificateOfRegistryId { get; set; }
        public DateTimeOffset? DateOfKeelLaying { get; set; }
        public int? ImoNo { get; set; }
        public int? MmsiNo { get; set; }
        public int? NetTonnage { get; set; }
        public long? IsscId { get; set; }

        public CertificateOfRegistry CertificateOfRegistry { get; set; }
        public InternationalShipSecurityCertificate Issc { get; set; }
        public Organization Organization { get; set; }
        public ShipBreadthType ShipBreadthType { get; set; }
        public ShipFlagCode ShipFlagCode { get; set; }
        public ShipHullType ShipHullType { get; set; }
        public ShipLengthType ShipLengthType { get; set; }
        public ShipPowerType ShipPowerType { get; set; }
        public ShipSource ShipSource { get; set; }
        public ShipStatus ShipStatus { get; set; }
        public ShipType ShipType { get; set; }
        public ICollection<PortCall> PortCall { get; set; }
        public ICollection<ShipCertificate> ShipCertificate { get; set; }
        public ICollection<ShipContact> ShipContact { get; set; }
        public ICollection<ShipHistory> ShipHistory { get; set; }
    }
}
