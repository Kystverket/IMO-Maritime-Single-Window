using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace IMOMaritimeSingleWindow.Models.Entities
{
    /**
    public interface IUserRoleManager<TUser, TRole>
    {
        /// <summary>
        /// Gets a list of <see cref="Claim"/>s belonging to the specified <paramref name="user"/> as an asynchronous operation.
        /// </summary>
        /// <param name="user">The user whose claims to retrieve.</param>
        /// <returns>
        /// A <see cref="Task{TResult}"/> that represents the result of the asynchronous query, a list of <see cref="Claim"/>s.
        /// </returns>
        Task<IList<System.Security.Claims.Claim>> GetClaimsAsync(ApplicationUser user);
    }
    */

    /// <summary>

    /// Provides the API for managing users and their roles and associated claims.
    /// </summary>
    /// <typeparam name="TUser">The type representing a user.</typeparam>
    /// <typeparam name="TUserKey">The type of the primary key for a user.</typeparam>
    /// <typeparam name="TRole">The type representing a role.</typeparam>
    /// <typeparam name="TRoleKey">The type of the primary key for a role.</typeparam>
    /// 
    public class UserRoleManager<TUser, TUserKey, TRole, TRoleKey>
        
        where TUserKey : IEquatable<TUserKey>
        where TRoleKey : IEquatable<TRoleKey>
        where TUser : IdentityUser<TUserKey>
        where TRole : IdentityRole<TRoleKey>
    {
        private readonly UserManager<TUser> _userManager;
        private readonly RoleManager<TRole> _roleManager;

        public UserRoleManager(UserManager<TUser> userManager, RoleManager<TRole> roleManager)
            
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }


            /// <summary>
            /// Gets a list of <see cref="Claim"/>s belonging to the specified <paramref name="user"/> as an asynchronous operation.
            /// </summary>
            /// <param name="user">The user whose claims to retrieve.</param>
            /// <returns>
            /// A <see cref="Task{TResult}"/> that represents the result of the asynchronous query, a list of <see cref="Claim"/>s.
            /// </returns>
            public async Task<IList<System.Security.Claims.Claim>> GetClaimsAsync(TUser user)
            {
                List<System.Security.Claims.Claim> claimsForUser = new List<System.Security.Claims.Claim>();
                //First get the roles of the user
                var roles = await _userManager.GetRolesAsync(user);
                foreach(var role in roles)
                {
                    var applicationRole = await _roleManager.FindByNameAsync(role);
                    var claims = await _roleManager.GetClaimsAsync(applicationRole);
                    claimsForUser.AddRange(claims);
                }
                
                return claimsForUser;
            
            }

            public void Dispose()
            {
                throw new NotImplementedException();
            }

        }
    }
