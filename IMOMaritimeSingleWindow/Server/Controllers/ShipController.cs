using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
//using System.Data.Objects.SqlClient;
using Microsoft.AspNetCore.Mvc;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Helpers;
using System.Diagnostics;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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

        [HttpGet("search/{searchTerm}")]
        public JsonResult Find(string searchTerm) 
        {
            var results = (from s in _context.Ship
                            where s.ShipName.StartsWith(searchTerm.ToUpper())
                            || s.CallSign.StartsWith(searchTerm.ToUpper())
                            || s.ImoNo.ToString().StartsWith(searchTerm)
                            || s.MmsiNo.ToString().StartsWith(searchTerm)
                            select s).Take(10).ToList();

            
            List<string> returnList = new List<string>();
            List<ShipSearchResult> resultList = new List<ShipSearchResult>();
            foreach(Ship s in results) {
                
                ShipSearchResult searchItem = new ShipSearchResult();
                searchItem.ShipId = s.ShipId; // TODO: deal with nullpointerexception?
                searchItem.ShipName = (s.ShipName != null) ? s.ShipName : string.Empty;
                searchItem.CallSign = (s.CallSign != null) ? s.CallSign : string.Empty;
                searchItem.ImoNo = (s.ImoNo != null) ? s.ImoNo.ToString() : string.Empty;
                searchItem.MmsiNo = (s.MmsiNo != null) ? s.MmsiNo.ToString() : string.Empty;

                var cId = (from sfc in _context.ShipFlagCode
                            where sfc.ShipFlagCodeId == s.ShipFlagCodeId
                            select sfc.CountryId).First();

                searchItem.TwoCharCode = (from c in _context.Country
                                            where c.CountryId == cId
                                            select c.TwoCharCode).First().ToString();

                resultList.Add(searchItem);

            }
            return Json(resultList);
        }



        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            Ship ship = _context.Ship.First(t => t.ShipId == id);
            return Json(ship);
        }





        //// POST api/<controller>
        //[HttpPost]
        //public void Post([FromBody]Ship ship)
        //{
        //    _context.Ship.Add(ship);
        //    _context.SaveChanges();
        //}

        //// PUT api/<controller>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]Ship ship)
        //{
            
        //    _context.Ship.Update(ship);
        //    _context.SaveChanges();
        //}

        //// DELETE api/<controller>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
