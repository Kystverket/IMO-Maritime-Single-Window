using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace IMOMaritimeSingleWindow.Models.Entities
{
    public class Password
    {
        public int PasswordId { get; set; } //Primary key
        public Guid IdentityId { get; set; }
        public ApplicationUser Identity { get; set; } //Foreign key
        public string PasswordHash { get; set; }

        /*
        public Password()
        {
            PasswordId = new Guid();
        }
        */

    }
}
