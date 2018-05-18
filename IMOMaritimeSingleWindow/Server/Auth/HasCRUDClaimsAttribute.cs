using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.Auth
{
    public class HasCRUDClaimsAttribute : TypeFilterAttribute
    {
        public HasCRUDClaimsAttribute(string claimType) : base(typeof(HasCRUDClaimsFilter))
        {
            Arguments = new object[] { claimType };
        }
    }
}
