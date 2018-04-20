using System;
using System.Linq;
using IMOMaritimeSingleWindow.Data;
using Microsoft.AspNetCore.Mvc;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class OrganizationPortCallController : Controller
    {
        readonly open_ssnContext _context;

        public OrganizationPortCallController(open_ssnContext context)
        {
            _context = context;
        }

        // [HttpGet("organization/{id}")]
        // public IActionResult GetByOrganizationId(int id)
        // {
        //     var results = _context.OrganizationPortCall.Where(opc => id == opc.OrganizationId);

        // }

    }
}