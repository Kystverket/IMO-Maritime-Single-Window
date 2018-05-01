

using System;
using System.Net.Http;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Auth;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Identity; using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
 

namespace IMOMaritimeSingleWindow.Controllers
{
  [Route("api/[controller]/[action]")]
  public class ExternalAuthController : Controller
  {
    private readonly usertestContext _appDbContext;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly IJwtFactory _jwtFactory;
    private readonly JwtIssuerOptions _jwtOptions;
    private static readonly HttpClient Client = new HttpClient();

    public ExternalAuthController(UserManager<ApplicationUser> userManager, usertestContext appDbContext, IJwtFactory jwtFactory, IOptions<JwtIssuerOptions> jwtOptions)
    {
      _userManager = userManager;
      _appDbContext = appDbContext;
      _jwtFactory = jwtFactory;
      _jwtOptions = jwtOptions.Value;
    }
    
  }
}
