using System;
using IMOMaritimeSingleWindow.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace IMOMaritimeSingleWindow.Data
{
    public interface IDbContext : IDisposable
    {
        DbSet<CargoItem> CargoItem { get; set; }
        DbSet<CertificateOfRegistry> CertificateOfRegistry { get; set; }
        DbSet<Claim> Claim { get; set; }
        DbSet<ClaimType> ClaimType { get; set; }
        DbSet<CompanySecurityOfficer> CompanySecurityOfficer { get; set; }
        DbSet<Consignment> Consignment { get; set; }
        DbSet<ContactMedium> ContactMedium { get; set; }
        DbSet<Country> Country { get; set; }
        DbSet<County> County { get; set; }
        DbSet<CustomsCargo> CustomsCargo { get; set; }
        DbSet<CustomsCargoType> CustomsCargoType { get; set; }
        DbSet<Department> Department { get; set; }
        DbSet<Dpg> Dpg { get; set; }
        DbSet<DpgOnBoard> DpgOnBoard { get; set; }
        DbSet<DpgType> DpgType { get; set; }
        DbSet<FalSecurity> FalSecurity { get; set; }
        DbSet<FalShipStores> FalShipStores { get; set; }
        DbSet<Gender> Gender { get; set; }
        DbSet<IdentityDocument> IdentityDocument { get; set; }
        DbSet<IdentityDocumentType> IdentityDocumentType { get; set; }
        DbSet<ImoHazardClass> ImoHazardClass { get; set; }
        DbSet<InternationalShipSecurityCertificate> InternationalShipSecurityCertificate { get; set; }
        DbSet<Location> Location { get; set; }
        DbSet<LocationSource> LocationSource { get; set; }
        DbSet<LocationType> LocationType { get; set; }
        DbSet<MarpolCategory> MarpolCategory { get; set; }
        DbSet<MeasurementType> MeasurementType { get; set; }
        DbSet<Municipality> Municipality { get; set; }
        DbSet<Organization> Organization { get; set; }
        DbSet<OrganizationPortCall> OrganizationPortCall { get; set; }
        DbSet<OrganizationType> OrganizationType { get; set; }
        DbSet<PackageType> PackageType { get; set; }
        DbSet<Password> Password { get; set; }
        DbSet<Person> Person { get; set; }
        DbSet<PersonOnBoard> PersonOnBoard { get; set; }
        DbSet<PersonOnBoardType> PersonOnBoardType { get; set; }
        DbSet<PortCall> PortCall { get; set; }
        DbSet<PortCallDetails> PortCallDetails { get; set; }
        DbSet<PortCallHasPortCallPurpose> PortCallHasPortCallPurpose { get; set; }
        DbSet<PortCallPurpose> PortCallPurpose { get; set; }
        DbSet<PortCallStatus> PortCallStatus { get; set; }
        DbSet<Role> Role { get; set; }
        DbSet<RoleClaim> RoleClaim { get; set; }
        DbSet<SecurityLevel> SecurityLevel { get; set; }
        DbSet<SecurityPreviousPortOfCall> SecurityPreviousPortOfCall { get; set; }
        DbSet<Ship> Ship { get; set; }
        DbSet<ShipBreadthType> ShipBreadthType { get; set; }
        DbSet<ShipCertificate> ShipCertificate { get; set; }
        DbSet<ShipCertificateType> ShipCertificateType { get; set; }
        DbSet<ShipContact> ShipContact { get; set; }
        DbSet<ShipFlagCode> ShipFlagCode { get; set; }
        DbSet<ShipHistory> ShipHistory { get; set; }
        DbSet<ShipHullType> ShipHullType { get; set; }
        DbSet<ShipLengthType> ShipLengthType { get; set; }
        DbSet<ShipMmsiMidCode> ShipMmsiMidCode { get; set; }
        DbSet<ShipPowerType> ShipPowerType { get; set; }
        DbSet<ShipSource> ShipSource { get; set; }
        DbSet<ShipStatus> ShipStatus { get; set; }
        DbSet<ShipToShipActivity> ShipToShipActivity { get; set; }
        DbSet<ShipType> ShipType { get; set; }
        DbSet<ShipTypeGroup> ShipTypeGroup { get; set; }
        DbSet<User> User { get; set; }
        DbSet<UserLogin> UserLogin { get; set; }
        DbSet<UserToken> UserToken { get; set; }

        EntityEntry<TEntity> Update<TEntity>(TEntity entity) where TEntity : class;
        int SaveChanges();
    }

}