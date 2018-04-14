using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using IMOMaritimeSingleWindow.Data;


namespace IMOMaritimeSingleWindow.Extensions
{
    public static class IWebHostExtension
    {

        public static async Task<IWebHost> SeedIdentityData(this IWebHost host)
        {
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var userDbInitializer = services.GetService<UserDbInitializer>();
                await userDbInitializer.SeedAsync();
            }
            return host;
        }
        public static IWebHost SeedTest(this IWebHost host)
        {
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var userDbInitializer = services.GetService<UserDbInitializer>();
                userDbInitializer.Seed();
            }
            return host;
        }

    }
}
