using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class ShipSourceController : Controller
    {
        readonly open_ssnContext _context;
        public ShipSourceController(open_ssnContext context)
        {
            _context = context;
        }
        enum SHIP_SOURCES
        {
            IMO_INTERNAL,
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            ShipSource shipSource = _context.ShipSource.FirstOrDefault(c => c.ShipSourceId == id);
            if (shipSource == null)
            {
                return NotFound();
            }
            return Json(shipSource);
        }

        [HttpGet()]
        public IActionResult GetAll()
        {
            List<ShipSource> resultList = _context.ShipSource.ToList();
            return Json(resultList);
        }

        [HttpGet("shipSourceInternal")]
        public IActionResult GetShipSource()
        {
            var locationSource = _context.ShipSource.FirstOrDefault(ls => ls.EnumValue == SHIP_SOURCES.IMO_INTERNAL.ToString());

            return Json(locationSource);
        }
    }
}
