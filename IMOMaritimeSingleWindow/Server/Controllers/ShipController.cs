using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;

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


       // GET: api/<controller>
        //[HttpGet]
        //public JsonResult GetShips()
        //{
        //    List<Ship> = 

        //    return Json(_context.)

        //}

        // GET api/<controller>/5
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
