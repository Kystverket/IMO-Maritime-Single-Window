using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Identity.Models;
using AutoMapper;

namespace IMOMaritimeSingleWindow.Helpers
{
    public class IdentityEntitiesToModelsMappingProfile : Profile
    {

        public IdentityEntitiesToModelsMappingProfile()
        {
            #region MappingConfiguration
            CreateMap<ApplicationUser, Password>()
                .ForMember(destination => destination.Hash,
                opt => opt.MapFrom(source => source.PasswordHash)).ReverseMap();

            // Create default map
            CreateMap<Person, ApplicationUser>();

            CreateMap<ApplicationUser, User>()
                .ForMember(destination => destination.UserId,
                opt => opt.MapFrom(source => source.Id));

            // Ignore mapping members that are not contained in source object
            CreateMap<ApplicationUser, Person>(MemberList.Source);

            CreateMap<User, ApplicationUser>()
                .ForMember(destination => destination.Id,
                    opt => opt.MapFrom(source => source.UserId))
                .ForMember(destination => destination.UserName,
                    opt => opt.MapFrom(source => source.Email))
                .ForMember(destination => destination.NormalizedUserName,
                    opt => opt.MapFrom(source => source.NormalizedEmail));

            // To be able to merge objects of same class
            CreateMap<ApplicationUser, ApplicationUser>()
                .ForAllMembers(memberOptions: opts =>
                opts.Condition( (src, dest, member) => member != null ));

            // To be able to update entity when some properties are missing
            CreateMap<Person, Person>()
                .ForMember(dst => dst.PersonId, opt => { opt.UseDestinationValue(); opt.Ignore(); }  )
                .ForMember(dst => dst.User, opt => { opt.UseDestinationValue(); opt.Ignore(); });

            CreateMap<ApplicationRole, Role>()
                .ForMember(destination => destination.RoleId,
                opt => opt.MapFrom(source => source.Id)).ReverseMap();
            #endregion
        }
    }
}
