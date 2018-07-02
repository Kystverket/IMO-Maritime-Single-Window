using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class ShipBreadthTypeController : Controller
    {
        readonly open_ssnContext _context;
        public ShipBreadthTypeController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            ShipBreadthType shipBreadthType = _context.ShipBreadthType.FirstOrDefault(c => c.ShipBreadthTypeId == id);
            if (shipBreadthType == null)
            {
                return NotFound();
            }
            return Json(shipBreadthType);
        }

        [HttpGet()]
        public IActionResult GetAll()
        {
            List<ShipBreadthType> resultList = _context.ShipBreadthType.ToList();
            return Json(resultList);
        }
    }
}
