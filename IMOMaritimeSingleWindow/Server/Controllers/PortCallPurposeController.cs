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
    public class PortCallPurposeController : Controller
    {
        readonly open_ssnContext _context;
        
        public PortCallPurposeController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("all")]
        public IActionResult GetAll()
        {
            List<PortCallPurpose> results = _context.PortCallPurpose.ToList();
            return Json(results);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            PortCallPurpose purpose = _context.PortCallPurpose.FirstOrDefault(p => p.PortCallPurposeId == id);
            if (purpose == null)
            {
                return NotFound();
            }
            return Json(purpose);
        }
    }


}