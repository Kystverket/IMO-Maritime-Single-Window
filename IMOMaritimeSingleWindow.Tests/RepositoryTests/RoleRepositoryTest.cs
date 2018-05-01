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
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using NUnit.Framework;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.Tests.RepositoryTests
{
    class RoleRepositoryTest : TestBase
    {
        //Make a clean state between each test
        [SetUp]
        public async Task SetUp()
        {
            await InMemoryDatabaseContext.Database.EnsureCreatedAsync();
        }

        [TearDown]
        public async Task TearDown()
        {
            await InMemoryDatabaseContext.Database.EnsureDeletedAsync();
        }

        public RoleRepositoryTest() :base() { }

        [Test]
        public async Task AddsRole()
        {
            UnitOfWork.Roles.Add(new Role
            {
                Name = "admin",
                Description = "administrator role"
            });
            UnitOfWork.Complete();
            var context = InMemoryDatabaseContext as DbContext;
            //Not empty
            Assert.True( await context.Set<Role>().AnyAsync() );
            //role with the provided name added
            Role roleFound = null;
            Assert.NotNull( roleFound = await context.Set<Role>().FirstAsync(role => role.Name == "admin"));
            //added role has been given an id
            Assert.NotNull(roleFound.RoleId);
        }

    }
}
