using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class DpgController : Controller
    {
        readonly open_ssnContext _context;

        public DpgController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Dpg dpg = _context.Dpg.FirstOrDefault(d => d.DpgId == id);
            if (dpg == null)
            {
                return NotFound();
            }
            return Json(dpg);
        }

        [HttpGet("all")]
        public IActionResult GetAll()
        {
            List<Dpg> resultList = _context.Dpg.OrderBy(d => d.TextualReference).ToList();
            return Json(resultList);
        }

        [HttpPost("add")]
        public IActionResult Add(Dpg dpg)
        {
            if (dpg == null)
            {
                return BadRequest("Empty body.");
            }

            _context.Dpg.Add(dpg);
            _context.SaveChanges();
            return Ok(dpg);
        }

        [HttpGet("search/{searchTerm}/{amount}/{dpgTypeId}")]
        public JsonResult SearchDpgJson(int amount, string searchTerm, int dpgTypeId)
        {
            List<Dpg> results = SearchDpg(searchTerm, dpgTypeId, amount);
            return Json(results);
        }

        public List<Dpg> SearchDpg(string searchTerm, int dpgTypeId, int amount = 10)
        {
            if (searchTerm.All(c => c >= '0' && c <= '9'))   // Checks if search only contains numbers
            {
                searchTerm += '%';
                return _context.Dpg.Where(dpg =>
                         EF.Functions.ILike(dpg.UnNumber, searchTerm)
                         && dpg.DpgType.DpgTypeId == dpgTypeId)
                         .Select(x => x).Take(amount).ToList();
            }
            searchTerm += '%';

            return _context.Dpg.Where(dpg =>
                    EF.Functions.ILike(dpg.TextualReference, searchTerm)
                         && dpg.DpgType.DpgTypeId == dpgTypeId)
                         .Select(x => x).Take(amount).ToList();
        }
    }
}
