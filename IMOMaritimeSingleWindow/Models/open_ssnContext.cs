using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class open_ssnContext : DbContext
    {
        public virtual DbSet<Application> Application { get; set; }
        public virtual DbSet<ApplicationPerson> ApplicationPerson { get; set; }
        public virtual DbSet<ApplicationPersonHistory> ApplicationPersonHistory { get; set; }
        public virtual DbSet<ApplicationRight> ApplicationRight { get; set; }
        public virtual DbSet<Company> Company { get; set; }
        public virtual DbSet<ContactMedium> ContactMedium { get; set; }
        public virtual DbSet<Council> Council { get; set; }
        public virtual DbSet<Country> Country { get; set; }
        public virtual DbSet<County> County { get; set; }
        public virtual DbSet<Department> Department { get; set; }
        public virtual DbSet<Location> Location { get; set; }
        public virtual DbSet<LocationSource> LocationSource { get; set; }
        public virtual DbSet<LocationType> LocationType { get; set; }
        public virtual DbSet<Person> Person { get; set; }
        public virtual DbSet<PersonRole> PersonRole { get; set; }
        public virtual DbSet<PortCall> PortCall { get; set; }
        public virtual DbSet<PortCallHasPortCallPurpose> PortCallHasPortCallPurpose { get; set; }
        public virtual DbSet<PortCallHistory> PortCallHistory { get; set; }
        public virtual DbSet<PortCallPurpose> PortCallPurpose { get; set; }
        public virtual DbSet<PortCallStatus> PortCallStatus { get; set; }
        public virtual DbSet<Role> Role { get; set; }
        public virtual DbSet<RoleApplicationRight> RoleApplicationRight { get; set; }
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

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql(@"Server=trd09db;User Id=postgres;Password=Fundator01;Database=open_ssn");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Application>(entity =>
            {
                entity.ToTable("application");

                entity.Property(e => e.ApplicationId).HasColumnName("application_id");

                entity.Property(e => e.ApplicationName)
                    .IsRequired()
                    .HasColumnName("application_name")
                    .HasColumnType("varchar");

                entity.Property(e => e.IsPasswordRequired).HasColumnName("is_password_required");

                entity.Property(e => e.SystemName)
                    .IsRequired()
                    .HasColumnName("system_name")
                    .HasColumnType("varchar");
            });

            modelBuilder.Entity<ApplicationPerson>(entity =>
            {
                entity.ToTable("application_person");

                entity.HasIndex(e => e.ApplicationId)
                    .HasName("ifk_rel_38");

                entity.HasIndex(e => e.PersonId)
                    .HasName("ifk_rel_37");

                entity.Property(e => e.ApplicationPersonId).HasColumnName("application_person_id");

                entity.Property(e => e.ApplicationId).HasColumnName("application_id");

                entity.Property(e => e.PersonId).HasColumnName("person_id");

                entity.HasOne(d => d.Application)
                    .WithMany(p => p.ApplicationPerson)
                    .HasForeignKey(d => d.ApplicationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("application_person_application_id_fkey");

                entity.HasOne(d => d.Person)
                    .WithMany(p => p.ApplicationPerson)
                    .HasForeignKey(d => d.PersonId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("application_person_person_id_fkey");
            });

            modelBuilder.Entity<ApplicationPersonHistory>(entity =>
            {
                entity.ToTable("application_person_history");

                entity.HasIndex(e => e.ApplicationPersonId)
                    .HasName("ifk_rel_43");

                entity.Property(e => e.ApplicationPersonHistoryId).HasColumnName("application_person_history_id");

                entity.Property(e => e.ApplicationPersonId).HasColumnName("application_person_id");

                entity.HasOne(d => d.ApplicationPerson)
                    .WithMany(p => p.ApplicationPersonHistory)
                    .HasForeignKey(d => d.ApplicationPersonId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("application_person_history_application_person_id_fkey");
            });

            modelBuilder.Entity<ApplicationRight>(entity =>
            {
                entity.ToTable("application_right");

                entity.HasIndex(e => e.ApplicationId)
                    .HasName("ifk_rel_36");

                entity.Property(e => e.ApplicationRightId).HasColumnName("application_right_id");

                entity.Property(e => e.ApplicationId).HasColumnName("application_id");

                entity.Property(e => e.ApplicationRightName)
                    .IsRequired()
                    .HasColumnName("application_right_name");

                entity.Property(e => e.SystemName)
                    .IsRequired()
                    .HasColumnName("system_name");

                entity.HasOne(d => d.Application)
                    .WithMany(p => p.ApplicationRight)
                    .HasForeignKey(d => d.ApplicationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("application_right_application_id_fkey");
            });

            modelBuilder.Entity<Company>(entity =>
            {
                entity.ToTable("company");

                entity.Property(e => e.CompanyId).HasColumnName("company_id");
            });

            modelBuilder.Entity<ContactMedium>(entity =>
            {
                entity.ToTable("contact_medium");

                entity.Property(e => e.ContactMediumId).HasColumnName("contact_medium_id");
            });

            modelBuilder.Entity<Council>(entity =>
            {
                entity.ToTable("council");

                entity.HasIndex(e => e.CountyId)
                    .HasName("ifk_rel_08");

                entity.Property(e => e.CouncilId).HasColumnName("council_id");

                entity.Property(e => e.CouncilName)
                    .IsRequired()
                    .HasColumnName("council_name");

                entity.Property(e => e.CouncilNo)
                    .IsRequired()
                    .HasColumnName("council_no");

                entity.Property(e => e.CountyId).HasColumnName("county_id");

                entity.HasOne(d => d.County)
                    .WithMany(p => p.Council)
                    .HasForeignKey(d => d.CountyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("council_county_id_fkey");
            });

            modelBuilder.Entity<Country>(entity =>
            {
                entity.ToTable("country");

                entity.Property(e => e.CountryId).HasColumnName("country_id");

                entity.Property(e => e.CallCode).HasColumnName("call_code");

                entity.Property(e => e.Country1)
                    .IsRequired()
                    .HasColumnName("country");

                entity.Property(e => e.IsActive).HasColumnName("is_active");

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

                entity.Property(e => e.CountyGeometry).HasColumnName("county_geometry");

                entity.Property(e => e.CountyName)
                    .IsRequired()
                    .HasColumnName("county_name");

                entity.Property(e => e.CountyNo)
                    .IsRequired()
                    .HasColumnName("county_no");

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.County)
                    .HasForeignKey(d => d.CountryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("county_country_id_fkey");
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

            modelBuilder.Entity<Location>(entity =>
            {
                entity.ToTable("location");

                entity.HasIndex(e => e.CouncilId)
                    .HasName("ifk_rel_10");

                entity.HasIndex(e => e.CountryId)
                    .HasName("ifk_rel_11");

                entity.HasIndex(e => e.LocationInLocationId)
                    .HasName("ifk_rel_09");

                entity.HasIndex(e => e.LocationSourceId)
                    .HasName("ifk_rel_12");

                entity.HasIndex(e => e.LocationTypeId)
                    .HasName("ifk_rel_13");

                entity.Property(e => e.LocationId).HasColumnName("location_id");

                entity.Property(e => e.CouncilId).HasColumnName("council_id");

                entity.Property(e => e.CountryId).HasColumnName("country_id");

                entity.Property(e => e.LocationCode).HasColumnName("location_code");

                entity.Property(e => e.LocationInLocationId).HasColumnName("location_in_location_id");

                entity.Property(e => e.LocationName)
                    .IsRequired()
                    .HasColumnName("location_name");

                entity.Property(e => e.LocationNo).HasColumnName("location_no");

                entity.Property(e => e.LocationSourceId).HasColumnName("location_source_id");

                entity.Property(e => e.LocationTypeId).HasColumnName("location_type_id");

                entity.Property(e => e.PostCode).HasColumnName("post_code");

                entity.HasOne(d => d.Council)
                    .WithMany(p => p.Location)
                    .HasForeignKey(d => d.CouncilId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("location_council_id_fkey");

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.Location)
                    .HasForeignKey(d => d.CountryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("location_country_id_fkey");

                entity.HasOne(d => d.LocationInLocation)
                    .WithMany(p => p.InverseLocationInLocation)
                    .HasForeignKey(d => d.LocationInLocationId)
                    .HasConstraintName("location_location_in_location_id_fkey");

                entity.HasOne(d => d.LocationSource)
                    .WithMany(p => p.Location)
                    .HasForeignKey(d => d.LocationSourceId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("location_location_source_id_fkey");

                entity.HasOne(d => d.LocationType)
                    .WithMany(p => p.Location)
                    .HasForeignKey(d => d.LocationTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("location_location_type_id_fkey");
            });

            modelBuilder.Entity<LocationSource>(entity =>
            {
                entity.ToTable("location_source");

                entity.Property(e => e.LocationSourceId).HasColumnName("location_source_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.LocationSourceName)
                    .IsRequired()
                    .HasColumnName("location_source_name");

                entity.Property(e => e.SystemName)
                    .IsRequired()
                    .HasColumnName("system_name");
            });

            modelBuilder.Entity<LocationType>(entity =>
            {
                entity.ToTable("location_type");

                entity.Property(e => e.LocationTypeId).HasColumnName("location_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.LocationType1)
                    .IsRequired()
                    .HasColumnName("location_type");

                entity.Property(e => e.SystemName)
                    .IsRequired()
                    .HasColumnName("system_name");
            });

            modelBuilder.Entity<Person>(entity =>
            {
                entity.ToTable("person");

                entity.Property(e => e.PersonId).HasColumnName("person_id");

                entity.Property(e => e.FirstName).HasColumnName("first_name");

                entity.Property(e => e.LastName).HasColumnName("last_name");
            });

            modelBuilder.Entity<PersonRole>(entity =>
            {
                entity.ToTable("person_role");

                entity.HasIndex(e => e.PersonId)
                    .HasName("ifk_rel_39");

                entity.HasIndex(e => e.RoleId)
                    .HasName("ifk_rel_40");

                entity.Property(e => e.PersonRoleId).HasColumnName("person_role_id");

                entity.Property(e => e.PersonId).HasColumnName("person_id");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.HasOne(d => d.Person)
                    .WithMany(p => p.PersonRole)
                    .HasForeignKey(d => d.PersonId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("person_role_person_id_fkey");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.PersonRole)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("person_role_role_id_fkey");
            });

            modelBuilder.Entity<PortCall>(entity =>
            {
                entity.ToTable("port_call");

                entity.HasIndex(e => e.ArrivalLocationId)
                    .HasName("ifk_rel_15");

                entity.HasIndex(e => e.DepartureLocationId)
                    .HasName("ifk_rel_14");

                entity.HasIndex(e => e.PortCallStatusId)
                    .HasName("ifk_rel_02");

                entity.HasIndex(e => e.PreviousPortCallId)
                    .HasName("ifk_rel_03");

                entity.HasIndex(e => e.ShipId)
                    .HasName("ifk_rel_32");

                entity.Property(e => e.PortCallId).HasColumnName("port_call_id");

                entity.Property(e => e.ArrivalLocationEta).HasColumnName("arrival_location_eta");

                entity.Property(e => e.ArrivalLocationEtd).HasColumnName("arrival_location_etd");

                entity.Property(e => e.ArrivalLocationId).HasColumnName("arrival_location_id");

                entity.Property(e => e.ArrivalLocationTimeIsActual).HasColumnName("arrival_location_time_is_actual");

                entity.Property(e => e.DepartureLocationEtd).HasColumnName("departure_location_etd");

                entity.Property(e => e.DepartureLocationId).HasColumnName("departure_location_id");

                entity.Property(e => e.DepartureLocationTimeIsActual).HasColumnName("departure_location_time_is_actual");

                entity.Property(e => e.PortCallStatusId).HasColumnName("port_call_status_id");

                entity.Property(e => e.PreviousPortCallId).HasColumnName("previous_port_call_id");

                entity.Property(e => e.Remark).HasColumnName("remark");

                entity.Property(e => e.ShipId).HasColumnName("ship_id");

                entity.HasOne(d => d.ArrivalLocation)
                    .WithMany(p => p.PortCallArrivalLocation)
                    .HasForeignKey(d => d.ArrivalLocationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("port_call_arrival_location_id_fkey");

                entity.HasOne(d => d.DepartureLocation)
                    .WithMany(p => p.PortCallDepartureLocation)
                    .HasForeignKey(d => d.DepartureLocationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("port_call_departure_location_id_fkey");

                entity.HasOne(d => d.PortCallStatus)
                    .WithMany(p => p.PortCall)
                    .HasForeignKey(d => d.PortCallStatusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("port_call_port_call_status_id_fkey");

                entity.HasOne(d => d.PreviousPortCall)
                    .WithMany(p => p.InversePreviousPortCall)
                    .HasForeignKey(d => d.PreviousPortCallId)
                    .HasConstraintName("port_call_previous_port_call_id_fkey");

                entity.HasOne(d => d.Ship)
                    .WithMany(p => p.PortCall)
                    .HasForeignKey(d => d.ShipId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("port_call_ship_id_fkey");
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

                entity.HasOne(d => d.PortCall)
                    .WithMany(p => p.PortCallHasPortCallPurpose)
                    .HasForeignKey(d => d.PortCallId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("port_call_has_port_call_purpose_port_call_id_fkey");

                entity.HasOne(d => d.PortCallPurpose)
                    .WithMany(p => p.PortCallHasPortCallPurpose)
                    .HasForeignKey(d => d.PortCallPurposeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("port_call_has_port_call_purpose_port_call_purpose_id_fkey");
            });

            modelBuilder.Entity<PortCallHistory>(entity =>
            {
                entity.ToTable("port_call_history");

                entity.HasIndex(e => e.PortCallId)
                    .HasName("ifk_rel_01");

                entity.Property(e => e.PortCallHistoryId).HasColumnName("port_call_history_id");

                entity.Property(e => e.PortCallId).HasColumnName("port_call_id");

                entity.HasOne(d => d.PortCall)
                    .WithMany(p => p.PortCallHistory)
                    .HasForeignKey(d => d.PortCallId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("port_call_history_port_call_id_fkey");
            });

            modelBuilder.Entity<PortCallPurpose>(entity =>
            {
                entity.ToTable("port_call_purpose");

                entity.Property(e => e.PortCallPurposeId).HasColumnName("port_call_purpose_id");

                entity.Property(e => e.PortCallPurpose1)
                    .IsRequired()
                    .HasColumnName("port_call_purpose");

                entity.Property(e => e.SystemName).HasColumnName("system_name");
            });

            modelBuilder.Entity<PortCallStatus>(entity =>
            {
                entity.ToTable("port_call_status");

                entity.Property(e => e.PortCallStatusId).HasColumnName("port_call_status_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.SystemName).HasColumnName("system_name");

                entity.Property(e => e.VoyageStatus).HasColumnName("voyage_status");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("role");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.RoleName)
                    .IsRequired()
                    .HasColumnName("role_name");
            });

            modelBuilder.Entity<RoleApplicationRight>(entity =>
            {
                entity.ToTable("role_application_right");

                entity.HasIndex(e => e.ApplicationRightId)
                    .HasName("ifk_rel_42");

                entity.HasIndex(e => e.RoleId)
                    .HasName("ifk_rel_41");

                entity.Property(e => e.RoleApplicationRightId).HasColumnName("role_application_right_id");

                entity.Property(e => e.ApplicationRightId).HasColumnName("application_right_id");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.HasOne(d => d.ApplicationRight)
                    .WithMany(p => p.RoleApplicationRight)
                    .HasForeignKey(d => d.ApplicationRightId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("role_application_right_application_right_id_fkey");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.RoleApplicationRight)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("role_application_right_role_id_fkey");
            });

            modelBuilder.Entity<Ship>(entity =>
            {
                entity.ToTable("ship");

                entity.HasIndex(e => e.CompanyId)
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

                entity.Property(e => e.ShipId)
                    .HasColumnName("ship_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.Breadth).HasColumnName("breadth");

                entity.Property(e => e.CallSign)
                    .IsRequired()
                    .HasColumnName("call_sign");

                entity.Property(e => e.CompanyId).HasColumnName("company_id");

                entity.Property(e => e.DeadweightTonnage).HasColumnName("deadweight_tonnage");

                entity.Property(e => e.Draught).HasColumnName("draught");

                entity.Property(e => e.GrossTonnage).HasColumnName("gross_tonnage");

                entity.Property(e => e.HasSideThrusters).HasColumnName("has_side_thrusters");

                entity.Property(e => e.HasSideThrustersBack).HasColumnName("has_side_thrusters_back");

                entity.Property(e => e.HasSideThurstersFront).HasColumnName("has_side_thursters_front");

                entity.Property(e => e.Height).HasColumnName("height");

                entity.Property(e => e.ImoNo).HasColumnName("imo_no");

                entity.Property(e => e.MmsiNo).HasColumnName("mmsi_no");

                entity.Property(e => e.Power).HasColumnName("power");

                entity.Property(e => e.Remark).HasColumnName("remark");

                entity.Property(e => e.ShipBreadthTypeId).HasColumnName("ship_breadth_type_id");

                entity.Property(e => e.ShipFlagCodeId).HasColumnName("ship_flag_code_id");

                entity.Property(e => e.ShipHullTypeId).HasColumnName("ship_hull_type_id");

                entity.Property(e => e.ShipLength).HasColumnName("ship_length");

                entity.Property(e => e.ShipLengthTypeId).HasColumnName("ship_length_type_id");

                entity.Property(e => e.ShipName)
                    .IsRequired()
                    .HasColumnName("ship_name");

                entity.Property(e => e.ShipPowerTypeId).HasColumnName("ship_power_type_id");

                entity.Property(e => e.ShipSourceId).HasColumnName("ship_source_id");

                entity.Property(e => e.ShipStatusId).HasColumnName("ship_status_id");

                entity.Property(e => e.ShipTypeId).HasColumnName("ship_type_id");

                entity.Property(e => e.YearOfBuild).HasColumnName("year_of_build");

                entity.HasOne(d => d.Company)
                    .WithMany(p => p.Ship)
                    .HasForeignKey(d => d.CompanyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ship_company_id_fkey");

                entity.HasOne(d => d.ShipBreadthType)
                    .WithMany(p => p.Ship)
                    .HasForeignKey(d => d.ShipBreadthTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
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
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ship_ship_length_type_id_fkey");

                entity.HasOne(d => d.ShipPowerType)
                    .WithMany(p => p.Ship)
                    .HasForeignKey(d => d.ShipPowerTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ship_ship_power_type_id_fkey");

                entity.HasOne(d => d.ShipSource)
                    .WithMany(p => p.Ship)
                    .HasForeignKey(d => d.ShipSourceId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
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

                entity.Property(e => e.ShipBreadthType1)
                    .IsRequired()
                    .HasColumnName("ship_breadth_type");

                entity.Property(e => e.SystemName)
                    .IsRequired()
                    .HasColumnName("system_name");
            });

            modelBuilder.Entity<ShipCertificate>(entity =>
            {
                entity.ToTable("ship_certificate");

                entity.HasIndex(e => e.CompanyId)
                    .HasName("ifk_rel_20");

                entity.HasIndex(e => e.CountryId)
                    .HasName("ifk_rel_34");

                entity.HasIndex(e => e.ShipCertificateTypeId)
                    .HasName("ifk_rel_19");

                entity.HasIndex(e => e.ShipId)
                    .HasName("ifk_rel_21");

                entity.Property(e => e.ShipCertificateId).HasColumnName("ship_certificate_id");

                entity.Property(e => e.CompanyId).HasColumnName("company_id");

                entity.Property(e => e.CountryId).HasColumnName("country_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.ExpireDate).HasColumnName("expire_date");

                entity.Property(e => e.IssueDate).HasColumnName("issue_date");

                entity.Property(e => e.ShipCertificateTypeId).HasColumnName("ship_certificate_type_id");

                entity.Property(e => e.ShipId).HasColumnName("ship_id");

                entity.HasOne(d => d.Company)
                    .WithMany(p => p.ShipCertificate)
                    .HasForeignKey(d => d.CompanyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ship_certificate_company_id_fkey");

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.ShipCertificate)
                    .HasForeignKey(d => d.CountryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ship_certificate_country_id_fkey");

                entity.HasOne(d => d.ShipCertificateType)
                    .WithMany(p => p.ShipCertificateNavigation)
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

                entity.Property(e => e.ShipCertificate).HasColumnName("ship_certificate");
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
                    .OnDelete(DeleteBehavior.ClientSetNull)
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

                entity.Property(e => e.ShipFlagCode1)
                    .IsRequired()
                    .HasColumnName("ship_flag_code");

                entity.Property(e => e.SystemName)
                    .IsRequired()
                    .HasColumnName("system_name");

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

                entity.Property(e => e.CompanyId).HasColumnName("company_id");

                entity.Property(e => e.DeadweightTonnage).HasColumnName("deadweight_tonnage");

                entity.Property(e => e.Draught).HasColumnName("draught");

                entity.Property(e => e.GrossTonnage).HasColumnName("gross_tonnage");

                entity.Property(e => e.HasSideThrusters).HasColumnName("has_side_thrusters");

                entity.Property(e => e.HasSideThrustersBack).HasColumnName("has_side_thrusters_back");

                entity.Property(e => e.HasSideThurstersFront).HasColumnName("has_side_thursters_front");

                entity.Property(e => e.Height).HasColumnName("height");

                entity.Property(e => e.ImoNo).HasColumnName("imo_no");

                entity.Property(e => e.IsVerified).HasColumnName("is_verified");

                entity.Property(e => e.MmsiNo).HasColumnName("mmsi_no");

                entity.Property(e => e.Power).HasColumnName("power");

                entity.Property(e => e.Remark).HasColumnName("remark");

                entity.Property(e => e.ShipBreadthTypeId).HasColumnName("ship_breadth_type_id");

                entity.Property(e => e.ShipFlagCodeId).HasColumnName("ship_flag_code_id");

                entity.Property(e => e.ShipHullTypeId).HasColumnName("ship_hull_type_id");

                entity.Property(e => e.ShipId).HasColumnName("ship_id");

                entity.Property(e => e.ShipLength).HasColumnName("ship_length");

                entity.Property(e => e.ShipLengthTypeId).HasColumnName("ship_length_type_id");

                entity.Property(e => e.ShipName)
                    .IsRequired()
                    .HasColumnName("ship_name");

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

                entity.Property(e => e.ShipHullType1)
                    .IsRequired()
                    .HasColumnName("ship_hull_type");

                entity.Property(e => e.SystemName)
                    .IsRequired()
                    .HasColumnName("system_name");
            });

            modelBuilder.Entity<ShipLengthType>(entity =>
            {
                entity.ToTable("ship_length_type");

                entity.Property(e => e.ShipLengthTypeId).HasColumnName("ship_length_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.ShipLengthType1)
                    .IsRequired()
                    .HasColumnName("ship_length_type");

                entity.Property(e => e.SystemName)
                    .IsRequired()
                    .HasColumnName("system_name");
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

                entity.Property(e => e.ShipPowerType1)
                    .IsRequired()
                    .HasColumnName("ship_power_type");

                entity.Property(e => e.SystemName)
                    .IsRequired()
                    .HasColumnName("system_name");
            });

            modelBuilder.Entity<ShipSource>(entity =>
            {
                entity.ToTable("ship_source");

                entity.Property(e => e.ShipSourceId).HasColumnName("ship_source_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.ShipSource1)
                    .IsRequired()
                    .HasColumnName("ship_source");

                entity.Property(e => e.SystemName)
                    .IsRequired()
                    .HasColumnName("system_name");
            });

            modelBuilder.Entity<ShipStatus>(entity =>
            {
                entity.ToTable("ship_status");

                entity.Property(e => e.ShipStatusId).HasColumnName("ship_status_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.ShipStatus1)
                    .IsRequired()
                    .HasColumnName("ship_status");

                entity.Property(e => e.SystemName)
                    .IsRequired()
                    .HasColumnName("system_name");
            });

            modelBuilder.Entity<ShipType>(entity =>
            {
                entity.ToTable("ship_type");

                entity.HasIndex(e => e.ShipTypeGroupId)
                    .HasName("ifk_rel_16");

                entity.Property(e => e.ShipTypeId).HasColumnName("ship_type_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.ShipType1).HasColumnName("ship_type");

                entity.Property(e => e.ShipTypeGroupId).HasColumnName("ship_type_group_id");

                entity.Property(e => e.SystemName)
                    .IsRequired()
                    .HasColumnName("system_name");

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

                entity.Property(e => e.ShipTypeGroup1)
                    .IsRequired()
                    .HasColumnName("ship_type_group");

                entity.Property(e => e.ShipTypeGroupCode).HasColumnName("ship_type_group_code");

                entity.Property(e => e.SystemName)
                    .IsRequired()
                    .HasColumnName("system_name");
            });

            modelBuilder.HasSequence("port_call_has_port_call_purpo_port_call_has_port_call_purpo_seq")
                .HasMin(1)
                .HasMax(2147483647);
        }
    }
}
