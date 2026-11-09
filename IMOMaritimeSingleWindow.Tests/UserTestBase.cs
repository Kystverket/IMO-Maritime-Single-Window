using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Identity.Helpers;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Identity.Stores;
using IMOMaritimeSingleWindow.Repositories;
using IMOMaritimeSingleWindow.Tests.Constants;
using IMOMaritimeSingleWindow.Tests.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;

namespace IMOMaritimeSingleWindow.Tests
{
    public class UserTestBase
    {

        protected TestContext InMemoryDatabaseContext;
        protected readonly UnitOfWork UnitOfWork;
        protected readonly UserStore UserStore;
        public List<ApplicationUser> Users { get; }
        public IdentityMapper Mapper { get; }
        private string SeedFilePath { get; }
        public UserTestBase(InMemoryDatabaseTypes type)
        {
            var factory = new ContextFactory();
            var context = factory.CreateContext();
            switch (type)
            {
                case InMemoryDatabaseTypes.USER_ROLE:
                    SeedFilePath = "path-to-user-role-seed";
                    InMemoryDatabaseContext = SeedContext(context);
                    break;
                case InMemoryDatabaseTypes.USER:
                    SeedFilePath = "path-to-user-seed";
                    InMemoryDatabaseContext = SeedContext(context);
                    break;
                case InMemoryDatabaseTypes.CLEAN:
                    // No seeding neccessary
                    InMemoryDatabaseContext = context;
                    break;
                default:
                    InMemoryDatabaseContext = context;
                    break;
            }
            
            Mapper = new IdentityMapper();
            UnitOfWork = new UnitOfWork(InMemoryDatabaseContext);
            var roleStore = new RoleStore(UnitOfWork, Mapper);
            
            UserStore = new UserStore(new IdentityErrorDescriber(), UnitOfWork, roleStore, new UserStoreHelper(Mapper), Mapper);

            //Initialize the users list
            Users = new List<ApplicationUser>
            {
                new ApplicationUser
                {
                    GivenName = "Ola",
                    Email = "ola@test.no",
                    PasswordHash = "jh7asd6am"
                }
            };
        }

        private TestContext SeedContext(TestContext context)
        {
            String str = File.ReadAllText(SeedFilePath);
            context.Database.ExecuteSqlRaw(str);
            return context;
        }
    }
}
