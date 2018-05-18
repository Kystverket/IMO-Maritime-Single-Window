using System;
using System.Collections.Generic;
using System.Text;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Repositories;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Tests.Data;
using IMOMaritimeSingleWindow.ViewModels.Mappings;

using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Identity.Stores;
using Microsoft.AspNetCore.Identity;
using AutoMapper;
using NUnit.Framework;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.Tests
{
    public class UserFixture
    {
        public List<ApplicationUser> Users { get; }

        public UserFixture()
        {
            Users = new List<ApplicationUser>
            {
                new ApplicationUser
                {
                    FirstName = "Ola",
                    Email = "ola@test.no",
                    PasswordHash = "jh7asd6am"
                }
            };
        }
    }
}
