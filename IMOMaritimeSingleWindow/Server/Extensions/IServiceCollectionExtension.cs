using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Identity;

using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Models.Entities;
using IMOMaritimeSingleWindow.Data;


namespace IMOMaritimeSingleWindow.Extensions
{
    public static class IServiceCollectionExtension
    {
        public static ServiceProvider AddUserDbInitializer(this IServiceCollection services, IServiceProvider serviceProvider, IConfiguration configuration)
        {
            var seedDataPaths = configuration.GetSection("Paths").GetSection("SeedData");
            var baseSeedPath = seedDataPaths.GetValue<string>("Base") + Path.DirectorySeparatorChar;
            var userString = File.ReadAllText(baseSeedPath + seedDataPaths.GetValue<string>("Users"));
            var roleString = File.ReadAllText(baseSeedPath + seedDataPaths.GetValue<string>("Roles"));
            var userRoleString = File.ReadAllText(baseSeedPath + seedDataPaths.GetValue<string>("UserRoles"));
            //var roleClaimsString = File.ReadAllText(baseSeedPath  + seedDataPaths.GetValue<string>("RoleClaims"));

            SeedItems seedItems = new SeedItems
            {
                UserBase = userString,
                RoleBase = roleString,
                UserRoleBase = userRoleString
            };

            //Dependencies for UserDbInitializer
            var myUserManager = serviceProvider.GetService<UserManager<ApplicationUser>>();
            var myRoleManager = serviceProvider.GetService<RoleManager<ApplicationRole>>();
            var myUserDbContext = serviceProvider.GetService<UserDbContext>();

            //Add the database initializer service to the service collection
            services.AddSingleton<IUserDbInitializer>(dbi => new UserDbInitializer(myUserManager, myRoleManager, myUserDbContext, seedItems));
            
            return services.BuildServiceProvider();
        }
    }
}
