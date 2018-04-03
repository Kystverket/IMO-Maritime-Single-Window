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
    public class DpgController : Controller
    {
        readonly open_ssnContext _context;

        public DpgController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Dpg dpg = _context.Dpg.FirstOrDefault(d => d.DpgId == id);
            if (dpg == null)
            {
                return NotFound();
            }
            return Json(dpg);
        }

        [HttpGet("all")]
        public IActionResult GetAll()
        {
            List<Dpg> resultList = _context.Dpg.OrderBy(d => d.TextualReference).ToList();
            return Json(resultList);
        }

        [HttpPost("add")]
        public IActionResult Add(Dpg dpg)
        {
            if (dpg == null)
            {
                return BadRequest("Empty body.");
            }

            _context.Dpg.Add(dpg);
            _context.SaveChanges();
            return Ok(dpg);
        }
    }
}