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
    public class GenderController : Controller
    {
        readonly open_ssnContext _context;

        public GenderController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Gender gender = _context.Gender.FirstOrDefault(d => d.GenderId == id);
            if (gender == null)
            {
                return NotFound();
            }
            return Json(gender);
        }

        [HttpGet()]
        public IActionResult GetAll()
        {
            List<Gender> resultList = _context.Gender.ToList();
            return Json(resultList);
        }
    }
}