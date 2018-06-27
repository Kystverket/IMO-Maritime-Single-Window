using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class ShipPowerTypeController : Controller
    {
        readonly open_ssnContext _context;
        public ShipPowerTypeController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            ShipPowerType shipPowerType = _context.ShipPowerType.FirstOrDefault(c => c.ShipPowerTypeId == id);
            if (shipPowerType == null)
            {
                return NotFound();
            }
            return Json(shipPowerType);
        }

        [HttpGet()]
        public IActionResult GetAll()
        {
            List<ShipPowerType> resultList = _context.ShipPowerType.ToList();
            return Json(resultList);
        }
    }
}
