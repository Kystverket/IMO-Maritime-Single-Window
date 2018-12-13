using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using static IMOMaritimeSingleWindow.Controllers.ShipController;

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

        [HttpGet("enumValue/{enumValue}")]
        public IActionResult GetByEnum(SHIP_STATUSES enumValue)
        {
            var shipStatus = _context.ShipStatus.Where(x => x.EnumValue == enumValue.ToString()).FirstOrDefault();

            if(shipStatus != null)
            {
                return Json(shipStatus);
            }
            return BadRequest("Could not find ship status by enumvalue: " + enumValue);
        }
    }
}
