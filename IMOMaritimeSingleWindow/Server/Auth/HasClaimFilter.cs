// Implementation courtesy of https://stackoverflow.com/a/41348219

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Linq;
using System.Security.Claims;

namespace IMOMaritimeSingleWindow.Auth
{

    /// <summary>
    /// Provides an authorization filter for verifying whether a
    /// user posesses a claim.
    /// </summary>
    public class HasClaimFilter : IAuthorizationFilter
    {
        readonly Claim _claim;
        
        public HasClaimFilter(Claim claim)
        {
            _claim = claim;
        }

        public void OnAuthorization(AuthorizationFilterContext context)
        {
            //Checks whether the user posesses the claim provided
            var hasClaim = context.HttpContext.User
                .Claims.Any(c => c.Type == _claim.Type && c.Value == _claim.Value);
            if (!hasClaim)
            {
                context.Result = new ForbidResult();
            }
        }
    }
}
