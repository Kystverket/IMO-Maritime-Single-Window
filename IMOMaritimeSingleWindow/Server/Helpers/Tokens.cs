
/*  An utility class that provides functionality for handling token generation.
 *  This was taken from an example project written by
 *  author: Marc Macniel (https://github.com/mmacneil)
 *  cited in a blog post
 *  url: https://fullstackmark.com/post/13/jwt-authentication-with-aspnet-core-2-web-api-angular-5-net-core-identity-and-facebook-login
 *  demonstrating how to implement a framework for authenticating users with JWT
 *  in an ASP.NET Core 2/Angular 5 web application.
 *  
 *  This class can be found on the project's GitHub repository
 *  url: https://github.com/mmacneil/AngularASPNETCore2WebApiAuth
 */

using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Auth;
using Newtonsoft.Json;

namespace IMOMaritimeSingleWindow.Helpers
{
    public static class Tokens
    {
      public static async Task<string> GenerateJwt(ClaimsIdentity identity, IJwtFactory jwtFactory, string userName, JwtIssuerOptions jwtOptions, JsonSerializerSettings serializerSettings)
      {
        var response = new
        {
          id = identity.Claims.Single(c => c.Type == "id").Value,
          auth_token = await jwtFactory.GenerateEncodedToken(userName, identity),
          expires_in = (int)jwtOptions.ValidFor.TotalSeconds
        };

        return JsonConvert.SerializeObject(response, serializerSettings);
      }
    }
}
