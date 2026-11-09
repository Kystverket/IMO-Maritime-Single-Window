using NUnit.Framework;

using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Tests.Mapping
{
    public class Person_to_ApplicationUser_MappingTest
    {

        private readonly IdentityMapper mapper = new IdentityMapper();
        public Person_to_ApplicationUser_MappingTest()
        {
        }
        [Test]
        public void MapsCompanyDetailsWithoutException()
        {
            Person person = new Person
            {
                GivenName = "Per",
                Surname = "Tester",
                CompanyEmail = "company@company.test",
                CompanyPhoneNumber = "9872819412"
            };
            
            Assert.DoesNotThrow(() => mapper.ToApplicationUser(person));
        }

        [Test]
        public void MapsCompanyDetailsCorrectly()
        {
            Person person = new Person
            {
                GivenName = "Per",
                Surname = "Tester",
                CompanyEmail = "company@company.test",
                CompanyPhoneNumber = "9872819412"
            };
            ApplicationUser appUser = mapper.ToApplicationUser(person);

            Assert.AreEqual(actual: appUser.GivenName, expected: person.GivenName, message: "Actual given name differ from expected.");
            Assert.AreEqual(actual: appUser.Surname, expected: person.Surname, message: "Actual surname differ from expected.");
            Assert.AreEqual(actual: appUser.CompanyEmail, expected: person.CompanyEmail, message: "Actual company email differ from expected.");
            Assert.AreEqual(actual: appUser.CompanyPhoneNumber, expected: person.CompanyPhoneNumber, message: "Actual company phone number differ from expected.");
        }

    }
}
