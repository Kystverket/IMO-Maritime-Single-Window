using AutoMapper;
using IMOMaritimeSingleWindow.Identity.Helpers;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Repositories;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.Identity.Stores
{
    public partial class UserStore : UserStoreBase<ApplicationUser, ApplicationRole, Guid, ApplicationUserClaim, ApplicationUserRole, UserLogin, UserToken, ApplicationRoleClaim>,
                                     IQueryableUserStore<ApplicationUser>  
    {

        private readonly UnitOfWork _unitOfWork;
        private readonly RoleStore _roleStore;
        private readonly IUserStoreHelper _helper;
        private readonly IMapper _mapper;

        public UserStore
        (
            IdentityErrorDescriber describer,
            UnitOfWork unitOfWork,
            RoleStore roleStore,
            IUserStoreHelper helper,
            IMapper mapper = default
        ) : base(describer)
        {
            _unitOfWork = unitOfWork;
            _roleStore = roleStore;
            _helper = helper;
            _mapper = mapper;
        }

        #region IUserStore

        public override async Task<IdentityResult> CreateAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            int expectedObjectsAdded = 1; // User and Password entity

            // Map properties from input object to User object
            var _user = _mapper.Map<ApplicationUser, User>(user);

            if(await HasPasswordAsync(user))
            {
                // Extract password from input object
                Password password = new Password
                {
                    Hash = user.PasswordHash
                };
                _user.Password = password;
                expectedObjectsAdded++;
            }
            
            if (_helper.HasPerson(user))
            {
                // Extract person details from input object
                Person person = _mapper.Map<ApplicationUser, Person>(user);
                _user.Person = person;
                expectedObjectsAdded++;
            }

            _unitOfWork.Users.Add(_user);

            var objectsAdded = _unitOfWork.Complete();
            if (expectedObjectsAdded != objectsAdded)
                return IdentityResult.Failed();
            return IdentityResult.Success;
        }

        public override Task<IdentityResult> DeleteAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }

        public override async Task<ApplicationUser> FindByIdAsync(string userId, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (userId == null)
                throw new ArgumentNullException(nameof(userId));
            var id = ConvertIdFromString(userId);
            return await FindUserAsync(id, cancellationToken);
        }

        public override Task<ApplicationUser> FindByNameAsync(string normalizedUserName, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (normalizedUserName == null)
                throw new ArgumentNullException(nameof(normalizedUserName));
            User _user = null;
            try { _user = _unitOfWork.Users.GetByNormalizedUserName(normalizedUserName); }
            catch (NullReferenceException) { }
            if (_user == null)
                return Task.FromResult<ApplicationUser>(null);

            return Task.FromResult(_helper.ConvertToApplicationUser(_user));
        }

        public override async Task<IdentityResult> UpdateAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            int expectedObjectsAffected = 1;
            // TODO: Use concurrency token to manage concurrency conflicts

            var _user = _unitOfWork.Users.Get(
                filter: usr => usr.UserId == user.Id,
                includeProperties: nameof(User.Person) + "," + nameof(User.Password) )
                .FirstOrDefault();
            _mapper.Map(user, _user);
            // ApplicationUser contains password
            if (await HasPasswordAsync(user, cancellationToken))
            {
                // User in backing store has password
                if (await HasPassword(_user, cancellationToken))
                {
                    // Check if password has been changed
                    if (_user.Password.Hash != user.PasswordHash)
                    {
                        // Update password
                        expectedObjectsAffected++;
                        if (_user.PasswordId != null)
                        {
                            var pwEntity = _unitOfWork.Passwords.Get(_user.PasswordId.Value);
                            pwEntity.Hash = user.PasswordHash;
                            _unitOfWork.Passwords.Update(pwEntity);
                        }
                    }
                }
                // User in backing store does not contain a password; create a new one
                else
                {
                    // Add password to user
                    expectedObjectsAffected++;
                    Password pw = new Password { Hash = user.PasswordHash };
                    _user.Password = pw;
                }
            }

            if (_helper.HasPerson(user))
            {
                var personMapped = _mapper.Map<Person>(user);
                personMapped.User = _user.Person.User;
                personMapped.PersonId = _user.Person.PersonId;
                if (!_user.Person.Equals(personMapped))
                {
                    expectedObjectsAffected++;
                    // Update Person entity
                    var newPerson = _mapper.Map(source: personMapped, destination: _user.Person);
                }
            }

            _unitOfWork.Users.Update(_user);
            var objectsAffected =_unitOfWork.Complete();
            if (expectedObjectsAffected != objectsAffected)
                return IdentityResult.Failed();
            return IdentityResult.Success;
        }

        #endregion // IUserStore


        #region IQueryableUserStore

        public override IQueryable<ApplicationUser> Users => GetIqueryAble();

        public IQueryable<ApplicationUser> GetIqueryAble()
        {
            var userList = _unitOfWork.Users.GetIqueryAble().ToList();
            var appUserList = new List<ApplicationUser>();
            foreach (var user in userList)
            {
                var appUser = _helper.ConvertToApplicationUser(user);
                appUserList.Add(appUser);
            }
            return appUserList.AsQueryable();
        }

        #endregion // IQueryableUserStore

        

        #region Unsupported
        /** For storing login states for a user obtained
         *  from various external login providers.
         *  
         *  Currently the only login solution is implemented locally and uses
         *  JSON Web Tokens (that store the login state),
         *  and thus there is no need to store login information.
         */
        public override Task AddLoginAsync(ApplicationUser user, UserLoginInfo login, CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }

        protected override Task<UserLogin> FindUserLoginAsync(string loginProvider, string providerKey, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
        // Not applicable
        protected override Task<ApplicationUserRole> FindUserRoleAsync(Guid userId, Guid roleId, CancellationToken cancellationToken)
        {
            throw new NotSupportedException();
        }

        public override Task<IList<UserLoginInfo>> GetLoginsAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }

        public override Task RemoveLoginAsync(ApplicationUser user, string loginProvider, string providerKey, CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }

        protected override Task<UserLogin> FindUserLoginAsync(Guid userId, string loginProvider, string providerKey, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
        #endregion
        

        #region Custom methods
        protected override Task<ApplicationUser> FindUserAsync(Guid userId, CancellationToken cancellationToken)
        {
            var _user = GetUserById(userId);
            if (_user == null)
                return Task.FromResult<ApplicationUser>(null);
            return Task.FromResult(_helper.ConvertToApplicationUser(_user));
        }
        
        protected User GetUserById(Guid userId)
        {
            User _user = null;
            try
            {
                _user = _unitOfWork.Users.Get(usr => usr.UserId.Equals(userId), includeProperties: nameof(User.Person) + "," + nameof(User.Password)).FirstOrDefault();
            }
            catch (NullReferenceException) { }
            return _user;
        }
        protected User GetUserById(string userId)
        {
            var id = ConvertIdFromString(userId);
            return GetUserById(id);
        }
        #endregion
    }
}
