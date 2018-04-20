using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace IMOMaritimeSingleWindow.Identity.Models
{
    public class Password
    {
        [Key]
        public Guid UserId { get; set; } //Foreign key is primary key

        public ApplicationUser Identity { get; set; } //Navigational property
        public string PasswordHash { get; set; }

        /*
        public Password()
        {
            PasswordId = new Guid();
        }
        */

    }
}
