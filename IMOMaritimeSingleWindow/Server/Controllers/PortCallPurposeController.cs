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
    public class PortCallPurposeController : Controller
    {
        readonly open_ssnContext _context;
        
        public PortCallPurposeController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("all")]
        public IActionResult GetAll()
        {
            List<PortCallPurpose> resultList = _context.PortCallPurpose.Where(p => !EF.Functions.ILike(p.Name, "Other")).OrderBy(p => p.Name).ToList();
            resultList.Add(_context.PortCallPurpose.Where(p => EF.Functions.ILike(p.Name, "Other")).FirstOrDefault());
            return Json(resultList);
        }

        [HttpGet("portcall/{id}")]
        public IActionResult GetByPortCallId(int id)
        {
            List<int> m2mList = (from p in _context.PortCallHasPortCallPurpose
                                                where p.PortCallId == id
                                                select p.PortCallPurposeId).ToList();

            List<PortCallPurpose> resultList = _context.PortCallPurpose.Where(p => m2mList.Contains(p.PortCallPurposeId)).ToList();
            return Json(resultList);

        }

        [HttpGet("get/{id}")]
        public IActionResult Get(int id)
        {
            PortCallPurpose purpose = _context.PortCallPurpose.FirstOrDefault(p => p.PortCallPurposeId == id);
            if (purpose == null)
            {
                return NotFound();
            }
            return Json(purpose);
        }


    }


}