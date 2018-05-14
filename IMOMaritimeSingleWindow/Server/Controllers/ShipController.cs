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
    public class ShipController : Controller
    {
        readonly open_ssnContext _context;

        public ShipController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public IActionResult RegisterShip([FromBody] Ship newShip)
        {
            try
            {
                _context.Ship.Add(newShip);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message + ":\n" + e.InnerException.Message);
            }
            return Json(newShip);
        }

        public List<Ship> SearchShip(string searchTerm)
        {

            return (from s in _context.Ship
                    where EF.Functions.ILike(s.Name, searchTerm + '%')
                    || EF.Functions.ILike(s.CallSign, searchTerm + '%')
                    || EF.Functions.ILike(s.ImoNo.ToString(), searchTerm + '%')
                    || EF.Functions.ILike(s.MmsiNo.ToString(), searchTerm + '%')
                    select s).Include(s => s.ShipStatus).Include(s => s.ShipContact).Take(10).ToList();
        }

        [HttpGet("search/{searchTerm}")]
        public JsonResult SearchShipWithFlag(string searchTerm)
        {

            List<Ship> results = SearchShip(searchTerm);
            List<ShipOverview> resultList = new List<ShipOverview>();

            foreach (Ship s in results)
            {

                ShipOverview searchItem = new ShipOverview();
                searchItem.Ship = s;

                // Find country id so we can get the country's 2CC which is used to add flags
                var cId = (from sfc in _context.ShipFlagCode
                           where sfc.ShipFlagCodeId == s.ShipFlagCodeId
                           select sfc.CountryId).FirstOrDefault();

                searchItem.Country = (from c in _context.Country
                                      where c.CountryId == cId
                                      select c).FirstOrDefault();

                searchItem.ShipType = (from st in _context.ShipType
                                       where st.ShipTypeId == s.ShipTypeId
                                       select st).FirstOrDefault();

                searchItem.ShipStatus = s.ShipStatus;
                searchItem.ContactList = s.ShipContact.ToList();
                resultList.Add(searchItem);

            }
            return Json(resultList);
        }

        [HttpGet("{id}")]
        public JsonResult GetShip(int id)
        {
            Ship ship = _context.Ship.First(t => t.ShipId == id);
            return Json(ship);
        }

    }
}
