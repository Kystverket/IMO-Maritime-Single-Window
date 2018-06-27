using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class ShipLengthTypeController : Controller
    {
        readonly open_ssnContext _context;
        public ShipLengthTypeController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            ShipLengthType shipLengthType = _context.ShipLengthType.FirstOrDefault(c => c.ShipLengthTypeId == id);
            if (shipLengthType == null)
            {
                return NotFound();
            }
            return Json(shipLengthType);
        }

        [HttpGet()]
        public IActionResult GetAll()
        {
            List<ShipLengthType> resultList = _context.ShipLengthType.ToList();
            return Json(resultList);
        }
    }
}
