using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Helpers;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using IMOMaritimeSingleWindow.Auth;
using Policies = IMOMaritimeSingleWindow.Helpers.Constants.Strings.Policies;
using Claims = IMOMaritimeSingleWindow.Helpers.Constants.Strings.Claims;

namespace IMOMaritimeSingleWindow.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    public class LocationController : Controller
    {
        readonly open_ssnContext _context;

        public LocationController(open_ssnContext context)
        {
            _context = context;
        }

        [HasClaim(Claims.Types.LOCATION, Claims.Values.REGISTER)]
        [HttpPost("register")]
        public IActionResult RegisterLocation([FromBody] Location newLocation)
        {
            try
            {
                _context.Location.Add(newLocation);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message + ":\n" + e.InnerException.Message);
            }
            return Json(newLocation);
        }

        public List<Location> SearchLocation(string searchTerm, bool typeHarbour)
        {
            List<Location> results = new List<Location>();
            if (typeHarbour)
            {
                results = _context.Location.Where(loc => (EF.Functions.ILike(loc.Name, searchTerm + '%')
                                                    || EF.Functions.ILike(loc.LocationCode, searchTerm + '%'))
                                                    && loc.LocationType.Name.Equals("Harbour"))
                                                    .Include(l => l.LocationType)
                                                    .Include(l => l.Country)
                                                    .Take(10).ToList();
            }
            else
            {
                results = _context.Location.Where(loc => (EF.Functions.ILike(loc.Name, searchTerm + '%')
                                                    || EF.Functions.ILike(loc.LocationCode, searchTerm + '%')))
                                                    .Include(l => l.LocationType)
                                                    .Include(l => l.Country)
                                                    .Take(10).ToList();
            }
            return results;
        }

        [HttpGet("search/{searchTerm}")]
        public IActionResult SearchLocationJson(string searchTerm)
        {
            List<Location> results = SearchLocation(searchTerm, false);
            List<LocationOverview> resultList = new List<LocationOverview>();

            foreach (Location loc in results)
            {
                LocationOverview locationOverview = new LocationOverview();
                locationOverview.Location = loc;
                locationOverview.Country = loc.Country;
                resultList.Add(locationOverview);
            }
            return Json(resultList);
        }

        [HttpGet("searchharbour/{searchTerm}")]
        public JsonResult SearchLocationTypeHarbourJson(string searchTerm)
        {
            List<Location> results = SearchLocation(searchTerm, true);
            List<LocationOverview> resultList = new List<LocationOverview>();

            foreach (Location loc in results)
            {
                LocationOverview locationOverview = new LocationOverview();
                locationOverview.Location = loc;
                locationOverview.Country = loc.Country;

                resultList.Add(locationOverview);
            }

            return Json(resultList);
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
    }
}
