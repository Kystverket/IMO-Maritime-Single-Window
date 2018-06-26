using IMOMaritimeSingleWindow.Identity.Models;
using Microsoft.AspNetCore.Identity;

namespace IMOMaritimeSingleWindow.Identity.Stores
{
    public partial class UserStore : IUserLockoutStore<ApplicationUser>
    {

    }
}
