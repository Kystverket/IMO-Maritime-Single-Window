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

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class LocationController : Controller
    {
        readonly open_ssnContext _context;

        public LocationController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("search/{searchTerm}")]
        public JsonResult Find(string searchTerm)
        {
            var results = (from loc in _context.Location
                            where EF.Functions.ILike(loc.LocationName, searchTerm + '%')
                            || EF.Functions.ILike(loc.LocationCode, searchTerm + '%')
                            select loc).Take(10).ToList();
            
            List<LocationSearchResult> resultList = new List<LocationSearchResult>();
            foreach(Location loc in results)
            {
                LocationSearchResult searchItem = new LocationSearchResult();
                searchItem.LocationId = loc.LocationId;
                searchItem.LocationName = (loc.LocationName != null) ? loc.LocationName : string.Empty;
                searchItem.LocationCode = (loc.LocationCode != null) ? loc.LocationCode : string.Empty;

                resultList.Add(searchItem);
            }
            return Json(resultList);
        }

        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            Location location = _context.Location.First(loc => loc.LocationId == id);
            return Json(location);
        }
    }
}