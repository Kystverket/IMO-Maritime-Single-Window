
/*  This was adopted from an example project written by
 *  author: Marc Macniel (https://github.com/mmacneil)
 *  cited in a blog post
 *  url: https://fullstackmark.com/post/13/jwt-authentication-with-aspnet-core-2-web-api-angular-5-net-core-identity-and-facebook-login
 *  demonstrating how to implement a framework for authenticating users with JWT
 *  in an ASP.NET Core 2/Angular 5 web application.
 *  
 *  The original class this class is based upon can be found on the project's GitHub repository
 *  url: https://github.com/mmacneil/AngularASPNETCore2WebApiAuth
 *  file url: https://github.com/mmacneil/AngularASPNETCore2WebApiAuth/blob/master/src/ViewModels/Mappings/ViewModelToEntityMappingProfile.cs
 */

using IMOMaritimeSingleWindow.Identity.Models;
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
