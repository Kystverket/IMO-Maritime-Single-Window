using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
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

        [HttpGet("{name}")]
        public IActionResult GetByName(string name) {
            var country = _context.Country.Where(c => EF.Functions.ILike(c.Name, name + '%'))
                                            .Select(c => c)
                                            .Take(1)
                                            .ToList();
            if (country == null) {
                return NotFound();
            }
            return Json(country);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id) {
            var country = _context.Country.FirstOrDefault(c => c.CountryId == id);
            if (country == null) {
                return NotFound();
            }
            return Json(country);
        }




    }
}
