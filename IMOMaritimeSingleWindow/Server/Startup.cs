using System;
using System.Configuration;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Text;
using AutoMapper;

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
using IMOMaritimeSingleWindow.ViewModels.Mappings;
using IMOMaritimeSingleWindow.Identity; using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Repositories;
using IMOMaritimeSingleWindow.Identity.Stores;
using Microsoft.AspNetCore.Mvc.Authorization;

namespace IMOMaritimeSingleWindow
{
    public class Startup
    {
        
        public Startup(IHostingEnvironment env)
        {
            Configuration = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile("appsettings.Development.json", optional: true)
                .AddEnvironmentVariables()
                .Build();
            HostingEnvironment = env;
        }
        

        public IConfigurationRoot Configuration { get; }
        public IHostingEnvironment HostingEnvironment { get; }
        public AuthorizationPolicy AuthorizationPolicy { get; internal set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)

        {

            services.TryAddTransient<IHttpContextAccessor, HttpContextAccessor>();
            //Configure CORS with different policies
            services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigin",
                    b => b.WithOrigins("http://localhost"));
                options.AddPolicy("AllowAnyOrigin",
                    b => b.AllowAnyOrigin());

                //Brute force policy if all else fails
                //NB: Only ever use in development!
                options.AddPolicy("AllowAllAny",
                    b => b.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            });

            //Configure database contextes
            var connectionStringOpenSSN = Configuration.GetConnectionString("OpenSSN");
            var connectionStringUserDb = Configuration.GetConnectionString("UserDatabase");
            var connectionStringUserTestDb = Configuration.GetConnectionString("TestUserDatabase");
            var dbOptions = new DbContextOptionsBuilder<open_ssnContext>().UseNpgsql(connectionStringOpenSSN).Options;
            services.AddEntityFrameworkNpgsql().AddDbContext<open_ssnContext>(options => options.UseNpgsql(connectionStringOpenSSN));
            services.AddEntityFrameworkNpgsql().AddDbContext<open_ssnContext>(options => options.UseNpgsql(connectionStringUserDb));
       

            //Configure identity services
            var builder = services.AddIdentity<ApplicationUser, ApplicationRole>(options =>
            {
                // configure identity options
                options.Password.RequireDigit = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireUppercase = true;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequiredLength = 6;

                // Lockout options
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
                options.Lockout.MaxFailedAccessAttempts = 10;
                options.Lockout.AllowedForNewUsers = true;

                //Email options
                options.SignIn.RequireConfirmedEmail = true;

            });

            //builder.AddEntityFrameworkStores<open_ssnContext>().AddDefaultTokenProviders();

            //builder.AddSignInManager<SignInManager<ApplicationUser>>()
                builder.AddUserManager<ApplicationUserManager>()
                .AddRoleManager<ApplicationRoleManager>();

            var serviceProvider = services.BuildServiceProvider();
            var context = serviceProvider.GetService<open_ssnContext>();
            if (context == null) throw new Exception("no service for open_ssnContext found!");

            //services.AddSingleton<IUnitOfWork<Guid>, UnitOfWork>();
            // services.AddAutoMapper();
            //var config = new MapperConfiguration(cfg => cfg.AddProfiles(typeof(Startup)));

            // Tip from https://stackoverflow.com/a/42298278
            var config = new MapperConfiguration(cfg =>
           {
               cfg.AddProfile<IdentityEntitiesToModelsMappingProfile>();
               cfg.AddProfile<ViewModelToEntityMappingProfile>();
           });
            services.AddSingleton<IMapper>(s => config.CreateMapper());
            //services.TryAddScoped<IUnitOfWork<Guid>>(ctx => new UnitOfWork(context));
            services.TryAddScoped<IUnitOfWork<Guid>>(ctx => new UnitOfWork(new open_ssnContext(dbOptions)));
            serviceProvider = services.BuildServiceProvider();
            var unitofwork = (UnitOfWork)serviceProvider.GetService<IUnitOfWork<Guid>>();
            var automapper = serviceProvider.GetService<IMapper>();
            
            services.TryAddScoped<IRoleStore<ApplicationRole>>(ctx => new RoleStore(unitofwork, automapper));
            services.TryAddScoped<IUserStore<ApplicationUser>>(ctx => new UserStore(unitofwork, automapper));

            serviceProvider = services.BuildServiceProvider();

            var myUserManager = serviceProvider.GetService<UserManager<ApplicationUser>>();
            //var myRoleManager = serviceProvider.GetService<RoleManager<ApplicationRole>>();

            // Additional manager separate from ASP NET Identity
            //services.TryAddScoped(ctx => new UserRoleManager<ApplicationUser, Guid, ApplicationRole, Guid>(myUserManager, myRoleManager));


            //Overriding service
            services.Replace(ServiceDescriptor.Scoped<IUserValidator<ApplicationUser>, CustomUserValidator<ApplicationUser>>());

            // Additional manager separate from ASP NET Identity
            //services.TryAddScoped(ctx => new UserRoleManager<ApplicationUser, Guid, ApplicationRole, Guid>(myUserManager, myRoleManager));


            // Custom services

            //services.AddScoped<IUserClaimsPrincipalFactory<ApplicationUser>, ApplicationClaimsPrincipalFactory>();

            services.AddSingleton<IJwtFactory, JwtFactory>();

            if (HostingEnvironment.IsProduction() || HostingEnvironment.IsStaging())
            {
                //See IMOMaritimeSingleWindow.Extensions.IServiceCollections.cs for implementation
                services.AddJWTOptions(Configuration);
                services.AddAuthorizationPolicies();

                services.AddMvc().AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<Startup>());
            } else
            {
                AuthorizationPolicy = new AuthorizationPolicyBuilder()
                    .RequireAssertion(_ => true)
                    .Build();
                
                //Default basically granting everything needed
                services.AddAuthorization(options =>
                {
                    options.DefaultPolicy = AuthorizationPolicy;
                });

                //See IMOMaritimeSingleWindow.Extensions.IServiceCollections.cs for implementation
                services.AddDevelopmentAuthorizationPolicies();

                // Curtesy of https://www.illucit.com/en/asp-net/asp-net-core-2-0-disable-authentication-development-environment/
                services.AddMvc(opts =>
                {
                    opts.Filters.Add(new AuthorizeFilter(AuthorizationPolicy));
                    opts.Filters.Add(new AllowAnonymousFilter());
                })
                .AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<Startup>());
            }

            

            /*services.AddSingleton<IEmailSender, EmailSender>();
            services.Configure<AuthMessageSenderOptions>(Configuration);*/

            /*var b = services.AddMvc(
                options => {
                    var defaultPolicy = new AuthorizationPolicyBuilder(new[] { JwtBearerDefaults.AuthenticationScheme, IdentityConstants.ApplicationScheme })
                    .RequireAuthenticatedUser().Build();
                    options.Filters.Add(new AuthorizeFilter(defaultPolicy));

                });
            */
            
          //// Fix for json self-referencing loop bug:
          //services.AddMvc().AddJsonOptions(
          //  options => options.SerializerSettings.ReferenceLoopHandling = 
          //  Newtonsoft.Json.ReferenceLoopHandling.Ignore
          //);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.Use(async (context, next) => {
                await next();
                if (context.Response.StatusCode == 404 &&
                   !Path.HasExtension(context.Request.Path.Value) &&
                   !context.Request.Path.Value.StartsWith("/api/", StringComparison.Ordinal))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });

            //app.UseCors("AllowAnyOrigin");
            app.UseCors("AllowAllAny");
            //app.UseCors("AllowSpecificOrigin");

            // IMPORTANT! UseAuthentication() must be called before UseMvc()
            
            app.UseAuthentication();
            app.UseMvcWithDefaultRoute();
            app.UseDefaultFiles();
            app.UseStaticFiles();
        }
    }
}
