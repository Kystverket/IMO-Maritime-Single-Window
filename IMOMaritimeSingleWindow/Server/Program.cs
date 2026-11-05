using System;
using Microsoft.AspNetCore.Builder;

namespace IMOMaritimeSingleWindow
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // Existing timestamp columns rely on pre-Npgsql 6 DateTime handling
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

            var builder = WebApplication.CreateBuilder(args);

            var startup = new Startup(builder.Configuration, builder.Environment);
            startup.ConfigureServices(builder.Services);

            var app = builder.Build();
            startup.Configure(app, app.Environment);

            app.Run();
        }
    }
}
