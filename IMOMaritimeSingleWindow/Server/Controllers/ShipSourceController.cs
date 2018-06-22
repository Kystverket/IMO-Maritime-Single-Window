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
    public class ShipSourceController : Controller
    {
        readonly open_ssnContext _context;
        public ShipSourceController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            ShipSource shipSource = _context.ShipSource.FirstOrDefault(c => c.ShipSourceId == id);
            if (shipSource == null)
            {
                return NotFound();
            }
            return Json(shipSource);
        }

        [HttpGet()]
        public IActionResult GetAll()
        {
            List<ShipSource> resultList = _context.ShipSource.ToList();
            return Json(resultList);
        }
    }
}