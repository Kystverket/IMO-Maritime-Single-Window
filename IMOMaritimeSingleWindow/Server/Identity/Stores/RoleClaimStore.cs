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
using System.Security.Claims;

namespace IMOMaritimeSingleWindow.Identity.Stores
{
    public partial class RoleStore : IRoleClaimStore<ApplicationRole>
    {
        public Task AddClaimAsync(ApplicationRole role, System.Security.Claims.Claim claim, CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }

        public Task<IList<System.Security.Claims.Claim>> GetClaimsAsync(ApplicationRole role, CancellationToken cancellationToken = default)
        {
            var roleFound = FindByIdAsync(role.Id.ToString()).GetAwaiter().GetResult();
            var claims = _unitOfWork.RoleClaims.GetClaimsForRole(roleFound.Id);
            var systemClaims = _unitOfWork.GetSystemClaims(claims);
            return Task.FromResult<IList<System.Security.Claims.Claim>>(systemClaims.ToList());
        }

        public Task RemoveClaimAsync(ApplicationRole role, System.Security.Claims.Claim claim, CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }
    }
}
