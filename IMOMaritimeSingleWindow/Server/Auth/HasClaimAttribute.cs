using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.Auth
{
    public class HasClaimAttribute : TypeFilterAttribute
    {
        public HasClaimAttribute(string claimType, string claimValue) : base(typeof(HasClaimFilter))
        {
            Arguments = new object[] { new Claim(claimType, claimValue) };
        }
    }
}
