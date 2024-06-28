using System;
using System.IO;
using AutoMapper;
using FluentValidation;
using FluentValidation.AspNetCore;
using IMOMaritimeSingleWindow.Auth;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Identity;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.ViewModels.Mappings;
using IMOMaritimeSingleWindow.ViewModels.Validations;
using log4net;
using log4net.Config;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Serialization;
using System.Reflection;
using IMOMaritimeSingleWindow.Extensions;
using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Repositories;
using IMOMaritimeSingleWindow.Filters;
using IMOMaritimeSingleWindow.Identity.Helpers;
using IMOMaritimeSingleWindow.Identity.Stores;

namespace IMOMaritimeSingleWindow
{
    public class Startup
    {
        static readonly ILog Log = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);

        public Startup(IHostingEnvironment env)
        {
            var logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());
            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));

            Configuration = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile("appsettings.Development.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables()
                .Build();
            HostingEnvironment = env;
        }

        public IConfigurationRoot Configuration { get; }
        public IHostingEnvironment HostingEnvironment { get; }
public void ConfigureServices(IServiceCollection services)
{
    services.AddMvc(opts =>
    {
        opts.Filters.Add(new Log4NetExceptionFilter());
        opts.EnableEndpointRouting = false; // Disable Endpoint Routing
    });

    // Add FluentValidation and Newtonsoft.Json
    services.AddControllers()
        .AddNewtonsoftJson(options =>
        {
            options.SerializerSettings.ContractResolver = new DefaultContractResolver();
            options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
        })
        .AddFluentValidation(fv =>
        {
            fv.RegisterValidatorsFromAssembly(Assembly.GetExecutingAssembly());
        });

    services.TryAddTransient<IHttpContextAccessor, HttpContextAccessor>();

    // Configure database context
    string connectionStringOpenSSN = Configuration.GetConnectionString("OpenSSN");
    services.AddDbContext<open_ssnContext>(options =>
        options.UseNpgsql(connectionStringOpenSSN));

    // Register the DbContext as IDbContext
    services.AddScoped<IDbContext>(provider => provider.GetService<open_ssnContext>());

    // Register UnitOfWork
    services.AddScoped<IUnitOfWork<Guid>, UnitOfWork>();

    // Configure identity services
    services.AddIdentity<ApplicationUser, ApplicationRole>(options =>
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

        // Email options
        options.SignIn.RequireConfirmedEmail = true;
    })
    .AddEntityFrameworkStores<open_ssnContext>()
    .AddDefaultTokenProviders();

    // AutoMapper configuration
    var config = new MapperConfiguration(cfg =>
    {
        cfg.AddProfile<IdentityEntitiesToModelsMappingProfile>();
        cfg.AddProfile<ViewModelToEntityMappingProfile>();
    });
    services.AddSingleton<IMapper>(s => config.CreateMapper());
    services.TryAddScoped<IUnitOfWork<Guid>>(ctx => new UnitOfWork(ctx.GetRequiredService<open_ssnContext>()));

    services.AddSingleton<IUserStoreHelper, UserStoreHelper>(); 
    services.TryAddScoped<IdentityErrorDescriber>();

    services.AddScoped<IUserStore<ApplicationUser>, UserStore>(); 
    services.AddScoped<IRoleStore<ApplicationRole>, RoleStore>(); 

    // Overriding service
    services.Replace(ServiceDescriptor.Scoped<IUserValidator<ApplicationUser>, CustomUserValidator<ApplicationUser>>());

    // Custom services
    services.AddSingleton<IJwtFactory, JwtFactory>();

    // See IMOMaritimeSingleWindow.Extensions.IServiceCollections.cs for implementation
    services.AddJWTOptions(Configuration);
    services.AddAuthorizationPolicies();

    if (HostingEnvironment.IsProduction())
    {
        services.AddMvc(opts => opts.Filters.Add(new RequireHttpsAttribute())); // Add using Microsoft.AspNetCore.Mvc;
    }
}
public void Configure(IApplicationBuilder app, IHostingEnvironment env)
{
    app.Use(async (context, next) =>
    {
        var userManager = context.RequestServices.GetService<UserManager<ApplicationUser>>();
        var signInManager = context.RequestServices.GetService<SignInManager<ApplicationUser>>();
        var roleManager = context.RequestServices.GetService<RoleManager<ApplicationRole>>();

        if (userManager == null)
        {
            Console.WriteLine("UserManager<ApplicationUser> is not registered.");
        }
        else
        {
            Console.WriteLine("UserManager<ApplicationUser> is registered.");
        }

        if (signInManager == null)
        {
            Console.WriteLine("SignInManager<ApplicationUser> is not registered.");
        }
        else
        {
            Console.WriteLine("SignInManager<ApplicationUser> is registered.");
        }

        if (roleManager == null)
        {
            Console.WriteLine("RoleManager<ApplicationRole> is not registered.");
        }
        else
        {
            Console.WriteLine("RoleManager<ApplicationRole> is registered.");
        }

        await next.Invoke();
    });

    app.UseAuthentication();
    app.UseMvcWithDefaultRoute();
    app.UseDefaultFiles();
    app.UseStaticFiles();
}
    }}
