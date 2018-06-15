using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Identity;
using System.Threading;
using System.Threading.Tasks;


namespace IMOMaritimeSingleWindow.Identity.Stores
{
    public partial class UserStore : IUserAuthenticationTokenStore<ApplicationUser>
    {
        protected override Task AddUserTokenAsync(UserToken token)
        {
            
            _unitOfWork.UserTokens.Add(token);
            _unitOfWork.Complete();
            return Task.CompletedTask;
        }

        protected override Task<UserToken> FindTokenAsync(ApplicationUser user, string loginProvider, string name, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            UserToken token = _unitOfWork.UserTokens.FindBy(user.Id, loginProvider, name);
            return Task.FromResult(token);
        }


        protected override Task RemoveUserTokenAsync(UserToken token)
        {
            _unitOfWork.UserTokens.Remove(token);
            _unitOfWork.Complete();
            return Task.CompletedTask;
        }
    }
}
