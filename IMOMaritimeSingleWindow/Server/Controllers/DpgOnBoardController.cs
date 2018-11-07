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
            var dpg = _context.DpgOnBoard.FirstOrDefault(d => d.DpgOnBoardId == id);
            if (dpg == null)
            {
                return NotFound();
            }
            return Json(dpg);
        }

        [HttpGet("all")]
        public IActionResult GetAll()
        {
            List<DpgOnBoard> resultList = _context.DpgOnBoard.OrderBy(d => d.DpgOnBoardId).ToList();
            return Json(resultList);
        }

        [HttpGet("portcall/{portCallId}")]
        public IActionResult GetByPortCallId(int portCallId)
        {
            var dpgOnBoardList = _context.DpgOnBoard
                .Where(d => d.PortCallId == portCallId)
                .Include(x => x.Dpg)
                .Include(x => x.Dpg.DpgType)
                .ToList();
            if (dpgOnBoardList == null)
            {
                return NotFound();
            }

            return Json(dpgOnBoardList);
        }


        [HttpPut("{portCallId}/list")]
        public IActionResult UpdateList([FromBody] List<DpgOnBoard> dpgOnBoardList, int portCallId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                _context.DpgOnBoard.RemoveRange(_context.DpgOnBoard.Where(dpg => dpg.PortCallId == portCallId));
                _context.DpgOnBoard.AddRange(dpgOnBoardList);
                _context.SaveChanges();
                return Json(dpgOnBoardList);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
