using IMOMaritimeSingleWindow.Auth;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using Claims = IMOMaritimeSingleWindow.Helpers.Constants.Strings.Claims;

namespace IMOMaritimeSingleWindow.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    public class ShipController : Controller
    {
        readonly IDbContext _context;

        public ShipController(IDbContext context)
        {
            _context = context;
        }

        public enum SHIP_STATUSES {
            TO_BE_PROCESSED,
            INACTIVE,
            ACTIVE
        }

        [HasClaim(Claims.Types.SHIP, Claims.Values.REGISTER)]
        [HttpPost()]
        public IActionResult RegisterShip([FromBody] Ship newShip)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                if (newShip.ShipContact != null && newShip.ShipContact.Count > 0) // dirty fix
                {
                    foreach (ShipContact sc in newShip.ShipContact)
                    {
                        sc.ContactMedium = null;
                    }
                }
                _context.Ship.Add(newShip);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
            return Json(newShip);
        }

        [HasClaim(Claims.Types.SHIP, Claims.Values.REGISTER)]
        [HttpPut()]
        public IActionResult UpdateShip([FromBody] Ship ship)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                _context.Ship.Update(ship);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
            return Json(ship);
        }

        [HttpPut("{shipId}/internationalShipSecurityCertificate/isscId")]
        public IActionResult UpdateIsscId(int shipId, [FromBody] long isscId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                Ship ship = _context.Ship.Where(s => s.ShipId == shipId).FirstOrDefault();
                if (ship == null)
                {
                    return NotFound();
                }
                ship.IsscId = isscId;
                _context.Ship.Update(ship);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
            return Ok(isscId);
        }

        public List<Ship> SearchShip(SHIP_STATUSES? EnumValue, string searchTerm, int amount = 10)
        {
            var result = new List<Ship>();

            if (searchTerm.All(c => c >= '0' && c <= '9'))   // Checks if search only contains numbers
            {
                searchTerm += '%';
                result = _context.Ship.Where(s =>
                            EF.Functions.ILike(s.Name, searchTerm)
                            || EF.Functions.ILike(s.Name, "% " + searchTerm + '%') //search for words in name
                            || EF.Functions.ILike(s.CallSign, searchTerm)
                            || EF.Functions.ILike(s.ImoNo.ToString(), searchTerm)
                            || EF.Functions.ILike(s.MmsiNo.ToString(), searchTerm))
                            .Select(s => s)
                            .Include(s => s.ShipFlagCode.Country)
                            .Include(s => s.ShipStatus)
                            .Take(amount)
                            .ToList();
            }
            else
            {
                searchTerm += '%';
                result = _context.Ship.Where(s =>
                            EF.Functions.ILike(s.Name, searchTerm)
                            || EF.Functions.ILike(s.Name, "% " + searchTerm + '%') //search for words in name
                            || EF.Functions.ILike(s.CallSign, searchTerm))
                            .Select(s => s)
                            .Include(s => s.ShipFlagCode.Country)
                            .Include(s => s.ShipStatus)
                            .Take(amount)
                            .ToList();
            }

            if(EnumValue != null)
                result = result.Where(x => x.ShipStatus.EnumValue == EnumValue.ToString()).ToList();

            return result;
        }

        [HttpGet("search/{searchTerm}/{amount}")]
        public JsonResult SearchShipJson(int amount, string searchTerm)
        {
            List<Ship> results = SearchShip(null, searchTerm, amount);
            return Json(results);
        }

        [HttpGet("search/{searchTerm}/{amount}/{EnumValue}")]
        public IActionResult SearchShipByStatusJson(int amount, string searchTerm, SHIP_STATUSES? enumValue)
        {
            var results = SearchShip(enumValue, searchTerm, amount);
            return Json(results);
        }

        [HttpGet("{id}")]
        public JsonResult GetShip(int id)
        {
            Ship ship = _context.Ship.Where(t => t.ShipId == id)
                        .Include(s => s.ShipStatus)
                        .Include(s => s.ShipContact)
                            .ThenInclude(sc => sc.ContactMedium)
                        .Include(s => s.ShipFlagCode.Country)
                        .Include(s => s.ShipType)
                        .Include(s => s.ShipPowerType)
                        .Include(s => s.ShipLengthType)
                        .Include(s => s.ShipSource)
                        .Include(s => s.Organization)
                        .Include(s => s.ShipHullType)
                        .Include(s => s.ShipBreadthType)
                        .Include(s => s.CertificateOfRegistry.PortLocation.LocationType)
                        .Include(s => s.CertificateOfRegistry.PortLocation.Country)
                        .Include(s => s.Issc).ThenInclude(issc => issc.GovernmentIssuer)
                        .Include(s => s.Issc).ThenInclude(issc => issc.RsoIssuer)
                        .FirstOrDefault();
            return Json(ship);
        }

        [HttpGet("placeholder")]
        public JsonResult GetPlaceholderData()
        {
            var placeholderShips = _context.Ship.
                OrderByDescending(s => s.ShipId)
                .Include(s => s.ShipFlagCode.Country)
                .Take(10)
                .ToList();

            return Json(placeholderShips);
        }

    }
}
