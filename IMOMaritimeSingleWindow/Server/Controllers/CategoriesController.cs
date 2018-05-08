using System;
using System.Net.Http;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using IMOMaritimeSingleWindow.ViewModels;
using System.Security.Claims;
using IMOMaritimeSingleWindow.Helpers;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class CategoriesController : Controller
    {

        private readonly IAuthorizationService _authorizationService;
        private string[] Categories { get; set; }
        public CategoriesController(IAuthorizationService authorizationService)
        {
            _authorizationService = authorizationService;
            Categories = new string[] { "Users", "Formalities", "Regulatory Information", "Ships", "Shipping Companies",
                                    "Locations", "Areas", "Organisations", "Attachment types", "National Parameters" };
        }

        // GET: api/<controller>
        [HttpPost("GetCategories")]
        public IEnumerable<string> Gets([FromBody]CredentialsViewModel model)
        {
            if (!ModelState.IsValid)
                return new string[] { "", ""};

            return new string[] { "Users", "Formalities", "Regulatory Information", "Ships", "Shipping Companies", 
                                    "Locations", "Areas", "Organisations", "Attachment types", "National Parameters" };
        }

        // GET: api/<controller>
        [Authorize]
        [HttpGet("getcategories")]
        public IActionResult Get()
        {
            var headers = HttpContext.Request.Headers;
            var header_val = from x in headers
                        where x.Key.Contains("Authorization")
                        select x.Value;
            var token = header_val.First().ToString();
            token = token.Split("Bearer ").ElementAt(1);

            var user = Request.HttpContext.User.ToString();

            return Ok(user);
        }

        // GET: api/<controller>
        [Authorize]
        [HttpGet("user")]
        public IActionResult GetUser()
        {
            
            var user = Request.HttpContext.User;
            if (user.IsInRole(Constants.Strings.UserRoles.Admin))
                return Ok(Categories);
            else if (user.IsInRole(Constants.Strings.UserRoles.Agent))
            {
                var categories = new string[] { "Port Call" };
                return Ok("user has correct role");
            }
                
            return BadRequest("user is not in correct role");
        }

    }
}
