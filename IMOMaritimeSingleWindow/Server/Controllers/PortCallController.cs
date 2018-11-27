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
using Microsoft.Extensions.Logging;
using Claims = IMOMaritimeSingleWindow.Helpers.Constants.Strings.Claims;
using static IMOMaritimeSingleWindow.Controllers.PersonOnBoardTypeController;

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
            var shipStores = _context.FalShipStores.Where(s => s.PortCallId == portCallId)
            .Include(shipStore => shipStore.MeasurementType)
            .ToList();
            if (shipStores == null)
            {
                return NotFound();
            }
            return Json(shipStores);
        }

        [HttpPut("{portCallId}/falShipStores")]
        public IActionResult UpdateShipStoresList([FromBody] List<FalShipStores> shipStoresList, long portCallId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                if (!shipStoresList.Any())
                {
                    _context.FalShipStores.RemoveRange(_context.FalShipStores.Where(s => s.PortCallId == portCallId));
                }
                else
                {
                    var oldList = _context.FalShipStores.AsNoTracking().Where(s => s.PortCallId == portCallId).ToList();
                    var removeList = oldList.Where(s => !shipStoresList.Any(shipStoresEntity => shipStoresEntity.FalShipStoresId == s.FalShipStoresId)).ToList();
                    _context.FalShipStores.RemoveRange(removeList);

                    foreach (FalShipStores shipStoresEntity in shipStoresList)
                    {
                        if (_context.FalShipStores.Any(s => s.FalShipStoresId == shipStoresEntity.FalShipStoresId))
                        {
                            _context.FalShipStores.Update(shipStoresEntity);
                        }
                        else
                        {
                            _context.FalShipStores.Add(shipStoresEntity);
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

        [HttpGet("{portCallId}/consignments")]
        public IActionResult GetConsignments(int portCallId)
        {
            var consignments = _context.Consignment.Where(consignment => consignment.PortCallId == portCallId)
                                                    .Include(consignment => consignment.PortOfLoading)
                                                        .ThenInclude(location => location.Country)
                                                    .Include(consignment => consignment.PortOfLoading)
                                                        .ThenInclude(location => location.LocationType)
                                                    .Include(consignment => consignment.PortOfDischarge)
                                                        .ThenInclude(location => location.Country)
                                                    .Include(consignment => consignment.PortOfDischarge)
                                                        .ThenInclude(location => location.LocationType)
                                                    .Include(consignment => consignment.CargoItem)
                                                        .ThenInclude(cargoItem => cargoItem.PackageType)
                                                    .ToList();
            if (consignments == null)
            {
                return NotFound();
            }
            return Json(consignments);
        }

        [HttpPut("{portCallId}/consignments")]
        public IActionResult UpdateConsignmentList([FromBody] List<Consignment> consignmentList, int portCallId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                _context.Consignment.RemoveRange(_context.Consignment.Where(c => c.PortCallId == portCallId).Include(c => c.CargoItem));
                _context.Consignment.AddRange(consignmentList);
                _context.SaveChanges();
                return Json(consignmentList);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpGet("{portCallId}/personOnBoard")]
        public IActionResult GetAllPersonOnBoardByPortCall(int portCallId)
        {
            var personOnBoardList = _context.PersonOnBoard.Where(s => s.PortCallId == portCallId)
            .Include(pob => pob.PortCall)
            .Include(pob => pob.Nationality)
            .Include(pob => pob.CountryOfBirth)
            .Include(pob => pob.PersonOnBoardType)
            .Include(pob => pob.PortOfEmbarkation).ThenInclude(p => p.Country)
            .Include(pob => pob.PortOfDisembarkation).ThenInclude(p => p.Country)
            .Include(pob => pob.Gender)
            .Include(pob => pob.IdentityDocument).ThenInclude(i => i.IssuingNation)
            .Include(i => i.IdentityDocument).ThenInclude(i => i.IdentityDocumentType)
            .ToList();
            if (personOnBoardList == null)
            {
                return NotFound();
            }
            return Json(personOnBoardList);
        }

        [HttpGet("{portCallId}/personOnBoard/personOnBoardType/{EnumValue}")]
        public IActionResult GetAllPersonOnBoardByPortCallAndPersonOnBoardType(int portCallId, PERSON_ON_BOARD_TYPE_ENUM EnumValue)
        {
            var personOnBoardList = _context.PersonOnBoard.Where(s => s.PortCallId == portCallId && s.PersonOnBoardType.EnumValue == EnumValue.ToString())
            .Include(pob => pob.PortCall)
            .Include(pob => pob.Nationality)
            .Include(pob => pob.CountryOfBirth)
            .Include(pob => pob.PersonOnBoardType)
            .Include(pob => pob.PortOfEmbarkation).ThenInclude(p => p.Country)
            .Include(pob => pob.PortOfDisembarkation).ThenInclude(p => p.Country)
            .Include(pob => pob.Gender)
            .Include(pob => pob.IdentityDocument).ThenInclude(i => i.IssuingNation)
            .Include(i => i.IdentityDocument).ThenInclude(i => i.IdentityDocumentType)
            .ToList();

            if (personOnBoardList == null)
            {
                return NotFound();
            }

            var returnVal = personOnBoardList.Select(x => new
            {
                x.PersonOnBoardId,
                x.GivenName,
                x.FamilyName,
                x.DateOfBirth,
                x.PlaceOfBirth,
                x.OccupationName,
                x.OccupationCode,
                x.RoleCode,
                x.InTransit,
                x.RankName,
                x.RankCode,
                x.SequenceNumber,

                PortOfEmbarkation =  x.PortOfEmbarkation?.Name,
                PortOfDisembarkation = x.PortOfDisembarkation?.Name,
                Nationality = x.Nationality?.Name,
                Gender = x.Gender?.Description,
                CountryOfBirth = x.CountryOfBirth?.Name,

                NationalityTwoCharChode = x.Nationality?.TwoCharCode,
                CountryOfBirthTwoCharChode = x.CountryOfBirth?.TwoCharCode,
                x.CountryOfBirthId,
                x.NationalityId,
                x.PersonOnBoardTypeId,
                x.GenderId,
                x.PortCallId,
                x.PortOfEmbarkationId,
                x.PortOfDisembarkationId,
                x.IdentityDocument
            }).ToList();

            return Json(returnVal);
        }

        [HttpGet("{portCallId}/personOnBoard/{personOnBoardId}")]
        public IActionResult GetPersonOnBoardById(int portCallId, int personOnBoardId)
        {
            var personOnBoardList = _context.PersonOnBoard.Where(pob => pob.PortCallId == portCallId)
            .Include(pob => pob.Nationality)
            .Include(pob => pob.CountryOfBirth)
            .Include(pob => pob.PersonOnBoardType)
            .Include(pob => pob.PortOfEmbarkation).ThenInclude(p => p.Country)
            .Include(pob => pob.PortOfDisembarkation).ThenInclude(p => p.Country)
            .Include(pob => pob.Gender)
            .Include(pob => pob.IdentityDocument).ThenInclude(i => i.IssuingNation)
            .Include(i => i.IdentityDocument).ThenInclude(i => i.IdentityDocumentType);
            var personOnBoard = personOnBoardList.FirstOrDefault(pob => pob.PersonOnBoardId == personOnBoardId);
            if (personOnBoard == null)
            {
                return NotFound();
            }
            return Json(personOnBoard);
        }

        [HttpPut("{portCallId}/personOnboard/personOnBoardType/{personOnBoardTypeId}")]
        public IActionResult UpdatePersonOnBoardList([FromBody] List<PersonOnBoard> personOnBoardList, long portCallId, int personOnBoardTypeId)
        {
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Values.SelectMany(v => v.Errors);
                return BadRequest(ModelState);
            }
            try
            {
                if (!personOnBoardList.Any())
                {
                    _context.PersonOnBoard.RemoveRange(_context.PersonOnBoard.Where(s => s.PortCallId == portCallId && s.PersonOnBoardTypeId == personOnBoardTypeId));
                }
                else
                {
                    var oldList = _context.PersonOnBoard.AsNoTracking().Where(s => s.PortCallId == portCallId && s.PersonOnBoardTypeId == personOnBoardTypeId).ToList();
                    // Every entry in oldList that does not match a PersonOnBoardId of any of the entries in personOnBoardList
                    var removeList = oldList.Where(s => !personOnBoardList.Any(personOnBoardEntity => personOnBoardEntity.PersonOnBoardId == s.PersonOnBoardId)).ToList();
                    _context.PersonOnBoard.RemoveRange(removeList);

                    foreach (PersonOnBoard personOnBoardEntity in personOnBoardList)
                    {
                        if (_context.PersonOnBoard.Any(s => s.PersonOnBoardId == personOnBoardEntity.PersonOnBoardId))
                        {
                            _context.PersonOnBoard.Update(personOnBoardEntity);
                        }
                        else
                        {
                            _context.PersonOnBoard.Add(personOnBoardEntity);
                        }
                    }
                }
                _context.SaveChanges();
                /* personOnBoardList = _context.PersonOnBoard.Where(s => s.PortCallId == portCallId)
                                    .Include(pob => pob.Nationality)
                                    .Include(pob => pob.CountryOfBirth)
                                    .Include(pob => pob.PersonOnBoardType)
                                    .Include(pob => pob.PortOfEmbarkation).ThenInclude(p => p.Country)
                                    .Include(pob => pob.PortOfDisembarkation).ThenInclude(p => p.Country)
                                    .Include(pob => pob.Gender)
                                    .Include(pob => pob.IdentityDocument)
                                    .ThenInclude(i => i.IssuingNation)
                                    .Include(i => i.IdentityDocument).ThenInclude(i => i.IdentityDocumentType)
                                    .ToList(); */
                // return Ok(true);
                return Json(personOnBoardList);
            }
            catch (Exception e)
            {
                var errors = ModelState.Values.SelectMany(v => v.Errors);
                return BadRequest(e);
            }
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
            .Include(pc => pc.PortCallDetails)
            .Include(pc => pc.FalShipStores).ThenInclude(fss => fss.MeasurementType)
            .Include(pc => pc.PersonOnBoard)
            .Include(pc => pc.PreviousLocation)
            .Include(pc => pc.NextLocation)
            .Include(pc => pc.PreviousLocation.Country)
            .Include(pc => pc.NextLocation.Country)
            .Include(pc => pc.OrganizationPortCall).ThenInclude(opc => opc.ClearedByUser)
            .Include(pc => pc.PortCallStatus)
            .Include(pc => pc.User).ThenInclude(u => u.Person)
            .Include(pc => pc.User).ThenInclude(u => u.Organization)
            .FirstOrDefault();

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
        [HttpGet("user/overview")]
        public IActionResult GetPortCallOverviewByUser()
        {
            var orgList = _context.Organization.Where(o => o.OrganizationTypeId == Constants.Integers.DatabaseTableIds.ORGANIZATION_TYPE_GOVERNMENT_AGENCY).Select(x => x.OrganizationId).ToList();

            var portCalls = GetPortCalls();

            var result = portCalls.Select(pc => new
            {
                ShipName = pc.Ship.Name,
                pc.PortCallId,
                pc.Ship.CallSign,
                ShipTwoCharCode = pc.Ship.ShipFlagCode.Country.TwoCharCode,
                LocationTwoCharCode = pc.Location.Country.TwoCharCode,
                Eta = pc.LocationEta,
                Etd = pc.LocationEtd,
                LocationAta = pc.LocationAta,
                LocationAtd = pc.LocationAtd,
                LocationName = pc.Location.Name,
                Status = pc.PortCallStatus.Name,
                ClearanceList = pc.OrganizationPortCall.Where(x => orgList.Contains(x.OrganizationId))
                .Select(x => new
                {
                    x.OrganizationId,
                    x.Cleared,
                    x.Organization?.Name,
                    x.Organization?.ClearanceIsNullString,
                    x.Organization?.ClearanceIsFalseString,
                    x.Organization?.ClearanceIsTrueString
                }).ToList()
            }).ToList();

            return Json(result);
        }

        public List<PortCall> GetPortCalls()
        {
            var portCalls = new List<PortCall>();
            var userId = this.GetUserId();
            var userRole = this.GetUserRoleName();

            var dbUser = _context.User.Where(u => u.UserId.ToString().Equals(userId))
                                    .Include(u => u.Organization.OrganizationType)
                                    .FirstOrDefault();

            switch (userRole)
            {
                // Super Admin & Admin
                case Constants.Strings.UserRoles.SuperAdmin:
                case Constants.Strings.UserRoles.Admin:
                    portCalls = _context.PortCall.Where(pc =>
                                                    pc.PortCallStatusId != Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DELETED)
                                                    .Include(pc => pc.Ship)
                                                    .Include(pc => pc.Ship.ShipFlagCode.Country)
                                                    .Include(pc => pc.Location)
                                                    .Include(pc => pc.Location.Country)
                                                    .Include(pc => pc.OrganizationPortCall)
                                                    .ThenInclude(pc => pc.Organization)
                                                    .Include(pc => pc.PortCallStatus)
                                                    .ToList();
                    break;

                // Agent
                case Constants.Strings.UserRoles.Agent:
                    portCalls = _context.PortCall.Where(
                                                    pc => pc.User.OrganizationId == dbUser.OrganizationId && pc.PortCallStatusId != Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DELETED)
                                                    .Include(pc => pc.Ship)
                                                    .Include(pc => pc.Ship.ShipFlagCode.Country)
                                                    .Include(pc => pc.Location)
                                                    .Include(pc => pc.Location.Country)
                                                    .Include(pc => pc.OrganizationPortCall)
                                                    .ThenInclude(pc => pc.Organization)
                                                    .Include(pc => pc.PortCallStatus)
                                                    .ToList();
                    break;
                // Customs & Health Agency
                case Constants.Strings.UserRoles.Customs:
                case Constants.Strings.UserRoles.HealthAgency:
                    portCalls = _context.PortCall.Where(pc =>
                                            pc.OrganizationPortCall.Any(x => x.OrganizationId == dbUser.OrganizationId)
                                            && pc.PortCallStatusId != Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DRAFT
                                            && pc.PortCallStatusId != Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DELETED)
                                                .Include(pc => pc.Ship)
                                                .Include(pc => pc.Ship.ShipFlagCode.Country)
                                                .Include(pc => pc.Location)
                                                .Include(pc => pc.Location.Country)
                                                .Include(pc => pc.OrganizationPortCall)
                                                .ThenInclude(pc => pc.Organization)
                                                .Include(pc => pc.PortCallStatus)
                                                .ToList();
                    break;
                
                // Other authorities not listed in Constants.Strings.UserRoles
                default:
                    if (dbUser.Organization.OrganizationTypeId == Constants.Integers.DatabaseTableIds.ORGANIZATION_TYPE_GOVERNMENT_AGENCY)
                    {

                        portCalls = _context.PortCall.Where(pc =>
                                pc.OrganizationPortCall.Any(x => x.OrganizationId == dbUser.OrganizationId)
                                && pc.PortCallStatusId != Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DRAFT
                                && pc.PortCallStatusId != Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DELETED)
                                    .Include(pc => pc.Ship)
                                    .Include(pc => pc.Ship.ShipFlagCode.Country)
                                    .Include(pc => pc.Location)
                                    .Include(pc => pc.Location.Country)
                                    .Include(pc => pc.OrganizationPortCall)
                                    .ThenInclude(pc => pc.Organization)
                                    .Include(pc => pc.PortCallStatus)
                                    .ToList();
                    }
                    break;
            }
            return portCalls;
        }

        [Authorize]
        [HttpGet("user")]
        public IActionResult GetPortCallsByUser()
        {
            var portCallList = new List<PortCall>();
            var userId = this.GetUserId();
            var userRole = this.GetUserRoleName();

            var dbUser = _context.User.Where(u => u.UserId.ToString().Equals(userId))
                                    .Include(u => u.Organization.OrganizationType)
                                    .FirstOrDefault();

            switch (userRole)
            {
                // Super Admin
                case Constants.Strings.UserRoles.SuperAdmin:
                    portCallList = _context.PortCall.Where(pc =>
                                                    pc.PortCallStatusId != Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DELETED)
                                                    .ToList();
                    break;
                // Admin
                case Constants.Strings.UserRoles.Admin:
                    portCallList = _context.PortCall.Where(pc =>
                                                    pc.PortCallStatusId != Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DELETED)
                                                    .ToList();
                    break;
                // Agent
                case Constants.Strings.UserRoles.Agent:
                    portCallList = _context.PortCall.Where(
                                                    pc => pc.User.OrganizationId == dbUser.OrganizationId && pc.PortCallStatusId != Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DELETED)
                                                    .ToList();
                    break;
                // Customs
                case Constants.Strings.UserRoles.Customs:
                    portCallList = _context.OrganizationPortCall
                                            .Where(opc =>
                                            opc.OrganizationId == dbUser.OrganizationId
                                            && opc.PortCall.PortCallStatusId != Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DRAFT
                                            && opc.PortCall.PortCallStatusId != Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DELETED
                                            ).Select(opc => opc.PortCall)
                                            .ToList();
                    break;
                // Health agency
                case Constants.Strings.UserRoles.HealthAgency:
                    portCallList = _context.OrganizationPortCall
                                            .Where(opc =>
                                            opc.OrganizationId == dbUser.OrganizationId
                                            && opc.PortCall.PortCallStatusId != Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DRAFT
                                            && opc.PortCall.PortCallStatusId != Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DELETED
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
                                            && opc.PortCall.PortCallStatusId != Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DELETED
                                            ).Select(opc => opc.PortCall).ToList();
                    }
                    break;

            }
            return Json(portCallList);
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
                portCall = _context.PortCall.Where(pc => pc.PortCallId == portCallId)
                    .Include(pc => pc.PortCallStatus)
                    .FirstOrDefault();
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
                var portCall = _context.PortCall.Where(pc => pc.PortCallId == portCallId).FirstOrDefault();
                portCall.PortCallStatusId = Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_CLEARED;
                _context.Update(portCall);
                _context.SaveChanges();
                portCall = _context.PortCall.Where(pc => pc.PortCallId == portCallId)
                    .Include(pc => pc.PortCallStatus)
                    .FirstOrDefault();
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
                var portCall = _context.PortCall.Where(pc => pc.PortCallId == portCallId).FirstOrDefault();
                portCall.PortCallStatusId = Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_COMPLETED;
                _context.Update(portCall);
                _context.SaveChanges();
                portCall = _context.PortCall.Where(pc => pc.PortCallId == portCallId)
                    .Include(pc => pc.PortCallStatus)
                    .FirstOrDefault();
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
                var portCall = _context.PortCall.FirstOrDefault(pc => pc.PortCallId == portCallId);
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
                var portCall = _context.PortCall.Where(pc => pc.PortCallId == portCallId).Include(pc => pc.OrganizationPortCall).FirstOrDefault();
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
        [HttpPut("delete/{portCallId}")]
        public IActionResult SetAsDeleted(int portCallId)
        {
            try
            {
                var portCall = _context.PortCall.Where(pc => pc.PortCallId == portCallId).Include(pc => pc.User).FirstOrDefault();

                if (portCall == null)
                {
                    return BadRequest("Port Call not found.");
                }

                var userId = this.GetUserId();
                var user = _context.User.Where(usr => usr.UserId.ToString().Equals(userId))
                                        .Include(u => u.PortCall)
                                        .Include(u => u.Organization.OrganizationPortCall)
                                        .Include(u => u.Role)
                                        .FirstOrDefault();
                if (user == null)
                {
                    return BadRequest("User not found.");
                }

                bool portCallIsByUser = portCall.UserId.ToString().Equals(userId);
                bool portCallIsByUserOrganization = portCall.User.OrganizationId == user.OrganizationId;
                bool userIsAdmin = user.Role.Name.Equals(Constants.Strings.UserRoles.SuperAdmin) || user.Role.Name.Equals(Constants.Strings.UserRoles.Admin);

                if (!(portCallIsByUser || portCallIsByUserOrganization || userIsAdmin))
                {
                    return BadRequest("Deletion request denied: port call does not belong to the user, nor any user from their organization.");
                }

                portCall.PortCallStatusId = Constants.Integers.DatabaseTableIds.PORT_CALL_STATUS_DELETED;
                _context.Update(portCall);
                _context.SaveChanges();
                return Ok(portCall);
            }
            catch (DbUpdateException ex) when (ex.InnerException is Npgsql.PostgresException)
            {
                Npgsql.PostgresException innerEx = (Npgsql.PostgresException)ex.InnerException;
                return BadRequest("PostgreSQL Error Code: " + innerEx.SqlState);
            }
            catch (Exception e)
            {
                return BadRequest(e);
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
