using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Repositories;
using Microsoft.AspNetCore.Identity;

namespace IMOMaritimeSingleWindow.Identity.Stores
{
    public partial class RoleStore : IRoleStore<ApplicationRole>
    {
        private readonly UnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public RoleStore(UnitOfWork unitOfWork, IMapper mapper = default)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public Task<IdentityResult> CreateAsync(ApplicationRole role, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (role == null)
            {
                throw new ArgumentNullException(nameof(role));
            }
            var roleEntity = _mapper.Map<Role>(role);
            _unitOfWork.Roles.Add(roleEntity);
            _unitOfWork.Complete();
            return Task.FromResult(IdentityResult.Success);
        }

        public Task<IdentityResult> DeleteAsync(ApplicationRole role, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (role == null)
            {
                throw new ArgumentNullException(nameof(role));
            }
            var roleEntity = _mapper.Map<Role>(role);
            _unitOfWork.Roles.Remove(roleEntity);
            _unitOfWork.Complete();
            return Task.FromResult(IdentityResult.Success);
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

        public Task<IList<Role>> GetAllRoles(CancellationToken cancellationToken = default)
        {
            return Task.FromResult<IList<Role>>(_unitOfWork.Roles.GetAll().ToList());
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
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (role == null)
            {
                throw new ArgumentNullException(nameof(role));
            }
            var roleEntity = _mapper.Map<Role>(role);
            _unitOfWork.Roles.Update(roleEntity);
            _unitOfWork.Complete();
            return Task.FromResult(IdentityResult.Success);
        }

        public Task<ApplicationRole> FindByIdAsync(string roleId, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            if (roleId == null)
            {
                throw new ArgumentNullException(nameof(roleId));
            }
            var guid = Guid.Parse(roleId);
            var roleEntity = _unitOfWork.Roles.Get(guid);
            if (roleEntity == null)
            {
                return Task.FromResult<ApplicationRole>(null);
            }
            var appRole = _mapper.Map<ApplicationRole>(roleEntity);
            return Task.FromResult(appRole);
        }

        public Task<ApplicationRole> FindByNameAsync(string normalizedRoleName, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            if (normalizedRoleName == null)
            {
                throw new ArgumentNullException(nameof(normalizedRoleName));
            }
            var roleEntity = _unitOfWork.Roles.GetByNormalizedName(normalizedRoleName);
            if (roleEntity == null)
            {
                return Task.FromResult<ApplicationRole>(null);
            }
            var appRole = _mapper.Map<ApplicationRole>(roleEntity);
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
                    // dispose managed state (managed objects)
                }

                _disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
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
