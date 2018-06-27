using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class ShipStatusController : Controller
    {
        readonly open_ssnContext _context;
        public ShipStatusController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet()]
        public IActionResult GetAll()
        {
            List<ShipStatus> resultList = _context.ShipStatus.ToList();
            return Json(resultList);
        }
    }
}
