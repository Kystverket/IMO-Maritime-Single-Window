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

        public List<Location> SearchLocation(string searchTerm)
        {
            return (from loc in _context.Location
                    where (EF.Functions.ILike(loc.Name, searchTerm + '%')
                    || EF.Functions.ILike(loc.LocationCode, searchTerm + '%'))
                    && loc.LocationCode != null && !loc.LocationCode.Equals(string.Empty)
                    select loc).Include(l => l.LocationType).Take(10).ToList();
        }

        [HttpGet("search/{searchTerm}")]
        public JsonResult SearchLocationJson(string searchTerm)
        {
            List<Location> results = SearchLocation(searchTerm);
            List<LocationOverview> resultList = new List<LocationOverview>();

            foreach (Location loc in results)
            {
                LocationOverview locationOverview = new LocationOverview();
                locationOverview.Location = loc;
                locationOverview.Country = _context.Country.Where(c => c.CountryId == loc.CountryId).FirstOrDefault();

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
