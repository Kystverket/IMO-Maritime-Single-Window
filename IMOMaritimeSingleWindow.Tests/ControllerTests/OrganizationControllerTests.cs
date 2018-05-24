using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Xunit;
using Moq;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Tests.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.Sqlite;
using System.Threading.Tasks;
using System.IO;
using IMOMaritimeSingleWindow.Controllers;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Mvc;

namespace IMOMaritimeSingleWindow.Tests.ControllerTests
{
    public class OrganizationControllerTests
    {

        private const string SEED = @"..\..\..\TestSeeds\OrganizationSeed.sql";
        private TestContext SeedContext(TestContext context)
        {
            String str = File.ReadAllText(SEED);
            RawSqlString raw = new RawSqlString(str);
            context.Database.ExecuteSqlCommand(raw);
            return context;
        }

        [Fact]
        public void OrganizationHasEntries()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    var seedContext = SeedContext(context);
                    bool hasEntries = seedContext.Organization.Any();
                    Assert.True(hasEntries);
                }
            }
        }

        [Fact]
        public void SearchOrganization_ReturnsOrganizationList_WhenSearchHasMatches()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    // Arrange
                    var seedContext = SeedContext(context);
                    var controller = new OrganizationController(seedContext);
                    var organization = seedContext.Organization.FirstOrDefault();
                    var searchTerm = organization.Name.Substring(0, 3);

                    // Act
                    var result = controller.SearchOrganization(searchTerm);

                    // Assert
                    var listResult = Assert.IsType<List<Organization>>(result);
                    Assert.True(result.Count() > 0);
                }
            }
        }

        [Fact]
        public void SearchOrganization_ReturnsEmptyList_WhenSearchHasNoMatches()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    // Arrange
                    var seedContext = SeedContext(context);
                    var controller = new OrganizationController(seedContext);
                    var searchTerm = new Guid().ToString();  // Almost 100% guaranteed to not match any other string ever made

                    // Act
                    var result = controller.SearchOrganization(searchTerm);

                    // Assert
                    var listResult = Assert.IsType<List<Organization>>(result);
                    Assert.True(result.Count() == 0);
                }
            }
        }

        [Fact]
        public void RegisterOrganization_ReturnsJsonResult()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    // Arrange
                    var seedContext = SeedContext(context);
                    var controller = new OrganizationController(seedContext);
                    var organization = new Organization();

                    // Act
                    var result = controller.RegisterOrganization(organization);

                    // Assert
                    var jsonResult = Assert.IsType<JsonResult>(result);
                }
            }
        }

        [Fact]
        public void RegisterOrganization_ReturnsBadRequest_WhenForeignKeyConstraintFails()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    // Arrange
                    var seedContext = SeedContext(context);
                    var controller = new OrganizationController(seedContext);
                    var organization = new Organization { OrganizationTypeId = -1 };

                    // Act
                    var result = controller.RegisterOrganization(organization);

                    // Assert
                    var badRequestResult = Assert.IsType<BadRequestObjectResult>(result);
                    Assert.IsType<DbUpdateException>(badRequestResult.Value);
                }
            }
        }

        [Fact]
        public void RegisterOrganization_ReturnsBadRequest_WhenModelStateIsInvalid()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    // Arrange
                    var seedContext = SeedContext(context);
                    var controller = new OrganizationController(seedContext);
                    controller.ModelState.AddModelError("Name", "Required");
                    var organization = new Organization();

                    // Act
                    var result = controller.RegisterOrganization(organization);

                    // Assert
                    var badRequestResult = Assert.IsType<BadRequestObjectResult>(result);
                    Assert.IsType<SerializableError>(badRequestResult.Value);
                }
            }
        }





    }

}