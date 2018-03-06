using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
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
        // ship name, call sign, imo no, mmsi no

        [HttpGet("search/{searchTerm}")]
        public JsonResult Find(string searchTerm) 
        {
            var shipList = _context.Ship
                .Where(s => s.ShipName
                .Contains(searchTerm))
                .OrderBy(s => s.ShipName)
                .Take(10)
                .ToList();

            List<string> shipListNames = new List<string>();
            foreach(Ship s in shipList) {
                Debug.WriteLine(s.ShipName);
                shipListNames.Add(s.ShipName);
            }
            return Json(shipListNames);
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
