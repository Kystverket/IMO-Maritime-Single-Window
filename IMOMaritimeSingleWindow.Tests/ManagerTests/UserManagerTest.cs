using IMOMaritimeSingleWindow.Tests.Data;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Repositories;
using IMOMaritimeSingleWindow.Identity;
using IMOMaritimeSingleWindow.Identity.Models;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestContext = IMOMaritimeSingleWindow.Data.TestContext;

using Microsoft.AspNetCore.Identity;


namespace IMOMaritimeSingleWindow.Tests.ManagerTests
{
    public class UserManagerTest
    {
        private readonly TestContext context;
        private readonly UserManager<ApplicationUser> userManager;

        public UserManagerTest()
        {
            var factory = new ContextFactory();
            context = factory.CreateContext();
            var unitOfWork = new UnitOfWork(context);
        }

        [OneTimeSetUp]
        public void InitialSetUp()
        {



        }

    }
}
