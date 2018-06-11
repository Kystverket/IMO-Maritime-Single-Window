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
    public class ContactMediumController : Controller
    {
        readonly open_ssnContext _context;

        public ContactMediumController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet()]
        public IActionResult GetAll()
        {
            List<ContactMedium> contactMediumList = new List<ContactMedium>();
            if (_context.ContactMedium.Count() > 0)
            {
                contactMediumList = _context.ContactMedium.ToList();
            }
            return Json(contactMediumList);
        }
    }
}