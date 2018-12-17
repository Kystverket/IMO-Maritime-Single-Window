using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class OrganizationTypeController : Controller
    {
        readonly open_ssnContext _context;
        public enum ORGANIZATION_TYPE_ENUM
        {
            AUTHORITY,
            RSO,
            AGENT_COMPANY
        }

        public OrganizationTypeController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet()]
        public IActionResult GetAll()
        {
            List<OrganizationType> organizationTypes = _context.OrganizationType.ToList();
            foreach (OrganizationType orgType in organizationTypes)
            {
                Console.WriteLine(orgType.Name);
            }
            return Json(organizationTypes);
        }


        [HttpGet("ValidTypes")]
        public IActionResult GetValidTypes()
        {
            var validTypes = new string[]
            {
                ORGANIZATION_TYPE_ENUM.RSO.ToString(),
                ORGANIZATION_TYPE_ENUM.AGENT_COMPANY.ToString()
            };

            var organizationTypes = _context.OrganizationType.Where(ot => validTypes.Contains(ot.EnumValue)).ToList();
            foreach (OrganizationType orgType in organizationTypes)
            {
                Console.WriteLine(orgType.Name);
            }
            return Json(organizationTypes);
        }



    }
}
