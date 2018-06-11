using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.ViewModels;
using AutoMapper;

namespace IMOMaritimeSingleWindow.Helpers
{
    public class IdentityEntitiesToModelsMappingProfile : Profile
    {

        public IdentityEntitiesToModelsMappingProfile()
        {
            #region MappingConfiguration
            CreateMap<ApplicationUser, Person>()
                .ForMember(destination => destination.FirstName,
                opt => opt.MapFrom(source => source.FirstName)).ReverseMap();
            CreateMap<ApplicationUser, Password>()
                .ForMember(destination => destination.Hash,
                opt => opt.MapFrom(source => source.PasswordHash)).ReverseMap();
            CreateMap<ApplicationUser, User>()
                .ForMember(destination => destination.UserId,
                opt => opt.MapFrom(source => source.Id));

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

        public void Configure(IMapperConfigurationExpression cfg)
        {
            
        }
    }
}
