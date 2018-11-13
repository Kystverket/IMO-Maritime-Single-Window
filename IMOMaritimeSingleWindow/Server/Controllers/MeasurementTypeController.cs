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
    public class MeasurementTypeController : Controller
    {
        readonly open_ssnContext _context;

        public MeasurementTypeController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            MeasurementType measurementType = _context.MeasurementType.FirstOrDefault(s => s.MeasurementTypeId == id);
            if (measurementType == null)
            {
                return NotFound();
            }
            return Json(measurementType);
        }

        [HttpGet()]
        public IActionResult GetAll()
        {
            List<MeasurementType> resultList = _context.MeasurementType.OrderBy(s => s.MeasurementTypeId).ToList();
            return Json(resultList);
        }

        [HttpPost()]
        public IActionResult Add(MeasurementType measurementType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                _context.MeasurementType.Add(measurementType);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPut()]
        public IActionResult Update(MeasurementType measurementType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                _context.MeasurementType.Update(measurementType);
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
