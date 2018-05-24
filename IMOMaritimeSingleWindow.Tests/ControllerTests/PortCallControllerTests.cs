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
    public class PortCallControllerTests
    {

        private const string SEED = @"..\..\..\TestSeeds\PortCallSeed.sql";
        private TestContext SeedContext(TestContext context)
        {
            String str = File.ReadAllText(SEED);
            RawSqlString raw = new RawSqlString(str);
            context.Database.ExecuteSqlCommand(raw);
            return context;
        }

        [Fact]
        public void PortCallHasEntries()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    // Arrange
                    var seedContext = SeedContext(context);
                    bool hasEntries = seedContext.PortCall.Any();

                    // Assert
                    Assert.True(hasEntries);
                }
            }
        }

        [Fact]
        public void GetPortCall_ReturnsPortCall()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    // Arrange
                    var seedContext = SeedContext(context);
                    var controller = new PortCallController(seedContext);
                    var portCall = seedContext.PortCall.FirstOrDefault();
                    var id = portCall.PortCallId;

                    // Act
                    var result = controller.GetPortCall(id);

                    // Assert
                    var portCallResult = Assert.IsType<PortCall>(result);
                    Assert.Equal(portCall, portCallResult);
                }
            }
        }

        [Fact]
        public void GetAll_ReturnsPortCallList()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    // Arrange
                    var seedContext = SeedContext(context);
                    var controller = new PortCallController(seedContext);
                    var portCallList = seedContext.PortCall.ToList();

                    // Act
                    var result = controller.GetAll();

                    // Assert
                    var portCallListResult = Assert.IsType<List<PortCall>>(result);
                    Assert.Equal(portCallList, portCallListResult);
                }
            }
        }

        [Fact]
        public void RegisterPortCall_ReturnsJsonResult()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    // Arrange
                    var seedContext = SeedContext(context);
                    var controller = new PortCallController(seedContext);
                    var portCall = new PortCall { PortCallStatusId = 1, ShipId = 1, LocationId = 1 };

                    // Act
                    var result = controller.RegisterPortCall(portCall);

                    // Assert
                    var jsonResult = Assert.IsType<JsonResult>(result);
                }
            }
        }

        [Fact]
        public void RegisterPortCall_ReturnsBadRequest_WhenForeignKeyConstraintFails()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    // Arrange
                    var seedContext = SeedContext(context);
                    var controller = new PortCallController(seedContext);
                    var PortCall = new PortCall { PortCallStatusId = -1 };

                    // Act
                    var result = controller.RegisterPortCall(PortCall);

                    // Assert
                    var badRequestResult = Assert.IsType<BadRequestObjectResult>(result);
                    Assert.IsType<DbUpdateException>(badRequestResult.Value);
                }
            }
        }

        [Fact]
        public void RegisterPortCall_ReturnsBadRequest_WhenModelStateIsInvalid()
        {
            using (var factory = new ContextFactory())
            {
                using (var context = factory.CreateContext())
                {
                    // Arrange
                    var seedContext = SeedContext(context);
                    var controller = new PortCallController(seedContext);
                    controller.ModelState.AddModelError("Name", "Required");
                    var portCall = new PortCall { PortCallStatusId = 1, ShipId = 1, LocationId = 1 };

                    // Act
                    var result = controller.RegisterPortCall(portCall);

                    // Assert
                    var badRequestResult = Assert.IsType<BadRequestObjectResult>(result);
                    Assert.IsType<SerializableError>(badRequestResult.Value);
                }
            }
        }

    }
}