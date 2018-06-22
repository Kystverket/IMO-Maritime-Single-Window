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
    public class ShipTypeController : Controller
    {
        readonly open_ssnContext _context;
        public ShipTypeController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            ShipType shipType = _context.ShipType.FirstOrDefault(c => c.ShipTypeId == id);
            if (shipType == null)
            {
                return NotFound();
            }
            return Json(shipType);
        }

        [HttpGet()]
        public IActionResult GetAll()
        {
            List<ShipType> resultList = _context.ShipType.ToList();
            return Json(resultList);
        }
    }
}