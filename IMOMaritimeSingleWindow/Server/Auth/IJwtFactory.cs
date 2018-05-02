
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.Auth
{
    public interface IJwtFactory
    {
        Task<string> GenerateEncodedToken(string userName, ClaimsIdentity identity);
        ClaimsIdentity GenerateClaimsIdentity<TKey>(string userName, TKey id, IList<Claim> rights) where TKey: IEquatable<TKey>;
    }
}
