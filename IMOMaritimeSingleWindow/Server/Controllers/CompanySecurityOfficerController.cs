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
    public class CompanySecurityOfficerController : Controller
    {
        readonly open_ssnContext _context;

        public CompanySecurityOfficerController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpPut()]
        public IActionResult SaveCompanySecurityOfficer([FromBody] CompanySecurityOfficer cso)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                if (_context.CompanySecurityOfficer.Find(cso.CompanySecurityOfficerId) != null)
                {
                    _context.CompanySecurityOfficer.Update(cso);
                }
                else
                {
                    _context.CompanySecurityOfficer.Add(cso);
                }
                _context.SaveChanges();
                return Ok(cso);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

    }
}
