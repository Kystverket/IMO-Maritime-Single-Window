using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Helpers;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;

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

        [HttpGet("search/{searchTerm}")]
        public IActionResult Search(string searchTerm)
        {
            var sfcList = (from sfc in _context.ShipFlagCode
                           join ctr in _context.Country
                           on sfc.CountryId equals ctr.CountryId
                           where EF.Functions.ILike(sfc.ShipFlagCode1, searchTerm + '%')
                           || EF.Functions.ILike(ctr.Country1, searchTerm + '%')
                           select sfc).Take(10).ToList();

            List<ShipFlagCodeSearchResult> searchList = new List<ShipFlagCodeSearchResult>();

            foreach (ShipFlagCode s in sfcList)
            {
                ShipFlagCodeSearchResult searchResult = new ShipFlagCodeSearchResult();
                searchResult.ShipFlagCodeId = s.ShipFlagCodeId;
                searchResult.ShipFlagCodeName = (s.ShipFlagCode1 != null) ? s.ShipFlagCode1 : string.Empty;

                string countryName = (from c in _context.Country
                                      where c.CountryId == s.CountryId
                                      select c.Country1).FirstOrDefault();

                searchResult.CountryName = (countryName != null) ? countryName : string.Empty;
                searchList.Add(searchResult);
            }
            return Json(searchList);
        }
    }
}