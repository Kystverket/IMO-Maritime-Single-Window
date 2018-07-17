using System;
using IMOMaritimeSingleWindow.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Extensions;
using Npgsql;
using System.Data.SqlClient;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class CertificateOfRegistryController : Controller
    {
        readonly open_ssnContext _context;

        public CertificateOfRegistryController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpPost()]
        public IActionResult AddCertificateOfRegistry([FromBody] CertificateOfRegistry certificate)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                _context.CertificateOfRegistry.Add(certificate);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPut()]
        public IActionResult UpdateCertificateOfRegistry([FromBody] CertificateOfRegistry certificate)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                _context.CertificateOfRegistry.Update(certificate);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}