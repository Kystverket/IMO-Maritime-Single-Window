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
    public class ShipHullTypeController : Controller
    {
        readonly open_ssnContext _context;
        public ShipHullTypeController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            ShipHullType shipHullType = _context.ShipHullType.FirstOrDefault(c => c.ShipHullTypeId == id);
            if (shipHullType == null)
            {
                return NotFound();
            }
            return Json(shipHullType);
        }

        [HttpGet()]
        public IActionResult GetAll()
        {
            List<ShipHullType> resultList = _context.ShipHullType.ToList();
            return Json(resultList);
        }
    }
}