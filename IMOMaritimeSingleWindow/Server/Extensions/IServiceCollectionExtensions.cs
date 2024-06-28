using IMOMaritimeSingleWindow.Auth;
using IMOMaritimeSingleWindow.Helpers;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Azure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using FluentValidation.AspNetCore;
using System;
using System.Text;
using Policies = IMOMaritimeSingleWindow.Helpers.Constants.Strings.Policies;

namespace IMOMaritimeSingleWindow.Extensions
{
    public static class IServiceCollectionExtensions
    {

        // Method adopted from https://github.com/mmacneil/AngularASPNETCore2WebApiAuth/blob/master/src/Startup.cs
        // lines 49-94

        public static IServiceCollection AddJWTOptions(this IServiceCollection services, IConfiguration configuration)
        {
            // Get options from app settings
            var jwtAppSettingOptions = configuration.GetSection(nameof(JwtIssuerOptions));
            
            var appSettingsSection = configuration.GetSection("AppSettings");
            //services.Configure<AppSettings>(appSettingsSection);
            var appSettings = appSettingsSection.Get<AppSettings>();
            string secret = appSettings.Secret;
            if (string.IsNullOrWhiteSpace(secret))
            {
                secret = CloudConfigurationManager.GetSetting("ImoMsw.Secret");
            }

            SymmetricSecurityKey _signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secret));

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

            return services;
        }

        public static IServiceCollection AddDevelopmentAuthorizationPolicies(this IServiceCollection services)
        {
            // This is a nasty hack basically saying every custom policy grants access by default in a development environment
            services.AddAuthorization(options =>
            {
                options.AddPolicy("Port Call Registration", policy =>
                    policy.RequireAssertion(_ => true)
                );
                options.AddPolicy("PortCallCRUD", policy =>
                    policy.RequireAssertion(_ => true)
                );
                options.AddPolicy("PortCallClearance", policy =>
                    policy.RequireAssertion(_ => true)
                );
                options.AddPolicy(Policies.AdminRole, policy =>
                    policy.RequireAssertion(_ => true)
                );
                options.AddPolicy(Policies.SuperAdminRole, policy =>
                    policy.RequireAssertion(_ => true)
                );
            });

            return services;
        }

        public static IServiceCollection AddAuthorizationPolicies(this IServiceCollection services)
        {
            services.AddAuthorization(options =>
            {
                
                //options.AddPolicy("PortCallCRUD", policy =>
                //    policy.RequireClaim("Port Call", new string[] { "Create", "View", "Edit", "Delete" }));
                //options.AddPolicy("PortCallClearance", policy =>
                //    policy.RequireClaim("Port Call", new string[] { "View", "Clearance" }));


                options.AddPolicy("PortCallCRUD", policy =>
                    policy.RequireAssertion(ahcontext =>
                        // User has CRUD claims on port call
                        ahcontext.User.HasClaim(claim => (claim.Type == "Port Call" && claim.Value == "Register"))
                        &&
                        ahcontext.User.HasClaim(claim => (claim.Type == "Port Call" && claim.Value == "View"))
                        &&
                        ahcontext.User.HasClaim(claim => (claim.Type == "Port Call" && claim.Value == "Edit"))
                        &&
                        ahcontext.User.HasClaim(claim => (claim.Type == "Port Call" && claim.Value == "Delete"))

                    )
                );

                // This is how you require different claims where each must be present
                options.AddPolicy("PortCallClearance", policy =>
                    policy.RequireAssertion(ahcontext =>
                        ahcontext.User.HasClaim(claim => (claim.Type == "Port Call" && claim.Value == "View"))
                        && 
                        ahcontext.User.HasClaim(claim => (claim.Type == "Port Call" && claim.Value == "Clearance"))
                    )
                );

                // This is how you require different claims where it can be of any of ones that are specified
                options.AddPolicy("Port Call Registration", policy =>
                    policy.RequireAssertion(ahcontext =>
                        ahcontext.User.HasClaim(claim =>
                            // User has the role of an admin
                            (claim.Type == System.Security.Claims.ClaimTypes.Role && claim.Value == Constants.Strings.UserRoles.Admin) ||
                            // ... or the role of an agent
                            (claim.Type == System.Security.Claims.ClaimTypes.Role && claim.Value == Constants.Strings.UserRoles.Agent)
                    ))
                );

                options.AddPolicy(Policies.AdminRole, policy =>
                    policy.RequireClaim(Constants.Strings.JwtClaimIdentifiers.Rol, Constants.Strings.UserRoles.Admin)
                );
                options.AddPolicy(Policies.SuperAdminRole, policy =>
                    policy.RequireClaim(Constants.Strings.JwtClaimIdentifiers.Rol, Constants.Strings.UserRoles.SuperAdmin)
                );
            });
            
            return services;
        }

    }
}
