using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

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
            if (_context.ContactMedium.Any())
                contactMediumList = _context.ContactMedium.ToList();
            return Json(contactMediumList);
        }
    }
}
