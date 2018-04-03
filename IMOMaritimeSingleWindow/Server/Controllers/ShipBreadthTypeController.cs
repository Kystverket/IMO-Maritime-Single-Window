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
    public class ShipBreadthTypeController : Controller
    {
        readonly open_ssnContext _context;
        public ShipBreadthTypeController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            ShipBreadthType shipBreadthType = _context.ShipBreadthType.FirstOrDefault(c => c.ShipBreadthTypeId == id);
            if (shipBreadthType == null)
            {
                return NotFound();
            }
            return Json(shipBreadthType);
        }

        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            List<ShipBreadthType> resultList = _context.ShipBreadthType.ToList();
            return Json(resultList);
        }
    }
}