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
            } catch (Exception e) {
                return BadRequest(e.Message + ":\n" + e.InnerException.Message);
            }
            return Ok(newShip);
        }

        public List<Ship> SearchShip(string searchTerm)
        {
            return (from s in _context.Ship
                    where EF.Functions.ILike(s.ShipName, searchTerm + '%')
                    || EF.Functions.ILike(s.CallSign, searchTerm + '%')
                    || EF.Functions.ILike(s.ImoNo.ToString(), searchTerm + '%')
                    || EF.Functions.ILike(s.MmsiNo.ToString(), searchTerm + '%')
                    select s).Take(10).ToList();
        }

        [HttpGet("search/{searchTerm}")]
        public JsonResult SearchShipWithFlag(string searchTerm)
        {
            
            List<Ship> results = SearchShip(searchTerm);
            List<ShipSearchResult> resultList = new List<ShipSearchResult>();

            foreach (Ship s in results)
            {

                ShipSearchResult searchItem = new ShipSearchResult();
                searchItem.ShipId = s.ShipId; // TODO: deal with nullpointerexception?
                searchItem.ShipName = (s.ShipName != null) ? s.ShipName : string.Empty;
                searchItem.CallSign = (s.CallSign != null) ? s.CallSign : string.Empty;
                searchItem.ImoNo = s.ImoNo;
                searchItem.MmsiNo = s.MmsiNo;
                searchItem.ShipHullTypeId = s.ShipHullTypeId;
                searchItem.ShipStatusId = s.ShipStatusId;
                searchItem.ShipPowerTypeId =  s.ShipPowerTypeId;
                searchItem.ShipBreadthTypeId = s.ShipBreadthTypeId;
                searchItem.ShipLengthTypeId = s.ShipLengthTypeId;
                searchItem.ShipSourceId = s.ShipSourceId;
                searchItem.ShipFlagCodeId = s.ShipFlagCodeId;
                searchItem.CompanyId = s.CompanyId;
                searchItem.ShipTypeId = s.ShipTypeId;
                searchItem.YearOfBuild = s.YearOfBuild;
                searchItem.DeadweightTonnage = s.DeadweightTonnage;
                searchItem.GrossTonnage = s.GrossTonnage;
                searchItem.ShipLength = s.ShipLength;
                searchItem.Breadth = s.Breadth;
                searchItem.Power = s.Power;
                searchItem.Height = s.Height;
                searchItem.Draught = s.Draught;
                searchItem.HasSideThrusters = s.HasSideThrusters;
                searchItem.HasSideThrustersBack = s.HasSideThrustersBack;
                searchItem.Remark = s.Remark;
                
                // Find country id so we can get the country's 2CC which is used to add flags
                var cId = (from sfc in _context.ShipFlagCode
                           where sfc.ShipFlagCodeId == s.ShipFlagCodeId
                           select sfc.CountryId).FirstOrDefault();

                searchItem.TwoCharCode = (from c in _context.Country
                                          where c.CountryId == cId
                                          select c.TwoCharCode).First().ToString().ToLower();

                searchItem.ShipTypeName = (from st in _context.ShipType
                                    where st.ShipTypeId == searchItem.ShipTypeId
                                    select st.ShipType1).FirstOrDefault();


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
