using System;
using IMOMaritimeSingleWindow.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Extensions;
using Npgsql;
using System.Data.SqlClient;

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
            var state = _context.Database.GetDbConnection().State;
            return Json(state);
        }
    }
}