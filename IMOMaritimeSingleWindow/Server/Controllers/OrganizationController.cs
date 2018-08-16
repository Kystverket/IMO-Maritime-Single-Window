using IMOMaritimeSingleWindow.Auth;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Extensions;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using Claims = IMOMaritimeSingleWindow.Helpers.Constants.Strings.Claims;

namespace IMOMaritimeSingleWindow.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    public class OrganizationController : Controller
    {
        readonly IDbContext _context;

        public OrganizationController(IDbContext context)
        {
            _context = context;
        }


        [Authorize]
        [HttpGet("user")]
        public IActionResult GetOrganizationForUser()
        {
            try
            {
                var userId = this.GetUserId();
                var organization = _context.User.Where(usr => usr.OrganizationId != null && usr.UserId.ToString().Equals(userId)).Select(usr => usr.Organization).Include(o => o.OrganizationType).FirstOrDefault();
                return Json(organization);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return BadRequest(e);
            }
        }

        [HttpGet("~/api/organizationType/recognizedSecurityOrganization/organization")]
        public IActionResult GetRecognizedSecurityOrganizations()
        {
            List<Organization> rsoList = _context.Organization.Where(org => org.OrganizationTypeId == Constants.Integers.DatabaseTableIds.ORGANIZATION_TYPE_RECOGNIZED_SECURITY_ORGANIZATION).ToList();
            if (rsoList == null || rsoList.Count == 0)
            {
                return NotFound();
            }
            return Ok(rsoList);
        }

        public List<Organization> SearchOrganization(string searchTerm, int amount = 10)
        {
            return _context.Organization.Where(org => EF.Functions.ILike(org.Name, searchTerm + '%')
                                                                || EF.Functions.ILike(org.OrganizationNo, searchTerm + '%'))
                                                                .Select(org => org)
                                                                .Include(org => org.OrganizationType)
                                                                .Take(amount).ToList();
        }

        [HttpGet("search/{searchTerm}/{amount}")]
        public IActionResult SearchOrganizationJson(int amount, string searchTerm)
        {
            var organizations = SearchOrganization(searchTerm, amount);
            return Json(organizations);
        }

        [HasClaim(Claims.Types.ORGANIZATION, Claims.Values.REGISTER)]
        [HttpPost()]
        public IActionResult RegisterOrganization([FromBody] Organization newOrganization)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                _context.Organization.Add(newOrganization);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
            return Json(newOrganization);
        }

        [HasClaim(Claims.Types.ORGANIZATION, Claims.Values.REGISTER)]
        [HttpPut()]
        public IActionResult UpdateOrganization([FromBody] Organization organization)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                _context.Organization.Update(organization);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
            return Json(organization);
        }

    }
}
