using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Text;
using FluentValidation;
using Microsoft.Extensions.Hosting;

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;

// Local namespaces
using IMOMaritimeSingleWindow.Auth;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Extensions;
using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Identity;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Repositories;
using IMOMaritimeSingleWindow.Identity.Stores;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;
using IMOMaritimeSingleWindow.Identity.Helpers;
using log4net;
using log4net.Config;
using System.Reflection;
using IMOMaritimeSingleWindow.Filters;

namespace IMOMaritimeSingleWindow
{
    public class Startup
    {
        static readonly ILog Log = LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);


        public Startup(IConfiguration configuration, IWebHostEnvironment env)
        {
            var logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());
            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));

            Configuration = configuration;
            HostingEnvironment = env;
        }


        public IConfiguration Configuration { get; }
        public IWebHostEnvironment HostingEnvironment { get; }
        public AuthorizationPolicy AuthorizationPolicy { get; internal set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)

        {
            // Wrap the entire configuration routine in a try/catch since the logging filter won't catch any errors that occur here
            try
            {

                // Add exception logging
                services.AddControllers(opts =>
                {
                    opts.Filters.Add(new Log4NetExceptionFilter());
                    if (HostingEnvironment.IsProduction())
                    {
                        opts.Filters.Add(new RequireHttpsAttribute());
                    }
                })
                // Fix for json self-referencing loop bug:
                .AddNewtonsoftJson(options => options.SerializerSettings.ReferenceLoopHandling =
                    Newtonsoft.Json.ReferenceLoopHandling.Ignore);

                services.AddFluentValidationAutoValidation();
                services.AddValidatorsFromAssemblyContaining<Startup>();

                services.AddCors();
                services.AddHttpContextAccessor();

                //Configure database context
                var connectionStringOpenSSN = Configuration.GetConnectionString("OpenSSN");
                var dbOptions = new DbContextOptionsBuilder<open_ssnContext>().UseNpgsql(connectionStringOpenSSN).Options;
                services.AddDbContext<open_ssnContext>(options => options.UseNpgsql(connectionStringOpenSSN));

                // Configure email service
                services.ConfigureEmailSenderOptions(Configuration);
                services.ConfigureSendGridOptions(Configuration);

                services.AddEmailSender();


                //Configure identity services
                var builder = services.AddIdentity<ApplicationUser, ApplicationRole>(options =>
                {
                // configure identity options
                options.Password.RequireDigit = false;
                    options.Password.RequireLowercase = false;
                    options.Password.RequireUppercase = false;
                    options.Password.RequireNonAlphanumeric = false;
                    options.Password.RequiredLength = 4;

                // Lockout options
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
                    options.Lockout.MaxFailedAccessAttempts = 10;
                    options.Lockout.AllowedForNewUsers = true;

                //Email options
                options.SignIn.RequireConfirmedEmail = true;
                });

                builder.AddDefaultTokenProviders();

                services.AddSingleton<IdentityMapper>();
                services.TryAddScoped<IUnitOfWork<Guid>>(ctx => new UnitOfWork(new open_ssnContext(dbOptions)));

                services.AddSingleton<IUserStoreHelper>(ctx => new UserStoreHelper(ctx.GetRequiredService<IdentityMapper>()));

                builder.AddUserManager<UserManager>()
                .AddRoleManager<ApplicationRoleManager>();


                services.TryAddScoped<IUserStore<ApplicationUser>>(ctx =>
                {
                    var mapper = ctx.GetRequiredService<IdentityMapper>();
                    return new UserStore
                    (
                        ctx.GetRequiredService<IdentityErrorDescriber>(),
                        new UnitOfWork(new open_ssnContext(dbOptions)),
                        new RoleStore(new UnitOfWork(new open_ssnContext(dbOptions)), mapper),
                        ctx.GetRequiredService<IUserStoreHelper>(),
                        mapper
                    );
                });

                services.TryAddScoped<IRoleStore<ApplicationRole>>(ctx => new RoleStore(
                    new UnitOfWork(new open_ssnContext(dbOptions)),
                    ctx.GetRequiredService<IdentityMapper>())
                );

                services.TryAddScoped<IDbContext>(ctx => new open_ssnContext(dbOptions));

                //Overriding service
                services.Replace(ServiceDescriptor.Scoped<IUserValidator<ApplicationUser>, CustomUserValidator<ApplicationUser>>());

                services.AddSingleton<IJwtFactory, JwtFactory>();


                //See IMOMaritimeSingleWindow.Extensions.IServiceCollections.cs for implementation
                services.AddJWTOptions(Configuration);
                services.AddAuthorizationPolicies();
            }
            catch(Exception e)
            {
                Log.Error(e);
                if (e.InnerException != null)
                {
                    Log.Error(e.InnerException);
                }
            }
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.Use(async (context, next) =>
            {
                await next();
                if (context.Response.StatusCode == 404 &&
                   !Path.HasExtension(context.Request.Path.Value) &&
                   !context.Request.Path.Value.StartsWith("/api/", StringComparison.Ordinal))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });

            if (!env.IsProduction())
            {
                app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();
            app.UseEndpoints(endpoints => endpoints.MapDefaultControllerRoute());
        }
    }
}
