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
    public class LocationTypeController : Controller
    {
        readonly open_ssnContext _context;

        public LocationTypeController(open_ssnContext context)
        {
            this._context = context;
        }

        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            var locationTypes = _context.LocationType.ToList();
            return Json(locationTypes);
        }
    }
}