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
    public class PersonOnBoardController : Controller
    {
        readonly open_ssnContext _context;

        public PersonOnBoardController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("list/portCall/{portCallId}")]
        public IActionResult GetPersonOnBoardList(int portCallId)
        {
            var personOnBoard = _context.PersonOnBoard.Where(pob => pob.PortCallId == portCallId)
                                        .Include(pob => pob.CountryOfBirth)
                                        .Include(pob => pob.Gender)
                                        .Include(pob => pob.IdentityDocument).ThenInclude(i => i.IdentityDocumentType)
                                        .Include(pob => pob.IdentityDocument).ThenInclude(i => i.IssuingNation)
                                        .Include(pob => pob.Nationality)
                                        .Include(pob => pob.PersonOnBoardType)
                                        .Include(pob => pob.PortOfEmbarkation).ThenInclude(p => p.Country)
                                        .Include(pob => pob.PortOfDisembarkation).ThenInclude(p => p.Country).ToList();
            if (personOnBoard == null)
            {
                return NotFound();
            }
            return Json(personOnBoard);
        }

        [HttpGet("{id}")]
        public IActionResult GetPersonOnBoard(int id)
        {
            var personOnBoard = _context.PersonOnBoard.Where(pob => pob.PersonOnBoardId == id)
                                        .Include(pob => pob.CountryOfBirth)
                                        .Include(pob => pob.Gender)
                                        .Include(pob => pob.IdentityDocument).ThenInclude(i => i.IdentityDocumentType)
                                        .Include(pob => pob.IdentityDocument).ThenInclude(i => i.IssuingNation)
                                        .Include(pob => pob.Nationality)
                                        .Include(pob => pob.PersonOnBoardType)
                                        .Include(pob => pob.PortOfEmbarkation).ThenInclude(p => p.Country)
                                        .Include(pob => pob.PortOfDisembarkation).ThenInclude(p => p.Country).ToList();
            if (personOnBoard == null)
            {
                return NotFound();
            }
            return Json(personOnBoard);
        }

        [HttpGet("{id}/identitydocument")]
        public IActionResult GetIdentityDocument(int id)
        {
            IdentityDocument identitydocument = _context.IdentityDocument.FirstOrDefault(s => s.PersonOnBoardId == id);
            if (identitydocument == null)
            {
                return NotFound();
            }
            return Json(identitydocument);
        }

        [HttpGet("")]
        public IActionResult GetAll()
        {
            List<PersonOnBoard> resultList = _context.PersonOnBoard.Where(s => s.PersonOnBoardTypeId == 2).OrderBy(s => s.PersonOnBoardId).ToList();
            // List<PersonOnBoard> resultList = _context.PersonOnBoard.OrderBy(s => s.PersonOnBoardId).ToList();
            return Json(resultList);
        }

        [HttpPost()]
        public IActionResult Add([FromBody] PersonOnBoard personOnBoard)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                _context.PersonOnBoard.Add(personOnBoard);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPut()]
        public IActionResult Update([FromBody] PersonOnBoard personOnBoard)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                _context.PersonOnBoard.Update(personOnBoard);
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
