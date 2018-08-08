using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class PackageTypeController : Controller
    {
        readonly open_ssnContext _context;

        public PackageTypeController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public IActionResult GetAll()
        {
            List<PackageType> packageTypes = _context.PackageType.ToList();
            return Json(packageTypes);
        }




    }
}