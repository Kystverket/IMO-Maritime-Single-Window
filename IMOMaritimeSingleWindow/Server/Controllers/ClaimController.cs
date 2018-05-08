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
    public class ClaimController : Controller
    {
        readonly open_ssnContext _context;

        public ClaimController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            var claimList = _context.Claim.Include(c => c.ClaimType).ToList();
            return Json(claimList);
        }

        [HttpGet("type/portcall")]
        public IActionResult GetAllTypePortCall()
        {
            var portCallClaimList = _context.Claim.Where(c => Constants.Guids.CLAIM_TYPE_PORT_CALL_GUID.Equals(c.ClaimTypeId.ToString())).Include(c => c.ClaimType).ToList();
            return Json(portCallClaimList);
        }

        [HttpGet("type/menu")]
        public IActionResult GetAllTypeMenu()
        {
            var menuClaimList = _context.Claim.Where(c => Constants.Guids.CLAIM_TYPE_MENU_GUID.Equals(c.ClaimTypeId.ToString())).Include(c => c.ClaimType).ToList();
            return Json(menuClaimList);
        }
    }
}