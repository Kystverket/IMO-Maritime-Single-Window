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
    public class ShipStatusController : Controller
    {
        readonly open_ssnContext _context;
        public ShipStatusController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            List<ShipStatus> resultList = _context.ShipStatus.ToList();
            return Json(resultList);
        }
    }
}