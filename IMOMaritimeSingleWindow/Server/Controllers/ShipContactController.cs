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

        [HttpPost("list")]
        public IActionResult SaveShipContactList([FromBody] List<ShipContact> shipContactList)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var shipIdList = shipContactList.Select(sc => sc.ShipId).ToList();
                var removeList = _context.ShipContact.Where(sc => shipContactList.Any(contactEntity => contactEntity.ShipId == sc.ShipId));
                _context.ShipContact.RemoveRange(removeList);
                _context.ShipContact.AddRange(shipContactList);
                _context.SaveChanges();
                return Json(shipContactList);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPut("list")]
        public IActionResult UpdateShipContactList([FromBody] List<ShipContact> shipContactList)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                foreach (ShipContact contactEntity in shipContactList)
                {
                    Console.WriteLine("\n\n" + contactEntity.ContactValue);
                    if (_context.ShipContact.Any(sc => sc.ShipContactId == contactEntity.ShipContactId))
                    {
                        _context.Update(contactEntity);
                    }
                    else
                    {
                        _context.Add(contactEntity);
                    }
                }
                _context.SaveChanges();
                return Json(shipContactList);
            }
            catch (Exception e)
            {
                return BadRequest(e);
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