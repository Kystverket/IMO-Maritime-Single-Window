using AutoMapper;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Models;
using System;

namespace IMOMaritimeSingleWindow.Identity.Helpers
{
    public class UserStoreHelper : IUserStoreHelper
    {
        private readonly IMapper _mapper;
        public UserStoreHelper(IMapper mapper)
        {
            _mapper = mapper;
        }

        public ApplicationUser ConvertToApplicationUser(User user)
        {
            if (!HasPassword(user))
                return _mapper.Map<User, ApplicationUser>(user);

            ApplicationUser userMap = _mapper.Map<User, ApplicationUser>(user);
            ApplicationUser pwMap = _mapper.Map<Password, ApplicationUser>(user.Password);
            ApplicationUser persMap = _mapper.Map<Person, ApplicationUser>(user.Person);

            ApplicationUser appUser = _mapper.Map(userMap, pwMap);  // Merge
            _mapper.Map(source: appUser, destination: persMap);     // Merge

            return appUser;
        }

        public User ConvertToUser(ApplicationUser applicationUser)
        {
            var user = _mapper.Map<User>(applicationUser);
            return user;
        }

        public bool HasPassword(User user)
        {
            return user.Person != null;
        }

        public bool HasPerson(ApplicationUser applicationUser)
        {
            // Require both GivenName and Surname to be present
            return !String.IsNullOrEmpty(applicationUser.GivenName) && !String.IsNullOrEmpty(applicationUser.Surname);
        }
    }
}
