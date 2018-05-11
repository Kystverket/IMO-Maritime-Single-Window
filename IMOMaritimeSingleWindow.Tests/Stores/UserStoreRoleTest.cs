using System;
using System.Collections.Generic;
using System.Text;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Repositories;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Tests.Data;
using IMOMaritimeSingleWindow.ViewModels.Mappings;

using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Identity.Stores;
using IMOMaritimeSingleWindow.Tests.Constants;
using Microsoft.AspNetCore.Identity;
using AutoMapper;
using NUnit.Framework;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.Tests.Stores
{
    public class UserStoreRoleTest : UserTestBase
    {
        public UserStoreRoleTest() : base(InMemoryDatabaseTypes.USER_ROLE)
        {
        }

        [Test]
        public async Task CanAddUserToRole()
        {
            var user = UnitOfWork.Users.GetByNormalizedUserName("TEST@TEST.NO");
            var appUser = Mapper.Map<User, ApplicationUser>(user);
            var result = UserStore.AddToRoleAsync(appUser, "CUSTOMS").IsCompletedSuccessfully;

            var updatedUser = UnitOfWork.Users.GetByNormalizedUserName("TEST@TEST.NO");

            Assert.AreEqual(updatedUser.Role.NormalizedName, "CUSTOMS");

            Assert.True(true);
        }

    }
}
