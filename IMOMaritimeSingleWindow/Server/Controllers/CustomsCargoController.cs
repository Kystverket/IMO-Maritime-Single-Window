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
    public class CustomsCargoController : Controller
    {
        readonly open_ssnContext _context;

        public CustomsCargoController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            CustomsCargo cargo = _context.CustomsCargo.FirstOrDefault(c => c.CustomsCargoId == id);
            if (cargo == null)
            {
                return NotFound();
            }
            return Json(cargo);
        }

        [HttpPost("add")]
        public IActionResult Add(CustomsCargo cargo)
        {
            if (cargo == null)
            {
                return BadRequest("Empty request body.");
            }
            _context.CustomsCargo.Add(cargo);
            _context.SaveChanges();
            return Ok(cargo);
        }
    }
}