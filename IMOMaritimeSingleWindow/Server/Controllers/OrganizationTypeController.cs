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
    public class OrganizationTypeController : Controller
    {
        readonly open_ssnContext _context;

        public OrganizationTypeController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            List<OrganizationType> organizationTypes = _context.OrganizationType.ToList();
            foreach(OrganizationType orgType in organizationTypes)
            {
                Console.WriteLine(orgType.Name);
            }
            return Json(organizationTypes);
        }

        


    }
}