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
    public class CompanyController : Controller
    {
        readonly open_ssnContext _context;

        public CompanyController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("search/{searchTerm}")]
        public IActionResult Search(string searchTerm)
        {
            var matchingCompanies = (from c in _context.Company
                            where EF.Functions.ILike(c.Name, searchTerm + '%')
                            || EF.Functions.ILike(c.OrgNo, searchTerm + '%')
                            select c).Take(10).ToList();
            
            List<CompanySearchResult> resultList = new List<CompanySearchResult>();

            foreach (Company c in matchingCompanies)
            {
                CompanySearchResult searchItem = new CompanySearchResult();
                searchItem.CompanyId = c.CompanyId;
                searchItem.Name = (c.Name != null) ? c.Name : string.Empty;
                searchItem.OrgNo = (c.OrgNo != null) ? c.OrgNo : string.Empty;

                resultList.Add(searchItem);
            }
            return Json(resultList);
        }

        


    }
}