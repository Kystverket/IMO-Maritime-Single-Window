using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace IMOMaritimeSingleWindow.Models.Entities
{
    public class PersonClaim: IdentityUserClaim<string>
    {
    public string SystemName { get; set; }
    }
}
