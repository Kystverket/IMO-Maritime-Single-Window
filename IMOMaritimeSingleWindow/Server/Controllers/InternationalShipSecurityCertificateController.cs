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
    public class InternationalShipSecurityCertificateController : Controller
    {
        readonly open_ssnContext _context;

        public InternationalShipSecurityCertificateController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpPut()]
        public IActionResult SaveInternationalShipSecurityCertificate([FromBody] InternationalShipSecurityCertificate issc)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                if (issc.IsscId > 0)
                {
                    _context.InternationalShipSecurityCertificate.Update(issc);
                }
                else
                {
                    _context.InternationalShipSecurityCertificate.Add(issc);
                }
                _context.SaveChanges();
                return Ok(issc);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

    }
}
