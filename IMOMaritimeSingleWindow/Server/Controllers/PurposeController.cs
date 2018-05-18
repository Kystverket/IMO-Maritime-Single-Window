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
    public class PurposeController : Controller
    {
        readonly open_ssnContext _context;

        public PurposeController(open_ssnContext context)
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

        [HttpGet("getothername/{portCallId}")]
        public IActionResult GetOtherName(int portCallId)
        {
            var otherName = _context.PortCallHasPortCallPurpose.Where(pc => pc.PortCallId == portCallId && pc.PurposeIfUnknown != null).Select(pc => pc.PurposeIfUnknown).FirstOrDefault();
            if (otherName != null)
            {
                return Json(otherName);
            }
            return BadRequest("Other name not found.");
        }

        [HttpPost("removepurposeforportcall/{portCallId}")]
        public IActionResult RemovePurposeForPortCall(int portCallId)
        {
            try
            {
                var removeList = _context.PortCallHasPortCallPurpose.Where(pcHasPurpose => pcHasPurpose.PortCallId == portCallId);
                _context.PortCallHasPortCallPurpose.RemoveRange(removeList);
                _context.SaveChanges();
                return Json("Purposes removed from port call with ID: " + portCallId);
            }
            catch (DbUpdateException ex) when (ex.InnerException is Npgsql.PostgresException)
            {
                Npgsql.PostgresException innerEx = (Npgsql.PostgresException)ex.InnerException;
                return BadRequest("PostgreSQL Error Code: " + innerEx.SqlState);
            }
        }

        [HttpPost("setpurposeforportcall")]
        public IActionResult SetPurposeForPortCall([FromBody] List<PortCallHasPortCallPurpose> pcHasPurposeList)
        {
            try
            {
                var removeList = _context.PortCallHasPortCallPurpose.Where(dbObj => pcHasPurposeList.Exists(listObj => dbObj.PortCallId == listObj.PortCallId)).ToList();
                _context.PortCallHasPortCallPurpose.RemoveRange(removeList);
                _context.PortCallHasPortCallPurpose.AddRange(pcHasPurposeList);
                _context.SaveChanges();
                return Json(pcHasPurposeList);
            }
            catch (DbUpdateException ex) when (ex.InnerException is Npgsql.PostgresException)
            {
                Npgsql.PostgresException innerEx = (Npgsql.PostgresException)ex.InnerException;
                return BadRequest("PostgreSQL Error Code: " + innerEx.SqlState);
            }


            // foreach (PortCallHasPortCallPurpose pcHasPurpose in pcHasPurposeList)
            // {
            //     try
            //     {
            //         if (_context.PortCall.Any(pc => pc.PortCallId == pcHasPurpose.PortCallId))
            //         {
            //             if (_context.PortCallPurpose.Any(purpose => purpose.PortCallPurposeId == pcHasPurpose.PortCallPurposeId))
            //             {
            //                 _context.PortCallHasPortCallPurpose.Add(pcHasPurpose);
            //                 _context.SaveChanges();
            //             }
            //             return BadRequest("Unable to find purpose with id: " + pcHasPurpose.PortCallPurposeId + ".");
            //         }
            //         return BadRequest("Unable to find port call with id: " + pcHasPurpose.PortCallId + ".");
            //     }
            //     catch (DbUpdateException ex) when (ex.InnerException is Npgsql.PostgresException)
            //     {
            //         Npgsql.PostgresException innerEx = (Npgsql.PostgresException)ex.InnerException;
            //         return BadRequest("PostgreSQL Error Code: " + innerEx.SqlState);
            //     }
            // }
        }
    }
}