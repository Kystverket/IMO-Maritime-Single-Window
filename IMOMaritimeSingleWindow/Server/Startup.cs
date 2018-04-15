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
using Microsoft.AspNetCore.Cors;

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
using IMOMaritimeSingleWindow.Models.Entities;
//using IMOMaritimeSingleWindow.Services;
using IMOMaritimeSingleWindow.ViewModels.Mappings;
using Microsoft.AspNetCore.Mvc.Authorization;

namespace IMOMaritimeSingleWindow
{
    public class Startup
    {
        
        public Startup(IConfiguration configuration)
        {
          Configuration = configuration;
        }

        public IConfiguration Configuration
        {
          get;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)

        {

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
            services.AddEntityFrameworkNpgsql().AddDbContext<open_ssnContext>(options => options.UseNpgsql(connectionStringOpenSSN));
            services.AddEntityFrameworkNpgsql().AddDbContext<UserDbContext>(options => options.UseNpgsql(connectionStringUserDb));
        

            services.AddSingleton<IJwtFactory, JwtFactory>();

            
            //Add identity types
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
                //options.SignIn.RequireConfirmedEmail = true;

            });
            //builder = new IdentityBuilder(builder.UserType, typeof(IdentityRole), builder.Services);
            builder.AddEntityFrameworkStores<UserDbContext>().AddDefaultTokenProviders();

            var baseSeedPath = "Seed" + Path.DirectorySeparatorChar;
            var userString = File.ReadAllText(baseSeedPath + "users.json");
            var roleString = File.ReadAllText(baseSeedPath + "roles.json");
            var userRoleString = File.ReadAllText(baseSeedPath + "user-roles.json");
            SeedItems seedItems = new SeedItems
            {
                UserBase = userString,
                RoleBase = roleString,
                UserRoleBase = userRoleString
            };

            services.TryAddTransient<IHttpContextAccessor, HttpContextAccessor>();

            //Identity Services
            services.AddScoped<SignInManager<ApplicationUser>>();
            services.AddScoped<UserManager<ApplicationUser>, ApplicationUserManager>();
            services.AddScoped<RoleManager<ApplicationRole>, ApplicationRoleManager>();
            services.AddScoped<IUserStore<ApplicationUser>, ApplicationUserStore>();
            services.AddScoped<IRoleStore<ApplicationRole>, ApplicationRoleStore>();

            
            var serviceProvider = services.BuildServiceProvider();

            //ApplicationUserManager myUserManager = (ApplicationUserManager)serviceProvider.GetService(typeof(ApplicationUserManager));
            //ApplicationRoleManager myRoleManager = (ApplicationRoleManager)serviceProvider.GetService(typeof(ApplicationRoleManager));
            var myUserManager = serviceProvider.GetService<UserManager<ApplicationUser>>();
            var myRoleManager = serviceProvider.GetService<RoleManager<ApplicationRole>>();

            // Additional manager separate from ASP NET Identity
            services.TryAddScoped(ctx => new UserRoleManager<ApplicationUser, Guid, ApplicationRole, Guid>(myUserManager, myRoleManager));

            var myUserDbContext = serviceProvider.GetService<UserDbContext>();

            // Custom services
            services.AddSingleton<IUserDbInitializer>(dbi => new UserDbInitializer(myUserManager, myRoleManager, myUserDbContext, seedItems));
            serviceProvider = services.BuildServiceProvider();
            
            //services.AddScoped<IUserClaimsPrincipalFactory<ApplicationUser>, ApplicationClaimsPrincipalFactory>();

            // Get options from app settings
            var jwtAppSettingOptions = Configuration.GetSection(nameof(JwtIssuerOptions));

          var appSettingsSection = Configuration.GetSection("AppSettings");
          services.Configure<AppSettings>(appSettingsSection);
          var appSettings = appSettingsSection.Get<AppSettings>();
          SymmetricSecurityKey _signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(appSettings.Secret));

          // Configure JwtIssuerOptions
          services.Configure<JwtIssuerOptions>(options =>
          {
            options.Issuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
            options.Audience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)];
            options.SigningCredentials = new SigningCredentials(_signingKey, SecurityAlgorithms.HmacSha256);
          });

          var tokenValidationParameters = new TokenValidationParameters
          {
             ValidateIssuer = true,
             ValidIssuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)],

             ValidateAudience = true,
             ValidAudience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)],

             ValidateIssuerSigningKey = true,
             IssuerSigningKey = _signingKey,

             RequireExpirationTime = false,
             ValidateLifetime = true,
             ClockSkew = TimeSpan.Zero
          };

          services.AddAuthentication(options =>
          {
                options.DefaultSignInScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultSignOutScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
          }).AddJwtBearer(configureOptions =>
            {
                configureOptions.ClaimsIssuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
                configureOptions.TokenValidationParameters = tokenValidationParameters;
                configureOptions.SaveToken = true;
            }
          ); //end AddJwtBearer

          // api user claim policy
          services.AddAuthorization(options =>
          {
            options.AddPolicy("ApiUser", policy => policy.RequireClaim(Constants.Strings.JwtClaimIdentifiers.Rol, Constants.Strings.JwtClaims.ApiAccess));
              

            options.AddPolicy("Port Call Registration", policy =>
                policy.RequireAssertion(context =>
                    context.User.HasClaim(claim =>
                        // User has the role of an admin
                        (claim.Type == System.Security.Claims.ClaimTypes.Role && claim.Value == Constants.Strings.UserRoles.Admin) ||
                        // ... or the role of an agent
                        (claim.Type == System.Security.Claims.ClaimTypes.Role && claim.Value == Constants.Strings.UserRoles.Agent)
                    ))
                );
              

          });

        



            /*services.AddSingleton<IEmailSender, EmailSender>();
            services.Configure<AuthMessageSenderOptions>(Configuration);*/

            /*var b = services.AddMvc(
                options => {
                    var defaultPolicy = new AuthorizationPolicyBuilder(new[] { JwtBearerDefaults.AuthenticationScheme, IdentityConstants.ApplicationScheme })
                    .RequireAuthenticatedUser().Build();
                    options.Filters.Add(new AuthorizeFilter(defaultPolicy));

                });
            */

            services.AddAutoMapper();
            services.AddMvc().AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<Startup>());

          // Fix for json self-referencing loop bug:
          services.AddMvc().AddJsonOptions(
            options => options.SerializerSettings.ReferenceLoopHandling = 
            Newtonsoft.Json.ReferenceLoopHandling.Ignore
          );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {

            if (env.IsDevelopment())
            {
                using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
                {
                    if (!serviceScope.ServiceProvider.GetService<UserDbContext>().AllMigrationsApplied())
                    {
                        serviceScope.ServiceProvider.GetService<UserDbContext>().Database.Migrate();
                        
                        serviceScope.ServiceProvider.GetService<IUserDbInitializer>().EnsureSeeded()
                          .GetAwaiter().GetResult();
                    }
                }
            }

            

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

            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile("appsettings.Development.json", optional: true)
                .AddEnvironmentVariables();
            builder.Build();

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
