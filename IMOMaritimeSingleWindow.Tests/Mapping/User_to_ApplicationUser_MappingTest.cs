using AutoMapper;
using NUnit.Framework;
using System;
using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Tests.Mapping
{
    public class User_to_ApplicationUser_MappingTest
    {

        private readonly IMapper mapper;
        public User_to_ApplicationUser_MappingTest()
        {
            var configuration = new MapperConfiguration(cfg => cfg.AddProfile<IdentityEntitiesToModelsMappingProfile>());
            mapper = configuration.CreateMapper();

        }
        [Test]
        public void MapsUserWithoutException()
        {
            Person person = new Person
            {
                PersonId = Guid.NewGuid(),
                GivenName = "Per",
                Surname = "Tester",
                CompanyEmail = "company@company.test",
                CompanyPhoneNumber = "9872819412"
            };

            Password password = new Password
            {
                PasswordId = Guid.NewGuid(),
                Hash = "876jasdhj233"
            };

            User user = new User
            {
                UserId = Guid.NewGuid(),
                Email = "per@tester.no",
                PhoneNumber = "872137912",
                Person = person,
                PersonId = person.PersonId,
                Password = password,
                PasswordId = password.PasswordId
            };
            
            Assert.DoesNotThrow(() => mapper.Map<User, ApplicationUser>(user));
        }

        [Test]
        public void MapsUserCorrectly()
        {
            Person person = new Person
            {
                PersonId = Guid.NewGuid(),
                GivenName = "Per",
                Surname = "Tester",
                CompanyEmail = "company@company.test",
                CompanyPhoneNumber = "9872819412"
            };

            Password password = new Password
            {
                PasswordId = Guid.NewGuid(),
                Hash = "876jasdhj233"
            };

            User user = new User
            {
                UserId = Guid.NewGuid(),
                Email = "per@tester.no",
                PhoneNumber = "872137912",
                Person = person,
                PersonId = person.PersonId,
                Password = password,
                PasswordId = password.PasswordId
            };


            ApplicationUser userMap = mapper.Map<User, ApplicationUser>(user);
            ApplicationUser pwMap = mapper.Map<Password, ApplicationUser>(password);
            ApplicationUser persMap = mapper.Map<Person, ApplicationUser>(person);
            
            ApplicationUser appUser = mapper.Map(persMap, pwMap);   // Merge
            mapper.Map(source: userMap, destination: appUser);      // Merge

            // Id's match
            Assert.AreEqual(actual: appUser.Id, expected: user.UserId, message: "Actual user id differ from expected.");

            // Common properties are the same
            Assert.AreEqual(actual: appUser.Email, expected: user.Email, message: "Actual email differ from expected.");
            Assert.AreEqual(actual: appUser.PhoneNumber, expected: user.PhoneNumber, message: "Actual phone number differ from expected.");

            // Properties from included entities in User object (Person and Password) maps correctly to corresponding properties in ApplicationUser object
            // From Password entity
            Assert.AreEqual(actual: appUser.PasswordHash, expected: password.Hash, message: "Actual password hash differ from expected.");
            // From Person entity
            Assert.AreEqual(actual: appUser.GivenName, expected: person.GivenName, message: "Actual given name differ from expected.");
            Assert.AreEqual(actual: appUser.Surname, expected: person.Surname, message: "Actual surname differ from expected.");
            Assert.AreEqual(actual: appUser.CompanyEmail, expected: person.CompanyEmail, message: "Actual company email differ from expected.");
            Assert.AreEqual(actual: appUser.CompanyPhoneNumber, expected: person.CompanyPhoneNumber, message: "Actual company phone number differ from expected.");
        }

    }
}
