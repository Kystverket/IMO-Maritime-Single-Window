using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.ViewModels;
using AutoMapper;

namespace IMOMaritimeSingleWindow.Helpers
{
    public class MappingConfiguration
    {
        public void Configure(IMapperConfigurationExpression cfg)
        {
            cfg.CreateMap<RegistrationViewModel, Person>()
                .ForMember(destination => destination.FirstName,
                opt => opt.MapFrom(source => source.FirstName));

            cfg.CreateMap<ApplicationUser, Person>()
                .ForMember(destination => destination.FirstName,
                opt => opt.MapFrom(source => source.FirstName));
            cfg.CreateMap<ApplicationUser, Password>()
                .ForMember(destination => destination.Hash,
                opt => opt.MapFrom(source => source.PasswordHash));
            cfg.CreateMap<ApplicationUser, User>()
                .ForMember(destination => destination.UserId,
                opt => opt.MapFrom(source => source.Id)).ReverseMap();

            cfg.CreateMap<ApplicationRole, Role>()
                .ForMember(destination => destination.RoleId,
                opt => opt.MapFrom(source => source.Id)).ReverseMap();

        }
    }
}