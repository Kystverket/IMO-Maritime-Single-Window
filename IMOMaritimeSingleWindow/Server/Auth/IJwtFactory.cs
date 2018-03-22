
using System;
using System.Security.Claims;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.Auth
{
    public interface IJwtFactory
    {
        Task<string> GenerateEncodedToken(string userName, ClaimsIdentity identity);
        ClaimsIdentity GenerateClaimsIdentity<TKey>(string userName, TKey id) where TKey: IEquatable<TKey>;
    }
}
