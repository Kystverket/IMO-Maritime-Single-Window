using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Xunit;

namespace IMOMaritimeSingleWindow.Tests.RepositoryTests
{
    public class UnitOfWorkTest : RealDatabase
    {
        [Fact]
        public void GetClaimsForRole()
        {
            var roles = UnitOfWork.Roles.Find(r => r.Name == "admin").ToList();

            var claims = UnitOfWork.RoleClaims.GetClaimsForRole(roles.First().RoleId);
            Assert.Contains(claims, c => c.ClaimValue == "View");
        }

        [InlineData("admin@test.no")]
        [InlineData("ab_customs@test.no")]
        [Theory]
        public void AdminAndCustomsCanViewPortCalls(string userName)
        {
            var user = UnitOfWork.Users.GetByUserName(userName);
            var claims = UnitOfWork.GetClaimsForUser(user.UserId);
            var systemClaims = UnitOfWork.GetSystemClaims(claims).ToList();

            Assert.Contains(systemClaims, claim => claim.Type == "Port Call" && claim.Value == "View");
            /* NUnit
            Assert.True(systemClaims.Any(claim => claim.Type == "Port Call" && claim.Value == "View"),
                $"There does not exist a claim of ClaimType \"Port Call\" and value of \"View\" for user: {userName}");
            */
        }

        [InlineData("admin@test.no")]
        [Theory]
        public void AdminCanViewAndEditPortCalls(string userName)
        {
            var user = UnitOfWork.Users.GetByUserName(userName);
            var claims = UnitOfWork.GetClaimsForUser(user.UserId);
            var systemClaims = UnitOfWork.GetSystemClaims(claims).ToList();

            Assert.Contains(systemClaims, claim => claim.Type == "Port Call" && claim.Value == "View");
            // $"There does not exist a claim of ClaimType \"Port Call\" and value of \"View\" for user: {userName}"
            Assert.Contains(systemClaims, claim => claim.Type == "Port Call" && claim.Value == "Edit");
            // $"There does not exist a claim of ClaimType \"Port Call\" and value of \"Edit\" for user: {userName}");
        }

        [InlineData("ab_customs@test.no")]
        [Theory]
        public void CustomsCanViewAndSetClearanceForPortCalls(string userName)
        {
            var user = UnitOfWork.Users.GetByUserName(userName);
            var claims = UnitOfWork.GetClaimsForUser(user.UserId);
            var systemClaims = UnitOfWork.GetSystemClaims(claims).ToList();


            Assert.Contains(systemClaims, claim => claim.Type == "Port Call" && claim.Value == "View");
            // $"There does not exist a claim of ClaimType \"Port Call\" and value of \"View\" for user: {userName}"
            Assert.Contains(systemClaims, claim => claim.Type == "Port Call" && claim.Value == "Clearance");
            // $"There does not exist a claim of ClaimType \"Port Call\" and value of \"Clearance\" for user: {userName}");
        }

    }
}
