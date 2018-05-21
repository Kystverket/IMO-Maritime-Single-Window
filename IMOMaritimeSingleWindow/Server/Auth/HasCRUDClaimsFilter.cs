using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Claims = IMOMaritimeSingleWindow.Helpers.Constants.Strings.Claims;

namespace IMOMaritimeSingleWindow.Auth
{
    public class HasCRUDClaimsFilter : IAuthorizationFilter
    {
        readonly string _claimType;

        public HasCRUDClaimsFilter(string claimType)
        {
            _claimType = claimType;
        }

        public void OnAuthorization(AuthorizationFilterContext context)
        {
            bool hasClaims = context.HttpContext.User.Claims
                .Any(c => c.Type == _claimType && c.Value == Claims.Values.REGISTER);
            hasClaims = context.HttpContext.User.Claims
                .Any(c => c.Type == _claimType && c.Value == Claims.Values.VIEW);
            hasClaims = context.HttpContext.User.Claims
                .Any(c => c.Type == _claimType && c.Value == Claims.Values.EDIT);
            hasClaims = context.HttpContext.User.Claims
                .Any(c => c.Type == _claimType && c.Value == Claims.Values.DELETE);

            if (!hasClaims)
            {
                context.Result = new ForbidResult();
            }
        }
    }
}
