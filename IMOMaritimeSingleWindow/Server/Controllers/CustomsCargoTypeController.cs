using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class CustomsCargoTypeController : Controller
    {
        readonly open_ssnContext _context;
        public CustomsCargoTypeController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            CustomsCargoType cargoType = _context.CustomsCargoType.FirstOrDefault(c => c.CustomsCargoTypeId == id);
            if (cargoType == null)
            {
                return NotFound();
            }
            return Json(cargoType);
        }

        [HttpGet("all")]
        public IActionResult GetAll()
        {
            List<CustomsCargoType> resultList = _context.CustomsCargoType.ToList();
            return Json(resultList);
        }
    }
}
