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
    public class IdentityDocumentController : Controller
    {
        readonly open_ssnContext _context;

        public IdentityDocumentController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public IActionResult GetAll()
        {
            return Json(_context.IdentityDocument.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            IdentityDocument identityDocument = _context.IdentityDocument.FirstOrDefault(i => i.IdentityDocumentId == id);
            if (identityDocument == null)
            {
                return NotFound();
            }
            return Json(identityDocument);
        }

        [HttpPut("list")]
        public IActionResult UpdateList([FromBody] List<IdentityDocument> identityDocumentList)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try{
                if (!identityDocumentList.Any())
                {
                    _context.IdentityDocument.RemoveRange(_context.IdentityDocument.ToList());
                }
                else
                {
                    var removeList = _context.IdentityDocument.Where(i => !identityDocumentList.Any(identityDocumentEntity => identityDocumentEntity.IdentityDocumentId == i.IdentityDocumentId));
                    _context.IdentityDocument.RemoveRange(removeList);
                    foreach (IdentityDocument identityDocumentEntity in identityDocumentList)
                    {
                        if (_context.IdentityDocument.Any(i => i.IdentityDocumentId == identityDocumentEntity.IdentityDocumentId))
                        {
                            _context.IdentityDocument.Update(identityDocumentEntity);
                        }
                        else
                        {
                            _context.IdentityDocument.Add(identityDocumentEntity);
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

        [HttpPut()]
        public IActionResult Update([FromBody] IdentityDocument identityDocument)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                if (_context.IdentityDocument.Any(i => i.IdentityDocumentId == identityDocument.IdentityDocumentId))
                {
                    _context.IdentityDocument.Update(identityDocument);
                } else {
                    _context.IdentityDocument.Add(identityDocument);
                }
                _context.SaveChanges();
                return Json(identityDocument);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
