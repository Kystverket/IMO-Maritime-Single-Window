using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using IMOMaritimeSingleWindow.Models;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace IMOMaritimeSingleWindow.Data
{
    public class TestContext : DbContext, IDbContext
    {
        public virtual DbSet<CertificateOfRegistry> CertificateOfRegistry { get; set; }
        public virtual DbSet<Claim> Claim { get; set; }
        public virtual DbSet<ClaimType> ClaimType { get; set; }
        public virtual DbSet<ContactMedium> ContactMedium { get; set; }
        public virtual DbSet<Country> Country { get; set; }
        public virtual DbSet<County> County { get; set; }
        public virtual DbSet<CustomsCargo> CustomsCargo { get; set; }
        public virtual DbSet<CustomsCargoType> CustomsCargoType { get; set; }
        public virtual DbSet<Department> Department { get; set; }
        public virtual DbSet<Dpg> Dpg { get; set; }
        public virtual DbSet<DpgOnBoard> DpgOnBoard { get; set; }
        public virtual DbSet<DpgType> DpgType { get; set; }
        public virtual DbSet<ImoHazardClass> ImoHazardClass { get; set; }
        public virtual DbSet<Location> Location { get; set; }
        public virtual DbSet<LocationSource> LocationSource { get; set; }
        public virtual DbSet<LocationType> LocationType { get; set; }
        public virtual DbSet<MarpolCategory> MarpolCategory { get; set; }
        public virtual DbSet<Municipality> Municipality { get; set; }
        public virtual DbSet<Organization> Organization { get; set; }
        public virtual DbSet<OrganizationPortCall> OrganizationPortCall { get; set; }
        public virtual DbSet<OrganizationType> OrganizationType { get; set; }
        public virtual DbSet<Password> Password { get; set; }
        public virtual DbSet<Person> Person { get; set; }
        public virtual DbSet<PortCall> PortCall { get; set; }
        public virtual DbSet<PortCallDetails> PortCallDetails { get; set; }
        public virtual DbSet<PortCallHasPortCallPurpose> PortCallHasPortCallPurpose { get; set; }
        public virtual DbSet<PortCallPurpose> PortCallPurpose { get; set; }
        public virtual DbSet<PortCallStatus> PortCallStatus { get; set; }
        public virtual DbSet<Role> Role { get; set; }
        public virtual DbSet<RoleClaim> RoleClaim { get; set; }
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
        public virtual DbSet<ShipType> ShipType { get; set; }
        public virtual DbSet<ShipTypeGroup> ShipTypeGroup { get; set; }
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<UserLogin> UserLogin { get; set; }
        public virtual DbSet<UserToken> UserToken { get; set; }

        public TestContext(DbContextOptions<TestContext> options) : base(options) { }
        // for testing:
        public TestContext() { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CertificateOfRegistry>(entity =>
            {
                entity.ToTable("certificate_of_registry");



                entity.Property(e => e.CertificateOfRegistryId)
                    .HasColumnName("certificate_of_registry_id");

                entity.Property(e => e.CertificateNumber).HasColumnName("certificate_number");

                entity.Property(e => e.DateOfIssue).HasColumnName("date_of_issue");

                entity.Property(e => e.OwnerName).HasColumnName("owner_name");

                entity.Property(e => e.PortLocationId).HasColumnName("port_location_id");

                entity.HasOne(d => d.CertificateOfRegistryNavigation)
                    .WithOne(p => p.CertificateOfRegistry);
            });

            modelBuilder.Entity<Claim>(entity =>
            {
                entity.ToTable("claim");

                entity.Property(e => e.ClaimId)
                    .HasColumnName("claim_id");

                entity.Property(e => e.ClaimTypeId).HasColumnName("claim_type_id");

                entity.Property(e => e.ClaimValue).HasColumnName("claim_value");

                entity.Property(e => e.Discriminator).HasColumnName("discriminator");

                entity.HasOne(d => d.ClaimType)
                    .WithMany(p => p.Claim);
            });

            modelBuilder.Entity<ClaimType>(entity =>
            {
                entity.ToTable("claim_type");

                entity.Property(e => e.ClaimTypeId)
                    .HasColumnName("claim_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name).HasColumnName("name");
            });

            modelBuilder.Entity<ContactMedium>(entity =>
            {
                entity.ToTable("contact_medium");

                entity.Property(e => e.ContactMediumId).HasColumnName("contact_medium_id");

                entity.Property(e => e.ContactMediumType).HasColumnName("contact_medium_type");

                entity.Property(e => e.Description).HasColumnName("description");
            });

            modelBuilder.Entity<Country>(entity =>
            {
                entity.ToTable("country");

                entity.Property(e => e.CountryId).HasColumnName("country_id");

                entity.Property(e => e.CallCode).HasColumnName("call_code");

                entity.Property(e => e.IsActive).HasColumnName("is_active");

                entity.Property(e => e.Name)

                    .HasColumnName("name");

                entity.Property(e => e.ThreeCharCode)

                    .HasColumnName("three_char_code");

                entity.Property(e => e.TwoCharCode)

                    .HasColumnName("two_char_code");
            });

            modelBuilder.Entity<County>(entity =>
            {
                entity.ToTable("county");



                entity.Property(e => e.CountyId).HasColumnName("county_id");

                entity.Property(e => e.CountryId).HasColumnName("country_id");

                entity.Property(e => e.CountyNo)

                    .HasColumnName("county_no");

                entity.Property(e => e.Geometry).HasColumnName("geometry");

                entity.Property(e => e.Name)

                    .HasColumnName("name");

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.County);
            });

            modelBuilder.Entity<CustomsCargo>(entity =>
            {
                entity.ToTable("customs_cargo");



                entity.Property(e => e.CustomsCargoId).HasColumnName("customs_cargo_id");

                entity.Property(e => e.CargoHandlingAgent).HasColumnName("cargo_handling_agent");

                entity.Property(e => e.CustomsCargoTypeId).HasColumnName("customs_cargo_type_id");

                entity.Property(e => e.LocationInPort).HasColumnName("location_in_port");

                entity.Property(e => e.PortCallId).HasColumnName("port_call_id");

                entity.Property(e => e.Remark).HasColumnName("remark");

                entity.HasOne(d => d.CustomsCargoType)
                    .WithMany(p => p.CustomsCargo);

                entity.HasOne(d => d.PortCall)
                    .WithMany(p => p.CustomsCargo);
            });

            modelBuilder.Entity<CustomsCargoType>(entity =>
            {
                entity.ToTable("customs_cargo_type");

                entity.Property(e => e.CustomsCargoTypeId).HasColumnName("customs_cargo_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)

                    .HasColumnName("name");
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.ToTable("department");



                entity.Property(e => e.DepartmentId).HasColumnName("department_id");

                entity.Property(e => e.DepartmentNo).HasColumnName("department_no");

                entity.Property(e => e.IsActive).HasColumnName("is_active");

                entity.Property(e => e.LocationId).HasColumnName("location_id");

                entity.Property(e => e.ShortName).HasColumnName("short_name");

                entity.HasOne(d => d.Location)
                    .WithMany(p => p.Department);
            });

            modelBuilder.Entity<Dpg>(entity =>
            {
                entity.ToTable("dpg");



                entity.Property(e => e.DpgId).HasColumnName("dpg_id");

                entity.Property(e => e.DpgTypeId).HasColumnName("dpg_type_id");

                entity.Property(e => e.FlashPoint)
                    .HasColumnName("flash_point");

                entity.Property(e => e.ImoHazardClassId).HasColumnName("imo_hazard_class_id");

                entity.Property(e => e.MarpolCategoryId).HasColumnName("marpol_category_id");

                entity.Property(e => e.MarpolOilType).HasColumnName("marpol_oil_type");

                entity.Property(e => e.PackingGroup).HasColumnName("packing_group");

                entity.Property(e => e.TextualReference).HasColumnName("textual_reference");

                entity.Property(e => e.UnNumber).HasColumnName("un_number");

                entity.HasOne(d => d.DpgType)
                    .WithMany(p => p.Dpg);

                entity.HasOne(d => d.ImoHazardClass)
                    .WithMany(p => p.Dpg);

                entity.HasOne(d => d.MarpolCategory)
                    .WithMany(p => p.Dpg);
            });

            modelBuilder.Entity<DpgOnBoard>(entity =>
            {
                entity.ToTable("dpg_on_board");



                entity.Property(e => e.DpgOnBoardId).HasColumnName("dpg_on_board_id");

                entity.Property(e => e.DpgId).HasColumnName("dpg_id");

                entity.Property(e => e.GrossWeight)
                    .HasColumnName("gross_weight");

                entity.Property(e => e.LocationOnBoard).HasColumnName("location_on_board");

                entity.Property(e => e.NetWeight)
                    .HasColumnName("net_weight");

                entity.Property(e => e.PlacedInContainer).HasColumnName("placed_in_container");

                entity.Property(e => e.PortCallId).HasColumnName("port_call_id");

                entity.Property(e => e.TransportUnitIdentification).HasColumnName("transport_unit_identification");

                entity.HasOne(d => d.Dpg)
                    .WithMany(p => p.DpgOnBoard);

                entity.HasOne(d => d.PortCall)
                    .WithMany(p => p.DpgOnBoard);
            });

            modelBuilder.Entity<DpgType>(entity =>
            {
                entity.ToTable("dpg_type");

                entity.Property(e => e.DpgTypeId).HasColumnName("dpg_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)

                    .HasColumnName("name");
            });

            modelBuilder.Entity<ImoHazardClass>(entity =>
            {
                entity.ToTable("imo_hazard_class");



                entity.Property(e => e.ImoHazardClassId).HasColumnName("imo_hazard_class_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name).HasColumnName("name");

                entity.Property(e => e.ParentImoHazardClassId).HasColumnName("parent_imo_hazard_class_id");

                entity.HasOne(d => d.ParentImoHazardClass)
                    .WithMany(p => p.InverseParentImoHazardClass);
            });

            modelBuilder.Entity<Location>(entity =>
            {
                entity.ToTable("location");



                entity.Property(e => e.LocationId).HasColumnName("location_id");

                entity.Property(e => e.CountryId).HasColumnName("country_id");

                entity.Property(e => e.LocationCode).HasColumnName("location_code");

                entity.Property(e => e.LocationInLocationId).HasColumnName("location_in_location_id");

                entity.Property(e => e.LocationNo).HasColumnName("location_no");

                entity.Property(e => e.LocationSourceId).HasColumnName("location_source_id");

                entity.Property(e => e.LocationTypeId).HasColumnName("location_type_id");

                entity.Property(e => e.MunicipalityId).HasColumnName("municipality_id");

                entity.Property(e => e.Name)

                    .HasColumnName("name");

                entity.Property(e => e.PostCode).HasColumnName("post_code");

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.Location);

                entity.HasOne(d => d.LocationInLocation)
                    .WithMany(p => p.InverseLocationInLocation);

                entity.HasOne(d => d.LocationSource)
                    .WithMany(p => p.Location);

                entity.HasOne(d => d.LocationType)
                    .WithMany(p => p.Location);

                entity.HasOne(d => d.Municipality)
                    .WithMany(p => p.Location);
            });

            modelBuilder.Entity<LocationSource>(entity =>
            {
                entity.ToTable("location_source");

                entity.Property(e => e.LocationSourceId).HasColumnName("location_source_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)

                    .HasColumnName("name");
            });

            modelBuilder.Entity<LocationType>(entity =>
            {
                entity.ToTable("location_type");

                entity.Property(e => e.LocationTypeId).HasColumnName("location_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)

                    .HasColumnName("name");
            });

            modelBuilder.Entity<MarpolCategory>(entity =>
            {
                entity.ToTable("marpol_category");

                entity.Property(e => e.MarpolCategoryId).HasColumnName("marpol_category_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)

                    .HasColumnName("name");
            });

            modelBuilder.Entity<Municipality>(entity =>
            {
                entity.ToTable("municipality");



                entity.Property(e => e.MunicipalityId)
                    .HasColumnName("municipality_id");

                entity.Property(e => e.CountyId).HasColumnName("county_id");

                entity.Property(e => e.MunicipalityNo)

                    .HasColumnName("municipality_no");

                entity.Property(e => e.Name)

                    .HasColumnName("name");

                entity.HasOne(d => d.County)
                    .WithMany(p => p.Municipality);
            });

            modelBuilder.Entity<Organization>(entity =>
            {
                entity.ToTable("organization");

                entity.Property(e => e.OrganizationId).HasColumnName("organization_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.ImoCompanyNumber).HasColumnName("imo_company_number");

                entity.Property(e => e.InvoiceReceiverNo).HasColumnName("invoice_receiver_no");

                entity.Property(e => e.IsActive).HasColumnName("is_active");

                entity.Property(e => e.Name)

                    .HasColumnName("name");

                entity.Property(e => e.OrganizationNo).HasColumnName("organization_no");

                entity.Property(e => e.OrganizationTypeId).HasColumnName("organization_type_id");

                entity.HasOne(d => d.OrganizationType)
                    .WithMany(p => p.Organization);
            });

            modelBuilder.Entity<OrganizationPortCall>(entity =>
            {
                entity.ToTable("organization_port_call");

                entity.Property(e => e.OrganizationPortCallId).HasColumnName("organization_port_call_id");

                entity.Property(e => e.Cleared).HasColumnName("cleared");

                entity.Property(e => e.OrganizationId).HasColumnName("organization_id");

                entity.Property(e => e.PortCallId).HasColumnName("port_call_id");

                entity.Property(e => e.Remark).HasColumnName("remark");

                entity.HasOne(d => d.Organization)
                    .WithMany(p => p.OrganizationPortCall);

                entity.HasOne(d => d.PortCall)
                    .WithMany(p => p.OrganizationPortCall);
            });

            modelBuilder.Entity<OrganizationType>(entity =>
            {
                entity.ToTable("organization_type");

                entity.Property(e => e.OrganizationTypeId).HasColumnName("organization_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)

                    .HasColumnName("name");
            });

            modelBuilder.Entity<Password>(entity =>
            {
                entity.ToTable("password");

                entity.Property(e => e.PasswordId)
                    .HasColumnName("password_id");

                entity.Property(e => e.Hash).HasColumnName("hash");
            });

            modelBuilder.Entity<Person>(entity =>
            {
                entity.ToTable("person");

                entity.Property(e => e.PersonId)
                    .HasColumnName("person_id");

                entity.Property(e => e.GivenName).HasColumnName("given_name");

                entity.Property(e => e.Surname).HasColumnName("surname");
            });

            modelBuilder.Entity<PortCall>(entity =>
            {
                entity.ToTable("port_call");



                entity.Property(e => e.PortCallId).HasColumnName("port_call_id");

                entity.Property(e => e.LocationAta).HasColumnName("location_ata");

                entity.Property(e => e.LocationAtd).HasColumnName("location_atd");

                entity.Property(e => e.LocationEta).HasColumnName("location_eta");

                entity.Property(e => e.LocationEtd).HasColumnName("location_etd");

                entity.Property(e => e.LocationId).HasColumnName("location_id");

                entity.Property(e => e.NextLocationAta).HasColumnName("next_location_ata");

                entity.Property(e => e.NextLocationEta).HasColumnName("next_location_eta");

                entity.Property(e => e.NextLocationId).HasColumnName("next_location_id");

                entity.Property(e => e.PortCallStatusId).HasColumnName("port_call_status_id");

                entity.Property(e => e.PreviousLocationAtd).HasColumnName("previous_location_atd");

                entity.Property(e => e.PreviousLocationEtd).HasColumnName("previous_location_etd");

                entity.Property(e => e.PreviousLocationId).HasColumnName("previous_location_id");

                entity.Property(e => e.Remark).HasColumnName("remark");

                entity.Property(e => e.ShipId).HasColumnName("ship_id");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Location)
                    .WithMany(p => p.PortCallLocation);

                entity.HasOne(d => d.NextLocation)
                    .WithMany(p => p.PortCallNextLocation);

                entity.HasOne(d => d.PortCallStatus)
                    .WithMany(p => p.PortCall);

                entity.HasOne(d => d.PreviousLocation)
                    .WithMany(p => p.PortCallPreviousLocation);

                entity.HasOne(d => d.Ship)
                    .WithMany(p => p.PortCall);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.PortCall);
            });

            modelBuilder.Entity<PortCallDetails>(entity =>
            {
                entity.ToTable("port_call_details");



                entity.Property(e => e.PortCallDetailsId).HasColumnName("port_call_details_id");

                entity.Property(e => e.ActualDraught).HasColumnName("actual_draught");

                entity.Property(e => e.AirDraught).HasColumnName("air_draught");

                entity.Property(e => e.NumberOfCrew).HasColumnName("number_of_crew");

                entity.Property(e => e.NumberOfPassengers).HasColumnName("number_of_passengers");

                entity.Property(e => e.PortCallId).HasColumnName("port_call_id");

                entity.Property(e => e.ReportingBunkers).HasColumnName("reporting_bunkers");

                entity.Property(e => e.ReportingCargo).HasColumnName("reporting_cargo");

                entity.Property(e => e.ReportingCrew).HasColumnName("reporting_crew");

                entity.Property(e => e.ReportingHazmat).HasColumnName("reporting_hazmat");

                entity.Property(e => e.ReportingPax).HasColumnName("reporting_pax");

                entity.Property(e => e.ReportingShipStores).HasColumnName("reporting_ship_stores");

                entity.Property(e => e.ReportingWaste).HasColumnName("reporting_waste");

                entity.HasOne(d => d.PortCall)
                    .WithMany(p => p.PortCallDetails);
            });

            modelBuilder.Entity<PortCallHasPortCallPurpose>(entity =>
            {
                entity.ToTable("port_call_has_port_call_purpose");



                entity.Property(e => e.PortCallHasPortCallPurposeId)
                    .HasColumnName("port_call_has_port_call_purpose_id");

                entity.Property(e => e.PortCallId).HasColumnName("port_call_id");

                entity.Property(e => e.PortCallPurposeId).HasColumnName("port_call_purpose_id");

                entity.Property(e => e.PurposeIfUnknown).HasColumnName("purpose_if_unknown");

                entity.HasOne(d => d.PortCall)
                    .WithMany(p => p.PortCallHasPortCallPurpose);

                entity.HasOne(d => d.PortCallPurpose)
                    .WithMany(p => p.PortCallHasPortCallPurpose);
            });

            modelBuilder.Entity<PortCallPurpose>(entity =>
            {
                entity.ToTable("port_call_purpose");

                entity.Property(e => e.PortCallPurposeId).HasColumnName("port_call_purpose_id");

                entity.Property(e => e.Name)

                    .HasColumnName("name");
            });

            modelBuilder.Entity<PortCallStatus>(entity =>
            {
                entity.ToTable("port_call_status");

                entity.Property(e => e.PortCallStatusId).HasColumnName("port_call_status_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name).HasColumnName("name");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("role");

                entity.Property(e => e.RoleId)
                    .HasColumnName("role_id");

                entity.Property(e => e.ConcurrencyStamp).HasColumnName("concurrency_stamp");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name).HasColumnName("name");

                entity.Property(e => e.NormalizedName).HasColumnName("normalized_name");
            });

            modelBuilder.Entity<RoleClaim>(entity =>
            {
                entity.ToTable("role_claim");



                entity.Property(e => e.RoleClaimId)
                    .HasColumnName("role_claim_id");

                entity.Property(e => e.ClaimId).HasColumnName("claim_id");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.HasOne(d => d.Claim)
                    .WithMany(p => p.RoleClaim);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.RoleClaim);
            });

            modelBuilder.Entity<Ship>(entity =>
            {
                entity.ToTable("ship");



                entity.Property(e => e.ShipId).HasColumnName("ship_id");

                entity.Property(e => e.Breadth).HasColumnName("breadth");

                entity.Property(e => e.CallSign).HasColumnName("call_sign");

                entity.Property(e => e.CertificateOfRegistryId).HasColumnName("certificate_of_registry_id");

                entity.Property(e => e.DateOfKeelLaying).HasColumnName("date_of_keel_laying");

                entity.Property(e => e.DeadweightTonnage).HasColumnName("deadweight_tonnage");

                entity.Property(e => e.Draught).HasColumnName("draught");

                entity.Property(e => e.GrossTonnage).HasColumnName("gross_tonnage");

                entity.Property(e => e.HasSideThrusters).HasColumnName("has_side_thrusters");

                entity.Property(e => e.HasSideThrustersBack).HasColumnName("has_side_thrusters_back");

                entity.Property(e => e.HasSideThrustersFront).HasColumnName("has_side_thrusters_front");

                entity.Property(e => e.Height).HasColumnName("height");

                entity.Property(e => e.ImoNo).HasColumnName("imo_no");

                entity.Property(e => e.Length).HasColumnName("length");

                entity.Property(e => e.MmsiNo).HasColumnName("mmsi_no");

                entity.Property(e => e.Name)

                    .HasColumnName("name");

                entity.Property(e => e.OrganizationId).HasColumnName("organization_id");

                entity.Property(e => e.Power).HasColumnName("power");

                entity.Property(e => e.Remark).HasColumnName("remark");

                entity.Property(e => e.ShipBreadthTypeId).HasColumnName("ship_breadth_type_id");

                entity.Property(e => e.ShipFlagCodeId).HasColumnName("ship_flag_code_id");

                entity.Property(e => e.ShipHullTypeId).HasColumnName("ship_hull_type_id");

                entity.Property(e => e.ShipLengthTypeId).HasColumnName("ship_length_type_id");

                entity.Property(e => e.ShipPowerTypeId).HasColumnName("ship_power_type_id");

                entity.Property(e => e.ShipSourceId).HasColumnName("ship_source_id");

                entity.Property(e => e.ShipStatusId).HasColumnName("ship_status_id");

                entity.Property(e => e.ShipTypeId).HasColumnName("ship_type_id");

                entity.Property(e => e.YearOfBuild).HasColumnName("year_of_build");

                entity.HasOne(d => d.CertificateOfRegistry)
                    .WithMany(p => p.Ship);

                entity.HasOne(d => d.Organization)
                    .WithMany(p => p.Ship);

                entity.HasOne(d => d.ShipBreadthType)
                    .WithMany(p => p.Ship);

                entity.HasOne(d => d.ShipFlagCode)
                    .WithMany(p => p.Ship);

                entity.HasOne(d => d.ShipHullType)
                    .WithMany(p => p.Ship);

                entity.HasOne(d => d.ShipLengthType)
                    .WithMany(p => p.Ship);

                entity.HasOne(d => d.ShipPowerType)
                    .WithMany(p => p.Ship);

                entity.HasOne(d => d.ShipSource)
                    .WithMany(p => p.Ship);

                entity.HasOne(d => d.ShipStatus)
                    .WithMany(p => p.Ship);

                entity.HasOne(d => d.ShipType)
                    .WithMany(p => p.Ship);
            });

            modelBuilder.Entity<ShipBreadthType>(entity =>
            {
                entity.ToTable("ship_breadth_type");

                entity.Property(e => e.ShipBreadthTypeId).HasColumnName("ship_breadth_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)

                    .HasColumnName("name");
            });

            modelBuilder.Entity<ShipCertificate>(entity =>
            {
                entity.ToTable("ship_certificate");



                entity.Property(e => e.ShipCertificateId).HasColumnName("ship_certificate_id");

                entity.Property(e => e.CountryId).HasColumnName("country_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.ExpireDate).HasColumnName("expire_date");

                entity.Property(e => e.IssueDate).HasColumnName("issue_date");

                entity.Property(e => e.OrganizationId).HasColumnName("organization_id");

                entity.Property(e => e.ShipCertificateTypeId).HasColumnName("ship_certificate_type_id");

                entity.Property(e => e.ShipId).HasColumnName("ship_id");

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.ShipCertificate);

                entity.HasOne(d => d.Organization)
                    .WithMany(p => p.ShipCertificate);

                entity.HasOne(d => d.ShipCertificateType)
                    .WithMany(p => p.ShipCertificate);

                entity.HasOne(d => d.Ship)
                    .WithMany(p => p.ShipCertificate);
            });

            modelBuilder.Entity<ShipCertificateType>(entity =>
            {
                entity.ToTable("ship_certificate_type");

                entity.Property(e => e.ShipCertificateTypeId).HasColumnName("ship_certificate_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name).HasColumnName("name");
            });

            modelBuilder.Entity<ShipContact>(entity =>
            {
                entity.ToTable("ship_contact");



                entity.Property(e => e.ShipContactId).HasColumnName("ship_contact_id");

                entity.Property(e => e.Comments).HasColumnName("comments");

                entity.Property(e => e.ContactMediumId).HasColumnName("contact_medium_id");

                entity.Property(e => e.ContactValue).HasColumnName("contact_value");

                entity.Property(e => e.IsPreferred).HasColumnName("is_preferred");

                entity.Property(e => e.ShipId).HasColumnName("ship_id");

                entity.HasOne(d => d.ContactMedium)
                    .WithMany(p => p.ShipContact);

                entity.HasOne(d => d.Ship)
                    .WithMany(p => p.ShipContact);
            });

            modelBuilder.Entity<ShipFlagCode>(entity =>
            {
                entity.ToTable("ship_flag_code");



                entity.Property(e => e.ShipFlagCodeId).HasColumnName("ship_flag_code_id");

                entity.Property(e => e.CountryId).HasColumnName("country_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)

                    .HasColumnName("name");

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.ShipFlagCode);
            });

            modelBuilder.Entity<ShipHistory>(entity =>
            {
                entity.ToTable("ship_history");



                entity.Property(e => e.ShipHistoryId).HasColumnName("ship_history_id");

                entity.Property(e => e.Breadth).HasColumnName("breadth");

                entity.Property(e => e.CallSign).HasColumnName("call_sign");

                entity.Property(e => e.DeadweightTonnage).HasColumnName("deadweight_tonnage");

                entity.Property(e => e.Draught).HasColumnName("draught");

                entity.Property(e => e.GrossTonnage).HasColumnName("gross_tonnage");

                entity.Property(e => e.HasSideThrusters).HasColumnName("has_side_thrusters");

                entity.Property(e => e.HasSideThrustersBack).HasColumnName("has_side_thrusters_back");

                entity.Property(e => e.HasSideThurstersFront).HasColumnName("has_side_thursters_front");

                entity.Property(e => e.Height).HasColumnName("height");

                entity.Property(e => e.ImoNo).HasColumnName("imo_no");

                entity.Property(e => e.IsVerified).HasColumnName("is_verified");

                entity.Property(e => e.Length).HasColumnName("length");

                entity.Property(e => e.MmsiNo).HasColumnName("mmsi_no");

                entity.Property(e => e.Name)

                    .HasColumnName("name");

                entity.Property(e => e.OrganizationId).HasColumnName("organization_id");

                entity.Property(e => e.Power).HasColumnName("power");

                entity.Property(e => e.Remark).HasColumnName("remark");

                entity.Property(e => e.ShipBreadthTypeId).HasColumnName("ship_breadth_type_id");

                entity.Property(e => e.ShipFlagCodeId).HasColumnName("ship_flag_code_id");

                entity.Property(e => e.ShipHullTypeId).HasColumnName("ship_hull_type_id");

                entity.Property(e => e.ShipId).HasColumnName("ship_id");

                entity.Property(e => e.ShipLengthTypeId).HasColumnName("ship_length_type_id");

                entity.Property(e => e.ShipPowerTypeId).HasColumnName("ship_power_type_id");

                entity.Property(e => e.ShipSourceId).HasColumnName("ship_source_id");

                entity.Property(e => e.ShipStatusId).HasColumnName("ship_status_id");

                entity.Property(e => e.ShipTypeId).HasColumnName("ship_type_id");

                entity.Property(e => e.ValidFromDate).HasColumnName("valid_from_date");

                entity.Property(e => e.ValidToDate).HasColumnName("valid_to_date");

                entity.Property(e => e.YearOfBuild).HasColumnName("year_of_build");

                entity.HasOne(d => d.Ship)
                    .WithMany(p => p.ShipHistory);
            });

            modelBuilder.Entity<ShipHullType>(entity =>
            {
                entity.ToTable("ship_hull_type");

                entity.Property(e => e.ShipHullTypeId).HasColumnName("ship_hull_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)

                    .HasColumnName("name");
            });

            modelBuilder.Entity<ShipLengthType>(entity =>
            {
                entity.ToTable("ship_length_type");

                entity.Property(e => e.ShipLengthTypeId).HasColumnName("ship_length_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)

                    .HasColumnName("name");
            });

            modelBuilder.Entity<ShipMmsiMidCode>(entity =>
            {
                entity.ToTable("ship_mmsi_mid_code");


                entity.Property(e => e.ShipMmsiMidCodeId).HasColumnName("ship_mmsi_mid_code_id");

                entity.Property(e => e.CountryId).HasColumnName("country_id");

                entity.Property(e => e.MidCode).HasColumnName("mid_code");

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.ShipMmsiMidCode);
            });

            modelBuilder.Entity<ShipPowerType>(entity =>
            {
                entity.ToTable("ship_power_type");

                entity.Property(e => e.ShipPowerTypeId).HasColumnName("ship_power_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)

                    .HasColumnName("name");
            });

            modelBuilder.Entity<ShipSource>(entity =>
            {
                entity.ToTable("ship_source");

                entity.Property(e => e.ShipSourceId).HasColumnName("ship_source_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)

                    .HasColumnName("name");
            });

            modelBuilder.Entity<ShipStatus>(entity =>
            {
                entity.ToTable("ship_status");

                entity.Property(e => e.ShipStatusId)
                    .HasColumnName("ship_status_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)

                    .HasColumnName("name");
            });

            modelBuilder.Entity<ShipType>(entity =>
            {
                entity.ToTable("ship_type");


                entity.Property(e => e.ShipTypeId).HasColumnName("ship_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name).HasColumnName("name");

                entity.Property(e => e.ShipTypeGroupId).HasColumnName("ship_type_group_id");

                entity.HasOne(d => d.ShipTypeGroup)
                    .WithMany(p => p.ShipType);
            });

            modelBuilder.Entity<ShipTypeGroup>(entity =>
            {
                entity.ToTable("ship_type_group");

                entity.Property(e => e.ShipTypeGroupId).HasColumnName("ship_type_group_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)

                    .HasColumnName("name");

                entity.Property(e => e.ShipTypeGroupCode).HasColumnName("ship_type_group_code");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("user");



                entity.Property(e => e.UserId)
                    .HasColumnName("user_id");

                entity.Property(e => e.AccessFailedCount).HasColumnName("access_failed_count");

                entity.Property(e => e.ConcurrencyStamp).HasColumnName("concurrency_stamp");

                entity.Property(e => e.Email).HasColumnName("email");

                entity.Property(e => e.EmailConfirmed).HasColumnName("email_confirmed");

                entity.Property(e => e.LockoutEnabled).HasColumnName("lockout_enabled");

                entity.Property(e => e.LockoutEnd).HasColumnName("lockout_end");

                entity.Property(e => e.NormalizedEmail).HasColumnName("normalized_email");

                entity.Property(e => e.OrganizationId).HasColumnName("organization_id");

                entity.Property(e => e.PasswordId).HasColumnName("password_id");

                entity.Property(e => e.PersonId).HasColumnName("person_id");

                entity.Property(e => e.PhoneNumber).HasColumnName("phone_number");

                entity.Property(e => e.PhoneNumberConfirmed).HasColumnName("phone_number_confirmed");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.SecurityStamp).HasColumnName("security_stamp");

                entity.Property(e => e.TwoFactorEnabled).HasColumnName("two_factor_enabled");

                entity.HasOne(d => d.Organization)
                    .WithMany(p => p.User);

                entity.HasOne(d => d.Password)
                    .WithMany(p => p.User);

                entity.HasOne(d => d.Person)
                    .WithMany(p => p.User);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.User);
            });

            modelBuilder.Entity<UserLogin>(entity =>
            {
                entity.ToTable("user_login");



                entity.Property(e => e.UserLoginId)
                    .HasColumnName("user_login_id");

                entity.Property(e => e.Discriminator).HasColumnName("discriminator");

                entity.Property(e => e.LoginProvider).HasColumnName("login_provider");

                entity.Property(e => e.ProviderDisplayName).HasColumnName("provider_display_name");

                entity.Property(e => e.ProviderKey).HasColumnName("provider_key");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserLogin);
            });

            modelBuilder.Entity<UserToken>(entity =>
            {
                entity.ToTable("user_token");



                entity.Property(e => e.UserTokenId)
                    .HasColumnName("user_token_id");

                entity.Property(e => e.Discriminator).HasColumnName("discriminator");

                entity.Property(e => e.LoginProvider).HasColumnName("login_provider");

                entity.Property(e => e.Name).HasColumnName("name");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.Value).HasColumnName("value");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserToken);
            });
        }

        // Stolen from https://damienbod.com/2016/01/11/asp-net-5-with-postgresql-and-entity-framework-7/ :
        public override int SaveChanges()
        {
            ChangeTracker.DetectChanges();
            return base.SaveChanges();
        }

        public override EntityEntry<TEntity> Update<TEntity>(TEntity entity)
        {
            return base.Update(entity);
        }

        public override void Dispose()
        {
            ChangeTracker.DetectChanges();
            base.Dispose();
        }
    }
}
