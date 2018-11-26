using Microsoft.EntityFrameworkCore;
using IMOMaritimeSingleWindow.Models;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Data;
using System.Data.Common;

namespace IMOMaritimeSingleWindow.Data
{
    public class open_ssnContext : DbContext, IDbContext
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

        public open_ssnContext(DbContextOptions<open_ssnContext> options) : base(options) { }
        // for testing:
        public open_ssnContext() { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CargoItem>(entity =>
            {
                entity.ToTable("cargo_item");

                entity.Property(e => e.CargoItemId).HasColumnName("cargo_item_id");

                entity.Property(e => e.ConsignmentId).HasColumnName("consignment_id");

                entity.Property(e => e.ContainerIdentification).HasColumnName("container_identification");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.GrossVolume)
                    .HasColumnName("gross_volume")
                    .HasColumnType("numeric(16, 6)");

                entity.Property(e => e.GrossWeight)
                    .HasColumnName("gross_weight")
                    .HasColumnType("numeric(16, 6)");

                entity.Property(e => e.HsCode).HasColumnName("hs_code");

                entity.Property(e => e.NumberOfPackages).HasColumnName("number_of_packages");

                entity.Property(e => e.PackageTypeId).HasColumnName("package_type_id");

                entity.Property(e => e.ShippingMarks).HasColumnName("shipping_marks");

                entity.HasOne(d => d.Consignment)
                    .WithMany(p => p.CargoItem)
                    .HasForeignKey(d => d.ConsignmentId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_cargo_item_consignment_id");

                entity.HasOne(d => d.PackageType)
                    .WithMany(p => p.CargoItem)
                    .HasForeignKey(d => d.PackageTypeId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_cargo_item_package_type_id");
            });

            modelBuilder.Entity<CertificateOfRegistry>(entity =>
            {
                entity.ToTable("certificate_of_registry");

                entity.HasIndex(e => e.PortLocationId)
                    .HasName("fki_certificate_of_registry_port_location_id_fkey");

                entity.Property(e => e.CertificateOfRegistryId).HasColumnName("certificate_of_registry_id");

                entity.Property(e => e.CertificateNumber).HasColumnName("certificate_number");

                entity.Property(e => e.DateOfIssue).HasColumnName("date_of_issue");

                entity.Property(e => e.OwnerName).HasColumnName("owner_name");

                entity.Property(e => e.PortLocationId).HasColumnName("port_location_id");

                entity.HasOne(d => d.PortLocation)
                    .WithMany(p => p.CertificateOfRegistry)
                    .HasForeignKey(d => d.PortLocationId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("certificate_of_registry_port_location_id_fkey");
            });

            modelBuilder.Entity<Claim>(entity =>
            {
                entity.ToTable("claim");

                entity.Property(e => e.ClaimId)
                    .HasColumnName("claim_id")
                    ;

                entity.Property(e => e.ClaimTypeId).HasColumnName("claim_type_id");

                entity.Property(e => e.ClaimValue).HasColumnName("claim_value");

                entity.Property(e => e.Discriminator).HasColumnName("discriminator");

                entity.HasOne(d => d.ClaimType)
                    .WithMany(p => p.Claim)
                    .HasForeignKey(d => d.ClaimTypeId)
                    .HasConstraintName("FK_claim_claim_type_id");
            });

            modelBuilder.Entity<ClaimType>(entity =>
            {
                entity.ToTable("claim_type");

                entity.Property(e => e.ClaimTypeId)
                    .HasColumnName("claim_type_id")
                    ;

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name).HasColumnName("name");
            });

            modelBuilder.Entity<CompanySecurityOfficer>(entity =>
            {
                entity.ToTable("company_security_officer");

                entity.HasIndex(e => e.OrganizationId)
                    .HasName("fki_FK_company_security_officer_organization_id");

                entity.Property(e => e.CompanySecurityOfficerId).HasColumnName("company_security_officer_id");

                entity.Property(e => e.Email).HasColumnName("email");

                entity.Property(e => e.GivenName).HasColumnName("given_name");

                entity.Property(e => e.OrganizationId).HasColumnName("organization_id");

                entity.Property(e => e.PhoneNumber).HasColumnName("phone_number");

                entity.Property(e => e.Surname).HasColumnName("surname");

                entity.HasOne(d => d.Organization)
                    .WithMany(p => p.CompanySecurityOfficer)
                    .HasForeignKey(d => d.OrganizationId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_company_security_officer_organization_id");
            });

            modelBuilder.Entity<Consignment>(entity =>
            {
                entity.ToTable("consignment");

                entity.HasIndex(e => e.PortOfDischargeId)
                    .HasName("fki_FK_consignment_port_of_discharge_id");

                entity.HasIndex(e => e.PortOfLoadingId)
                    .HasName("fki_FK_consignment_port_of_loading_id");

                entity.Property(e => e.ConsignmentId).HasColumnName("consignment_id");

                entity.Property(e => e.Name).HasColumnName("name");

                entity.Property(e => e.PortCallId).HasColumnName("port_call_id");

                entity.Property(e => e.PortOfDischargeId).HasColumnName("port_of_discharge_id");

                entity.Property(e => e.PortOfLoadingId).HasColumnName("port_of_loading_id");

                entity.Property(e => e.Remark).HasColumnName("remark");

                entity.HasOne(d => d.PortCall)
                    .WithMany(p => p.Consignment)
                    .HasForeignKey(d => d.PortCallId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_consignment_port_call_id");

                entity.HasOne(d => d.PortOfDischarge)
                    .WithMany(p => p.ConsignmentPortOfDischarge)
                    .HasForeignKey(d => d.PortOfDischargeId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_consignment_port_of_discharge_id");

                entity.HasOne(d => d.PortOfLoading)
                    .WithMany(p => p.ConsignmentPortOfLoading)
                    .HasForeignKey(d => d.PortOfLoadingId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_consignment_port_of_loading_id");
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
                    .IsRequired()
                    .HasColumnName("name");

                entity.Property(e => e.ThreeCharCode)
                    .IsRequired()
                    .HasColumnName("three_char_code");

                entity.Property(e => e.TwoCharCode)
                    .IsRequired()
                    .HasColumnName("two_char_code");
            });

            modelBuilder.Entity<County>(entity =>
            {
                entity.ToTable("county");

                entity.HasIndex(e => e.CountryId)
                    .HasName("ifk_rel_07");

                entity.Property(e => e.CountyId).HasColumnName("county_id");

                entity.Property(e => e.CountryId).HasColumnName("country_id");

                entity.Property(e => e.CountyNo)
                    .IsRequired()
                    .HasColumnName("county_no");

                entity.Property(e => e.Geometry).HasColumnName("geometry");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.County)
                    .HasForeignKey(d => d.CountryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("county_country_id_fkey");
            });

            modelBuilder.Entity<CustomsCargo>(entity =>
            {
                entity.ToTable("customs_cargo");

                entity.HasIndex(e => e.CustomsCargoTypeId)
                    .HasName("ifk_rel_44_2");

                entity.HasIndex(e => e.PortCallId)
                    .HasName("ifk_rel_45");

                entity.Property(e => e.CustomsCargoId).HasColumnName("customs_cargo_id");

                entity.Property(e => e.CargoHandlingAgent).HasColumnName("cargo_handling_agent");

                entity.Property(e => e.CustomsCargoTypeId).HasColumnName("customs_cargo_type_id");

                entity.Property(e => e.LocationInPort).HasColumnName("location_in_port");

                entity.Property(e => e.PortCallId).HasColumnName("port_call_id");

                entity.Property(e => e.Remark).HasColumnName("remark");

                entity.HasOne(d => d.CustomsCargoType)
                    .WithMany(p => p.CustomsCargo)
                    .HasForeignKey(d => d.CustomsCargoTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("customs_cargo_customs_cargo_type_id_fkey");

                entity.HasOne(d => d.PortCall)
                    .WithMany(p => p.CustomsCargo)
                    .HasForeignKey(d => d.PortCallId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("customs_cargo_port_call_id_fkey");
            });

            modelBuilder.Entity<CustomsCargoType>(entity =>
            {
                entity.ToTable("customs_cargo_type");

                entity.Property(e => e.CustomsCargoTypeId).HasColumnName("customs_cargo_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.ToTable("department");

                entity.HasIndex(e => e.LocationId)
                    .HasName("ifk_rel_06");

                entity.Property(e => e.DepartmentId).HasColumnName("department_id");

                entity.Property(e => e.DepartmentNo).HasColumnName("department_no");

                entity.Property(e => e.IsActive).HasColumnName("is_active");

                entity.Property(e => e.LocationId).HasColumnName("location_id");

                entity.Property(e => e.ShortName).HasColumnName("short_name");

                entity.HasOne(d => d.Location)
                    .WithMany(p => p.Department)
                    .HasForeignKey(d => d.LocationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("department_location_id_fkey");
            });

            modelBuilder.Entity<Dpg>(entity =>
            {
                entity.ToTable("dpg");

                entity.HasIndex(e => e.DpgTypeId)
                    .HasName("ifk_rel_41_2");

                entity.HasIndex(e => e.ImoHazardClassId)
                    .HasName("ifk_rel_42_2");

                entity.HasIndex(e => e.MarpolCategoryId)
                    .HasName("ifk_rel_43_2");

                entity.Property(e => e.DpgId).HasColumnName("dpg_id");

                entity.Property(e => e.DpgTypeId).HasColumnName("dpg_type_id");

                entity.Property(e => e.FlashPoint)
                    .HasColumnName("flash_point")
                    .HasColumnType("numeric(6, 2)");

                entity.Property(e => e.ImoHazardClassId).HasColumnName("imo_hazard_class_id");

                entity.Property(e => e.MarpolCategoryId).HasColumnName("marpol_category_id");

                entity.Property(e => e.MarpolOilType).HasColumnName("marpol_oil_type");

                entity.Property(e => e.PackingGroup).HasColumnName("packing_group");

                entity.Property(e => e.TextualReference).HasColumnName("textual_reference");

                entity.Property(e => e.UnNumber).HasColumnName("un_number");

                entity.HasOne(d => d.DpgType)
                    .WithMany(p => p.Dpg)
                    .HasForeignKey(d => d.DpgTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("dpg_dpg_type_id_fkey");

                entity.HasOne(d => d.ImoHazardClass)
                    .WithMany(p => p.Dpg)
                    .HasForeignKey(d => d.ImoHazardClassId)
                    .HasConstraintName("dpg_imo_hazard_class_id_fkey");

                entity.HasOne(d => d.MarpolCategory)
                    .WithMany(p => p.Dpg)
                    .HasForeignKey(d => d.MarpolCategoryId)
                    .HasConstraintName("dpg_marpol_category_id_fkey");
            });

            modelBuilder.Entity<DpgOnBoard>(entity =>
            {
                entity.ToTable("dpg_on_board");

                entity.HasIndex(e => e.DpgId)
                    .HasName("ifk_rel_46");

                entity.HasIndex(e => e.PortCallId)
                    .HasName("ifk_rel_47");

                entity.Property(e => e.DpgOnBoardId).HasColumnName("dpg_on_board_id");

                entity.Property(e => e.DpgId).HasColumnName("dpg_id");

                entity.Property(e => e.GrossWeight)
                    .HasColumnName("gross_weight")
                    .HasColumnType("numeric(18, 4)");

                entity.Property(e => e.LocationOnBoard).HasColumnName("location_on_board");

                entity.Property(e => e.NetWeight)
                    .HasColumnName("net_weight")
                    .HasColumnType("numeric(18, 4)");

                entity.Property(e => e.PlacedInContainer).HasColumnName("placed_in_container");

                entity.Property(e => e.PortCallId).HasColumnName("port_call_id");

                entity.Property(e => e.TransportUnitIdentification).HasColumnName("transport_unit_identification");

                entity.HasOne(d => d.Dpg)
                    .WithMany(p => p.DpgOnBoard)
                    .HasForeignKey(d => d.DpgId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("dpg_on_board_dpg_id_fkey");

                entity.HasOne(d => d.PortCall)
                    .WithMany(p => p.DpgOnBoard)
                    .HasForeignKey(d => d.PortCallId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("dpg_on_board_port_call_id_fkey");

                entity.HasOne(d => d.MeasurementType)
                    .WithMany(p => p.DpgOnBoard)
                    .HasForeignKey(d => d.MeasurementTypeId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("dpg_on_board_measurement_type_id_fkey");

                entity.Property(e => e.MeasurementTypeId).HasColumnName("MeasurementTypeId");

                entity.HasIndex(e => e.MeasurementTypeId)
                    .HasName("dpg_on_board_measurement_type_id_fkey");

            });

            modelBuilder.Entity<DpgType>(entity =>
            {
                entity.ToTable("dpg_type");

                entity.Property(e => e.DpgTypeId).HasColumnName("dpg_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");

                entity.Property(e => e.ShortName)
                .IsRequired()
                .HasColumnName("ShortName");

            });

            modelBuilder.Entity<FalSecurity>(entity =>
            {
                entity.ToTable("fal_security");

                entity.HasIndex(e => e.CompanySecurityOfficerId)
                    .HasName("fki_FK_fal_security_company_security_officer_id");

                entity.HasIndex(e => e.PortCallId)
                    .HasName("fki_FK_fal_security_port_call_id");

                entity.HasIndex(e => e.SecurityLevelId)
                    .HasName("fki_FK_fal_security_security_level_id");

                entity.Property(e => e.FalSecurityId)
                    .HasColumnName("fal_security_id")
                    .HasDefaultValueSql("nextval('fal_security_id_seq'::regclass)");

                entity.Property(e => e.CompanySecurityOfficerId).HasColumnName("company_security_officer_id");

                entity.Property(e => e.OtherRelatedInfo).HasColumnName("other_related_info");

                entity.Property(e => e.PortCallId).HasColumnName("port_call_id");

                entity.Property(e => e.SecurityLevelId).HasColumnName("security_level_id");

                entity.Property(e => e.ShipHasValidSspOnBoard).HasColumnName("ship_has_valid_ssp_on_board");

                entity.HasOne(d => d.CompanySecurityOfficer)
                    .WithMany(p => p.FalSecurity)
                    .HasForeignKey(d => d.CompanySecurityOfficerId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_fal_security_company_security_officer_id");

                entity.HasOne(d => d.PortCall)
                    .WithMany(p => p.FalSecurity)
                    .HasForeignKey(d => d.PortCallId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_fal_security_port_call_id");

                entity.HasOne(d => d.SecurityLevel)
                    .WithMany(p => p.FalSecurity)
                    .HasForeignKey(d => d.SecurityLevelId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_fal_security_security_level_id");
            });

            modelBuilder.Entity<FalShipStores>(entity =>
            {
                entity.ToTable("fal_ship_stores");

                entity.HasIndex(e => e.MeasurementTypeId)
                    .HasName("fki_fal_ship_stores_measurement_type_id_fkey");

                entity.HasIndex(e => e.PortCallId)
                    .HasName("fki_fal_ship_stores_port_call_id_fkey");

                entity.Property(e => e.FalShipStoresId)
                .HasColumnName("fal_ship_stores_id");

                entity.Property(e => e.ArticleCode).HasColumnName("article_code");

                entity.Property(e => e.ArticleName).HasColumnName("article_name");

                entity.Property(e => e.LocationOnBoard).HasColumnName("location_on_board");

                entity.Property(e => e.LocationOnBoardCode).HasColumnName("location_on_board_code");

                entity.Property(e => e.MeasurementTypeId).HasColumnName("measurement_type_id");

                entity.Property(e => e.PortCallId).HasColumnName("port_call_id");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.Property(e => e.SequenceNumber).HasColumnName("sequence_number");

                entity.HasOne(d => d.MeasurementType)
                    .WithMany(p => p.FalShipStores)
                    .HasForeignKey(d => d.MeasurementTypeId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("fal_ship_stores_measurement_type_id_fkey");

                entity.HasOne(d => d.PortCall)
                    .WithMany(p => p.FalShipStores)
                    .HasForeignKey(d => d.PortCallId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("fal_ship_stores_port_call_id_fkey");
            });

            modelBuilder.Entity<Gender>(entity =>
            {
                entity.ToTable("gender");

                entity.Property(e => e.GenderId).HasColumnName("gender_id");

                entity.Property(e => e.Description).HasColumnName("description");
            });

            modelBuilder.Entity<IdentityDocument>(entity =>
            {
                entity.ToTable("identity_document");

                entity.Property(e => e.IdentityDocumentId)
                    .HasColumnName("identity_document_id")
                    .HasDefaultValueSql("nextval('identity_document_id_seq'::regclass)");

                entity.Property(e => e.IdentityDocumentExpiryDate)
                    .HasColumnName("identity_document_expiry_date")
                    .HasColumnType("date");

                entity.Property(e => e.IdentityDocumentIssueDate)
                    .HasColumnName("identity_document_issue_date")
                    .HasColumnType("date");

                entity.Property(e => e.IdentityDocumentNumber).HasColumnName("identity_document_number");

                entity.Property(e => e.IdentityDocumentTypeId).HasColumnName("identity_document_type_id");

                entity.Property(e => e.IssuingNationId).HasColumnName("issuing_nation_id");

                entity.Property(e => e.PersonOnBoardId).HasColumnName("person_on_board_id");

                entity.Property(e => e.VisaOrResidencePermitNumber).HasColumnName("visa_or_residence_permit_number");

                entity.HasOne(d => d.IdentityDocumentType)
                    .WithMany(p => p.IdentityDocument)
                    .HasForeignKey(d => d.IdentityDocumentTypeId)
                    .HasConstraintName("identity_document_identity_document_type_id_fkey");

                entity.HasOne(d => d.IssuingNation)
                    .WithMany(p => p.IdentityDocument)
                    .HasForeignKey(d => d.IssuingNationId)
                    .HasConstraintName("identity_document_issuing_nation_id_fkey");

                entity.HasOne(d => d.PersonOnBoard)
                    .WithMany(p => p.IdentityDocument)
                    .HasForeignKey(d => d.PersonOnBoardId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("identity_document_person_on_board_id_fkey");
            });

            modelBuilder.Entity<IdentityDocumentType>(entity =>
            {
                entity.ToTable("identity_document_type");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Description).HasColumnName("description");
            });

            modelBuilder.Entity<ImoHazardClass>(entity =>
            {
                entity.ToTable("imo_hazard_class");

                entity.HasIndex(e => e.ParentImoHazardClassId)
                    .HasName("ifk_rel_40_2");

                entity.Property(e => e.ImoHazardClassId).HasColumnName("imo_hazard_class_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name).HasColumnName("name");

                entity.Property(e => e.ParentImoHazardClassId).HasColumnName("parent_imo_hazard_class_id");

                entity.HasOne(d => d.ParentImoHazardClass)
                    .WithMany(p => p.InverseParentImoHazardClass)
                    .HasForeignKey(d => d.ParentImoHazardClassId)
                    .HasConstraintName("imo_hazard_class_parent_imo_hazard_class_id_fkey");
            });

            modelBuilder.Entity<InternationalShipSecurityCertificate>(entity =>
            {
                entity.HasKey(e => e.IsscId);

                entity.ToTable("international_ship_security_certificate");

                entity.HasIndex(e => e.GovernmentIssuerId)
                    .HasName("fki_FK_issc_government_issuer_id");

                entity.Property(e => e.IsscId)
                    .HasColumnName("issc_id")
                    .HasDefaultValueSql("nextval('issc_id_seq'::regclass)");

                entity.Property(e => e.CertificateNumber).HasColumnName("certificate_number");

                entity.Property(e => e.ExpiryDate)
                    .HasColumnName("expiry_date")
                    .HasColumnType("date");

                entity.Property(e => e.GovernmentIssuerId).HasColumnName("government_issuer_id");

                entity.Property(e => e.IssuedByGovernment)
                    .HasColumnName("issued_by_government")
                    .HasDefaultValueSql("true");

                entity.Property(e => e.RsoIssuerId).HasColumnName("rso_issuer_id");

                entity.HasOne(d => d.GovernmentIssuer)
                    .WithMany(p => p.InternationalShipSecurityCertificate)
                    .HasForeignKey(d => d.GovernmentIssuerId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_issc_government_issuer_id");

                entity.HasOne(d => d.RsoIssuer)
                    .WithMany(p => p.InternationalShipSecurityCertificate)
                    .HasForeignKey(d => d.RsoIssuerId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_issc_rso_issuer_id");
            });

            modelBuilder.Entity<Location>(entity =>
            {
                entity.ToTable("location");

                entity.HasIndex(e => e.CountryId)
                    .HasName("ifk_rel_11");

                entity.HasIndex(e => e.LocationSourceId)
                    .HasName("ifk_rel_12");

                entity.HasIndex(e => e.LocationTypeId)
                    .HasName("ifk_rel_13");

                entity.HasIndex(e => e.MunicipalityId)
                    .HasName("ifk_rel_10");

                entity.Property(e => e.LocationId).HasColumnName("location_id");

                entity.Property(e => e.CountryId).HasColumnName("country_id");

                entity.Property(e => e.LocationCode).HasColumnName("location_code");

                entity.Property(e => e.LocationNo).HasColumnName("location_no");

                entity.Property(e => e.LocationSourceId).HasColumnName("location_source_id");

                entity.Property(e => e.LocationTypeId).HasColumnName("location_type_id");

                entity.Property(e => e.MunicipalityId).HasColumnName("municipality_id");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");

                entity.Property(e => e.PostCode).HasColumnName("post_code");

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.Location)
                    .HasForeignKey(d => d.CountryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("location_country_id_fkey");

                entity.HasOne(d => d.LocationSource)
                    .WithMany(p => p.Location)
                    .HasForeignKey(d => d.LocationSourceId)
                    .HasConstraintName("location_location_source_id_fkey");

                entity.HasOne(d => d.LocationType)
                    .WithMany(p => p.Location)
                    .HasForeignKey(d => d.LocationTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("location_location_type_id_fkey");

                entity.HasOne(d => d.Municipality)
                    .WithMany(p => p.Location)
                    .HasForeignKey(d => d.MunicipalityId)
                    .HasConstraintName("location_municipality_id_fkey");
            });

            modelBuilder.Entity<LocationSource>(entity =>
            {
                entity.ToTable("location_source");

                entity.Property(e => e.LocationSourceId).HasColumnName("location_source_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");

                entity.Property(e => e.EnumValue).HasColumnName("EnumValue");
            });

            modelBuilder.Entity<LocationType>(entity =>
            {
                entity.ToTable("location_type");

                entity.Property(e => e.LocationTypeId).HasColumnName("location_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");
            });

            modelBuilder.Entity<MarpolCategory>(entity =>
            {
                entity.ToTable("marpol_category");

                entity.Property(e => e.MarpolCategoryId).HasColumnName("marpol_category_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");
            });

            modelBuilder.Entity<MeasurementType>(entity =>
            {
                entity.ToTable("measurement_type");

                entity.Property(e => e.MeasurementTypeId).HasColumnName("measurement_type_id");

                entity.Property(e => e.Name).HasColumnName("name");
            });

            modelBuilder.Entity<Municipality>(entity =>
            {
                entity.ToTable("municipality");

                entity.HasIndex(e => e.CountyId)
                    .HasName("ifk_rel_08");

                entity.Property(e => e.MunicipalityId)
                    .HasColumnName("municipality_id")
                    .HasDefaultValueSql("nextval('council_council_id_seq'::regclass)");

                entity.Property(e => e.CountyId).HasColumnName("county_id");

                entity.Property(e => e.MunicipalityNo)
                    .IsRequired()
                    .HasColumnName("municipality_no");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");

                entity.HasOne(d => d.County)
                    .WithMany(p => p.Municipality)
                    .HasForeignKey(d => d.CountyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("municipality_county_id_fkey");
            });

            modelBuilder.Entity<Organization>(entity =>
            {
                entity.ToTable("organization");

                entity.Property(e => e.OrganizationId).HasColumnName("organization_id");

                entity.Property(e => e.ClearanceIsFalseString)
                    .HasColumnName("clearance_is_false_string")
                    .HasDefaultValueSql("'Rejected.'::text");

                entity.Property(e => e.ClearanceIsNullString)
                    .HasColumnName("clearance_is_null_string")
                    .HasDefaultValueSql("'Not reviewed.'::text");

                entity.Property(e => e.ClearanceIsTrueString)
                    .HasColumnName("clearance_is_true_string")
                    .HasDefaultValueSql("'Cleared.'::text");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.ImoCompanyNumber).HasColumnName("imo_company_number");

                entity.Property(e => e.InvoiceReceiverNo).HasColumnName("invoice_receiver_no");

                entity.Property(e => e.IsActive).HasColumnName("is_active");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");

                entity.Property(e => e.OrganizationNo).HasColumnName("organization_no");

                entity.Property(e => e.OrganizationTypeId).HasColumnName("organization_type_id");

                entity.HasOne(d => d.OrganizationType)
                    .WithMany(p => p.Organization)
                    .HasForeignKey(d => d.OrganizationTypeId)
                    .HasConstraintName("organization_organization_type_id_fkey");
            });

            modelBuilder.Entity<OrganizationPortCall>(entity =>
            {
                entity.ToTable("organization_port_call");

                entity.HasIndex(e => e.ClearedByUserId)
                    .HasName("fki_FK_organization_port_call_cleared_by_user_id");

                entity.HasIndex(e => e.OrganizationId)
                    .HasName("fki_organization_port_call_organization_id_fkey");

                entity.HasIndex(e => e.PortCallId)
                    .HasName("fki_organization_port_call_port_call_id_fkey");

                entity.Property(e => e.OrganizationPortCallId).HasColumnName("organization_port_call_id");

                entity.Property(e => e.Cleared).HasColumnName("cleared");

                entity.Property(e => e.ClearedByUserId).HasColumnName("cleared_by_user_id");

                entity.Property(e => e.OrganizationId).HasColumnName("organization_id");

                entity.Property(e => e.PortCallId).HasColumnName("port_call_id");

                entity.Property(e => e.Remark).HasColumnName("remark");

                entity.HasOne(d => d.ClearedByUser)
                    .WithMany(p => p.OrganizationPortCall)
                    .HasForeignKey(d => d.ClearedByUserId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_organization_port_call_cleared_by_user_id");

                entity.HasOne(d => d.Organization)
                    .WithMany(p => p.OrganizationPortCall)
                    .HasForeignKey(d => d.OrganizationId)
                    .HasConstraintName("organization_port_call_organization_id_fkey");

                entity.HasOne(d => d.PortCall)
                    .WithMany(p => p.OrganizationPortCall)
                    .HasForeignKey(d => d.PortCallId)
                    .HasConstraintName("organization_port_call_port_call_id_fkey");
            });

            modelBuilder.Entity<OrganizationType>(entity =>
            {
                entity.ToTable("organization_type");

                entity.Property(e => e.OrganizationTypeId).HasColumnName("organization_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");

                entity.Property(e => e.EnumValue).HasColumnName("EnumValue");

            });

            modelBuilder.Entity<PackageType>(entity =>
            {
                entity.ToTable("package_type");

                entity.Property(e => e.PackageTypeId).HasColumnName("package_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name).HasColumnName("name");
            });

            modelBuilder.Entity<Password>(entity =>
            {
                entity.ToTable("password");

                entity.Property(e => e.PasswordId)
                    .HasColumnName("password_id")
                    ;

                entity.Property(e => e.Hash).HasColumnName("hash");
            });

            modelBuilder.Entity<Person>(entity =>
            {
                entity.ToTable("person");

                entity.Property(e => e.PersonId)
                    .HasColumnName("person_id")
                    ;

                entity.Property(e => e.CompanyEmail).HasColumnName("company_email");

                entity.Property(e => e.CompanyPhoneNumber).HasColumnName("company_phone_number");

                entity.Property(e => e.GivenName).HasColumnName("given_name");

                entity.Property(e => e.Surname).HasColumnName("surname");
            });

            modelBuilder.Entity<PersonOnBoard>(entity =>
            {
                entity.ToTable("person_on_board");

                entity.Property(e => e.PersonOnBoardId)
                    .HasColumnName("person_on_board_id")
                    .HasDefaultValueSql("nextval('person_on_board_id_seq'::regclass)");

                entity.Property(e => e.CountryOfBirthId).HasColumnName("country_of_birth_id");

                entity.Property(e => e.DateOfBirth)
                    .HasColumnName("date_of_birth")
                    .HasColumnType("date");

                entity.Property(e => e.FamilyName)
                    .IsRequired()
                    .HasColumnName("family_name");

                entity.Property(e => e.GenderId).HasColumnName("gender_id");

                entity.Property(e => e.GivenName).HasColumnName("given_name");

                entity.Property(e => e.InTransit).HasColumnName("in_transit");

                entity.Property(e => e.NationalityId).HasColumnName("nationality_id");

                entity.Property(e => e.OccupationCode).HasColumnName("occupation_code");

                entity.Property(e => e.OccupationName).HasColumnName("occupation_name");

                entity.Property(e => e.PersonOnBoardTypeId).HasColumnName("person_on_board_type_id");

                entity.Property(e => e.PlaceOfBirth).HasColumnName("place_of_birth");

                entity.Property(e => e.PortCallId).HasColumnName("port_call_id");

                entity.Property(e => e.PortOfDisembarkationId).HasColumnName("port_of_disembarkation_id");

                entity.Property(e => e.PortOfEmbarkationId).HasColumnName("port_of_embarkation_id");

                entity.Property(e => e.RankCode).HasColumnName("rank_code");

                entity.Property(e => e.RankName).HasColumnName("rank_name");

                entity.Property(e => e.RoleCode).HasColumnName("role_code");

                entity.Property(e => e.SequenceNumber).HasColumnName("sequence_number");

                entity.HasOne(d => d.CountryOfBirth)
                    .WithMany(p => p.PersonOnBoardCountryOfBirth)
                    .HasForeignKey(d => d.CountryOfBirthId)
                    .HasConstraintName("person_on_board_country_of_birth_id_fkey");

                entity.HasOne(d => d.Gender)
                    .WithMany(p => p.PersonOnBoard)
                    .HasForeignKey(d => d.GenderId)
                    .HasConstraintName("person_on_board_gender_id_fkey");

                entity.HasOne(d => d.Nationality)
                    .WithMany(p => p.PersonOnBoardNationality)
                    .HasForeignKey(d => d.NationalityId)
                    .HasConstraintName("person_on_board_nationality_id_fkey");

                entity.HasOne(d => d.PersonOnBoardType)
                    .WithMany(p => p.PersonOnBoard)
                    .HasForeignKey(d => d.PersonOnBoardTypeId)
                    .HasConstraintName("person_on_board_person_on_board_type_id_fkey");

                entity.HasOne(d => d.PortCall)
                    .WithMany(p => p.PersonOnBoard)
                    .HasForeignKey(d => d.PortCallId)
                    .HasConstraintName("person_on_board_port_call_id_fkey");

                entity.HasOne(d => d.PortOfDisembarkation)
                    .WithMany(p => p.PersonOnBoardPortOfDisembarkation)
                    .HasForeignKey(d => d.PortOfDisembarkationId)
                    .HasConstraintName("person_on_board_port_of_disembarkation_id_fkey");

                entity.HasOne(d => d.PortOfEmbarkation)
                    .WithMany(p => p.PersonOnBoardPortOfEmbarkation)
                    .HasForeignKey(d => d.PortOfEmbarkationId)
                    .HasConstraintName("person_on_board_port_of_embarkation_fkey");
            });

            modelBuilder.Entity<PersonOnBoardType>(entity =>
            {
                entity.ToTable("person_on_board_type");

                entity.Property(e => e.PersonOnBoardTypeId).HasColumnName("person_on_board_type_id");

                entity.Property(e => e.Name).HasColumnName("name");

                entity.Property(e => e.EnumValue).HasColumnName("EnumValue");
            });

            modelBuilder.Entity<PortCall>(entity =>
            {
                entity.ToTable("port_call");

                entity.HasIndex(e => e.LocationId)
                    .HasName("ifk_rel_44");

                entity.HasIndex(e => e.NextLocationId)
                    .HasName("ifk_rel_15");

                entity.HasIndex(e => e.PortCallStatusId)
                    .HasName("ifk_rel_02");

                entity.HasIndex(e => e.PreviousLocationId)
                    .HasName("ifk_rel_14");

                entity.HasIndex(e => e.ShipId)
                    .HasName("ifk_rel_32");

                entity.HasIndex(e => e.UserId)
                    .HasName("fki_FK_port_call_user_id");

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

                entity.Property(e => e.VoyageNumber).HasColumnName("voyage_number");

                entity.HasOne(d => d.Location)
                    .WithMany(p => p.PortCallLocation)
                    .HasForeignKey(d => d.LocationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("port_call_location_id_fkey");

                entity.HasOne(d => d.NextLocation)
                    .WithMany(p => p.PortCallNextLocation)
                    .HasForeignKey(d => d.NextLocationId)
                    .HasConstraintName("port_call_next_location_id_fkey");

                entity.HasOne(d => d.PortCallStatus)
                    .WithMany(p => p.PortCall)
                    .HasForeignKey(d => d.PortCallStatusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("port_call_port_call_status_id_fkey");

                entity.HasOne(d => d.PreviousLocation)
                    .WithMany(p => p.PortCallPreviousLocation)
                    .HasForeignKey(d => d.PreviousLocationId)
                    .HasConstraintName("port_call_previous_location_id_fkey");

                entity.HasOne(d => d.Ship)
                    .WithMany(p => p.PortCall)
                    .HasForeignKey(d => d.ShipId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("port_call_ship_id_fkey");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.PortCall)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_port_call_user_id");
            });

            modelBuilder.Entity<PortCallDetails>(entity =>
            {
                entity.ToTable("port_call_details");

                entity.HasIndex(e => e.PortCallId)
                    .HasName("ifk_rel_48");

                entity.Property(e => e.PortCallDetailsId).HasColumnName("port_call_details_id");

                entity.Property(e => e.ActualDraught).HasColumnName("actual_draught");

                entity.Property(e => e.AirDraught).HasColumnName("air_draught");

                entity.Property(e => e.CargoBriefDescription).HasColumnName("cargo_brief_description");

                entity.Property(e => e.NumberOfCrew).HasColumnName("number_of_crew");

                entity.Property(e => e.NumberOfPassengers).HasColumnName("number_of_passengers");

                entity.Property(e => e.PortCallId).HasColumnName("port_call_id");

                entity.Property(e => e.ReportingBunkers).HasColumnName("reporting_bunkers");

                entity.Property(e => e.ReportingCargo).HasColumnName("reporting_cargo");

                entity.Property(e => e.ReportingCrew).HasColumnName("reporting_crew");

                entity.Property(e => e.ReportingDpg).HasColumnName("reporting_dpg");

                entity.Property(e => e.ReportingPax).HasColumnName("reporting_pax");

                entity.Property(e => e.ReportingSecurity).HasColumnName("reporting_security");

                entity.Property(e => e.ReportingShipStores).HasColumnName("reporting_ship_stores");

                entity.Property(e => e.ReportingWaste).HasColumnName("reporting_waste");

                entity.HasOne(d => d.PortCall)
                    .WithMany(p => p.PortCallDetails)
                    .HasForeignKey(d => d.PortCallId)
                    .HasConstraintName("port_call_details_port_call_id_fkey");
            });

            modelBuilder.Entity<PortCallHasPortCallPurpose>(entity =>
            {
                entity.ToTable("port_call_has_port_call_purpose");

                entity.HasIndex(e => e.PortCallId)
                    .HasName("ifk_rel_04");

                entity.HasIndex(e => e.PortCallPurposeId)
                    .HasName("ifk_rel_05");

                entity.Property(e => e.PortCallHasPortCallPurposeId)
                    .HasColumnName("port_call_has_port_call_purpose_id")
                    .HasDefaultValueSql("nextval('port_call_has_port_call_purpo_port_call_has_port_call_purpo_seq'::regclass)");

                entity.Property(e => e.PortCallId).HasColumnName("port_call_id");

                entity.Property(e => e.PortCallPurposeId).HasColumnName("port_call_purpose_id");

                entity.Property(e => e.PurposeIfUnknown).HasColumnName("purpose_if_unknown");

                entity.HasOne(d => d.PortCall)
                    .WithMany(p => p.PortCallHasPortCallPurpose)
                    .HasForeignKey(d => d.PortCallId)
                    .HasConstraintName("port_call_has_port_call_purpose_port_call_id_fkey");

                entity.HasOne(d => d.PortCallPurpose)
                    .WithMany(p => p.PortCallHasPortCallPurpose)
                    .HasForeignKey(d => d.PortCallPurposeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("port_call_has_port_call_purpose_port_call_purpose_id_fkey");
            });

            modelBuilder.Entity<PortCallPurpose>(entity =>
            {
                entity.ToTable("port_call_purpose");

                entity.Property(e => e.PortCallPurposeId).HasColumnName("port_call_purpose_id");

                entity.Property(e => e.Name)
                    .IsRequired()
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
                    .HasColumnName("role_id")
                    ;

                entity.Property(e => e.ConcurrencyStamp).HasColumnName("concurrency_stamp");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name).HasColumnName("name");

                entity.Property(e => e.NormalizedName).HasColumnName("normalized_name");
            });

            modelBuilder.Entity<RoleClaim>(entity =>
            {
                entity.ToTable("role_claim");

                entity.HasIndex(e => e.ClaimId)
                    .HasName("fki_FK_role_claim_claim_id1");

                entity.HasIndex(e => e.RoleId)
                    .HasName("fki_FK_role_claim_role_id1");

                entity.HasIndex(e => new { e.RoleId, e.ClaimId })
                    .HasName("role_claim_unique1")
                    .IsUnique();

                entity.Property(e => e.RoleClaimId)
                    .HasColumnName("role_claim_id")
                    ;

                entity.Property(e => e.ClaimId).HasColumnName("claim_id");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.HasOne(d => d.Claim)
                    .WithMany(p => p.RoleClaim)
                    .HasForeignKey(d => d.ClaimId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_role_claim_claim_id1");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.RoleClaim)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_role_claim_role_id1");
            });

            modelBuilder.Entity<SecurityLevel>(entity =>
            {
                entity.ToTable("security_level");

                entity.Property(e => e.SecurityLevelId).HasColumnName("security_level_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name).HasColumnName("name");
            });

            modelBuilder.Entity<SecurityPreviousPortOfCall>(entity =>
            {
                entity.ToTable("security_previous_port_of_call");

                entity.HasIndex(e => e.LocationId)
                    .HasName("fki_FK_security_previous_port_of_call_location_id");

                entity.HasIndex(e => e.SecurityLevelId)
                    .HasName("fki_FK_security_previous_port_of_call_security_level_id");

                entity.HasIndex(e => e.FalSecurityId)
                    .HasName("fki_FK_security_previous_port_of_call_fal_security_id");

                entity.Property(e => e.SecurityPreviousPortOfCallId)
                    .HasColumnName("security_previous_port_of_call_id")
                    .HasDefaultValueSql("nextval('security_previous_port_of_cal_security_previous_port_of_cal_seq'::regclass)");

                entity.Property(e => e.AdditionalSecurityMeasures).HasColumnName("additional_security_measures");

                entity.Property(e => e.ArrivalDateTime).HasColumnName("arrival_datetime");

                entity.Property(e => e.DepartureDateTime).HasColumnName("departure_datetime");

                entity.Property(e => e.LocationId).HasColumnName("location_id");

                entity.Property(e => e.SecurityLevelId).HasColumnName("security_level_id");

                entity.Property(e => e.SequenceNumber).HasColumnName("sequence_number");

                entity.Property(e => e.FalSecurityId).HasColumnName("fal_security_id");


                entity.HasOne(d => d.Location)
                    .WithMany(p => p.SecurityPreviousPortOfCall)
                    .HasForeignKey(d => d.LocationId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_security_previous_port_of_call_location_id");

                entity.HasOne(d => d.SecurityLevel)
                    .WithMany(p => p.SecurityPreviousPortOfCall)
                    .HasForeignKey(d => d.SecurityLevelId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_security_previous_port_of_call_security_level_id");

                entity.HasOne(d => d.FalSecurity)
                    .WithMany(p => p.SecurityPreviousPortOfCall)
                    .HasForeignKey(d => d.FalSecurityId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_security_previous_port_of_call_fal_security_id");
            });

            modelBuilder.Entity<Ship>(entity =>
            {
                entity.ToTable("ship");

                entity.HasIndex(e => e.CertificateOfRegistryId)
                    .HasName("fki_FK_ship_certificate_of_registry_id");

                entity.HasIndex(e => e.IsscId)
                    .HasName("fki_FK_ship_issc_id");

                entity.HasIndex(e => e.OrganizationId)
                    .HasName("ifk_rel_22");

                entity.HasIndex(e => e.ShipBreadthTypeId)
                    .HasName("ifk_rel_29");

                entity.HasIndex(e => e.ShipFlagCodeId)
                    .HasName("ifk_rel_27");

                entity.HasIndex(e => e.ShipHullTypeId)
                    .HasName("ifk_rel_31");

                entity.HasIndex(e => e.ShipLengthTypeId)
                    .HasName("ifk_rel_28");

                entity.HasIndex(e => e.ShipPowerTypeId)
                    .HasName("ifk_rel_30");

                entity.HasIndex(e => e.ShipSourceId)
                    .HasName("ifk_rel_25");

                entity.HasIndex(e => e.ShipStatusId)
                    .HasName("ifk_rel_24");

                entity.HasIndex(e => e.ShipTypeId)
                    .HasName("ifk_rel_17");

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

                entity.Property(e => e.IsscId).HasColumnName("issc_id");

                entity.Property(e => e.Length).HasColumnName("length");

                entity.Property(e => e.MmsiNo).HasColumnName("mmsi_no");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");

                entity.Property(e => e.NetTonnage).HasColumnName("net_tonnage");

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
                    .WithMany(p => p.Ship)
                    .HasForeignKey(d => d.CertificateOfRegistryId)
                    .HasConstraintName("FK_ship_certificate_of_registry_id");

                entity.HasOne(d => d.Issc)
                    .WithMany(p => p.Ship)
                    .HasForeignKey(d => d.IsscId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_ship_issc_id");

                entity.HasOne(d => d.Organization)
                    .WithMany(p => p.Ship)
                    .HasForeignKey(d => d.OrganizationId)
                    .HasConstraintName("ship_company_id_fkey");

                entity.HasOne(d => d.ShipBreadthType)
                    .WithMany(p => p.Ship)
                    .HasForeignKey(d => d.ShipBreadthTypeId)
                    .HasConstraintName("ship_ship_breadth_type_id_fkey");

                entity.HasOne(d => d.ShipFlagCode)
                    .WithMany(p => p.Ship)
                    .HasForeignKey(d => d.ShipFlagCodeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ship_ship_flag_code_id_fkey");

                entity.HasOne(d => d.ShipHullType)
                    .WithMany(p => p.Ship)
                    .HasForeignKey(d => d.ShipHullTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ship_ship_hull_type_id_fkey");

                entity.HasOne(d => d.ShipLengthType)
                    .WithMany(p => p.Ship)
                    .HasForeignKey(d => d.ShipLengthTypeId)
                    .HasConstraintName("ship_ship_length_type_id_fkey");

                entity.HasOne(d => d.ShipPowerType)
                    .WithMany(p => p.Ship)
                    .HasForeignKey(d => d.ShipPowerTypeId)
                    .HasConstraintName("ship_ship_power_type_id_fkey");

                entity.HasOne(d => d.ShipSource)
                    .WithMany(p => p.Ship)
                    .HasForeignKey(d => d.ShipSourceId)
                    .HasConstraintName("ship_ship_source_id_fkey");

                entity.HasOne(d => d.ShipStatus)
                    .WithMany(p => p.Ship)
                    .HasForeignKey(d => d.ShipStatusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ship_ship_status_id_fkey");

                entity.HasOne(d => d.ShipType)
                    .WithMany(p => p.Ship)
                    .HasForeignKey(d => d.ShipTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ship_ship_type_id_fkey");
            });

            modelBuilder.Entity<ShipBreadthType>(entity =>
            {
                entity.ToTable("ship_breadth_type");

                entity.Property(e => e.ShipBreadthTypeId).HasColumnName("ship_breadth_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");
            });

            modelBuilder.Entity<ShipCertificate>(entity =>
            {
                entity.ToTable("ship_certificate");

                entity.HasIndex(e => e.CountryId)
                    .HasName("ifk_rel_34");

                entity.HasIndex(e => e.OrganizationId)
                    .HasName("ifk_rel_20");

                entity.HasIndex(e => e.ShipCertificateTypeId)
                    .HasName("ifk_rel_19");

                entity.HasIndex(e => e.ShipId)
                    .HasName("ifk_rel_21");

                entity.Property(e => e.ShipCertificateId).HasColumnName("ship_certificate_id");

                entity.Property(e => e.CountryId).HasColumnName("country_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.ExpireDate).HasColumnName("expire_date");

                entity.Property(e => e.IssueDate).HasColumnName("issue_date");

                entity.Property(e => e.OrganizationId).HasColumnName("organization_id");

                entity.Property(e => e.ShipCertificateTypeId).HasColumnName("ship_certificate_type_id");

                entity.Property(e => e.ShipId).HasColumnName("ship_id");

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.ShipCertificate)
                    .HasForeignKey(d => d.CountryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ship_certificate_country_id_fkey");

                entity.HasOne(d => d.Organization)
                    .WithMany(p => p.ShipCertificate)
                    .HasForeignKey(d => d.OrganizationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ship_certificate_company_id_fkey");

                entity.HasOne(d => d.ShipCertificateType)
                    .WithMany(p => p.ShipCertificate)
                    .HasForeignKey(d => d.ShipCertificateTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ship_certificate_ship_certificate_type_id_fkey");

                entity.HasOne(d => d.Ship)
                    .WithMany(p => p.ShipCertificate)
                    .HasForeignKey(d => d.ShipId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ship_certificate_ship_id_fkey");
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

                entity.HasIndex(e => e.ContactMediumId)
                    .HasName("ifk_rel_23");

                entity.HasIndex(e => e.ShipId)
                    .HasName("ifk_rel_26");

                entity.Property(e => e.ShipContactId).HasColumnName("ship_contact_id");

                entity.Property(e => e.Comments).HasColumnName("comments");

                entity.Property(e => e.ContactMediumId).HasColumnName("contact_medium_id");

                entity.Property(e => e.ContactValue).HasColumnName("contact_value");

                entity.Property(e => e.IsPreferred).HasColumnName("is_preferred");

                entity.Property(e => e.ShipId).HasColumnName("ship_id");

                entity.HasOne(d => d.ContactMedium)
                    .WithMany(p => p.ShipContact)
                    .HasForeignKey(d => d.ContactMediumId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ship_contact_contact_medium_id_fkey");

                entity.HasOne(d => d.Ship)
                    .WithMany(p => p.ShipContact)
                    .HasForeignKey(d => d.ShipId)
                    .HasConstraintName("ship_contact_ship_id_fkey");
            });

            modelBuilder.Entity<ShipFlagCode>(entity =>
            {
                entity.ToTable("ship_flag_code");

                entity.HasIndex(e => e.CountryId)
                    .HasName("ifk_rel_35");

                entity.Property(e => e.ShipFlagCodeId).HasColumnName("ship_flag_code_id");

                entity.Property(e => e.CountryId).HasColumnName("country_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.ShipFlagCode)
                    .HasForeignKey(d => d.CountryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ship_flag_code_country_id_fkey");
            });

            modelBuilder.Entity<ShipHistory>(entity =>
            {
                entity.ToTable("ship_history");

                entity.HasIndex(e => e.ShipId)
                    .HasName("ifk_rel_18");

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
                    .IsRequired()
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
                    .WithMany(p => p.ShipHistory)
                    .HasForeignKey(d => d.ShipId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ship_history_ship_id_fkey");
            });

            modelBuilder.Entity<ShipHullType>(entity =>
            {
                entity.ToTable("ship_hull_type");

                entity.Property(e => e.ShipHullTypeId).HasColumnName("ship_hull_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");
            });

            modelBuilder.Entity<ShipLengthType>(entity =>
            {
                entity.ToTable("ship_length_type");

                entity.Property(e => e.ShipLengthTypeId).HasColumnName("ship_length_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");
            });

            modelBuilder.Entity<ShipMmsiMidCode>(entity =>
            {
                entity.ToTable("ship_mmsi_mid_code");

                entity.HasIndex(e => e.CountryId)
                    .HasName("ifk_rel_33");

                entity.Property(e => e.ShipMmsiMidCodeId).HasColumnName("ship_mmsi_mid_code_id");

                entity.Property(e => e.CountryId).HasColumnName("country_id");

                entity.Property(e => e.MidCode).HasColumnName("mid_code");

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.ShipMmsiMidCode)
                    .HasForeignKey(d => d.CountryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ship_mmsi_mid_code_country_id_fkey");
            });

            modelBuilder.Entity<ShipPowerType>(entity =>
            {
                entity.ToTable("ship_power_type");

                entity.Property(e => e.ShipPowerTypeId).HasColumnName("ship_power_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");
            });

            modelBuilder.Entity<ShipSource>(entity =>
            {
                entity.ToTable("ship_source");

                entity.Property(e => e.ShipSourceId).HasColumnName("ship_source_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");
            });

            modelBuilder.Entity<ShipStatus>(entity =>
            {
                entity.ToTable("ship_status");

                entity.Property(e => e.ShipStatusId)
                    .HasColumnName("ship_status_id")
                    .HasDefaultValueSql("nextval('ship_status_id_seq'::regclass)");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");
            });

            modelBuilder.Entity<ShipToShipActivity>(entity =>
            {
                entity.ToTable("ship_to_ship_activity");

                entity.Property(e => e.ShipToShipActivityId).HasColumnName("ship_to_ship_activity_id");

                entity.Property(e => e.ActivityTypeId).HasColumnName("activity_type_id");

                entity.Property(e => e.FalSecurityId).HasColumnName("fal_security_id");

                entity.Property(e => e.FromDate).HasColumnName("from_date");

                entity.Property(e => e.Latitude).HasColumnName("latitude");

                entity.Property(e => e.LocationId).HasColumnName("location_id");

                entity.Property(e => e.Longitude).HasColumnName("longitude");

                entity.Property(e => e.ToDate).HasColumnName("to_date");

                entity.Property(e => e.SecurityMeasuresAppliedInLieu).HasColumnName("security_measures_applied_in_lieu");

                entity.HasOne(d => d.ActivityType)
                    .WithMany(p => p.ShipToShipActivity)
                    .HasForeignKey(d => d.ActivityTypeId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_ship_to_ship_activity_activity_type_id");

                entity.HasOne(d => d.FalSecurity)
                    .WithMany(p => p.ShipToShipActivity)
                    .HasForeignKey(d => d.FalSecurityId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_ship_to_ship_activity_fal_security_id");

                entity.HasOne(d => d.Location)
                    .WithMany(p => p.ShipToShipActivity)
                    .HasForeignKey(d => d.LocationId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_ship_to_ship_activity_location_id");
            });

            modelBuilder.Entity<ShipType>(entity =>
            {
                entity.ToTable("ship_type");

                entity.HasIndex(e => e.ShipTypeGroupId)
                    .HasName("ifk_rel_16");

                entity.Property(e => e.ShipTypeId).HasColumnName("ship_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name).HasColumnName("name");

                entity.Property(e => e.ShipTypeGroupId).HasColumnName("ship_type_group_id");

                entity.HasOne(d => d.ShipTypeGroup)
                    .WithMany(p => p.ShipType)
                    .HasForeignKey(d => d.ShipTypeGroupId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ship_type_ship_type_group_id_fkey");
            });

            modelBuilder.Entity<ShipTypeGroup>(entity =>
            {
                entity.ToTable("ship_type_group");

                entity.Property(e => e.ShipTypeGroupId).HasColumnName("ship_type_group_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");

                entity.Property(e => e.ShipTypeGroupCode).HasColumnName("ship_type_group_code");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("user");

                entity.HasIndex(e => e.OrganizationId)
                    .HasName("fki_FK_user_organization_organization_id1");

                entity.HasIndex(e => e.PasswordId)
                    .HasName("fki_FK_user_password_password_id1");

                entity.HasIndex(e => e.PersonId)
                    .HasName("fki_FK_user_person_person_id1");

                entity.HasIndex(e => e.RoleId)
                    .HasName("fki_FK_user_role_id");

                entity.Property(e => e.UserId)
                    .HasColumnName("user_id")
                    ;

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
                    .WithMany(p => p.User)
                    .HasForeignKey(d => d.OrganizationId)
                    .HasConstraintName("FK_user_organization_organization_id1");

                entity.HasOne(d => d.Password)
                    .WithMany(p => p.User)
                    .HasForeignKey(d => d.PasswordId)
                    .OnDelete(DeleteBehavior.SetNull);

                entity.HasOne(d => d.Person)
                    .WithMany(p => p.User)
                    .HasForeignKey(d => d.PersonId)
                    .OnDelete(DeleteBehavior.SetNull);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.User)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("FK_user_role_id");
            });

            modelBuilder.Entity<UserLogin>(entity =>
            {
                entity.ToTable("user_login");

                entity.HasIndex(e => e.UserId)
                    .HasName("fki_FK_user_login_user_id1");

                entity.Property(e => e.UserLoginId)
                    .HasColumnName("user_login_id")
                    ;

                entity.Property(e => e.Discriminator).HasColumnName("discriminator");

                entity.Property(e => e.LoginProvider).HasColumnName("login_provider");

                entity.Property(e => e.ProviderDisplayName).HasColumnName("provider_display_name");

                entity.Property(e => e.ProviderKey).HasColumnName("provider_key");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserLogin)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_user_login_user_id1");
            });

            modelBuilder.Entity<UserToken>(entity =>
            {
                entity.ToTable("user_token");

                entity.HasIndex(e => e.UserId)
                    .HasName("fki_FK_user_token_user_id1");

                entity.Property(e => e.UserTokenId)
                    .HasColumnName("user_token_id")
                    ;

                entity.Property(e => e.Discriminator).HasColumnName("discriminator");

                entity.Property(e => e.LoginProvider).HasColumnName("login_provider");

                entity.Property(e => e.Name).HasColumnName("name");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.Value).HasColumnName("value");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserToken)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_user_token_user_id1");
            });

            modelBuilder.HasSequence("claim_claim_id_seq").HasMax(2147483647);

            modelBuilder.HasSequence("council_council_id_seq")
                .HasMin(1)
                .HasMax(2147483647);

            modelBuilder.HasSequence("fal_security_id_seq");

            modelBuilder.HasSequence("identity_document_id_seq");

            modelBuilder.HasSequence("identity_document_type_id_seq").HasMax(2147483647);

            modelBuilder.HasSequence("issc_id_seq");

            modelBuilder.HasSequence("password_password_id_seq").HasMax(2147483647);

            modelBuilder.HasSequence("person_on_board_id_seq");

            modelBuilder.HasSequence("person_person_id_seq").HasMax(2147483647);

            modelBuilder.HasSequence("port_call_has_port_call_purpo_port_call_has_port_call_purpo_seq")
                .HasMin(1)
                .HasMax(2147483647);

            modelBuilder.HasSequence("role_role_id_seq").HasMax(2147483647);

            modelBuilder.HasSequence("security_previous_port_of_cal_security_previous_port_of_cal_seq");

            modelBuilder.HasSequence("ship_ship_id_seq")
                .StartsAt(359004)
                .HasMax(2147483647);

            modelBuilder.HasSequence("ship_status_id_seq").HasMin(101217);

            modelBuilder.HasSequence("ship_status_ship_status_id_seq")
                .HasMin(1)
                .HasMax(2147483647);

            modelBuilder.HasSequence("user_login_user_login_id_seq").HasMax(2147483647);

            modelBuilder.HasSequence("user_role_user_role_id_seq").HasMax(2147483647);

            modelBuilder.HasSequence("user_token_user_token_id_seq").HasMax(2147483647);

            modelBuilder.HasSequence("user_user_id_seq").HasMax(2147483647);

            modelBuilder.HasSequence("person_on_board_id_seq").HasMax(9223372036854775807).StartsAt(5);
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

        public DbConnection GetDbConnection()
        {
            return this.Database.GetDbConnection();
        }

        public ConnectionState GetState()
        {
            return this.Database.GetDbConnection().State;
        }
    }
}
