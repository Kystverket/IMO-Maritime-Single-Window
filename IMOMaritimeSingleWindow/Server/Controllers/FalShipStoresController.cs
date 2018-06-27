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
    public class FalShipStoresController : Controller
    {
        readonly open_ssnContext _context;

        public FalShipStoresController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpPost("list")]
        public IActionResult AddList([FromBody] List<FalShipStores> shipStoresList)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var portCallIdList = shipStoresList.Select(s => s.PortCallId).ToList();
                var removeList = _context.FalShipStores.Where(s => shipStoresList.Any(shipStoresEntity => shipStoresEntity.PortCallId == s.PortCallId));
                _context.FalShipStores.RemoveRange(removeList);
                _context.FalShipStores.AddRange(shipStoresList);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPut("list")]
        public IActionResult UpdateList([FromBody] List<FalShipStores> shipStoresList)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                foreach (FalShipStores shipStoresEntity in shipStoresList)
                {
                    if (_context.FalShipStores.Any(s => s.FalShipStoresId == shipStoresEntity.FalShipStoresId))
                    {
                        _context.Update(shipStoresEntity);
                    }
                    else
                    {
                        _context.Add(shipStoresEntity);
                    }
                }
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            FalShipStores shipStores = _context.FalShipStores.FirstOrDefault(s => s.FalShipStoresId == id);
            if (shipStores == null)
            {
                return NotFound();
            }
            return Json(shipStores);
        }

        [HttpGet()]
        public IActionResult GetAll()
        {
            List<FalShipStores> resultList = _context.FalShipStores.OrderBy(s => s.FalShipStoresId).ToList();
            return Json(resultList);
        }


        [HttpPost()]
        public IActionResult Add([FromBody] FalShipStores shipStores)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                _context.FalShipStores.Add(shipStores);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPut()]
        public IActionResult Update([FromBody] FalShipStores shipStores)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                _context.FalShipStores.Update(shipStores);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}