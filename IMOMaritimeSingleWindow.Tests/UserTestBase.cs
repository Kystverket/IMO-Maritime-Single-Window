using System;
using System.Collections.Generic;
using System.Text;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Repositories;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Tests.Data;
using IMOMaritimeSingleWindow.ViewModels.Mappings;
using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Identity.Stores;
using Microsoft.AspNetCore.Identity;
using AutoMapper;
using NUnit.Framework;
using System.Threading.Tasks;
using Xunit;

namespace IMOMaritimeSingleWindow.Tests
{
    public class UserTestBase
    {

        protected open_ssnContext InMemoryDatabaseContext;
        protected readonly UnitOfWork UnitOfWork;
        protected readonly UserStore UserStore;
        public List<ApplicationUser> Users { get; }
        public UserTestBase()
        {
            InMemoryDatabaseContext = StorageBuilder.GetInMemContext();
            UnitOfWork = (UnitOfWork)StorageBuilder.GetUnitOfWork(InMemoryDatabaseContext);
            var configuration = new MapperConfiguration(cfg => new IdentityEntitiesToModelsMappingProfile());
            var mapper = configuration.CreateMapper();
            UserStore = new UserStore(UnitOfWork, mapper);

            //Initialize the users list
            Users = new List<ApplicationUser>
            {
                new ApplicationUser
                {
                    FirstName = "Ola",
                    Email = "ola@test.no",
                    PasswordHash = "jh7asd6am"
                }
            };
        }
    }
}
