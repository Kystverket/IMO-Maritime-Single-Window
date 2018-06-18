//using IMOMaritimeSingleWindow.Identity.Models;
//using IMOMaritimeSingleWindow.Identity.Stores;
//using IMOMaritimeSingleWindow.Repositories;
//using IMOMaritimeSingleWindow.Tests.Constants;
//using Microsoft.AspNetCore.Identity;
//using NUnit.Framework;
//using System.Threading.Tasks;

//namespace IMOMaritimeSingleWindow.Tests.Stores
//{

//    public class UserStoreTest : UserTestBase
//    {
//        public UserStoreTest() : base(InMemoryDatabaseTypes.CLEAN){ }


//        //Make a clean state between each test
//        [SetUp]
//        public async Task SetUp()
//        {
//            await InMemoryDatabaseContext.Database.EnsureCreatedAsync();
//        }

//        [TearDown]
//        public async Task TearDown()
//        {
//            await InMemoryDatabaseContext.Database.EnsureDeletedAsync();
//        }
        

//        [Test]
//        public async Task AddsUser()
//        {
//            //var userStore = new UserStore(unitOfWork, mapper);
//            var result = await UserStore.CreateAsync(Users[0]);
            
//            Assert.AreEqual(IdentityResult.Success, result);
//        }

//        [Test]
//        public async Task AddsCompanyUser()
//        {
//            ApplicationUser appUser = new ApplicationUser
//            {
//                GivenName = "Per",
//                Surname = "Tester",
//                PasswordHash = "987asdhj67ask",
//                CompanyEmail = "company@company.test",
//                CompanyPhoneNumber = "9872819412"
//            };

//            var result = await UserStore.CreateAsync(appUser);
//            Assert.AreEqual(IdentityResult.Success, result);
//        }


//        [Test]
//        public async Task AddedUserCanBeFoundByUserName()
//        {
//            await UserStore.CreateAsync(Users[0]);
//            var foundUser = UnitOfWork.Users.GetByUserName(Users[0].Email);
//            Assert.NotNull(foundUser);
//        }
        

//    }
//}
