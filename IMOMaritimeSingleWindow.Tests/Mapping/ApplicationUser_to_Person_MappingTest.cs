using AutoMapper;
using NUnit.Framework;

using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Tests.Mapping
{
    public class ApplicationUser_to_Person_MappingTest
    {

        private readonly IMapper mapper;
        public ApplicationUser_to_Person_MappingTest()
        {
            var configuration = new MapperConfiguration(cfg => cfg.AddProfile<IdentityEntitiesToModelsMappingProfile>());
            mapper = configuration.CreateMapper();

        }
        [Test]
        public void MapsCompanyDetailsWithoutException()
        {
            ApplicationUser appUser = new ApplicationUser
            {
                GivenName = "Per",
                Surname = "Tester",
                CompanyEmail = "company@company.test",
                CompanyPhoneNumber = "9872819412"
            };
            
            Assert.DoesNotThrow(() => mapper.Map<ApplicationUser, Person>(appUser));
        }

        [Test]
        public void MapsCompanyDetailsCorrectly()
        {
            ApplicationUser appUser = new ApplicationUser
            {
                GivenName = "Per",
                Surname = "Tester",
                CompanyEmail = "company@company.test",
                CompanyPhoneNumber = "9872819412"
            };
            Person person = mapper.Map<ApplicationUser, Person>(appUser);

            Assert.AreEqual(actual: person.GivenName, expected: appUser.GivenName, message: "Actual given name differ from expected.");
            Assert.AreEqual(actual: person.Surname, expected: appUser.Surname, message: "Actual surname differ from expected.");
            Assert.AreEqual(actual: person.CompanyEmail, expected: appUser.CompanyEmail, message: "Actual company email differ from expected.");
            Assert.AreEqual(actual: person.CompanyPhoneNumber, expected: appUser.CompanyPhoneNumber, message: "Actual company phone number differ from expected.");
        }

    }
}
