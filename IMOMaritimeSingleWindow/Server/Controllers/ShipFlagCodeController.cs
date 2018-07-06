using IMOMaritimeSingleWindow.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class ShipFlagCodeController : Controller
    {
        readonly open_ssnContext _context;

        public ShipFlagCodeController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("search/{searchTerm}/{amount}")]
        public IActionResult Search(int amount, string searchTerm)
        {
            var sfcList = (from sfc in _context.ShipFlagCode
                           join ctr in _context.Country
                           on sfc.CountryId equals ctr.CountryId
                           where EF.Functions.ILike(sfc.Name, searchTerm + '%')
                           || EF.Functions.ILike(ctr.Name, searchTerm + '%')
                           select sfc).Include(sfc => sfc.Country).Take(10).ToList();

            return Json(sfcList);
        }
    }
}
