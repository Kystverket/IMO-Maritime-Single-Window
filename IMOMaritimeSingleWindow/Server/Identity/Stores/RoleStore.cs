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
    public partial class RoleStore : IRoleStore<ApplicationRole>
    {
        public readonly UnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public RoleStore(
            UnitOfWork unitOfWork,
            IMapper mapper = default
            )
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }


        public Task<IdentityResult> CreateAsync(ApplicationRole role, CancellationToken cancellationToken)
        {

            throw new NotImplementedException();
        }

        public Task<IdentityResult> DeleteAsync(ApplicationRole role, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<string> GetNormalizedRoleNameAsync(ApplicationRole role, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (role == null)
            {
                throw new ArgumentNullException(nameof(role));
            }
            return Task.FromResult(role.NormalizedName);
        }

        public Task<string> GetRoleIdAsync(ApplicationRole role, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (role == null)
            {
                throw new ArgumentNullException(nameof(role));
            }
            return Task.FromResult(role.Id.ToString());
            throw new NotImplementedException();
        }

        public Task<string> GetRoleNameAsync(ApplicationRole role, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (role == null)
            {
                throw new ArgumentNullException(nameof(role));
            }
            return Task.FromResult(role.Name);
        }

        public Task SetNormalizedRoleNameAsync(ApplicationRole role, string normalizedName, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (role == null)
            {
                throw new ArgumentNullException(nameof(role));
            }
            role.NormalizedName = normalizedName;
            return Task.CompletedTask;
        }

        public Task SetRoleNameAsync(ApplicationRole role, string roleName, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (role == null)
            {
                throw new ArgumentNullException(nameof(role));
            }
            role.Name = roleName;
            return Task.CompletedTask;
        }

        public Task<IdentityResult> UpdateAsync(ApplicationRole role, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<ApplicationRole> FindByIdAsync(string roleId, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            if (roleId == null)
                throw new ArgumentNullException(nameof(roleId));
            var guid = Guid.Parse(roleId);
            Role _role = null;
            try { _role = _unitOfWork.Roles.Get(guid); }
            catch (NullReferenceException) { }
            if (_role == null)
                return Task.FromResult<ApplicationRole>(null);

            var appRole = _mapper.Map<ApplicationRole>(_role);
            return Task.FromResult(appRole);
        }

        public Task<ApplicationRole> FindByNameAsync(string normalizedRoleName, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            if (normalizedRoleName == null)
                throw new ArgumentNullException(nameof(normalizedRoleName));
            Role _role = null;
            try { _role = _unitOfWork.Roles.GetByNormalizedName(normalizedRoleName); }
            catch (NullReferenceException) { }
            if (_role == null)
                return Task.FromResult<ApplicationRole>(null);

            var appRole = _mapper.Map<ApplicationRole>(_role);
            return Task.FromResult(appRole);
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
