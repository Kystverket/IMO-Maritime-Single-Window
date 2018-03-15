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
            if (portCall == null)
            {
                return BadRequest("Empty body");
            }

            if (_context.Ship.Find(portCall.ShipId) == null)
            {
                return BadRequest("Ship with id " + portCall.ShipId + " does not exist.");
            }

            if (_context.Location.Find(portCall.LocationId) == null)
            {
                return BadRequest("Location with ID " + portCall.LocationId + " does not exist.");
            }

            if (_context.Location.Find(portCall.NextLocationId) == null)
            {
                return BadRequest("(NextLocation) Location with ID " + portCall.NextLocationId + " does not exist.");
            }

            if (_context.Location.Find(portCall.PreviousLocationId) == null)
            {
                return BadRequest("(PreviousLocation) Location with ID " + portCall.PreviousLocationId + " does not exist.");
            }

            if (_context.PortCallStatus.Find(portCall.PortCallStatusId) == null)
            {
                return BadRequest("PortCallStatus with ID " + portCall.PortCallStatusId + " does not exist.");
            }

            _context.PortCall.Add(portCall);
            _context.SaveChanges();
            return Json(portCall);
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