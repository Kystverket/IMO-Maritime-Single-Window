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
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;

using Microsoft.IdentityModel.Tokens;

// Local namespaces
using IMOMaritimeSingleWindow.Auth;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Extensions;
using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Models.Entities;
using IMOMaritimeSingleWindow.ViewModels.Mappings;

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
          services.AddCors();
          var connectionString = Configuration.GetConnectionString("DefaultConnection");
          services.AddEntityFrameworkNpgsql().AddDbContext<open_ssnContext>(options => options.UseNpgsql(connectionString));
          services.AddMvc();
          services.AddAutoMapper();

          //Automapper setup
          /**var config = new AutoMapper.MapperConfiguration(cfg =>
          {
              cfg.AddProfile(new ViewModelToEntityMappingProfile());
          });
          var mapper = config.CreateMapper();
          services.AddSingleton(mapper);
          */

          services.AddSingleton<IJwtFactory, JwtFactory>();
          

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
          });

          // add identity
          var builder = services.AddIdentityCore<AppUser>(o =>
          {
            // configure identity options
            o.Password.RequireDigit = false;
            o.Password.RequireLowercase = false;
            o.Password.RequireUppercase = true;
            o.Password.RequireNonAlphanumeric = false;
            o.Password.RequiredLength = 6;
          });
          builder = new IdentityBuilder(builder.UserType, typeof(IdentityRole), builder.Services);
          builder.AddEntityFrameworkStores<ApplicationDbContext>().AddDefaultTokenProviders();

          
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
            app.UseMvcWithDefaultRoute();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseAuthentication();
        }
    }
}
