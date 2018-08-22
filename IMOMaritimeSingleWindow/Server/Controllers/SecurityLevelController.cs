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
    public class SecurityLevelController : Controller
    {
        readonly open_ssnContext _context;

        public SecurityLevelController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet()]
        public IActionResult GetAll()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                List<SecurityLevel> securityLevelList = _context.SecurityLevel.ToList();
                if (securityLevelList == null || securityLevelList.Count() == 0)
                {
                    return NotFound();
                }
                return Ok(securityLevelList);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

    }
}