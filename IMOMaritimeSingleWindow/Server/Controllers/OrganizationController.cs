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
using Microsoft.AspNetCore.Authorization;
using IMOMaritimeSingleWindow.Auth;
using Policies = IMOMaritimeSingleWindow.Helpers.Constants.Strings.Policies;
using Claims = IMOMaritimeSingleWindow.Helpers.Constants.Strings.Claims;

namespace IMOMaritimeSingleWindow.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    public class OrganizationController : Controller
    {
        readonly open_ssnContext _context;


        public OrganizationController(open_ssnContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpGet("foruser")]
        public IActionResult GetOrganizationForUser()
        {
            var userId = User.FindFirst(cl => cl.Type == Constants.Strings.JwtClaimIdentifiers.Id).Value;
            var userRole = User.FindFirst(cl => cl.Type == Constants.Strings.JwtClaimIdentifiers.Rol).Value;
            var organization = _context.User.Where(usr => usr.OrganizationId != null && usr.UserId.ToString().Equals(userId)).Select(usr => usr.Organization).Include(o => o.OrganizationType).FirstOrDefault();
            return Json(organization);
        }

        [HttpGet("search/{searchTerm}")]
        public IActionResult Search(string searchTerm)
        {
            var organizations = _context.Organization.Where(org => EF.Functions.ILike(org.Name, searchTerm + '%')
                                                                || EF.Functions.ILike(org.OrganizationNo, searchTerm + '%'))
                                                                .Select(org => org)
                                                                .Include(org => org.OrganizationType)
                                                                .Take(10).ToList();
            return Json(organizations);
        }

        [HasClaim(Claims.Types.ORGANIZATION, Claims.Values.REGISTER)]
        [HttpPost("register")]
        public IActionResult RegisterOrganization([FromBody] Organization newOrganization)
        {
            try
            {
                _context.Organization.Add(newOrganization);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message + ":\n" + e.InnerException.Message);
            }
            return Json(newOrganization);
        }



    }
}
