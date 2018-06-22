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
    public class ShipControllerTests
    {

        private const string SEED = @"..\..\..\TestSeeds\ShipSeed.sql";
        private TestContext SeedContext(TestContext context)
        {
            String str = File.ReadAllText(SEED);
            RawSqlString raw = new RawSqlString(str);
            context.Database.ExecuteSqlCommand(raw);
            return context;
        }

        [Fact]
        public void ShipHasEntries()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    var seedContext = SeedContext(context);
                    bool hasEntries = seedContext.Ship.Any();
                    Assert.True(hasEntries);
                }
            }
        }

        [Fact]
        public void SearchShip_ReturnsShipList_WhenSearchHasMatches()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    // Arrange
                    var seedContext = SeedContext(context);
                    var controller = new ShipController(seedContext);
                    var Ship = seedContext.Ship.FirstOrDefault();
                    var searchTerm = Ship.Name.Substring(0, 3);

                    // Act
                    var result = controller.SearchShip(searchTerm);

                    // Assert
                    var listResult = Assert.IsType<List<Ship>>(result);
                    Assert.True(result.Count() > 0);
                }
            }
        }

        [Fact]
        public void SearchShip_ReturnsEmptyList_WhenSearchHasNoMatches()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    // Arrange
                    var seedContext = SeedContext(context);
                    var controller = new ShipController(seedContext);
                    var searchTerm = new Guid().ToString();  // Almost 100% guaranteed to not match any other string ever made

                    // Act
                    var result = controller.SearchShip(searchTerm);

                    // Assert
                    var listResult = Assert.IsType<List<Ship>>(result);
                    Assert.True(result.Count() == 0);
                }
            }
        }

        [Fact]
        public void RegisterShip_ReturnsJsonResult()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    // Arrange
                    var seedContext = SeedContext(context);
                    var controller = new ShipController(seedContext);
                    var Ship = new Ship { ShipHullTypeId = 1, ShipFlagCodeId = 1, ShipStatusId = 1, ShipTypeId = 1 };

                    // Act
                    var result = controller.RegisterShip(Ship);

                    // Assert
                    var jsonResult = Assert.IsType<JsonResult>(result);
                }
            }
        }

        [Fact]
        public void RegisterShip_ReturnsBadRequest_WhenForeignKeyConstraintFails()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    // Arrange
                    var seedContext = SeedContext(context);
                    var controller = new ShipController(seedContext);
                    var Ship = new Ship { ShipTypeId = -1 };

                    // Act
                    var result = controller.RegisterShip(Ship);

                    // Assert
                    var badRequestResult = Assert.IsType<BadRequestObjectResult>(result);
                    Assert.IsType<DbUpdateException>(badRequestResult.Value);
                }
            }
        }

        [Fact]
        public void RegisterShip_ReturnsBadRequest_WhenModelStateIsInvalid()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    // Arrange
                    var seedContext = SeedContext(context);
                    var controller = new ShipController(seedContext);
                    controller.ModelState.AddModelError("Name", "Required");
                    var Ship = new Ship();

                    // Act
                    var result = controller.RegisterShip(Ship);

                    // Assert
                    var badRequestResult = Assert.IsType<BadRequestObjectResult>(result);
                    Assert.IsType<SerializableError>(badRequestResult.Value);
                }
            }
        }





    }

}