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
    public class OrganizationController : Controller
    {
        readonly open_ssnContext _context;

        public OrganizationController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("search/{searchTerm}")]
        public IActionResult Search(string searchTerm)
        {
            var matchingOrganizations = (from c in _context.Organization
                            where EF.Functions.ILike(c.Name, searchTerm + '%')
                            || EF.Functions.ILike(c.OrganizationNo, searchTerm + '%')
                            select c).Take(10).ToList();
            
            return Json(matchingOrganizations);
        }

        


    }
}
