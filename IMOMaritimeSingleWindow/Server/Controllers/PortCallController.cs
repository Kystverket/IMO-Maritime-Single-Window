using IMOMaritimeSingleWindow.Auth;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Extensions;
using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using Claims = IMOMaritimeSingleWindow.Helpers.Constants.Strings.Claims;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class PortCallController : Controller
    {
        readonly IDbContext _context;

        public PortCallController(IDbContext context)
        {
            _context = context;
        }

        [HttpGet("{portCallId}/falShipStores")]
        public IActionResult GetFalShipStores(int portCallId)
        {
            var shipStores = _context.FalShipStores.Where(s => s.PortCallId == portCallId).ToList();
            if (shipStores == null)
            {
                return NotFound();
            }
            return Json(shipStores);
        }

        [HttpGet("partialOverview/{portCallId}")]
        public IActionResult GetPartialOverviewJson(int portCallId)
        {
            var overview = GetPartialOverview(portCallId);
            return Json(overview);
        }
        private PortCallOverview GetPartialOverview(int portCallId)
        {
            List<Organization> orgList = _context.Organization.Where(o => o.OrganizationTypeId == Constants.Integers.DatabaseTableIds.ORGANIZATION_TYPE_GOVERNMENT_AGENCY).ToList();

            var portCall = _context.PortCall.Where(pc => pc.PortCallId == portCallId)
            .Include(pc => pc.Ship.ShipFlagCode.Country)
            .Include(pc => pc.Location.Country)
            .Include(pc => pc.OrganizationPortCall)
            .Include(pc => pc.PortCallStatus).FirstOrDefault();
            PortCallOverview overview = new PortCallOverview();
            overview.PortCall = portCall;

            overview.Ship = portCall.Ship;
            overview.Location = portCall.Location;
            overview.PreviousLocation = portCall.PreviousLocation;
            overview.NextLocation = portCall.NextLocation;
            overview.Status = portCall.PortCallStatus.Name;
            overview.ClearanceList = (from opc in portCall.OrganizationPortCall
                                      join o in orgList
                                      on opc.OrganizationId equals o.OrganizationId
                                      select opc).ToList();
            return overview;
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
            .Include(pc => pc.Location.LocationType)
            .Include(pc => pc.PreviousLocation)
            .Include(pc => pc.NextLocation)
            .Include(pc => pc.PreviousLocation.Country)
            .Include(pc => pc.NextLocation.Country)
            .Include(pc => pc.OrganizationPortCall)
            .Include(pc => pc.PortCallStatus).FirstOrDefault();
            PortCallOverview overview = new PortCallOverview();
            overview.PortCall = portCall;

            overview.Ship = portCall.Ship;
            overview.Location = portCall.Location;
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
        [HttpGet("user")]
        public IActionResult GetPortCallsByUser()
        {
            List<PortCall> portCallList = new List<PortCall>();
            var userId = this.GetUserId();
            var userRole = this.GetUserRoleName();

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
                // Other authorities not listed in Constants.Strings.UserRoles
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
        [HasClaim(Claims.Types.PORT_CALL, Claims.Values.EDIT)]
        [HttpPut()]
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
                _context.SaveChanges();
                return Json(portCall);
            }
            catch (DbUpdateException ex) when (ex.InnerException is Npgsql.PostgresException)
            {
                Npgsql.PostgresException innerEx = (Npgsql.PostgresException)ex.InnerException;
                return BadRequest("PostgreSQL Error Code: " + innerEx.SqlState);
            }
        }

        [HttpPost("updatestatus/awaitingclearance/{portCallId}")]
        public IActionResult SetStatusAwaitingClearance(int portCallId)
        {
            try
            {
                if (!_context.PortCall.Any(pc => pc.PortCallId == portCallId))
                {
                    return NotFound("Port call with id: " + portCallId + " could not be found in database.");
                }
                PortCall portCall = _context.PortCall.Where(pc => pc.PortCallId == portCallId).FirstOrDefault();
                portCall.PortCallStatusId = Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_AWAITING_CLEARANCE;
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

        [HttpPost("updatestatus/cleared/{portCallId}")]
        public IActionResult SetStatusCleared(int portCallId)
        {
            try
            {
                if (!_context.PortCall.Any(pc => pc.PortCallId == portCallId))
                {
                    return NotFound("Port call with id: " + portCallId + " could not be found in database.");
                }
                PortCall portCall = _context.PortCall.Where(pc => pc.PortCallId == portCallId).FirstOrDefault();
                portCall.PortCallStatusId = Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_CLEARED;
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

        [HttpPost("updatestatus/completed/{portCallId}")]
        public IActionResult SetStatusCompleted(int portCallId)
        {
            try
            {
                if (!_context.PortCall.Any(pc => pc.PortCallId == portCallId))
                {
                    return NotFound("Port call with id: " + portCallId + " could not be found in database.");
                }
                PortCall portCall = _context.PortCall.Where(pc => pc.PortCallId == portCallId).FirstOrDefault();
                portCall.PortCallStatusId = Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_COMPLETED;
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
                PortCall portCall = _context.PortCall.FirstOrDefault(pc => pc.PortCallId == portCallId);
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

        [HttpPut("updateStatus/draft/{portCallId}")]
        public IActionResult SetStatusDraft(int portCallId)
        {
            try
            {
                if (!_context.PortCall.Any(pc => pc.PortCallId == portCallId))
                {
                    return NotFound("Port call with id: " + portCallId + " could not be found in database.");
                }
                PortCall portCall = _context.PortCall.Where(pc => pc.PortCallId == portCallId).Include(pc => pc.OrganizationPortCall).FirstOrDefault();
                portCall.PortCallStatusId = Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DRAFT;
                foreach (OrganizationPortCall opc in portCall.OrganizationPortCall)
                {
                    opc.Cleared = null;
                    opc.Remark = null;
                }
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

        [HasClaim(Claims.Types.PORT_CALL, Claims.Values.DELETE)]
        [HttpDelete()]
        public IActionResult DeletePortCall([FromBody] PortCall portCall)
        {
            Console.WriteLine(portCall.PortCallId + "\n" + portCall.UserId.ToString());
            try
            {
                var userId = this.GetUserId();
                var user = _context.User.Where(usr => usr.UserId.ToString().Equals(userId)).Include(u => u.Role).FirstOrDefault();
                var userIsAdmin = user.Role.Name.Equals(Constants.Strings.UserRoles.SuperAdmin);
                var pcIsByUserOrg = (user.OrganizationId != null && _context.OrganizationPortCall.Any(opc => opc.PortCallId == portCall.PortCallId && opc.OrganizationId == user.OrganizationId));
                if (userIsAdmin || (portCall.UserId != null && portCall.UserId.ToString().Equals(userId)) || pcIsByUserOrg)
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
                return BadRequest("Delete request denied: you must either be an administrator or the be an user at the same organization as the user who created the port call in order to delete it.");
            }
            catch (DbUpdateException ex) when (ex.InnerException is Npgsql.PostgresException)
            {
                Npgsql.PostgresException innerEx = (Npgsql.PostgresException)ex.InnerException;
                return BadRequest("PostgreSQL Error Code: " + innerEx.SqlState);
            }
        }


        [HasClaim(Claims.Types.PORT_CALL, Claims.Values.REGISTER)]
        [HttpPost()]
        public IActionResult RegisterNewPortCall([FromBody] PortCall portCall)
        {
            try
            {
                var userId = this.GetUserId();
                portCall.UserId = Guid.Parse(userId);
                var statusDraftId = Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DRAFT;
                portCall.PortCallStatusId = statusDraftId;
                return RegisterPortCall(portCall);
            }
            catch (DbUpdateException ex) when (ex.InnerException is Npgsql.PostgresException)
            {
                Npgsql.PostgresException innerEx = (Npgsql.PostgresException)ex.InnerException;
                return BadRequest("PostgreSQL Error Code: " + innerEx.SqlState);
            }
        }

        public IActionResult RegisterPortCall(PortCall portCall)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                _context.PortCall.Add(portCall);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
            return Json(portCall);
        }

        [HttpGet("{id}")]
        public IActionResult GetPortCallJson(int id)
        {
            var portCall = GetPortCall(id);
            return Json(portCall);
        }

        public PortCall GetPortCall(int id)
        {
            return _context.PortCall.FirstOrDefault(pc => pc.PortCallId == id);
        }

        [HttpGet()]
        public IActionResult GetAllJson()
        {
            List<PortCall> results = GetAll();
            return Json(results);
        }

        public List<PortCall> GetAll()
        {
            return _context.PortCall.OrderBy(pc => pc.PortCallId).ToList();
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
