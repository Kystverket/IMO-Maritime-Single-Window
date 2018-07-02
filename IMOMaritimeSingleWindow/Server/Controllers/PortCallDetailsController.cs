using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

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
            PortCallDetails portCallDetails = _context.PortCallDetails.FirstOrDefault(details => details.PortCallId == id);
            if (portCallDetails == null)
            {
                return NoContent();
            }
            return Json(portCallDetails);
        }

        [HttpPut()]
        public IActionResult Update([FromBody] PortCallDetails portCallDetails)
        {
            if (!ValidateDetails(portCallDetails))
            {
                return BadRequest("Invalid port call details from data.");
            }
            try
            {
                _context.PortCallDetails.Update(portCallDetails);
                _context.SaveChanges();
            }
            catch (DbUpdateException ex) when (ex.InnerException is Npgsql.PostgresException)
            {
                Npgsql.PostgresException innerEx = (Npgsql.PostgresException)ex.InnerException;
                return BadRequest("PostgreSQL Error Code: " + innerEx.SqlState);
            }
            return Json(portCallDetails);
        }

        [HttpPost()]
        public IActionResult Register([FromBody] PortCallDetails portCallDetails)
        {
            Console.WriteLine("DETAILS ID: " + portCallDetails.PortCallDetailsId + "\n\n\n");
            if (!ValidateDetails(portCallDetails))
            {
                return BadRequest("Invalid port call details form data.");
            }

            try
            {
                if (_context.PortCallDetails.Any(details => details.PortCallDetailsId == portCallDetails.PortCallDetailsId))
                {
                    _context.PortCallDetails.Update(portCallDetails);
                }
                else
                {
                    _context.PortCallDetails.Add(portCallDetails);
                }
                _context.SaveChanges();
            }
            catch (DbUpdateException ex) when (ex.InnerException is Npgsql.PostgresException)
            {
                Npgsql.PostgresException innerEx = (Npgsql.PostgresException)ex.InnerException;
                return BadRequest("PostgreSQL Error Code: " + innerEx.SqlState);
            }

            return Json(portCallDetails);
        }

        private bool ValidateDetails(PortCallDetails portCallDetails)
        {
            return (portCallDetails != null
                && portCallDetails.PortCallId >= 0
                && (portCallDetails.NumberOfCrew == null || portCallDetails.NumberOfCrew >= 0)
                && (portCallDetails.NumberOfPassengers == null || portCallDetails.NumberOfPassengers >= 0)
                && (portCallDetails.ActualDraught == null || portCallDetails.ActualDraught >= 0)
                && (portCallDetails.AirDraught == null || portCallDetails.AirDraught >= 0));
        }
    }
}

