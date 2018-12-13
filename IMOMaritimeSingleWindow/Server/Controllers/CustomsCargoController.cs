using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class CustomsCargoController : Controller
    {
        readonly open_ssnContext _context;

        public CustomsCargoController(open_ssnContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            CustomsCargo cargo = _context.CustomsCargo.FirstOrDefault(c => c.CustomsCargoId == id);
            if (cargo == null)
            {
                return NotFound();
            }
            return Json(cargo);
        }

        [HttpGet("overviewByPortCall/{portCallId}")]
        public IActionResult GetOverviewByPortCall(int portCallId)
        {
            var consignments = _context.Consignment.Where(consignment => consignment.PortCallId == portCallId)
                                                   .Include(consignment => consignment.CargoItem)
                                                   .ToList();
            var NoOfCargoItems = 0;
            var NoOfPackages = 0;

            foreach (var consignment in consignments)
            {
                if (consignment.CargoItem != null && consignment.CargoItem.Any())
                {
                    var cargoItems = consignment.CargoItem;
                    NoOfCargoItems += cargoItems.Count();

                    foreach (var cargoItem in cargoItems)
                    {
                        if (cargoItem.NumberOfPackages.HasValue)
                        {
                            NoOfPackages += cargoItem.NumberOfPackages.Value;
                        }
                    }
                }
            }

            var NoOfConsignments = consignments.Count();

            var returnVal = new
            {
                NoOfConsignments,
                NoOfPackages,
                NoOfCargoItems
            };
            return Json(returnVal);
        }

        [HttpPost("add")]
        public IActionResult Add(CustomsCargo cargo)
        {
            if (cargo == null)
            {
                return BadRequest("Empty request body.");
            }
            _context.CustomsCargo.Add(cargo);
            _context.SaveChanges();
            return Ok(cargo);
        }
    }
}
