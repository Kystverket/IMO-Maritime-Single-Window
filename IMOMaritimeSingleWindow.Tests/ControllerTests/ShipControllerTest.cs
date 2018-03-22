using System.Collections.Generic;
using System.Linq;
using IMOMaritimeSingleWindow.Controllers;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;

using Microsoft.EntityFrameworkCore;
using Moq;
using NUnit.Framework;

namespace IMOMaritimeSingleWindow.Tests
{
    [TestFixture]
    public class ShipControllerTest
    {
        private ShipController shipController;
        private Mock<open_ssnContext> mockContext;
        private Mock<DbSet<Ship>> mockShips;


        IQueryable<Ship> queryableData;
        List<Ship> data;


        [SetUp]
        public void SetUp()
        {
            mockShips = new Mock<DbSet<Ship>>();
            data = new List<Ship>
            {
                new Ship 
                {
                    ShipId = 0, ShipHullTypeId = 0, ShipStatusId = 0, 
                    ShipSourceId = 0, ShipFlagCodeId = 0, ShipTypeId = 0,
                    ShipName = "match_shipName0",
                    CallSign = "ABC123",
                    ImoNo = 999111,
                    MmsiNo = 1234111
                },

                new Ship 
                {
                    ShipId = 1, ShipHullTypeId = 0, ShipStatusId = 0, 
                    ShipSourceId = 0, ShipFlagCodeId = 0, ShipTypeId = 0,
                    ShipName = "match_shipName1",
                    CallSign = "321DEF",
                    ImoNo = 999222,
                    MmsiNo = 1234222,
                },

                new Ship 
                {
                    ShipId = 2, ShipHullTypeId = 0, ShipStatusId = 0, 
                    ShipSourceId = 0, ShipFlagCodeId = 0, ShipTypeId = 0,
                    ShipName = "noMatch_shipName2",
                    CallSign = "321GHI",
                    ImoNo = 111999,
                    MmsiNo = 123999
                }
            };
            
            queryableData = data.AsQueryable();

            mockShips.As<IQueryable<Ship>>().Setup(m => m.Provider).Returns(queryableData.Provider);
            mockShips.As<IQueryable<Ship>>().Setup(m => m.Expression).Returns(queryableData.Expression);
            mockShips.As<IQueryable<Ship>>().Setup(m => m.ElementType).Returns(queryableData.ElementType);
            mockShips.As<IQueryable<Ship>>().Setup(m => m.GetEnumerator()).Returns(queryableData.GetEnumerator()); // 0 => data.GetEnumerator?
            
            mockContext = new Mock<open_ssnContext>();
            mockContext.Setup(m => m.Ship).Returns(mockShips.Object);
            shipController = new ShipController(mockContext.Object);
            
        }

        [Test]
        public void RegisterShip_saves_a_ship_via_context()
        {
            shipController.RegisterShip(new Ship());
            mockShips.Verify(m => m.Add(It.IsAny<Ship>()), Times.Once());
            mockContext.Verify(m => m.SaveChanges(), Times.Once());
        }

        [TestCase("match")]
        [TestCase("ABC")]
        [TestCase("321")]
        [TestCase("999")]
        [TestCase("1234")]
        public void SearchShip_returns_expected_result(string searchTerm)
        {
            shipController.RegisterShip(data[0]);
            shipController.RegisterShip(data[1]);
            shipController.RegisterShip(data[2]);
            
            var expected = new List<Ship>();
            foreach(Ship s in data)
            {
                if (s.ShipName.ToLower().StartsWith(searchTerm.ToLower()) 
                || s.CallSign.ToLower().StartsWith(searchTerm.ToLower())
                || s.ImoNo.ToString().ToLower().StartsWith(searchTerm.ToLower())
                || s.MmsiNo.ToString().ToLower().StartsWith(searchTerm.ToLower())) expected.Add(s);
            }

            var result = shipController.SearchShip(searchTerm);

            Assert.That(result, Is.EqualTo(expected));
        }

        public void SearchShip_does

        // [TestCase("match", "match_shipName1", "match_shipName2", "noMatch_shipName3")]
        // public void SearchShip_returns_expected_result(string searchTerm, params string[] shipNames)
        // {
        //     var expected = new List<Ship>();
        //     foreach(string sn in shipNames)
        //     {
        //         Ship aShip = new Ship{ShipName = sn};
        //         if (sn.ToLower().StartsWith(searchTerm.ToLower())) expected.Add(aShip);
        //     }

        //     var result = shipController.SearchShip(searchTerm);

        //     Assert.That(result, Is.EqualTo(expected));
        // }
    }
}
