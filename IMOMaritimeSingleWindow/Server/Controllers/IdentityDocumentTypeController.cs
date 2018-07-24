using IMOMaritimeSingleWindow.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class IdentityDocumentTypeController : Controller
    {
        readonly open_ssnContext _context;

        public IdentityDocumentTypeController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet()]
        public IActionResult GetAll()
        {
            return Json(_context.IdentityDocumentType.ToList());
        }
    }
}
