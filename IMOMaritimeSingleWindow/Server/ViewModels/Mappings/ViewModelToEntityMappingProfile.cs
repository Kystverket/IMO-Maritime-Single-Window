
using IMOMaritimeSingleWindow.Identity; using IMOMaritimeSingleWindow.Identity.Models;
using AutoMapper;
 

namespace IMOMaritimeSingleWindow.ViewModels.Mappings
{
    public class ViewModelToEntityMappingProfile : Profile
    {
        public ViewModelToEntityMappingProfile()
        {
            CreateMap<RegistrationViewModel, ApplicationUser>()
                .ForMember(destination => destination.UserName,
                    map => map.MapFrom(source => source.Email))
                .ForMember(destination => destination.NormalizedEmail,
                    opt => opt.MapFrom(source => source.Email.ToUpper()))
                .ForMember(destination => destination.NormalizedUserName,
                    opt => opt.MapFrom(source => source.Email.ToUpper()));
            CreateMap<RegistrationWithPasswordViewModel, ApplicationUser>()
                .ForMember(destination => destination.UserName,
                    map => map.MapFrom(source => source.Email))
                .ForMember(destination => destination.NormalizedEmail,
                    opt => opt.MapFrom(source => source.Email.ToUpper()))
                .ForMember(destination => destination.NormalizedUserName,
                    opt => opt.MapFrom(source => source.Email.ToUpper()));
        }
    }
}
