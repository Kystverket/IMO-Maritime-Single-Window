using AutoMapper;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Identity.Helpers;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Identity.Stores;
using IMOMaritimeSingleWindow.Repositories;
using IMOMaritimeSingleWindow.Tests.Constants;
using IMOMaritimeSingleWindow.Tests.Data;
using IMOMaritimeSingleWindow.ViewModels.Mappings;
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
        public IMapper Mapper { get; }
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
            
            //var configuration = new MapperConfiguration(cfg => new IdentityEntitiesToModelsMappingProfile());
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<IdentityEntitiesToModelsMappingProfile>();
                cfg.AddProfile<ViewModelToEntityMappingProfile>();
            });
            Mapper = config.CreateMapper();
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
            RawSqlString raw = new RawSqlString(str);
            context.Database.ExecuteSqlCommand(raw);
            return context;
        }
    }
}
