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
    public class UserController : Controller
    {
        readonly open_ssnContext _context;

        public UserController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public IActionResult RegisterUser([FromBody] User newUser)
        {
            try
            {
                _context.User.Add(newUser);
                _context.SaveChanges();
            } catch (Exception e) {
                return BadRequest(e.Message + ":\n" + e.InnerException.Message);
            }
            return Ok(newUser);
        }
        
        [HttpGet("{id}")]
        public JsonResult GetUser(int id)
        {
            User user = _context.User.First(t => t.UserId == id);
            return Json(user);
        }

    }
}
