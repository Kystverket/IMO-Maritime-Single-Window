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
    public class FalSecurityController : Controller
    {
        readonly open_ssnContext _context;

        public FalSecurityController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("overviewByPortCallId/{portCallId}")]
        public IActionResult GetFalSecurityOverviewByPortCallId(int portCallId)
        {
            var falModel = _context.FalSecurity
                .Where(fs => fs.PortCall.PortCallId == portCallId)
                .Include(fs => fs.SecurityLevel)
                .Include(fs => fs.CompanySecurityOfficer)
                .Include(fs => fs.PortCall.Ship)
                    .ThenInclude(s => s.Issc)
                        .ThenInclude(issc => issc.GovernmentIssuer)
                .Include(fs => fs.PortCall.Ship)
                    .ThenInclude(s => s.Issc)
                        .ThenInclude(issc => issc.RsoIssuer)
                .FirstOrDefault();

            if (falModel != null)
            {
                try
                {

                    var hasValidSSP = false;
                    if (falModel.ShipHasValidSspOnBoard.HasValue)
                        hasValidSSP = falModel.ShipHasValidSspOnBoard.Value;

                    var currentSecurityLevel = falModel.SecurityLevel.Name;
                    if (string.IsNullOrWhiteSpace(currentSecurityLevel))
                    {
                        currentSecurityLevel = "N/A";
                    }

                    var additionalInfo = falModel.OtherRelatedInfo;

                    if (string.IsNullOrWhiteSpace(additionalInfo))
                    {
                        additionalInfo = "N/A";
                    }

                    var SecurityDetails = new
                    {
                        ValidSSP = hasValidSSP ? "YES" : "NO",
                        CurrentSecurityLevel = currentSecurityLevel,
                        AdditionalInfo = additionalInfo,
                    };

                    var securityOfficer = falModel.CompanySecurityOfficer;

                    var CSO = new
                    {
                        FullName = securityOfficer.GivenName + " " + securityOfficer.Surname,
                        securityOfficer.PhoneNumber,
                        securityOfficer.Email,
                    };

                    var certificate = falModel.PortCall.Ship.Issc;

                    var expiryDateStr = "N/A";
                    if (certificate.ExpiryDate.HasValue)
                    {
                        expiryDateStr = certificate.ExpiryDate.Value.ToShortDateString();
                    }

                    var isGovernmentIssued = certificate.IssuedByGovernment.HasValue && certificate.IssuedByGovernment.Value;
                    var issuerTypeStr = isGovernmentIssued ? "Government" : "RSO";
                    var issuedBy = isGovernmentIssued ? certificate.GovernmentIssuer.Name : certificate.RsoIssuer.Name;

                    var ISSC = new
                    {
                        certificate.CertificateNumber,
                        ExpiryDate = expiryDateStr,
                        IssuerType = issuerTypeStr,
                        IssuedBy = issuedBy
                    };

                    var returnVal = new
                    {
                        SecurityDetails,
                        ISSC,
                        CSO
                    };

                    return Json(returnVal);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex);
                }
            }
            return null;
        }

        [HttpGet("{securityId}/companySecurityOfficer")]
        public IActionResult GetCompanySecurityOfficerBySecurityId(int securityId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                CompanySecurityOfficer companySecurityOfficer = _context.FalSecurity.Where(fs => fs.FalSecurityId == securityId)
                                                            .Include(fs => fs.CompanySecurityOfficer.Organization.OrganizationType).Select(fs => fs.CompanySecurityOfficer).FirstOrDefault();
                if (companySecurityOfficer == null)
                {
                    return NotFound();
                }
                return Ok(companySecurityOfficer);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpGet("~/api/portCall/{portCallId}/falSecurity")]
        public IActionResult GetByPortCallId(int portCallId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                FalSecurity falSecurity = _context.FalSecurity.Where(fs => fs.PortCallId == portCallId)
                                        .Include(fs => fs.CompanySecurityOfficer.Organization.OrganizationType)
                                        .Include(fs => fs.SecurityPreviousPortOfCall).ThenInclude(sppc => sppc.Location.Country)
                                        .Include(fs => fs.SecurityPreviousPortOfCall).ThenInclude(sppc => sppc.SecurityLevel)
                                        .Include(fs => fs.ShipToShipActivity).ThenInclude(stsa => stsa.Location.Country)
                                        .Include(fs => fs.ShipToShipActivity).ThenInclude(stsa => stsa.ActivityType)
                                        .FirstOrDefault();
                if (falSecurity == null)
                {
                    return NoContent();
                }
                return Ok(falSecurity);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPut()]
        public IActionResult SaveFalSecurity([FromBody] FalSecurity falSecurity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                if (falSecurity.FalSecurityId > 0)
                {
                    _context.ShipToShipActivity.RemoveRange(_context.ShipToShipActivity.Where(stsa => stsa.FalSecurityId == falSecurity.FalSecurityId));
                    _context.SecurityPreviousPortOfCall.RemoveRange(_context.SecurityPreviousPortOfCall.Where(pc => pc.FalSecurityId == falSecurity.FalSecurityId));
                    _context.FalSecurity.Update(falSecurity);
                }
                else
                {
                    _context.FalSecurity.Add(falSecurity);
                }
                _context.SaveChanges();
                return Ok(falSecurity);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpGet("id")]
        public IActionResult GetById(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                FalSecurity falSecurity = _context.FalSecurity.Where(fs => fs.FalSecurityId == id).FirstOrDefault();
                if (falSecurity == null)
                {
                    return NotFound();
                }
                return Ok(falSecurity);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

    }
}
