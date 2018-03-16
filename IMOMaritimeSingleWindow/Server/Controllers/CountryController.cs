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
            var matchingCompanies = (from c in _context.Country
                                     where EF.Functions.ILike(c.Country1, searchTerm + '%')
                                     select c).Take(10).ToList();

            List<CountrySearchResult> resultList = new List<CountrySearchResult>();

            foreach (Country c in matchingCompanies)
            {
                CountrySearchResult searchItem = new CountrySearchResult();
                searchItem.CountryId = c.CountryId;
                searchItem.CountryName = (c.Country1 != null) ? c.Country1 : string.Empty;
                searchItem.TwoCharCode = (c.TwoCharCode != null) ? c.TwoCharCode.ToLower() : string.Empty;

                var flagCodes = (from fc in _context.ShipFlagCode
                                    where fc.CountryId == c.CountryId
                                    select fc).ToList();

                List<ShipFlagCodeSearchResult> flagCodeList = new List<ShipFlagCodeSearchResult>();
                foreach(ShipFlagCode sfc in flagCodes)
                {
                    ShipFlagCodeSearchResult sfcSearchResult = new ShipFlagCodeSearchResult();
                    sfcSearchResult.ShipFlagCodeId = sfc.ShipFlagCodeId;
                    sfcSearchResult.ShipFlagCodeName = (sfc.ShipFlagCode1 != null) ? sfc.ShipFlagCode1 : string.Empty;
                    flagCodeList.Add(sfcSearchResult);
                }
                searchItem.CountryFlagCodes = flagCodeList;

                resultList.Add(searchItem);
            }
            return Json(resultList);
        }




    }
}