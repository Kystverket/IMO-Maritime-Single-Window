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
    public class LocationControllerTests
    {

        // private const string SEED = "C:\\Users\\m6800_1\\Documents\\IMO-Folder\\IMO-Maritime-Single-Window\\IMOMaritimeSingleWindow.Tests\\TestSeeds\\LocationSeed.sql";
        private const string SEED = @"..\..\..\TestSeeds\LocationSeed.sql";

        private TestContext SeedContext(TestContext context)
        {
            String str = File.ReadAllText(SEED);
            RawSqlString raw = new RawSqlString(str);
            context.Database.ExecuteSqlCommand(raw);
            return context;
        }

        [Fact]
        public void LocationHasEntries()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    var seedContext = SeedContext(context);
                    bool hasEntries = seedContext.Location.Any();
                    Assert.True(hasEntries);
                }
            }
        }

        [Fact]
        public void SearchLocation_ReturnsLocationList_WithCountOverOne_WhenSearchHasMatches()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    // Arrange
                    var seedContext = SeedContext(context);
                    var controller = new LocationController(seedContext);
                    var location = seedContext.Location.Include(l => l.LocationType).FirstOrDefault();
                    var searchTerm = location.Name.Substring(0, 3);

                    // Act
                    var result = controller.SearchLocation(searchTerm, location.LocationType.Name.Equals("Harbour"));

                    // Assert
                    var listResult = Assert.IsType<List<Location>>(result);
                    Assert.True(result.Count() > 0);
                }
            }
        }

        [Fact]
        public void SearchLocation_ReturnsEmptyList_WhenSearchHasNoMatches()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    // Arrange
                    var seedContext = SeedContext(context);
                    var controller = new LocationController(seedContext);
                    var searchTerm = new Guid().ToString();  // Almost 100% guaranteed to not match any other string ever made

                    // Act
                    var result1 = controller.SearchLocation(searchTerm, false);
                    var result2 = controller.SearchLocation(searchTerm, true);

                    // Assert
                    var listResult1 = Assert.IsType<List<Location>>(result1);
                    var listResult2 = Assert.IsType<List<Location>>(result2);
                    Assert.True(result1.Count() == 0);
                    Assert.True(result2.Count() == 0);
                }
            }
        }

        [Fact]
        public void RegisterLocation_ReturnsJsonResult()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    // Arrange
                    var seedContext = SeedContext(context);
                    var controller = new LocationController(seedContext);
                    var location = new Location { LocationTypeId = 1, CountryId = 1 };

                    // Act
                    var result = controller.RegisterLocation(location);

                    // Assert
                    var jsonResult = Assert.IsType<JsonResult>(result);
                }
            }
        }

        [Fact]
        public void RegisterLocation_ReturnsBadRequest_WhenForeignKeyConstraintFails()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    // Arrange
                    var seedContext = SeedContext(context);
                    var controller = new LocationController(seedContext);
                    var location = new Location { LocationTypeId = -1 };

                    // Act
                    var result = controller.RegisterLocation(location);

                    // Assert
                    var badRequestResult = Assert.IsType<BadRequestObjectResult>(result);
                    Assert.IsType<DbUpdateException>(badRequestResult.Value);
                }
            }
        }

        [Fact]
        public void RegisterLocation_ReturnsBadRequest_WhenModelStateIsInvalid()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    // Arrange
                    var seedContext = SeedContext(context);
                    var controller = new LocationController(seedContext);
                    controller.ModelState.AddModelError("Name", "Required");
                    var location = new Location();

                    // Act
                    var result = controller.RegisterLocation(location);

                    // Assert
                    var badRequestResult = Assert.IsType<BadRequestObjectResult>(result);
                    Assert.IsType<SerializableError>(badRequestResult.Value);
                }
            }
        }





    }

}