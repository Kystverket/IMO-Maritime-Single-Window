using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Claim = System.Security.Claims.Claim;

namespace IMOMaritimeSingleWindow.Helpers
{
    public class UserClaimsResult
    {
        public UserClaimsResult() { }

        public string UserName { get; set; }
        public IList<Claim> Claims { get; set; }
    }
}
