using AutoMapper;
using NUnit.Framework;

using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Tests.Mapping
{
    public class Person_to_ApplicationUser_MappingTest
    {

        private readonly IMapper mapper;
        public Person_to_ApplicationUser_MappingTest()
        {
            var configuration = new MapperConfiguration(cfg => cfg.AddProfile<IdentityEntitiesToModelsMappingProfile>());
            mapper = configuration.CreateMapper();

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
            
            Assert.DoesNotThrow(() => mapper.Map<Person, ApplicationUser>(person));
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
            ApplicationUser appUser = mapper.Map<Person, ApplicationUser>(person);

            Assert.AreEqual(actual: appUser.GivenName, expected: person.GivenName, message: "Actual given name differ from expected.");
            Assert.AreEqual(actual: appUser.Surname, expected: person.Surname, message: "Actual surname differ from expected.");
            Assert.AreEqual(actual: appUser.CompanyEmail, expected: person.CompanyEmail, message: "Actual company email differ from expected.");
            Assert.AreEqual(actual: appUser.CompanyPhoneNumber, expected: person.CompanyPhoneNumber, message: "Actual company phone number differ from expected.");
        }

    }
}
