using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Repositories;
using IMOMaritimeSingleWindow.Models;
using AutoMapper;
using System.Threading;
using System.Diagnostics;
using System.Linq;

namespace IMOMaritimeSingleWindow.Identity.Stores
{
    public partial class UserStore : IUserStore<ApplicationUser>, IQueryableUserStore<ApplicationUser>
    {
        private readonly UnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly RoleStore _roleStore;

        public UserStore(
            UnitOfWork unitOfWork,
            RoleStore roleStore,
            IMapper mapper = default
            )
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _roleStore = roleStore;
        }


        #region testmethods
        public void MapTest(ApplicationUser user)
        {
            var _user = _mapper.Map<User>(user);
        }

        public User MapToUser(ApplicationUser user)
        {
            var _user = _mapper.Map<User>(user);
            return _user;
        }
        public Password MapToPassword(ApplicationUser user)
        {
            var _password = _mapper.Map<Password>(user);
            return _password;
        }
        public Person MapToPerson(ApplicationUser user)
        {
            var _person = _mapper.Map<Person>(user);
            return _person;
        }
        #endregion

        public Task CreateAsync(User user)
        {
            throw new NotImplementedException();
        }

        public Task<IdentityResult> CreateAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();

            
            Person person = _mapper.Map<ApplicationUser, Person>(user);

            Password password = new Password
            {
                Hash = user.PasswordHash
            };

            var _user = _mapper.Map<ApplicationUser, User>(user);
            _user.Person = person;
            _user.Password = password;

            _unitOfWork.Users.Add(_user);

            var objectsAdded = _unitOfWork.Complete();
            if (objectsAdded < 3)
                return Task.FromResult(IdentityResult.Failed());
            return Task.FromResult(IdentityResult.Success);
        }

        public Task<IdentityResult> DeleteAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }
        public Task<IdentityResult> UpdateAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }

        private Task<ApplicationUser> ConvertToApplicationUser(User user, CancellationToken cancellationToken = default)
        {
            if (!HasPassword(user).GetAwaiter().GetResult())
                return Task.FromResult(_mapper.Map<User, ApplicationUser>(user));
            else
            {
                var passwordHash = GetPasswordHashAsync(user).GetAwaiter().GetResult();

                var appUser = _mapper.Map<ApplicationUser>(user);
                SetPasswordHashAsync(appUser, passwordHash).GetAwaiter().GetResult();
                return Task.FromResult(appUser);
            }
        }
        
        public Task<ApplicationUser> FindByIdAsync(string userId, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            if (userId == null)
                throw new ArgumentNullException(nameof(userId));
            var guid = Guid.Parse(userId);
            User _user = null;
            try { _user = _unitOfWork.Users.Get(guid); }
            catch (NullReferenceException) { }
            if (_user == null)
                return Task.FromResult<ApplicationUser>(null);

            var appUser = ConvertToApplicationUser(_user).GetAwaiter().GetResult();
            return Task.FromResult(appUser);
        }

        public Task<ApplicationUser> FindByNameAsync(string normalizedUserName, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            if (normalizedUserName == null)
                throw new ArgumentNullException(nameof(normalizedUserName));
            User _user = null;
            try { _user = _unitOfWork.Users.GetByNormalizedUserName(normalizedUserName); }
            catch (NullReferenceException) { }
            if (_user == null)
                return Task.FromResult<ApplicationUser>(null);

            var appUser = ConvertToApplicationUser(_user).GetAwaiter().GetResult();
            return Task.FromResult(appUser);
        }



        #region methods that operate on the objects solely
        public Task<string> GetUserIdAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            return Task.FromResult(user.Id.ToString());
        }

        public Task<string> GetUserNameAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            return Task.FromResult(user.UserName);
        }

        public Task<string> GetNormalizedUserNameAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            return Task.FromResult(user.NormalizedUserName);
        }

        public Task SetUserNameAsync(ApplicationUser user, string userName, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            user.UserName = userName;
            return Task.CompletedTask;
        }


        public Task SetNormalizedUserNameAsync(ApplicationUser user, string normalizedName, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            user.NormalizedUserName = normalizedName;
            return Task.CompletedTask;
        }
        #endregion

        public IQueryable<ApplicationUser> Users => GetIqueryAble();

        public IQueryable<ApplicationUser> GetIqueryAble()
        {
            var userList = _unitOfWork.Users.GetIqueryAble().ToList();
            var appUserList = new List<ApplicationUser>();
            foreach (var user in userList)
            {
                var appUser = ConvertToApplicationUser(user).GetAwaiter().GetResult();
                appUserList.Add(appUser);
            }
            return appUserList.AsQueryable();
        }

        #region IDisposable Support
        private bool _disposed = false; // To detect redundant calls

        protected virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    // TODO: dispose managed state (managed objects).
                }

                // TODO: free unmanaged resources (unmanaged objects) and override a finalizer below.
                // TODO: set large fields to null.

                _disposed = true;
            }
        }

        // TODO: override a finalizer only if Dispose(bool disposing) above has code to free unmanaged resources.
        // ~UserStore() {
        //   // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
        //   Dispose(false);
        // }

        // This code added to correctly implement the disposable pattern.
        public void Dispose()
        {
            // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
            Dispose(true);
            // TODO: uncomment the following line if the finalizer is overridden above.
            // GC.SuppressFinalize(this);
        }
        protected void ThrowIfDisposed()
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(GetType().Name);
            }
        }
        #endregion



    }
}
