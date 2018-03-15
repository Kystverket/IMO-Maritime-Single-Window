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
    public class PortCallController : Controller
    {
        readonly open_ssnContext _context;
        
        public PortCallController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpPost("add")]
        public IActionResult Add([FromBody] PortCall portCall)
        {
            if (portCall != null)
            {
                _context.PortCall.Add(portCall);
                _context.SaveChanges();
                return CreatedAtRoute("api/portcall/" + portCall.PortCallId, portCall);
            }
            return BadRequest();
        }

        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            PortCall portCall = _context.PortCall.FirstOrDefault(pc => pc.PortCallId == id);
            if (portCall == null)
            {
                return null;
            }
            return Json(portCall);
        }
    }
}