using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.Identity.Stores
{
    public partial class UserStore : IUserEmailStore<ApplicationUser>
    {
        #region Custom methods
        public override Task<ApplicationUser> FindByEmailAsync(string normalizedEmail, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            if (normalizedEmail == null)
                throw new ArgumentNullException(nameof(normalizedEmail));
            User _user = null;
            try { _user = _unitOfWork.Users.GetByNormalizedUserName(normalizedEmail); }
            catch (NullReferenceException) { }

            if (_user == null)
                return Task.FromResult<ApplicationUser>(null);

            var appUser = _mapper.Map<ApplicationUser>(_user);
            return Task.FromResult(appUser);
        }
        #endregion
    }
}
