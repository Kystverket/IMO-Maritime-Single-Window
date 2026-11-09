using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Models;
using System;

namespace IMOMaritimeSingleWindow.Identity.Helpers
{
    public class UserStoreHelper : IUserStoreHelper
    {
        private readonly IdentityMapper _mapper;
        public UserStoreHelper(IdentityMapper mapper)
        {
            _mapper = mapper;
        }

        public ApplicationUser ConvertToApplicationUser(User user)
        {
            ApplicationUser userMap = _mapper.ToApplicationUser(user);
            ApplicationUser pwMap = _mapper.ToApplicationUser(user.Password);
            ApplicationUser persMap = _mapper.ToApplicationUser(user.Person);

            ApplicationUser appUser = _mapper.Merge(userMap, pwMap);            // Merge
            appUser = _mapper.Merge(source: appUser, destination: persMap);     // Merge

            return appUser;
        }

        public User ConvertToUser(ApplicationUser applicationUser)
        {
            var user = _mapper.ToUser(applicationUser);
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
