using NUnit.Framework;

using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Tests.Mapping
{
    public class ApplicationUser_to_Password_MappingTest
    {

        private readonly IdentityMapper mapper = new IdentityMapper();
        public ApplicationUser_to_Password_MappingTest()
        {
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
            
            Assert.DoesNotThrow(() => mapper.ToPassword(appUser));
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
            Password password = mapper.ToPassword(appUser);

            Assert.AreEqual(actual: password.Hash, expected: appUser.PasswordHash, message: "Actual passwordhash differs from the expected.");
        }

    }
}
