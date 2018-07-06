using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using System;

namespace IMOMaritimeSingleWindow.Repositories
{
    public class UserTokenRepository : EFConcreteRepository<UserToken, Guid>, IUserTokenRepository<Guid>
    {
        public UserTokenRepository(IDbContext context) : base(context)
        {
        }

        public UserToken FindBy(Guid userId, string loginProvider, string name)
        {
            return Single(token =>
                token.UserId == userId &&
                token.LoginProvider == loginProvider &&
                token.Name == name
            );
        }
    }
}
