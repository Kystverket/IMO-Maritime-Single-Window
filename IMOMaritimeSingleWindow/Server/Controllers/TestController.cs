using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class TestController : Controller
    {
        
        [Authorize(Policy = "AdminUser")]
        // GET /api/test/admindata
        [HttpGet("admindata")]
        public JsonResult GetAdminData()
        {
            int totalBansThisWipe = 8;
            List<string> dataList = new List<string>
            {
                "Wipe is scheduled for 8 PM CET on fridays, but admins can join 10 minutes earlier via this link: url",
                $"{totalBansThisWipe} players have been banned from the server this wipe"
            };
            return Json(dataList);
        }

    }
}
