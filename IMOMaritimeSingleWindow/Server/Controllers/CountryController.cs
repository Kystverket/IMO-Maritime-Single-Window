using IMOMaritimeSingleWindow.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class CountryController : Controller
    {
        readonly open_ssnContext _context;

        public CountryController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("search/{searchTerm}")]
        public IActionResult Search(string searchTerm)
        {
            var countries = _context.Country.Where(c => EF.Functions.ILike(c.Name, searchTerm + '%'))
                                            .Select(c => c)
                                            .Include(c => c.ShipFlagCode)
                                            .Take(10)
                                            .ToList();

            return Json(countries);
        }

        [HttpGet()]
        public IActionResult GetAll()
        {
            var countries = _context.Country.OrderBy(c => c.Name).ToList();
            return Json(countries);
        }




    }
}
