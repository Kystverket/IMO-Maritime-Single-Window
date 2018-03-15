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
    public class DpgTypeController : Controller
    {
        readonly open_ssnContext _context;

        public DpgTypeController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            DpgType dpgType = _context.DpgType.FirstOrDefault(d => d.DpgTypeId == id);
            if (dpgType == null)
            {
                return NotFound();
            }
            return Json(dpgType);
        }

        [HttpGet("all")]
        public IActionResult GetAll()
        {
            List<DpgType> resultList = _context.DpgType.ToList();
            return Json(resultList);
        }
    }
}