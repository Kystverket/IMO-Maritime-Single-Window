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
using IMOMaritimeSingleWindow.Repositories;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class ClaimController : Controller
    {
        readonly UnitOfWork _unitOfWork;

        public ClaimController(IUnitOfWork<Guid> unitOfWork)
        {
            _unitOfWork = unitOfWork as UnitOfWork;

        }

        /// <summary>
        /// Gets all existing claims
        /// </summary>
        /// <returns>A list of claims</returns>
        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            var claimList = _unitOfWork.GetAllClaims().ToList();
            return Json(claimList);
        }

        /// <summary>
        /// Gets all claims of type portcall
        /// </summary>
        /// <returns>A list of claims</returns>
        [HttpGet("type/portcall")]
        public IActionResult GetAllTypePortCall()
        {
            try
            {
                var portCallClaimList = _unitOfWork.GetClaimsByType(Constants.Strings.DatabaseTableStrings.CLAIM_TYPE_PORT_CALL_NAME).ToList();
                return Json(portCallClaimList);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return BadRequest(e.Message);
            }
        }

        /// <summary>
        /// Gets all claims of type menu
        /// </summary>
        /// <returns>A list of claims</returns>
        [HttpGet("type/menu")]
        public IActionResult GetAllTypeMenu()
        {
            var menuClaimList = _unitOfWork.GetClaimsByType(Constants.Strings.DatabaseTableStrings.CLAIM_TYPE_MENU_NAME).ToList();
            return Json(menuClaimList);
        }
    }
}
