using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Location
    {
        public Location()
        {
            Department = new HashSet<Department>();
            InverseLocationInLocation = new HashSet<Location>();
            PortCallLocation = new HashSet<PortCall>();
            PortCallNextLocation = new HashSet<PortCall>();
            PortCallPreviousLocation = new HashSet<PortCall>();
        }

        public int LocationId { get; set; }
        public int? LocationInLocationId { get; set; }
        public int CountryId { get; set; }
        public int LocationTypeId { get; set; }
        public int? LocationSourceId { get; set; }
        public int? MunicipalityId { get; set; }
        public string LocationCode { get; set; }
        public int? LocationNo { get; set; }
        public string PostCode { get; set; }
        public string Name { get; set; }

        public Country Country { get; set; }
        public Location LocationInLocation { get; set; }
        public LocationSource LocationSource { get; set; }
        public LocationType LocationType { get; set; }
        public Municipality Municipality { get; set; }
        public CertificateOfRegistry CertificateOfRegistry { get; set; }
        public ICollection<Department> Department { get; set; }
        public ICollection<Location> InverseLocationInLocation { get; set; }
        public ICollection<PortCall> PortCallLocation { get; set; }
        public ICollection<PortCall> PortCallNextLocation { get; set; }
        public ICollection<PortCall> PortCallPreviousLocation { get; set; }
    }
}
