using IMOMaritimeSingleWindow.Auth;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using Claims = IMOMaritimeSingleWindow.Helpers.Constants.Strings.Claims;

namespace IMOMaritimeSingleWindow.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    public class LocationController : Controller
    {
        readonly IDbContext _context;

        public LocationController(IDbContext context)
        {
            _context = context;
        }
        public enum LOCATION_SOURCES
        {
            IMO_INTERNAL,
            IMO_EXTERNAL
        }

        public enum LOCATION_TYPES
        {
            HARBOUR
        }

        [HasClaim(Claims.Types.LOCATION, Claims.Values.REGISTER)]
        [HttpPost()]
        public IActionResult RegisterLocation([FromBody] Location newLocation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!_context.Location.Any(x => x.LocationCode == newLocation.LocationCode))
            {


                try
                {
                    _context.Location.Add(newLocation);
                    _context.SaveChanges();
                }
                catch (Exception e)
                {
                    return BadRequest(e);
                }
                return Json(newLocation);
            }

            return BadRequest("Location Code not unique.");

        }

        [HasClaim(Claims.Types.LOCATION, Claims.Values.REGISTER)]
        [HttpPut()]
        public IActionResult UpdateLocation([FromBody] Location location)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                _context.Location.Update(location);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
            return Json(location);
        }

        public List<Location> SearchLocation(string searchTerm, bool typeHarbour, int amount = 10)
        {
            List<Location> results = new List<Location>();
            if (typeHarbour)
            {
                results = _context.Location.Where(loc => (EF.Functions.ILike(loc.Name, searchTerm + '%')
                                                    || EF.Functions.ILike(loc.LocationCode, searchTerm + '%'))
                                                    && loc.LocationType.Name.Equals("Harbour"))
                                                    .Include(l => l.LocationType)
                                                    .Include(l => l.Country)
                                                    .Take(amount).ToList();
            }
            else
            {
                results = _context.Location.Where(loc => (EF.Functions.ILike(loc.Name, '%' + searchTerm + '%')
                                                    || EF.Functions.ILike(loc.LocationCode, '%' + searchTerm + '%')))
                                                    .Include(l => l.LocationType)
                                                    .Include(l => l.Country)
                                                    .Take(amount).ToList();
            }
            return results;
        }

        [HttpGet("search/{searchTerm}/{amount}")]
        public IActionResult SearchLocationJson(string searchTerm, int amount)
        {
            List<Location> results = SearchLocation(searchTerm, false, amount);
            return Json(results);
        }

        [HttpGet("harbour/search/{searchTerm}/{amount}")]
        public IActionResult SearchLocationTypeHarbourJson(string searchTerm, int amount)
        {
            List<Location> results = SearchLocation(searchTerm, true, amount);
            return Json(results);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Location location = _context.Location.FirstOrDefault(loc => loc.LocationId == id);
            if (location == null)
            {
                return BadRequest();
            }
            return Json(location);
        }

        [HttpGet("placeholder")]
        public JsonResult GetPlaceholderData()
        {
            var placeholderLocations = _context.Location.
                OrderByDescending(l => l.LocationId)
                .Include(l => l.LocationType)
                .Include(l => l.Country)
                .Take(10)
                .ToList();

            return Json(placeholderLocations);
        }

        [HttpGet("locationSourceInternal")]
        public IActionResult GetLocationSource()
        {
            var locationSource = _context.LocationSource.FirstOrDefault(ls => ls.EnumValue == LOCATION_SOURCES.IMO_INTERNAL.ToString());

            return Json(locationSource);
        }
    }
}
