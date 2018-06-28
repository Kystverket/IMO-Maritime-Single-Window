using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Identity.Helpers
{
    public interface IUserStoreHelper
    {
        ApplicationUser ConvertToApplicationUser(User user);
        User ConvertToUser(ApplicationUser applicationUser);
        bool HasPerson(ApplicationUser applicationUser);
        bool HasPassword(User user);
    }
}
