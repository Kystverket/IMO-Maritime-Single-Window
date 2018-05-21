using System.Collections.Generic;
using System.Linq;
using System;
using IMOMaritimeSingleWindow.Controllers;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;

using Microsoft.EntityFrameworkCore;
using Moq;
using NUnit.Framework;

namespace IMOMaritimeSingleWindow.Tests
{
    [TestFixture]
    public class LocationControllerTest
    {
        private LocationController locationController;
        private Mock<open_ssnContext> mockContext;
        private Mock<DbSet<Location>> mockLocations;


        IQueryable<Location> queryableData;
        List<Location> data;


        [SetUp]
        public void SetUp()
        {
            mockLocations = new Mock<DbSet<Location>>();
            data = new List<Location>
            {
                new Location
                {
                    LocationId = 0, CountryId = 0, LocationTypeId = 0, LocationSourceId = 1234, PostCode = "",

                    LocationCode = "12345678",
                    Name = "ABC123"
                },

                new Location
                {
                    LocationId = 1, CountryId = 0, LocationTypeId = 0, LocationSourceId = 1234, PostCode = "",

                    LocationCode = "12341234",
                    Name = "ABC321"
                },

                new Location
                {
                    LocationId = 2, CountryId = 1, LocationTypeId = 0, LocationSourceId = 1234, PostCode = "",

                    LocationCode = "12345612",
                    Name = "ABX123"
                },

                new Location
                {
                    LocationId = 3, CountryId = 1, LocationTypeId = 0, LocationSourceId = 1234, PostCode = "",

                    LocationCode = null,
                    Name = "ABX123"
                },

                new Location
                {
                    LocationId = 4, CountryId = 1, LocationTypeId = 0, LocationSourceId = 1234, PostCode = "",

                    LocationCode = "XYZXYZ",
                    Name = null
                },

                new Location
                {
                    LocationId = 5, CountryId = 1, LocationTypeId = 0, LocationSourceId = 1234, PostCode = "",

                    LocationCode = null,
                    Name = null
                },
                new Location{},
                new Location{Name = "123456789ABCdef", LocationCode = string.Empty}
            };

            queryableData = data.AsQueryable();

            mockLocations.As<IQueryable<Location>>().Setup(m => m.Provider).Returns(queryableData.Provider);
            mockLocations.As<IQueryable<Location>>().Setup(m => m.Expression).Returns(queryableData.Expression);
            mockLocations.As<IQueryable<Location>>().Setup(m => m.ElementType).Returns(queryableData.ElementType);
            mockLocations.As<IQueryable<Location>>().Setup(m => m.GetEnumerator()).Returns(queryableData.GetEnumerator()); // 0 => data.GetEnumerator?

            mockContext = new Mock<open_ssnContext>();
            mockContext.Setup(m => m.Location).Returns(mockLocations.Object);
            locationController = new LocationController(mockContext.Object);

        }

        [Test]
        public void RegisterLocation_saves_a_location_via_context()
        {
            locationController.RegisterLocation(new Location());
            mockLocations.Verify(m => m.Add(It.IsAny<Location>()), Times.Once());
            mockContext.Verify(m => m.SaveChanges(), Times.Once());
        }

        [TestCase("match")]
        [TestCase("AbC")]
        [TestCase("A")]
        [TestCase("xyz")]
        [TestCase("321")]
        [TestCase("999")]
        [TestCase("1234")]
        [TestCase("12345")]
        public void SearchLocation_returns_expected_result(string searchTerm)
        {
            foreach (Location l in data)
            {
                locationController.RegisterLocation(l);
            }

            var expected = new List<Location>();
            foreach (Location loc in data)
            {
                if (loc.LocationCode != null
                && loc.LocationCode != string.Empty
                && (loc.Name != null && loc.Name.ToUpper().StartsWith(searchTerm.ToUpper())
                || loc.LocationCode.ToUpper().StartsWith(searchTerm.ToUpper()))
                ) expected.Add(loc);
            }

            var result = locationController.SearchLocation(searchTerm, true);

            Assert.That(result, Is.EqualTo(expected));
        }

        [TestCase("test1")]
        public void SearchLocation_does_not_return_location_without_locationCode(string searchTerm)
        {
            locationController.RegisterLocation(new Location
            {
                Name = "test1",
                LocationCode = null
            });

            var expected = new List<Location>();
            var result = locationController.SearchLocation(searchTerm, true);
            Assert.That(result, Is.EqualTo(expected));
        }

        [TestCase("test1")]
        public void SearchLocation_does_not_return_location_with_empty_locationCode(string searchTerm)
        {
            locationController.RegisterLocation(new Location
            {
                Name = "test1",
                LocationCode = string.Empty
            });

            var expected = new List<Location>();
            var result = locationController.SearchLocation(searchTerm, true);
            Assert.That(result, Is.EqualTo(expected));
        }
    }
}
