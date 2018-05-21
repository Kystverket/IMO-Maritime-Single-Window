using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using IMOMaritimeSingleWindow.ViewModels;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class CategoriesController : Controller
    {
        private string[] Categories { get; set; }
        public CategoriesController()
        {
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

    }
}
