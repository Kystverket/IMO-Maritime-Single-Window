
/*  This was taken from an example project written by
 *  author: Marc Macniel (https://github.com/mmacneil)
 *  cited in a blog post
 *  url: https://fullstackmark.com/post/13/jwt-authentication-with-aspnet-core-2-web-api-angular-5-net-core-identity-and-facebook-login
 *  demonstrating how to implement a framework for authenticating users with JWT
 *  in an ASP.NET Core 2/Angular 5 web application.
 *  
 *  This class can be found on the project's GitHub repository
 *  url: https://github.com/mmacneil/AngularASPNETCore2WebApiAuth
 *  file url: https://github.com/mmacneil/AngularASPNETCore2WebApiAuth/blob/master/src/Helpers/Errors.cs
 */

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace IMOMaritimeSingleWindow.Helpers
    { 
        public static class Errors
        {
            public static ModelStateDictionary AddErrorsToModelState(IdentityResult identityResult, ModelStateDictionary modelState)
            {
                foreach (var e in identityResult.Errors)
                {
                    modelState.TryAddModelError(e.Code, e.Description);
                }

                return modelState;
            }

            public static ModelStateDictionary AddErrorToModelState(string code, string description, ModelStateDictionary modelState)
            {
                modelState.TryAddModelError(code, description);
                return modelState;
            }
        }
    }

