using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using Microsoft.EntityFrameworkCore;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class PortCallDetailsController : Controller
    {
        readonly open_ssnContext _context;

        public PortCallDetailsController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("portcall/{id}")]
        public IActionResult GetByPortCallId(int id)
        {
            PortCallDetails portCallDetails = _context.PortCallDetails.Where(details => details.PortCallId == id).FirstOrDefault();
            if (portCallDetails == null)
            {
                return NoContent();
            }
            return Json(portCallDetails);
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] PortCallDetails portCallDetails)
        {
            if (!validateDetails(portCallDetails))
            {
                return Json("Invalid port call details form data.");
            }

            try
            {
                _context.PortCallDetails.Add(portCallDetails);
                _context.SaveChanges();
            } 
            catch (DbUpdateException ex) when (ex.InnerException is Npgsql.PostgresException)
            {
                Npgsql.PostgresException innerEx = (Npgsql.PostgresException)ex.InnerException;
                return BadRequest("PostgreSQL Error Code: " + innerEx.SqlState);
            }

            return Json(portCallDetails);
        }

        private bool validateDetails(PortCallDetails portCallDetails)
        {
            return (portCallDetails != null 
                && portCallDetails.PortCallId >= 0 
                && (portCallDetails.CargoGrossWeight == null || portCallDetails.CargoGrossWeight >= 0)
                && (portCallDetails.CargoGrossGrossWeight == null || portCallDetails.CargoGrossGrossWeight >= 0)
                && (portCallDetails.NumberOfCrew == null || portCallDetails.NumberOfCrew >= 0)
                && (portCallDetails.NumberOfPassengers == null || portCallDetails.NumberOfPassengers >= 0)
                && (portCallDetails.ActualDraught == null || portCallDetails.ActualDraught >= 0)
                && (portCallDetails.AirDraught == null || portCallDetails.AirDraught >= 0));
        }
    }
}

