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
    public class PortCallController : Controller
    {
        readonly open_ssnContext _context;

        public PortCallController(open_ssnContext context)
        {
            _context = context;
        }

        public PortCallOverview GetOverview(int id)
        {
            PortCallOverview overview = new PortCallOverview();

            PortCall pc = (from p in _context.PortCall
                           where p.PortCallId == id
                           select p).FirstOrDefault();


            ShipOverview shipOverview = new ShipOverview();
            shipOverview.Ship = (from s in _context.Ship
                                 where s.ShipId == pc.ShipId
                                 select s).FirstOrDefault();
            var cId = (from sfc in _context.ShipFlagCode
                       where sfc.ShipFlagCodeId == shipOverview.Ship.ShipFlagCodeId
                       select sfc.CountryId).FirstOrDefault();
            shipOverview.Country = (from c in _context.Country
                                    where c.CountryId == cId
                                    select c).FirstOrDefault();

            LocationOverview locationOverview = new LocationOverview();
            locationOverview.Location = (from l in _context.Location
                                         where l.LocationId == pc.LocationId
                                         select l).FirstOrDefault();
            locationOverview.Country = (from c in _context.Country
                                        where c.CountryId == locationOverview.Location.CountryId
                                        select c).FirstOrDefault();

            LocationOverview previousLocationOverview = new LocationOverview();

            previousLocationOverview.Location = (from l in _context.Location
                                         where l.LocationId == pc.LocationId
                                         select l).FirstOrDefault();
            previousLocationOverview.Country = (from c in _context.Country
                                        where c.CountryId == previousLocationOverview.Location.CountryId
                                        select c).FirstOrDefault();
            LocationOverview nextLocationOverview = new LocationOverview();

            nextLocationOverview.Location = (from l in _context.Location
                                         where l.LocationId == pc.LocationId
                                         select l).FirstOrDefault();
            nextLocationOverview.Country = (from c in _context.Country
                                        where c.CountryId == nextLocationOverview.Location.CountryId
                                        select c).FirstOrDefault();

            overview.PortCall = pc;
            overview.ShipOverview = shipOverview;
            overview.LocationOverview = locationOverview;
            overview.PreviousLocationOverview = previousLocationOverview;
            overview.NextLocationOverview = nextLocationOverview;

            return overview;
        }

        [HttpGet("overview/{id}")]
        public IActionResult GetOverviewJson(int id)
        {
            PortCallOverview overview = GetOverview(id);
            return Json(overview);
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] PortCall portCall)
        {
            if (portCall == null)
            {
                return BadRequest("Empty body");
            }

            try
            {
                _context.PortCall.Add(portCall);
                _context.SaveChanges();
            }
            catch (DbUpdateException ex) when (ex.InnerException is Npgsql.PostgresException)
            {
                Npgsql.PostgresException innerEx = (Npgsql.PostgresException)ex.InnerException;
                return BadRequest("PostgreSQL Error Code: " + innerEx.SqlState);
            }

            return Json(portCall);
        }

        [HttpGet("get/{id}")]
        public JsonResult Get(int id)
        {
            PortCall portCall = _context.PortCall.FirstOrDefault(pc => pc.PortCallId == id);
            if (portCall == null)
            {
                return null;
            }
            return Json(portCall);
        }

        [HttpGet("location/{id}")]
        public IActionResult GetByLocationJson(int id)
        {
            List<PortCall> results = GetByLocation(id);
            return Json(results);
        }

        public List<PortCall> GetByLocation(int id)
        {
            return (from pc in _context.PortCall
                    where pc.LocationId == id
                    select pc).ToList();
        }

        [HttpGet("get")]
        public IActionResult GetAllJson()
        {
            List<PortCall> results = GetAll();
            return Json(results);
        }

        public List<PortCall> GetAll()
        {
            return (from pc in _context.PortCall
                    select pc).OrderBy(x => x.PortCallId).ToList();
        }

        [HttpGet("overview")]
        public IActionResult GetAllOverview()
        {
            List<PortCallOverview> results = new List<PortCallOverview>();
            foreach(PortCall p in _context.PortCall)
            {
                results.Add(GetOverview(p.PortCallId));
            }
            return Json(results);
        }
    }
}