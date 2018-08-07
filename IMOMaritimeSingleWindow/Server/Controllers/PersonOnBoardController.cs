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

        [HttpPost("list")]
        public IActionResult AddList([FromBody] List<PersonOnBoard> personOnBoardList)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var oldList = _context.PersonOnBoard.Where(s => personOnBoardList.Any(personOnBoardEntity => personOnBoardEntity.PortCallId == s.PortCallId));
                var removeList = oldList.Where(s => !personOnBoardList.Any(personOnBoardEntity => personOnBoardEntity.PersonOnBoardId == s.PersonOnBoardId));
                _context.PersonOnBoard.RemoveRange(removeList);
                _context.PersonOnBoard.AddRange(personOnBoardList);
                _context.SaveChanges();
                return Ok(true);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPut("list")]
        public IActionResult UpdateList([FromBody] List<PersonOnBoard> personOnBoardList)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var oldList = _context.PersonOnBoard.Where(s => personOnBoardList.Any(personOnBoardEntity => personOnBoardEntity.PortCallId == s.PortCallId));
                var removeList = oldList.Where(s => !personOnBoardList.Any(personOnBoardEntity => personOnBoardEntity.PersonOnBoardId == s.PersonOnBoardId));
                _context.PersonOnBoard.RemoveRange(removeList);
                foreach (PersonOnBoard personOnBoardEntity in personOnBoardList)
                {
                    if (_context.PersonOnBoard.Any(s => s.PersonOnBoardId == personOnBoardEntity.PersonOnBoardId))
                    {
                        _context.Update(personOnBoardEntity);
                    }
                    else
                    {
                        _context.Add(personOnBoardEntity);
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
            PersonOnBoard personOnBoard = _context.PersonOnBoard.FirstOrDefault(s => s.PersonOnBoardId == id);
            if (personOnBoard == null)
            {
                return NotFound();
            }
            return Json(personOnBoard);
        }

        [HttpGet("")]
        public IActionResult GetAll()
        {
            List<PersonOnBoard> resultList = _context.PersonOnBoard.OrderBy(s => s.PersonOnBoardId).ToList();
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
