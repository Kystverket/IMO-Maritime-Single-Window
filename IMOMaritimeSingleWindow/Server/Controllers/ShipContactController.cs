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
    public class ShipContactController : Controller
    {
        readonly open_ssnContext _context;

        public ShipContactController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpPost("save")]
        public IActionResult SaveShipContact(List<ShipContact> shipContactList)
        {
            try
            {
                foreach (ShipContact shipContact in shipContactList)
                {
                    if (_context.ShipContact.Any(sc => sc.ShipContactId == shipContact.ShipContactId))
                    {
                        _context.ShipContact.Update(shipContact);
                    }
                    else
                    {
                        _context.ShipContact.Add(shipContact);
                    }
                }
                _context.SaveChanges();
                return Json(shipContactList);
            }
            catch (DbUpdateException ex) when (ex.InnerException is Npgsql.PostgresException)
            {
                Npgsql.PostgresException innerEx = (Npgsql.PostgresException)ex.InnerException;
                return BadRequest("PostgreSQL Error Code: " + innerEx.SqlState);
            }
        }

        [HttpGet("ship/{shipId}")]
        public IActionResult GetContactListForShip(int shipId)
        {
            List<ShipContact> shipContactList = new List<ShipContact>();
            if (_context.ShipContact.Any(sc => sc.ShipId == shipId))
            {
                shipContactList = _context.ShipContact.Where(sc => sc.ShipId == shipId).ToList();
            }
            return Json(shipContactList);
        }
    }
}