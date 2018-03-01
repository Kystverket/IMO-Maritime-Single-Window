using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class CategoriesController : Controller
    {
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "Users", "Formalities", "Regulatory Information", "Ships", "Shipping Companies", 
                                    "Locations", "Areas", "Organisations", "Attachment types", "National Parameters" };
        }
    }
}
