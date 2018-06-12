using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using NUnit.Framework;


using TestContext = IMOMaritimeSingleWindow.Data.TestContext;
using IMOMaritimeSingleWindow.Repositories;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Tests.RepositoryTests
{
    public class UnitOfWorkTest
    {
        //[Fact]
        //public void GetClaimsForRole()
        //{
        //    var roles = UnitOfWork.Roles.Find(r => r.Name == "admin").ToList();

        //    var claims = UnitOfWork.RoleClaims.GetClaimsForRole(roles.First().RoleId);
        //    Assert.Contains(claims, c => c.ClaimValue == "View");
        //}

        //[InlineData("admin@test.no")]
        //[InlineData("ab_customs@test.no")]
        //[Theory]
        //public void AdminAndCustomsCanViewPortCalls(string userName)
        //{
        //    var user = UnitOfWork.Users.GetByUserName(userName);
        //    var claims = UnitOfWork.GetClaimsForUser(user.UserId);
        //    var systemClaims = UnitOfWork.GetSystemClaims(claims).ToList();

        //    Assert.Contains(systemClaims, claim => claim.Type == "Port Call" && claim.Value == "View");
        //    /* NUnit
        //    Assert.True(systemClaims.Any(claim => claim.Type == "Port Call" && claim.Value == "View"),
        //        $"There does not exist a claim of ClaimType \"Port Call\" and value of \"View\" for user: {userName}");
        //    */
        //}

        //[InlineData("admin@test.no")]
        //[Theory]
        //public void AdminCanViewAndEditPortCalls(string userName)
        //{
        //    var user = UnitOfWork.Users.GetByUserName(userName);
        //    var claims = UnitOfWork.GetClaimsForUser(user.UserId);
        //    var systemClaims = UnitOfWork.GetSystemClaims(claims).ToList();

        //    Assert.Contains(systemClaims, claim => claim.Type == "Port Call" && claim.Value == "View");
        //    // $"There does not exist a claim of ClaimType \"Port Call\" and value of \"View\" for user: {userName}"
        //    Assert.Contains(systemClaims, claim => claim.Type == "Port Call" && claim.Value == "Edit");
        //    // $"There does not exist a claim of ClaimType \"Port Call\" and value of \"Edit\" for user: {userName}");
        //}

        //[InlineData("ab_customs@test.no")]
        //[Theory]
        //public void CustomsCanViewAndSetClearanceForPortCalls(string userName)
        //{
        //    var user = UnitOfWork.Users.GetByUserName(userName);
        //    var claims = UnitOfWork.GetClaimsForUser(user.UserId);
        //    var systemClaims = UnitOfWork.GetSystemClaims(claims).ToList();


        //    Assert.Contains(systemClaims, claim => claim.Type == "Port Call" && claim.Value == "View");
        //    // $"There does not exist a claim of ClaimType \"Port Call\" and value of \"View\" for user: {userName}"
        //    Assert.Contains(systemClaims, claim => claim.Type == "Port Call" && claim.Value == "Clearance");
        //    // $"There does not exist a claim of ClaimType \"Port Call\" and value of \"Clearance\" for user: {userName}");
        //}


        public UnitOfWork UnitOfWork { get; set; }
        public TestContext Context { get; set; }
       

        [Test]
        public void CanAddUser()
        {
            using (var factory = new ContextFactory())
            {
                using (var unitofwork = new UnitOfWork(factory.CreateContext()))
                {
                    // Arrange
                    var user = new User
                    {
                        Email = "per@test.no",
                        PhoneNumber = "981278921"
                    };

                    // Act
                    unitofwork.Users.Add(user);
                    unitofwork.Complete();

                    // Assert
                    var foundUser = unitofwork.Users.Single(usr => usr.Email == user.Email);
                    Assert.NotNull(foundUser);
                }
            }
        }

        [Test]
        public void CanUpdateUser()
        {
            using (var factory = new ContextFactory())
            {
                using (var unitofwork = new UnitOfWork(factory.CreateContext()))
                {
                    // Arrange
                    var user = new User
                    {
                        Email = "per@test.no",
                        PhoneNumber = "981278921"
                    };
                    unitofwork.Users.Add(user);
                    unitofwork.Complete();
                    //var foundUser = unitofwork.Users.Single(usr => usr.Email == user.Email);
                    var oldEmail = user.Email;
                    var newEmail = "ole@test.no";
                    //foundUser.Email = newEmail;
                    user.Email = newEmail;

                    // Act
                    unitofwork.Users.Update(user);
                    unitofwork.Complete();

                    // Assert
                    Assert.Null(unitofwork.Users.Single(usr => usr.Email == oldEmail));
                    Assert.NotNull(unitofwork.Users.Single(usr => usr.Email == newEmail));
                }
            }
        }

    }
}
