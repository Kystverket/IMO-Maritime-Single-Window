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

        [HttpPut("{portCallId}/list")]
        public IActionResult UpdateList([FromBody] List<FalShipStores> shipStoresList, int portCallId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                _context.FalShipStores.RemoveRange(_context.FalShipStores.Where(st => st.PortCallId == portCallId));
                _context.FalShipStores.AddRange(shipStoresList);
                _context.SaveChanges();
                return Json(shipStoresList);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        // moved to PortCallController
        [HttpPut("list")]
        public IActionResult UpdateList([FromBody] List<FalShipStores> shipStoresList, long portCallId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                if (!shipStoresList.Any())
                {
                    _context.FalShipStores.RemoveRange(_context.FalShipStores.Where(s => s.PortCallId == portCallId));
                }
                else
                {
                    var oldList = _context.FalShipStores.AsNoTracking().Where(s => s.PortCallId == portCallId).ToList();
                    var removeList = oldList.Where(s => !shipStoresList.Any(shipStoresEntity => shipStoresEntity.FalShipStoresId == s.FalShipStoresId)).ToList();
                    _context.FalShipStores.RemoveRange(removeList);

                    foreach (FalShipStores shipStoresEntity in shipStoresList)
                    {
                        if (_context.FalShipStores.Any(s => s.FalShipStoresId == shipStoresEntity.FalShipStoresId))
                        {
                            _context.FalShipStores.Update(shipStoresEntity);
                        }
                        else
                        {
                            _context.FalShipStores.Add(shipStoresEntity);
                        }
                    }
                }
                _context.SaveChanges();
                return Ok(true);
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

        [HttpGet("overviewByPortCall/{portcallId}")]
        public IActionResult GetOverviewByPortCall(int portCallId)
        {
            var shipStores = _context.FalShipStores.Where(s => s.PortCallId == portCallId)
                       .Include(shipStore => shipStore.MeasurementType)
                       .ToList();

            var amount = shipStores.Count();

            var totalWeight = 0f;
            var totalVolume = 0f;
            var totalRegisteredUnits = 0f;

            foreach(var shipStore in shipStores)
            {
                if(shipStore.MeasurementType.Name.ToLower().Contains("(kg)") && shipStore.Quantity.HasValue)
                {
                    totalWeight += shipStore.Quantity.Value;
                } else if (shipStore.MeasurementType.Name.ToLower().Contains("(t)") && shipStore.Quantity.HasValue)
                {
                    totalWeight += (shipStore.Quantity.Value * 1000);
                } else if (shipStore.MeasurementType.Name.ToLower().Contains("(l)") && shipStore.Quantity.HasValue)
                {
                    totalVolume += shipStore.Quantity.Value;
                }
                else if (shipStore.MeasurementType.Name.ToLower().Contains("(m3)") && shipStore.Quantity.HasValue)
                {
                    totalVolume += shipStore.Quantity.Value;
                }
                else if (shipStore.MeasurementType.Name.ToLower().Contains("(u)") && shipStore.Quantity.HasValue)
                {
                    totalRegisteredUnits += shipStore.Quantity.Value;
                }
            }

            var returnVal = new
            {
                amount,
                totalWeight,
                totalVolume,
                totalRegisteredUnits,
            };

            return Json(returnVal);
        }

        [HttpGet("summaryByPortCall/{portcallId}")]
        public IActionResult GetSummaryListingShipStore(int portCallId)
        {
            var shipStores = _context.FalShipStores.Where(s => s.PortCallId == portCallId)
                       .Include(shipStore => shipStore.MeasurementType)
                       .ToList();

            var returnVal = shipStores.Select(x => new
            {
                x.ArticleName,
                x.Quantity,
                MeasurementType = x.MeasurementType.Name,
                LocationOnBoardAndCode = new
                {
                    Name = x.LocationOnBoard,
                    Code = x.LocationOnBoardCode
                },
            });

            return Json(returnVal);
        }

        [HttpGet("")]
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
