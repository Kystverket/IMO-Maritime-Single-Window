using AutoMapper;
using NUnit.Framework;

using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Tests.Mapping
{
    public class ApplicationUser_to_Password_MappingTest
    {

        private readonly IMapper mapper;
        public ApplicationUser_to_Password_MappingTest()
        {
            var configuration = new MapperConfiguration(cfg => cfg.AddProfile<IdentityEntitiesToModelsMappingProfile>());
            mapper = configuration.CreateMapper();

        }
        [Test]
        public void MapsPasswordWithoutException()
        {
            ApplicationUser appUser = new ApplicationUser
            {
                GivenName = "Per",
                Surname = "Tester",
                PasswordHash = "876jasdhj233"
            };
            
            Assert.DoesNotThrow(() => mapper.Map<ApplicationUser, Password>(appUser));
        }

        [Test]
        public void MapsPasswordCorrectly()
        {
            ApplicationUser appUser = new ApplicationUser
            {
                GivenName = "Per",
                Surname = "Tester",
                PasswordHash = "876jasdhj233"
            };
            Password password = mapper.Map<ApplicationUser, Password>(appUser);

            Assert.AreEqual(actual: password.Hash, expected: appUser.PasswordHash, message: "Actual passwordhash differs from the expected.");
        }

    }
}
