using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Extensions;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Helpers;

namespace IMOMaritimeSingleWindow.Controllers
{
    [Route("api/[controller]")]
    public class TestController : Controller
    {
        readonly open_ssnContext _context;
        readonly UserManager<ApplicationUser> _userManager;
        readonly IHttpContextAccessor _httpContextAccessor;
        readonly IHostingEnvironment _env;
        public TestController(
            open_ssnContext context,
            UserManager<ApplicationUser> userManager,
            IHttpContextAccessor httpContextAccessor,
            IHostingEnvironment env)
        {
            _context = context;
            _userManager = userManager;
            _httpContextAccessor = httpContextAccessor;
            _env = env;
        }

        [HttpGet("emailToken")]
        public async Task<IActionResult> GetEmailToken()
        {
            var user = await _userManager.FindByNameAsync("agent4@imo-msw.org");
            return Ok(await _userManager.GenerateEmailConfirmationTokenAsync(user));
        }

        [HttpGet("passwordResetToken")]
        public async Task<IActionResult> GetPasswordResetToken()
        {
            var user = await _userManager.FindByNameAsync("agent4@imo-msw.org");
            var passwordResetToken = await _userManager.GeneratePasswordResetTokenAsync(user);
            return Ok(passwordResetToken);
        }

        [HttpGet("emailLink")]
        public async Task<IActionResult> GetEmailLink()
        {
            var applicationUser = await _userManager.FindByNameAsync("agent4@imo-msw.org");
            applicationUser.EmailConfirmed = false;
            await _userManager.UpdateAsync(applicationUser);

            var callbackUrl = await GetEmailLink(applicationUser);
            // Construct message
            var infotext = $"An email has been sent to {applicationUser.Email} containing the confirmation link: {callbackUrl}";
            return Ok(infotext);
        }

        [HttpGet("securityStamp")]
        public async Task SetSecurityStampAsync()
        {
            var users = _userManager.Users;
            foreach (var applicationUser in users)
            {
                await _userManager.UpdateSecurityStampAsync(applicationUser);
            }
        }


        [HttpPut("user/password/{password}")]
        public async Task<IActionResult> UpdateUser([FromBody]CredentialsViewModel credentials, string password)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var user = await _userManager.FindByNameAsync(credentials.UserName);
            if (user == null)
                return BadRequest(nameof(credentials));

            var res = await _userManager.ChangePasswordAsync(user, currentPassword: credentials.Password, newPassword: password);
            return Json(res);

        }

        [HttpGet("json")]
        public IActionResult GetTestJson()
        {
            return Json(new
            {
                test = "teststreng"
            });
        }


        private async Task<Uri> GetEmailLink(ApplicationUser user)
        {
            if(user == null)
                throw new ArgumentNullException(nameof(user));

            var emailConfirmationToken = await _userManager.GenerateEmailConfirmationTokenAsync(user);

            QueryBuilder queryBuilder = new QueryBuilder(
                new Dictionary<string, string>()
                {
                    { "userId", user.Id.ToString() },
                    { "token", emailConfirmationToken }
                }
            );

            UriBuilder uriBuilder = new UriBuilder(GetCallBackUri(Constants.Strings.ClientURIs.EMAILCONFIRMATION))
            {
                Query = queryBuilder.ToString()
            };

            return uriBuilder.Uri;
        }

        private Uri GetCallBackUri()
        {
            int PORT = _env.IsDevelopment() ? 4200 : 80;

            UriBuilder uriBuilder = new UriBuilder
            {
                Scheme = Request.Scheme,
                Host = Request.Host.Host,
                Port = PORT
            };
            return uriBuilder.Uri;
        }
        // Returns an URI pointing to the route in the web application
        private Uri GetCallBackUri(string route)
        {
            int PORT = _env.IsDevelopment() ? 4200 : 80;

            UriBuilder uriBuilder = new UriBuilder
            {
                Scheme = Request.Scheme,
                Host = Request.Host.Host,
                Path = route,
                Port = PORT
            };
            return uriBuilder.Uri;
        }


    }
}
