using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Repositories;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Tests.Data;
using Xunit;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.Tests.RepositoryTests
{
    public class UserRepositoryTest
    {
        
        [Fact]
        public void Adds_Password()
        {
            var inMemoryDbContext = TestContextBuilder.GetInMemContext();
            IUnitOfWork<Guid> unitOfWork = GetUnitOfWork(inMemoryDbContext);

            var expectedHash = "b7tk4uia";
            Password expectedPassword = new Password
            {
                PasswordId = new Guid(),
                Hash = expectedHash
            };

            unitOfWork.Passwords.Add(expectedPassword);
            unitOfWork.Complete(); //SaveChanges()

            //Do not use repo's own get method, since then we'd be using something that too is to be tested
            Password actualPassword = inMemoryDbContext.Password.FirstOrDefaultAsync(password => password.Hash == expectedHash).GetAwaiter().GetResult();
            string actualHash = actualPassword.Hash;

            Assert.Equal(expectedHash, actualHash);
            Assert.Equal(expectedPassword, actualPassword);

        }

        [Fact]
        public void NewPasswordShouldBeAddedToExistingUser()
        {
            var inMemoryDbContext = TestContextBuilder.GetInMemContext();
            IUnitOfWork<Guid> unitOfWork = GetUnitOfWork(inMemoryDbContext);
            var newUser = new User
            {
                Email = "ole@tester.no"
            };

            unitOfWork.Users.Add(newUser);
            unitOfWork.Complete();

            var user = unitOfWork.Users.GetByUserName(newUser.Email);

            var pwHash = "sda876h65";
            unitOfWork.Users.AddPassword(user, pwHash);
            unitOfWork.Complete();

            var passwordEntity = inMemoryDbContext.Set<Password>().Find(user.PasswordId);
            Assert.NotNull(passwordEntity);
            Assert.Equal(pwHash, passwordEntity.Hash);


        }

        //[Fact]
        //public void Add_Password()
        //{
        //    IPasswordRepository<Guid> pwRepo = GetInMemoryPasswordRepository();
        //    Password pw = new Password
        //    {
        //        PasswordId = new Guid(),
        //        Hash = "b7tk4uia="
        //    };
        //    pwRepo.Add(pw);

        //}


        private IUnitOfWork<Guid> GetUnitOfWork()
        {
            var inMemoryDbContext = TestContextBuilder.GetInMemContext();
            UnitOfWork unitOfWork = new UnitOfWork(inMemoryDbContext);

            return unitOfWork;
        }

        private IUnitOfWork<Guid> GetUnitOfWork(open_ssnContext context)
        {
            return new UnitOfWork(context);
        }

        private IPasswordRepository<Guid> GetInMemoryPasswordRepository()
        {
            DbContextOptions<open_ssnContext_base> options;
            var builder = new DbContextOptionsBuilder<open_ssnContext_base>();
            builder.UseInMemoryDatabase("PasswordDatabase");
            options = builder.Options;
            open_ssnContext open_ssn_datacontext = new open_ssnContext(options);
            open_ssn_datacontext.Database.EnsureDeleted();
            open_ssn_datacontext.Database.EnsureCreated();
            return new PasswordRepository(open_ssn_datacontext);
        }

        private IUserRepository<Guid> GetInMemoryUserRepository()
        {
            DbContextOptions<open_ssnContext_base> options;
            var builder = new DbContextOptionsBuilder<open_ssnContext_base>();
            builder.UseInMemoryDatabase("PersonDatabase");
            options = builder.Options;
            open_ssnContext open_ssn_datacontext = new open_ssnContext(options);
            open_ssn_datacontext.Database.EnsureDeleted();
            open_ssn_datacontext.Database.EnsureCreated();
            return new UserRepository(open_ssn_datacontext);
        }

    }
}
