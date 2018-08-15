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
    public class FalSecurityController : Controller
    {
        readonly open_ssnContext _context;

        public FalSecurityController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("~/api/portCall/{portCallId:int}/falSecurity")]
        public IActionResult GetByPortCallId(int portCallId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                FalSecurity falSecurity = _context.FalSecurity.Where(fs => fs.PortCallId == portCallId).FirstOrDefault();
                if (falSecurity == null)
                {
                    return NotFound();
                }
                return Ok(falSecurity);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPut()]
        public IActionResult SaveFalSecurity([FromBody] FalSecurity falSecurity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                if (_context.FalSecurity.Find(falSecurity.FalSecurityId) != null)
                {
                    _context.FalSecurity.Update(falSecurity);
                }
                else
                {
                    _context.FalSecurity.Add(falSecurity);
                }
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpGet("id")]
        public IActionResult GetById(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                FalSecurity falSecurity = _context.FalSecurity.Where(fs => fs.FalSecurityId == id).FirstOrDefault();
                if (falSecurity == null)
                {
                    return NotFound();
                }
                return Ok(falSecurity);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

    }
}
