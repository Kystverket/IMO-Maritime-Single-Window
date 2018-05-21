using System;
using System.Collections.Generic;
using System.Text;

using Microsoft.AspNetCore.Identity;
using IMOMaritimeSingleWindow.Identity;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Tests.Constants;

namespace IMOMaritimeSingleWindow.Tests.ManagerTests
{
    public class UserManagerTest : UserTestBase
    {
        //private UserManager<ApplicationUser> userManager;
        public UserManagerTest() : base(InMemoryDatabaseTypes.CLEAN) {
            //userManager = new UserManager<ApplicationUser>(store: UserStore);
        }




    }
}
