using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Data
{
    public abstract class open_ssnContext_base : DbContext, IDbContext
    {
        public virtual DbSet<CargoItem> CargoItem { get; set; }
        public virtual DbSet<CertificateOfRegistry> CertificateOfRegistry { get; set; }
        public virtual DbSet<Claim> Claim { get; set; }
        public virtual DbSet<ClaimType> ClaimType { get; set; }
        public virtual DbSet<CompanySecurityOfficer> CompanySecurityOfficer { get; set; }
        public virtual DbSet<Consignment> Consignment { get; set; }
        public virtual DbSet<ContactMedium> ContactMedium { get; set; }
        public virtual DbSet<Country> Country { get; set; }
        public virtual DbSet<County> County { get; set; }
        public virtual DbSet<CustomsCargo> CustomsCargo { get; set; }
        public virtual DbSet<CustomsCargoType> CustomsCargoType { get; set; }
        public virtual DbSet<Department> Department { get; set; }
        public virtual DbSet<Dpg> Dpg { get; set; }
        public virtual DbSet<DpgOnBoard> DpgOnBoard { get; set; }
        public virtual DbSet<DpgType> DpgType { get; set; }
        public virtual DbSet<FalSecurity> FalSecurity { get; set; }
        public virtual DbSet<FalShipStores> FalShipStores { get; set; }
        public virtual DbSet<Gender> Gender { get; set; }
        public virtual DbSet<IdentityDocument> IdentityDocument { get; set; }
        public virtual DbSet<IdentityDocumentType> IdentityDocumentType { get; set; }
        public virtual DbSet<ImoHazardClass> ImoHazardClass { get; set; }
        public virtual DbSet<InternationalShipSecurityCertificate> InternationalShipSecurityCertificate { get; set; }
        public virtual DbSet<Location> Location { get; set; }
        public virtual DbSet<LocationSource> LocationSource { get; set; }
        public virtual DbSet<LocationType> LocationType { get; set; }
        public virtual DbSet<MarpolCategory> MarpolCategory { get; set; }
        public virtual DbSet<MeasurementType> MeasurementType { get; set; }
        public virtual DbSet<Municipality> Municipality { get; set; }
        public virtual DbSet<Organization> Organization { get; set; }
        public virtual DbSet<OrganizationPortCall> OrganizationPortCall { get; set; }
        public virtual DbSet<OrganizationType> OrganizationType { get; set; }
        public virtual DbSet<PackageType> PackageType { get; set; }
        public virtual DbSet<Password> Password { get; set; }
        public virtual DbSet<Person> Person { get; set; }
        public virtual DbSet<PersonOnBoard> PersonOnBoard { get; set; }
        public virtual DbSet<PersonOnBoardType> PersonOnBoardType { get; set; }
        public virtual DbSet<PortCall> PortCall { get; set; }
        public virtual DbSet<PortCallDetails> PortCallDetails { get; set; }
        public virtual DbSet<PortCallHasPortCallPurpose> PortCallHasPortCallPurpose { get; set; }
        public virtual DbSet<PortCallPurpose> PortCallPurpose { get; set; }
        public virtual DbSet<PortCallStatus> PortCallStatus { get; set; }
        public virtual DbSet<Role> Role { get; set; }
        public virtual DbSet<RoleClaim> RoleClaim { get; set; }
        public virtual DbSet<SecurityLevel> SecurityLevel { get; set; }
        public virtual DbSet<SecurityPreviousPortOfCall> SecurityPreviousPortOfCall { get; set; }
        public virtual DbSet<Ship> Ship { get; set; }
        public virtual DbSet<ShipBreadthType> ShipBreadthType { get; set; }
        public virtual DbSet<ShipCertificate> ShipCertificate { get; set; }
        public virtual DbSet<ShipCertificateType> ShipCertificateType { get; set; }
        public virtual DbSet<ShipContact> ShipContact { get; set; }
        public virtual DbSet<ShipFlagCode> ShipFlagCode { get; set; }
        public virtual DbSet<ShipHistory> ShipHistory { get; set; }
        public virtual DbSet<ShipHullType> ShipHullType { get; set; }
        public virtual DbSet<ShipLengthType> ShipLengthType { get; set; }
        public virtual DbSet<ShipMmsiMidCode> ShipMmsiMidCode { get; set; }
        public virtual DbSet<ShipPowerType> ShipPowerType { get; set; }
        public virtual DbSet<ShipSource> ShipSource { get; set; }
        public virtual DbSet<ShipStatus> ShipStatus { get; set; }
        public virtual DbSet<ShipToShipActivity> ShipToShipActivity { get; set; }
        public virtual DbSet<ShipType> ShipType { get; set; }
        public virtual DbSet<ShipTypeGroup> ShipTypeGroup { get; set; }
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<UserLogin> UserLogin { get; set; }
        public virtual DbSet<UserToken> UserToken { get; set; }

    }
}
