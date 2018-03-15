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

            services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigin",
                    b => b.WithOrigins("http://localhost"));
                options.AddPolicy("AllowAnyOrigin",
                    b => b.AllowAnyOrigin());
                options.AddPolicy("AllowAllAny",
                    b => b.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            });

            var connectionString = Configuration.GetConnectionString("DefaultConnection");
          //services.AddEntityFrameworkNpgsql().AddDbContext<open_ssnContext>(options => options.UseNpgsql(connectionString));
            services.AddEntityFrameworkNpgsql().AddDbContext<ApplicationDbContext>(options => options.UseNpgsql(connectionString));
            
          

          //Automapper setup
          /**var config = new AutoMapper.MapperConfiguration(cfg =>
          {
              cfg.AddProfile(new ViewModelToEntityMappingProfile());
          });
          var mapper = config.CreateMapper();
          services.AddSingleton(mapper);
          */

          services.AddSingleton<IJwtFactory, JwtFactory>();

            services.AddScoped<SignInManager<AppUser>>();
            // add identity
            //services.AddIdentity<AppUser, PersonRole>();
            var builder = services.AddIdentityCore<AppUser>(options =>
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
            builder = new IdentityBuilder(builder.UserType, typeof(IdentityRole), builder.Services);
            builder.AddEntityFrameworkStores<ApplicationDbContext>().AddDefaultTokenProviders();

            services.TryAddTransient<IHttpContextAccessor, HttpContextAccessor>();

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
              //options.AddPolicy("RequireAgentClaims", policy => policy.RequireClaim(Constants.Strings.PersonClaims.Register,  );
              options.AddPolicy("AdminUser", policy => policy.RequireClaim(Constants.Strings.JwtClaimIdentifiers.Rol, Constants.Strings.JwtClaims.AdminAccess));
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

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.Use(async (context, next) => {
                await next();
                if (context.Response.StatusCode == 404 &&
                   !Path.HasExtension(context.Request.Path.Value) &&
                   !context.Request.Path.Value.StartsWith("/api/"))
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
