using System.Collections.Generic;
using IMOMaritimeSingleWindow.Controllers;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;

using Microsoft.EntityFrameworkCore;
using Moq;
using NUnit.Framework;

namespace IMOMaritimeSingleWindow.Tests.Controllers
{
    [TestFixture]
    public class ShipControllerTest
    {
        private ShipController shipController;
        private Mock<open_ssnContext> mockContext;
        private Mock<DbSet<Ship>> mockShips;


        List<Ship> set1 = new List<Ship>();


        [SetUp]
        public void SetUp()
        {
            mockContext = new Mock<open_ssnContext>();
            mockContext.Setup(m => m.Ship).Returns(mockShips.Object);
            shipController = new ShipController(mockContext.Object);

            set1 = new List<Ship>
            {
                new Ship 
                {
                    ShipId = 0, ShipHullTypeId = 0, ShipStatusId = 0, 
                    ShipSourceId = 0, ShipFlagCodeId = 0, ShipTypeId = 0,

                    ImoNo = 0,
                    MmsiNo = 0,
                    ShipName = "shouldMatch_ShipName0",
                    CallSign = "callSign0",
                    Remark = ""
                },

                new Ship 
                {
                    ShipId = 1, ShipHullTypeId = 0, ShipStatusId = 0, 
                    ShipSourceId = 0, ShipFlagCodeId = 0, ShipTypeId = 0,

                    ImoNo = 1,
                    MmsiNo = 1,
                    ShipName = "shouldMatch_ShipName1",
                    CallSign = "callSign1",
                    Remark = ""
                },

                new Ship 
                {
                    ShipId = 2, ShipHullTypeId = 0, ShipStatusId = 0, 
                    ShipSourceId = 0, ShipFlagCodeId = 0, ShipTypeId = 0,

                    ImoNo = 0,
                    MmsiNo = 0,
                    ShipName = "shouldNotMatch_ShipName2",
                    CallSign = "callSign2",
                    Remark = ""
                }
            };
        }

        [Test]
        public void RegisterShip_saves_a_ship_via_context()
        {
            shipController.RegisterShip(new Ship());
            mockShips.Verify(m => m.Add(It.IsAny<Ship>()), Times.Once());
            mockContext.Verify(m => m.SaveChanges(), Times.Once());
        }

        // [TestCase("shouldMatch"]
        // public void SearchShip_returns_expected_result(string searchTerm)
        // {

        // }
    }
}