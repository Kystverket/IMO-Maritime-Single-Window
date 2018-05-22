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
            try
            {
                var userId = User.FindFirst(cl => cl.Type == Constants.Strings.JwtClaimIdentifiers.Id).Value;
                var userRole = User.FindFirst(cl => cl.Type == Constants.Strings.JwtClaimIdentifiers.Rol).Value;
                var organization = _context.User.Where(usr => usr.OrganizationId != null && usr.UserId.ToString().Equals(userId)).Select(usr => usr.Organization).Include(o => o.OrganizationType).FirstOrDefault();
                return Json(organization);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return BadRequest(e);
            }
        }

        [HttpGet("search/{searchTerm}")]
        public IActionResult Search(string searchTerm)
        {

            var matchingOrganizations = (from c in _context.Organization
                                         where EF.Functions.ILike(c.Name, searchTerm + '%')
                                         || EF.Functions.ILike(c.OrganizationNo, searchTerm + '%')
                                         select c).Include(o => o.OrganizationType).Take(10).ToList();

            return Json(matchingOrganizations);
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
