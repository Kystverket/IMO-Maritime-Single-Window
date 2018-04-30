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
using Microsoft.EntityFrameworkCore.ChangeTracking;

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

        private PortCallOverview GetOverview(int portCallId)
        {
            List<Organization> orgList = _context.Organization.Where(o => o.OrganizationTypeId == Constants.Integers.DatabaseTableIds.ORGANIZATION_TYPE_GOVERNMENT_AGENCY).ToList();

            var portCall = _context.PortCall.Where(pc => pc.PortCallId == portCallId)
            .Include(pc => pc.Ship.ShipType)
            .Include(pc => pc.Ship.ShipFlagCode.Country)
            .Include(pc => pc.Location.Country)
            .Include(pc => pc.OrganizationPortCall)
            .Include(pc => pc.PortCallStatus).FirstOrDefault();
            PortCallOverview overview = new PortCallOverview();
            overview.PortCall = portCall;

            overview.ShipOverview = new ShipOverview { Ship = portCall.Ship, Country = portCall.Ship.ShipFlagCode.Country };
            overview.LocationOverview = new LocationOverview { Location = portCall.Location, Country = portCall.Location.Country };
            overview.Status = portCall.PortCallStatus.Name;
            overview.ClearanceList = (from opc in portCall.OrganizationPortCall
                                      join o in orgList
                                      on opc.OrganizationId equals o.OrganizationId
                                      select opc).ToList();
            return overview;
        }
        [HttpGet("overview/{portCallId}")]
        public IActionResult GetOverviewJson(int portCallId)
        {
            var overview = GetOverview(portCallId);
            return Json(overview);
        }


        [HttpGet("user/{id}")]
        public IActionResult GetPortCallsByUserId(int id)
        {
            var portCallList = _context.PortCall.Where(pc => pc.UserId == id).ToList();
            return Json(portCallList);
        }

        // [HttpGet("overview/{id}")]
        // public IActionResult GetOverviewJson(int id)
        // {
        //     PortCallOverview overview = GetOverview(id);
        //     return Json(overview);
        // }

        [HttpPost("update")]
        public IActionResult Update([FromBody] PortCall portCall)
        {
            if (portCall == null)
            {
                return BadRequest("Empty body.");
            }
            try
            {
                if (!_context.PortCall.Any(pc => pc.PortCallId == portCall.PortCallId))
                {
                    return NotFound("Port call with id: " + portCall.PortCallId + " could not be found in database.");
                }
                _context.PortCall.Update(portCall);
                return Json(portCall);
            }
            catch (DbUpdateException ex) when (ex.InnerException is Npgsql.PostgresException)
            {
                Npgsql.PostgresException innerEx = (Npgsql.PostgresException)ex.InnerException;
                return BadRequest("PostgreSQL Error Code: " + innerEx.SqlState);
            }
        }

        [HttpPost("updatestatus/actual/{portCallId}")]
        public IActionResult SetStatusActual(int portCallId)
        {
            try
            {
                if (!_context.PortCall.Any(pc => pc.PortCallId == portCallId))
                {
                    return NotFound("Port call with id: " + portCallId + " could not be found in database.");
                }
                PortCall portCall = _context.PortCall.Where(pc => pc.PortCallId == portCallId).FirstOrDefault();
                portCall.PortCallStatusId = Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_ACTUAL;
                _context.Update(portCall);
                _context.SaveChanges();
                return Json(portCall);
            }
            catch (DbUpdateException ex) when (ex.InnerException is Npgsql.PostgresException)
            {
                Npgsql.PostgresException innerEx = (Npgsql.PostgresException)ex.InnerException;
                return BadRequest("PostgreSQL Error Code: " + innerEx.SqlState);
            }
        }


        [HttpPost("register")]
        public IActionResult Register([FromBody] PortCall portCall)
        {
            if (portCall == null)
            {
                return BadRequest("Empty body.");
            }

            try
            {
                EntityEntry portCallEntity = _context.PortCall.Add(portCall);
                _context.SaveChanges();

                if (portCallEntity.Member("PortCallId") != null)
                {
                    portCall.PortCallId = (int)portCallEntity.Member("PortCallId").CurrentValue;
                    return Json(portCall);
                }
            }
            catch (DbUpdateException ex) when (ex.InnerException is Npgsql.PostgresException)
            {
                Npgsql.PostgresException innerEx = (Npgsql.PostgresException)ex.InnerException;
                return BadRequest("PostgreSQL Error Code: " + innerEx.SqlState);
            }

            return BadRequest("Port call id not set");
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
            foreach (PortCall p in _context.PortCall)
            {
                results.Add(GetOverview(p.PortCallId));
            }
            return Json(results);
        }


    }
}