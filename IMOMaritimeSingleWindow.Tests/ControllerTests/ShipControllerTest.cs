using System;
using System.Diagnostics;
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
                    Name = "match_shipName0",
                    CallSign = "ABC123",
                    ImoNo = "999111",
                    MmsiNo = "1234111"
                },

                new Ship 
                {
                    ShipId = 1, ShipHullTypeId = 0, ShipStatusId = 0, 
                    ShipSourceId = 0, ShipFlagCodeId = 0, ShipTypeId = 0,
                    Name = "match_shipName1",
                    CallSign = "321DEF",
                    ImoNo = "999222",
                    MmsiNo = "1234222",
                },

                new Ship 
                {
                    ShipId = 2, ShipHullTypeId = 0, ShipStatusId = 0, 
                    ShipSourceId = 0, ShipFlagCodeId = 0, ShipTypeId = 0,
                    Name = "noMatch_shipName2",
                    CallSign = "321GHI",
                    ImoNo = "111999",
                    MmsiNo = "123999"
                },

                new Ship {
                    // Empty test
                },

                new Ship {
                    Name = "",
                    CallSign = "",
                    ImoNo = null,
                    MmsiNo = "123789"
                },

                new Ship {
                    Name = null,
                    CallSign = null,
                    ImoNo = "321394893",
                    MmsiNo = null
                },

                new Ship {
                    Name = "",
                    CallSign = "321ABCDEF"
                },

                new Ship {
                    Name = null,
                    CallSign = null,
                    ImoNo = null,
                    MmsiNo = null
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
            foreach(Ship s in data)
            {
                shipController.RegisterShip(s);
            }
            
            var expected = new List<Ship>();
            foreach(Ship s in data)
            {
                if (s.Name != null && s.Name.ToLower().StartsWith(searchTerm.ToLower()) 
                || s.CallSign != null && s.CallSign.ToLower().StartsWith(searchTerm.ToLower())
                || s.ImoNo != null && s.ImoNo.ToString().ToLower().StartsWith(searchTerm.ToLower())
                || s.MmsiNo != null && s.MmsiNo.ToString().ToLower().StartsWith(searchTerm.ToLower())) expected.Add(s);
            }

            var result = shipController.SearchShip(searchTerm);

            Assert.That(result, Is.EqualTo(expected));
        }
    }
}
