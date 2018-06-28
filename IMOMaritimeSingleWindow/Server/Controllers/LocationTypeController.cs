using IMOMaritimeSingleWindow.Data;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class LocationTypeController : Controller
    {
        readonly open_ssnContext _context;

        public LocationTypeController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet()]
        public IActionResult GetAll()
        {
            var locationTypes = _context.LocationType.ToList();
            return Json(locationTypes);
        }
    }
}
