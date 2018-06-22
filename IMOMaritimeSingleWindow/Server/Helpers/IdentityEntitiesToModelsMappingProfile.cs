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

            CreateMap<ApplicationRole, Role>()
                .ForMember(destination => destination.RoleId,
                opt => opt.MapFrom(source => source.Id)).ReverseMap();
            #endregion
        }
    }
}
