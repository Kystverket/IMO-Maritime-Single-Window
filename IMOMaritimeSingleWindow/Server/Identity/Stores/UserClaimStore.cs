using IMOMaritimeSingleWindow.Identity.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.Identity.Stores
{
    public partial class UserStore : IUserClaimStore<ApplicationUser>
    {
        #region IUserClaimsStore
        public override Task AddClaimsAsync(ApplicationUser user, IEnumerable<System.Security.Claims.Claim> claims, CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }

        public override Task<IList<System.Security.Claims.Claim>> GetClaimsAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();

            var _user = _unitOfWork.Users.Get(user.Id);
            var claims = _unitOfWork.GetClaimsForUser(user.Id);
            var systemClaims = _unitOfWork.GetSystemClaims(claims);
            return Task.FromResult<IList<System.Security.Claims.Claim>>(systemClaims.ToList());
        }

        public override Task<IList<ApplicationUser>> GetUsersForClaimAsync(System.Security.Claims.Claim claim, CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }

        public override Task RemoveClaimsAsync(ApplicationUser user, IEnumerable<System.Security.Claims.Claim> claims, CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }

        public override Task ReplaceClaimAsync(ApplicationUser user, System.Security.Claims.Claim claim, System.Security.Claims.Claim newClaim, CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }
        #endregion // IUserClaimsStore
    }
}
