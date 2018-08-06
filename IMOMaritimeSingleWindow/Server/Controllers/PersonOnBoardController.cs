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

        [HttpGet("{id}")]
        public IActionResult GetPersonOnBoard(int id)
        {
            PersonOnBoard personOnBoard = _context.PersonOnBoard.FirstOrDefault(s => s.PersonOnBoardId == id);
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
