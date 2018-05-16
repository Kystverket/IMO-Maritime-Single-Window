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
using Microsoft.AspNetCore.Authorization;
using Policies = IMOMaritimeSingleWindow.Helpers.Constants.Strings.Policies;

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
            .Include(pc => pc.Ship.ShipContact)
            .Include(pc => pc.Ship.ShipStatus)
            .Include(pc => pc.Location.Country)
            .Include(pc => pc.OrganizationPortCall)
            .Include(pc => pc.PortCallStatus).FirstOrDefault();
            PortCallOverview overview = new PortCallOverview();
            overview.PortCall = portCall;

            overview.ShipOverview = new ShipOverview
            {
                Ship = portCall.Ship,
                ShipType = portCall.Ship.ShipType,
                Country = portCall.Ship.ShipFlagCode.Country,
                ShipStatus = portCall.Ship.ShipStatus,
                ContactList = portCall.Ship.ShipContact.ToList()
            };
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


        [Authorize]
        [HttpGet("foruser")]
        public IActionResult GetPortCallsByUser()
        {
            List<PortCall> portCallList = new List<PortCall>();
            var userId = User.FindFirst(cl => cl.Type == Constants.Strings.JwtClaimIdentifiers.Id).Value;
            var userRole = User.FindFirst(cl => cl.Type == Constants.Strings.JwtClaimIdentifiers.Rol).Value;

            var dbUser = _context.User.Where(u => u.UserId.ToString().Equals(userId))
                                    .Include(u => u.Organization.OrganizationType)
                                    .FirstOrDefault();

            switch (userRole)
            {
                // Super Admin
                case Constants.Strings.UserRoles.SuperAdmin:
                    portCallList = _context.PortCall.ToList();
                    break;
                // Admin
                case Constants.Strings.UserRoles.Admin:
                    portCallList = _context.PortCall.ToList();
                    break;
                // Agent                    
                case Constants.Strings.UserRoles.Agent:
                    portCallList = _context.OrganizationPortCall.Where(opc => opc.OrganizationId == dbUser.OrganizationId)
                                                                .Select(opc => opc.PortCall)
                                                                .Union(_context.PortCall.Where(pc => pc.UserId != null && pc.UserId.ToString().Equals(userId))).ToList();
                    break;
                // Customs
                case Constants.Strings.UserRoles.Customs:
                    portCallList = _context.OrganizationPortCall
                                            .Where(opc =>
                                            opc.OrganizationId == dbUser.OrganizationId
                                            && opc.PortCall.PortCallStatusId != Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DRAFT
                                            ).Select(opc => opc.PortCall).ToList();
                    break;
                // Health agency
                case Constants.Strings.UserRoles.HealthAgency:
                    portCallList = _context.OrganizationPortCall
                                            .Where(opc =>
                                            opc.OrganizationId == dbUser.OrganizationId
                                            && opc.PortCall.PortCallStatusId != Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DRAFT
                                            ).Select(opc => opc.PortCall).ToList();
                    break;
                // Other government agencies not listed in Constants.Strings.UserRoles
                default:
                    if (dbUser.Organization.OrganizationTypeId == Constants.Integers.DatabaseTableIds.ORGANIZATION_TYPE_GOVERNMENT_AGENCY)
                    {
                        portCallList = _context.OrganizationPortCall
                                            .Where(opc =>
                                            opc.OrganizationId == dbUser.OrganizationId
                                            && opc.PortCall.PortCallStatusId != Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DRAFT
                                            ).Select(opc => opc.PortCall).ToList();
                    }
                    break;

            }
            return Json(portCallList.OrderBy(pc => pc.PortCallStatusId));
        }

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

        [HttpPost("updatestatus/active/{portCallId}")]
        public IActionResult SetStatusActive(int portCallId)
        {
            try
            {
                if (!_context.PortCall.Any(pc => pc.PortCallId == portCallId))
                {
                    return NotFound("Port call with id: " + portCallId + " could not be found in database.");
                }
                PortCall portCall = _context.PortCall.Where(pc => pc.PortCallId == portCallId).FirstOrDefault();
                portCall.PortCallStatusId = Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_ACTIVE;
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

        [HttpPost("updatestatus/cancelled/{portCallId}")]
        public IActionResult SetStatusCancelled(int portCallId)
        {
            try
            {
                if (!_context.PortCall.Any(pc => pc.PortCallId == portCallId))
                {
                    return NotFound("Port call with id: " + portCallId + " could not be found in database.");
                }
                PortCall portCall = _context.PortCall.Where(pc => pc.PortCallId == portCallId).FirstOrDefault();
                portCall.PortCallStatusId = Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_CANCELLED;
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

        [Authorize(Policy = Policies.AdminRole)]
        [HttpPost("delete")]
        public IActionResult DeletePortCall([FromBody] PortCall portCall)
        {
            Console.WriteLine(portCall.PortCallId + "\n" + portCall.UserId.ToString());
            try
            {
                var userId = User.FindFirst(cl => cl.Type == Constants.Strings.JwtClaimIdentifiers.Id).Value;
                if (portCall.UserId != null && portCall.UserId.ToString().Equals(userId))
                {
                    PortCall removePortCall = _context.PortCall.Where(pc => pc.PortCallId == portCall.PortCallId)
                                                        .Include(pc => pc.PortCallDetails)
                                                        .Include(pc => pc.OrganizationPortCall)
                                                        .Include(pc => pc.PortCallHasPortCallPurpose)
                                                        .Include(pc => pc.CustomsCargo)
                                                        .Include(pc => pc.DpgOnBoard).FirstOrDefault();
                    _context.PortCallDetails.RemoveRange(removePortCall.PortCallDetails.AsEnumerable());
                    _context.OrganizationPortCall.RemoveRange(removePortCall.OrganizationPortCall.AsEnumerable());
                    _context.PortCallHasPortCallPurpose.RemoveRange(removePortCall.PortCallHasPortCallPurpose.AsEnumerable());
                    _context.CustomsCargo.RemoveRange(removePortCall.CustomsCargo.AsEnumerable());
                    _context.DpgOnBoard.RemoveRange(removePortCall.DpgOnBoard.AsEnumerable());
                    _context.PortCall.Remove(removePortCall);

                    _context.SaveChanges();
                    return Json("Port call deleted.");
                }
                return BadRequest("Delete request denied: you must either be an administrator or the user who created the port call in order to delete it.");
            }
            catch (DbUpdateException ex) when (ex.InnerException is Npgsql.PostgresException)
            {
                Npgsql.PostgresException innerEx = (Npgsql.PostgresException)ex.InnerException;
                return BadRequest("PostgreSQL Error Code: " + innerEx.SqlState);
            }
        }


        [Authorize]
        [HttpPost("register")]
        public IActionResult Register([FromBody] PortCall portCall)
        {
            try
            {
                var userId = User.FindFirst(cl => cl.Type == Constants.Strings.JwtClaimIdentifiers.Id).Value;
                portCall.UserId = Guid.Parse(userId);
                var statusDraftId = Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DRAFT;
                portCall.PortCallStatusId = statusDraftId;
                _context.PortCall.Add(portCall);
                _context.SaveChanges();
                return Json(portCall);
            }
            catch (DbUpdateException ex) when (ex.InnerException is Npgsql.PostgresException)
            {
                Npgsql.PostgresException innerEx = (Npgsql.PostgresException)ex.InnerException;
                return BadRequest("PostgreSQL Error Code: " + innerEx.SqlState);
            }
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
