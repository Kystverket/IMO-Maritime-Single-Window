using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using SendGrid;
using System;

namespace IMOMaritimeSingleWindow.Extensions
{
    public static class EmailServiceCollectionExtensions
    {
        public static IServiceCollection ConfigureEmailSenderOptions(this IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<EmailSenderOptions>(opts => configuration.GetSection(nameof(EmailSenderOptions)).Bind(opts));

            return services;
        }

        public static IServiceCollection ConfigureSendGridOptions(this IServiceCollection services, IConfiguration configuration)
        {
            var apiKey = System.Environment.GetEnvironmentVariable("SENDGRID_APIKEY");

            if (String.IsNullOrWhiteSpace(apiKey))
            {
                // Get ApiKey from appsettings file
                services.Configure<SendGridClientOptions>(opts => configuration.GetSection("SendGridOptions").Bind(opts));
            }
            else
            {
                services.Configure<SendGridClientOptions>(opts =>
                {
                    opts.ApiKey = apiKey;
                });
            }

            return services;
        }

        public static IServiceCollection AddSendGridClient(this IServiceCollection services)
        {
            // Assumes options have been configured
            var sendGridClientOptions = services.BuildServiceProvider().GetService<SendGridClientOptions>();

            services.AddTransient<SendGridClient>(ctx => new SendGridClient(sendGridClientOptions));

            return services;
        }

        public static IServiceCollection AddEmailSender(this IServiceCollection services)
        {
            // Assumes options have been configured
            var serviceProvider = services.BuildServiceProvider();
            var emailSenderOptions = serviceProvider.GetService<IOptions<EmailSenderOptions>>();
            var sendGridClientOptions = serviceProvider.GetService<IOptions<SendGridClientOptions>>();

            services.AddTransient<IEmailSender>(ctx =>
                new EmailSender
                (
                    emailClient: new SendGridClient(sendGridClientOptions.Value),
                    senderOptions: emailSenderOptions
                )
            );

            return services;
        }
    }
}
