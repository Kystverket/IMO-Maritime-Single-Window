using System;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using IMOMaritimeSingleWindow.Identity; using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.ViewModels;

using Moq;
using NUnit.Framework;
using System.Threading;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.Tests.ControllerTests
{
    public class AuthControllerTest
    {

        private Mock<IUserStore<ApplicationUser>> mockUserStore;
        private Mock<IUserRoleStore<ApplicationUser>> mockUserRoleStore;
        private Mock<UserManager<ApplicationUser>> mockUserManager;

        private Mock<UserManager<ApplicationUser>> GetMockUserManager()
        {
            var userStoreMock = new Mock<IUserStore<ApplicationUser>>();
            return new Mock<UserManager<ApplicationUser>>(
                userStoreMock.Object, null, null, null, null, null, null, null, null);
        }

        public AuthControllerTest()
        {
            mockUserStore = new Mock<IUserStore<ApplicationUser>>();
            mockUserRoleStore = mockUserStore.As<IUserRoleStore<ApplicationUser>>();
            mockUserManager = GetMockUserManager();
        }

        [SetUp]
        public void SetUp()
        {
            var userId = Guid.NewGuid().ToString();
            CancellationToken cancellationToken = new CancellationToken();
            mockUserManager.Setup(x => x.FindByIdAsync(userId))
                .ReturnsAsync(new ApplicationUser()
                {
                    UserName = "test@email.com"
                });
            mockUserStore.Setup(
                u => u.CreateAsync(null, cancellationToken)
                );
            
            CredentialsViewModel crVm = new CredentialsViewModel
            {
                UserName = "per@ola.no",
                Password = "Tester123"
            };
            //mockUserStore.Setup();
         
        }

        public void FirstTest()
        {
            Assert.True(1 == 1);
        }


    }
}
