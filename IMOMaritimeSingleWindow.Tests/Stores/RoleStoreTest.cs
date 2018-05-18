using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Repositories;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Identity.Stores;
using Microsoft.AspNetCore.Identity;
using NUnit.Framework;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.Tests.Stores
{
    public class RoleStoreTest : RoleTestBase
    {
        private readonly ApplicationRole _role;

        public RoleStoreTest() : base()
        {
            _role = RoleStore.FindByNameAsync("ADMIN").GetAwaiter().GetResult();
        }


        [Test]
        public void AddedRoleCanBeFoundByRoleName()
        {
            Assert.NotNull(_role);
        }

        [Test]
        public async Task CanGetRoleByRoleName()
        {
            var role = await RoleStore.FindByNameAsync("ADMIN");
            Assert.NotNull(role);
        }

        [Test]
        public async Task AddedClaimCanBeFoundByRole()
        {
            var claims = await RoleStore.GetClaimsAsync(_role);
            //Claims were found for the given role
            Assert.True(claims.Any());
            //A specific claim was found for the given role
            Assert.True(claims.Any(cl => cl.Type == "menu" && cl.Value == "portcall"));
        }
    }
}
