using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class DpgOnBoardController : Controller
    {
        readonly open_ssnContext _context;
        readonly ILogger<DpgOnBoardController> logger;

        public DpgOnBoardController(open_ssnContext context, ILogger<DpgOnBoardController> logger)
        {
            this.logger = logger;
            _context = context;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var dpg = _context.DpgOnBoard
                .Include(mt => mt.MeasurementType)
                .Include(x => x.Dpg)
                .Include(x => x.Dpg.DpgType)
                .FirstOrDefault(d => d.DpgOnBoardId == id);
            if (dpg == null)
            {
                return NotFound();
            }
            return Json(dpg);
        }

        [HttpGet("all")]
        public IActionResult GetAll()
        {
            List<DpgOnBoard> resultList = _context.DpgOnBoard
                .OrderBy(d => d.DpgOnBoardId)
                .Include(mt => mt.MeasurementType)
                .ToList();
            return Json(resultList);
        }

        [HttpGet("portcall/{portCallId}")]
        public IActionResult GetByPortCallId(int portCallId)
        {
            var dpgOnBoardList = _context.DpgOnBoard
                .Where(d => d.PortCallId == portCallId)
                .Include(x => x.Dpg)
                .Include(x => x.Dpg.DpgType)
                .Include(mt => mt.MeasurementType)
                .ToList();
            if (dpgOnBoardList == null)
            {
                return NotFound();
            }

            return Json(dpgOnBoardList);
        }

        [HttpPut("{portCallId}/list")]
        public IActionResult UpdateList([FromBody] List<DpgOnBoard> dpgOnBoardList, long portCallId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                if (!dpgOnBoardList.Any())
                {
                    _context.DpgOnBoard.RemoveRange(_context.DpgOnBoard.Where(s => s.PortCallId == portCallId));
                }
                else
                {
                    var oldList = _context.DpgOnBoard.AsNoTracking().Where(s => s.PortCallId == portCallId).ToList();
                    var removeList = oldList.Where(dpg => !dpgOnBoardList.Any(dpgEntity => dpgEntity.DpgOnBoardId == dpg.DpgOnBoardId)).ToList();
                    _context.DpgOnBoard.RemoveRange(removeList);

                    foreach (var dpgOnBoard in dpgOnBoardList)
                    {
                        if (_context.DpgOnBoard.Any(dpg => dpg.DpgOnBoardId == dpgOnBoard.DpgOnBoardId))
                        {
                            _context.DpgOnBoard.Update(dpgOnBoard);
                        }
                        else
                        {
                            _context.DpgOnBoard.Add(dpgOnBoard);
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

        [HttpGet("overviewByPortCall/{portCallId}")]
        public IActionResult GetOverviewByPortCall(int portCallId)
        {
            var dpgOnBoardList = _context.DpgOnBoard
               .Where(d => d.PortCallId == portCallId)
               .Include(x => x.Dpg)
               .Include(x => x.Dpg.DpgType)
               .Include(mt => mt.MeasurementType)
               .ToList();

            var returnValue = dpgOnBoardList.Select(x => new
            {
                MeasurementType = x.MeasurementType.Name,
                PlacedInContainer = x.PlacedInContainer ? "Yes" : "No",
                x.TransportUnitIdentification,
                x.LocationOnBoard,
                Classification = x.Dpg.DpgType.ShortName,
                UnNoName = x.Dpg.UnNumber,
                Name = x.Dpg.TextualReference,
                GrossWeightVolume = new
                {
                    x.GrossWeight,
                    x.MeasurementType.Name
                },
                NetWeightVolume = new
                {
                    x.NetWeight,
                    x.MeasurementType.Name
                },

            }).ToList();

            return Json(returnValue);
        }
    }
}
