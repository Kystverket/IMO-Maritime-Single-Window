using NUnit.Framework;

using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Tests.Mapping
{
    public class ApplicationUser_to_User_MappingTest
    {

        private readonly IdentityMapper mapper = new IdentityMapper();
        public ApplicationUser_to_User_MappingTest()
        {
        }
        [Test]
        public void MapsApplicationUserWithoutException()
        {
            ApplicationUser appUser = new ApplicationUser
            {
                GivenName = "Per",
                Surname = "Tester",
                Email = "per@tester.no",
                PhoneNumber = "872137912",
                PasswordHash = "876jasdhj233"
            };
            
            Assert.DoesNotThrow(() => mapper.ToUser(appUser));
        }

        [Test]
        public void MapsApplicationUserCorrectly()
        {
            ApplicationUser appUser = new ApplicationUser
            {
                GivenName = "Per",
                Surname = "Tester",
                Email = "per@tester.no",
                PhoneNumber = "872137912",
                PasswordHash = "876jasdhj233"
            };
            User user = mapper.ToUser(appUser);

            var normalizedEmail = appUser.Email.ToUpperInvariant();

            Assert.AreEqual(actual: user.Email, expected: appUser.Email, message: "Actual email differ from expected.");
            Assert.AreEqual(actual: user.PhoneNumber, expected: appUser.PhoneNumber, message: "Actual phone number differ from expected.");
        }

    }
}
