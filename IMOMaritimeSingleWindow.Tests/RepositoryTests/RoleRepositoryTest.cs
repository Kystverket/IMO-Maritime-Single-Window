using System;
using IMOMaritimeSingleWindow.Tests.Data;
using IMOMaritimeSingleWindow.Repositories;
using IMOMaritimeSingleWindow.Models;
using NUnit.Framework;

namespace IMOMaritimeSingleWindow.Tests.RepositoryTests
{
    class RoleRepositoryTest
    {
        [Test]
        public void AddsRole()
        {

            using (var factory = new ContextFactory())
            {
                using (var unitofwork = new UnitOfWork(factory.CreateContext()))
                {
                    // Arrange
                    var role = new Role
                    {
                        Name = "admin",
                        Description = "administrator role"
                    };

                    // Act
                    unitofwork.Roles.Add(role);
                    unitofwork.Complete();

                    // Assert
                    var foundRole = unitofwork.Roles.Single(rol => rol.Name == role.Name);
                    Assert.NotNull(foundRole);
                }
            }
        }
    }
}
