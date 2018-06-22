// Implementation courtesy of https://stackoverflow.com/a/41348219

using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace IMOMaritimeSingleWindow.Auth
{
    public class HasClaimAttribute : TypeFilterAttribute
    {
        /// <summary>
        /// An authorization attribute for verifying whether
        /// a user posesses a claim.
        /// </summary>
        /// <param name="claimType">The name of the type of claim</param>
        /// <param name="claimValue">The value of the claim of given type</param>
        public HasClaimAttribute(string claimType, string claimValue) : base(typeof(HasClaimFilter))
        {
            Arguments = new object[] { new Claim(claimType, claimValue) };
        }
    }
}
