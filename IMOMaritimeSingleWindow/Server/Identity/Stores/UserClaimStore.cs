using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using IMOMaritimeSingleWindow.Identity.Models;
using System.Threading;
using System.Collections.Generic;
using System.Linq;

namespace IMOMaritimeSingleWindow.Identity.Stores
{
    public partial class UserStore : IUserClaimStore<ApplicationUser>
    {
        public Task AddClaimsAsync(ApplicationUser user, IEnumerable<System.Security.Claims.Claim> claims, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<IList<System.Security.Claims.Claim>> GetClaimsAsync(ApplicationUser user, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            
            var _user = _unitOfWork.Users.Get(user.Id);
            var claims = _unitOfWork.GetClaimsForUser(user.Id);
            var systemClaims = _unitOfWork.GetSystemClaims(claims);
            return Task.FromResult<IList<System.Security.Claims.Claim>>(systemClaims.ToList());
        }

        public Task<IList<ApplicationUser>> GetUsersForClaimAsync(System.Security.Claims.Claim claim, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task RemoveClaimsAsync(ApplicationUser user, IEnumerable<System.Security.Claims.Claim> claims, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task ReplaceClaimAsync(ApplicationUser user, System.Security.Claims.Claim claim, System.Security.Claims.Claim newClaim, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
