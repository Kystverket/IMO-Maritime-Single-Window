using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Location
    {
        public Location()
        {
            CertificateOfRegistry = new HashSet<CertificateOfRegistry>();
            ConsignmentPortOfDischarge = new HashSet<Consignment>();
            ConsignmentPortOfLoading = new HashSet<Consignment>();
            Department = new HashSet<Department>();
            PersonOnBoardPortOfDisembarkation = new HashSet<PersonOnBoard>();
            PersonOnBoardPortOfEmbarkation = new HashSet<PersonOnBoard>();
            PortCallLocation = new HashSet<PortCall>();
            PortCallNextLocation = new HashSet<PortCall>();
            PortCallPreviousLocation = new HashSet<PortCall>();
            SecurityPreviousPortOfCall = new HashSet<SecurityPreviousPortOfCall>();
            ShipToShipActivity = new HashSet<ShipToShipActivity>();
        }

        public int LocationId { get; set; }
        public int CountryId { get; set; }
        public int LocationTypeId { get; set; }
        public int? LocationSourceId { get; set; }
        public int? MunicipalityId { get; set; }
        public string LocationCode { get; set; }
        public int? LocationNo { get; set; }
        public string PostCode { get; set; }
        public string Name { get; set; }

        public Country Country { get; set; }
        public LocationSource LocationSource { get; set; }
        public LocationType LocationType { get; set; }
        public Municipality Municipality { get; set; }
        public ICollection<CertificateOfRegistry> CertificateOfRegistry { get; set; }
        public ICollection<Consignment> ConsignmentPortOfDischarge { get; set; }
        public ICollection<Consignment> ConsignmentPortOfLoading { get; set; }
        public ICollection<Department> Department { get; set; }
        public ICollection<PersonOnBoard> PersonOnBoardPortOfDisembarkation { get; set; }
        public ICollection<PersonOnBoard> PersonOnBoardPortOfEmbarkation { get; set; }
        public ICollection<PortCall> PortCallLocation { get; set; }
        public ICollection<PortCall> PortCallNextLocation { get; set; }
        public ICollection<PortCall> PortCallPreviousLocation { get; set; }
        public ICollection<SecurityPreviousPortOfCall> SecurityPreviousPortOfCall { get; set; }
        public ICollection<ShipToShipActivity> ShipToShipActivity { get; set; }
    }
}
