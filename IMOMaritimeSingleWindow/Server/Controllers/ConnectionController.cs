using IMOMaritimeSingleWindow.Data;
using Microsoft.AspNetCore.Mvc;
using System;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class ConnectionController : Controller
    {
        readonly open_ssnContext _context;

        public ConnectionController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("state")]
        public IActionResult GetState()
        {
            using (var con = _context.GetDbConnection())
            {
                try
                {
                    con.Open();
                    var state = con.State;
                    con.Close();
                    return Json(state);
                }
                catch (Exception)
                {
                    return Json(con.State);
                }
            }
        }
    }
}
