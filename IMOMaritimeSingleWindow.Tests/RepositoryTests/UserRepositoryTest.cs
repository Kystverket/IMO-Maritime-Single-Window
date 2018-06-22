using System;
using IMOMaritimeSingleWindow.Tests.Data;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Repositories;
using IMOMaritimeSingleWindow.Models;
using Xunit;

namespace IMOMaritimeSingleWindow.Tests.RepositoryTests
{
    public class UserRepositoryTest
    {

        public UnitOfWork UnitOfWork { get; set; }
        public TestContext Context { get; set; }

        [Fact]
        public void Adds_Password()
        {
            using (var factory = new ContextFactory())
            {
                using (var unitofwork = new UnitOfWork(factory.CreateContext()))
                {
                    // Arrange
                    var expectedHash = "b7tk4uia";
                    Password expectedPassword = new Password
                    {
                        PasswordId = new Guid(),
                        Hash = expectedHash
                    };

                    // Act
                    unitofwork.Passwords.Add(expectedPassword);
                    unitofwork.Complete(); // SaveChanges()

                    // Assert
                    Password actualPassword = unitofwork.Passwords.Single(password => password.Hash == expectedHash);
                    string actualHash = actualPassword.Hash;

                    Assert.Equal(expectedHash, actualHash);
                    Assert.Equal(expectedPassword, actualPassword);
                }
            }

        }

        [Fact]
        public void NewPasswordShouldBeAddedToExistingUser()
        {

            using (var factory = new ContextFactory())
            {
                using (var unitofwork = new UnitOfWork(factory.CreateContext()))
                {
                    // Arrange
                    var newUser = new User
                    {
                        Email = "ole@tester.no"
                    };

                    unitofwork.Users.Add(newUser);
                    unitofwork.Complete();

                    // Act
                    var pwHash = "sda876h65";
                    var foundUser = unitofwork.Users.GetByUserName(newUser.Email);
                    unitofwork.Users.AddPassword(foundUser, pwHash);
                    unitofwork.Complete();

                    // Assert
                    var passwordEntity = unitofwork.Passwords.Get(foundUser.PasswordId.Value);
                    Assert.NotNull(passwordEntity);
                    Assert.Equal(pwHash, passwordEntity.Hash);
                }
            }


        }

    }
}
