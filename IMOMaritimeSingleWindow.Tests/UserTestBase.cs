//using AutoMapper;
//using IMOMaritimeSingleWindow.Data;
//using IMOMaritimeSingleWindow.Helpers;
//using IMOMaritimeSingleWindow.Identity.Helpers;
//using IMOMaritimeSingleWindow.Identity.Models;
//using IMOMaritimeSingleWindow.Identity.Stores;
//using IMOMaritimeSingleWindow.Repositories;
//using IMOMaritimeSingleWindow.Tests.Constants;
//using IMOMaritimeSingleWindow.Tests.Data;
//using IMOMaritimeSingleWindow.ViewModels.Mappings;
//using Microsoft.AspNetCore.Identity;
//using System.Collections.Generic;

//namespace IMOMaritimeSingleWindow.Tests
//{
//    public class UserTestBase
//    {

//        protected open_ssnContext InMemoryDatabaseContext;
//        protected readonly UnitOfWork UnitOfWork;
//        protected readonly UserStore UserStore;
//        public List<ApplicationUser> Users { get; }
//        public IMapper Mapper { get; }
//        public UserTestBase(InMemoryDatabaseTypes type, IdentityErrorDescriber identityErrorDescriber)
//        {
//            switch (type)
//            {
//                case InMemoryDatabaseTypes.USER_ROLE:
//                    InMemoryDatabaseContext = StorageBuilder.GetInMemContextUserAndRoleData();
//                    break;
//                case InMemoryDatabaseTypes.USER:
//                    break;
//                case InMemoryDatabaseTypes.CLEAN:
//                    InMemoryDatabaseContext = StorageBuilder.GetInMemContext();
//                    break;
//                default:
//                    InMemoryDatabaseContext = StorageBuilder.GetInMemContext();
//                    break;
//            }
            
//            UnitOfWork = (UnitOfWork)StorageBuilder.GetUnitOfWork(InMemoryDatabaseContext);
//            //var configuration = new MapperConfiguration(cfg => new IdentityEntitiesToModelsMappingProfile());
//            var config = new MapperConfiguration(cfg =>
//            {
//                cfg.AddProfile<IdentityEntitiesToModelsMappingProfile>();
//                cfg.AddProfile<ViewModelToEntityMappingProfile>();
//            });
//            Mapper = config.CreateMapper();
//            var roleStore = new RoleStore(UnitOfWork, Mapper);
//            UserStore = new UserStore(identityErrorDescriber, UnitOfWork, roleStore, new UserStoreHelper(Mapper), Mapper);

//            //Initialize the users list
//            Users = new List<ApplicationUser>
//            {
//                new ApplicationUser
//                {
//                    GivenName = "Ola",
//                    Email = "ola@test.no",
//                    PasswordHash = "jh7asd6am"
//                }
//            };
//        }
//    }
//}
