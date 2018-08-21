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
    public class PersonOnBoardTypeController : Controller
    {
        readonly open_ssnContext _context;

        public PersonOnBoardTypeController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            PersonOnBoardType personOnBoardType = _context.PersonOnBoardType.FirstOrDefault(s => s.PersonOnBoardTypeId == id);
            if (personOnBoardType == null)
            {
                return NotFound();
            }
            return Json(personOnBoardType);
        }

        [HttpGet()]
        public IActionResult GetAll()
        {
            List<PersonOnBoardType> resultList = _context.PersonOnBoardType.OrderBy(s => s.PersonOnBoardTypeId).ToList();
            return Json(resultList);
        }
    }
}
