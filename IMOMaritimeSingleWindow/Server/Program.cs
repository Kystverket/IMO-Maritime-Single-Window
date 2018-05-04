using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using IMOMaritimeSingleWindow.Controllers;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.EntityFrameworkCore.Infrastructure;
using IMOMaritimeSingleWindow.Data;
using Microsoft.Extensions.DependencyInjection;

using IMOMaritimeSingleWindow.Extensions;

namespace IMOMaritimeSingleWindow
{
    public class Program
    {
        private static readonly Dictionary<string, string> defaults =
        new Dictionary<string, string> {
            { WebHostDefaults.EnvironmentKey, "development" }
        };

        public static void Main(string[] args)
        {

            var config = new ConfigurationBuilder()
                .AddCommandLine(args)
                .Build();

            var host = new WebHostBuilder()
                .UseConfiguration(config)
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseKestrel()
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            //var host = BuildWebHost(args);
            
            host.Run();

        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}
