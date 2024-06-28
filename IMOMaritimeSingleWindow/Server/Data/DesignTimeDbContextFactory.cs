using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace IMOMaritimeSingleWindow.Data
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<open_ssnContext>
    {
        public open_ssnContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var builder = new DbContextOptionsBuilder<open_ssnContext>();
            var connectionString = configuration.GetConnectionString("OpenSSN");

            builder.UseNpgsql(connectionString);

            return new open_ssnContext(builder.Options);
        }
    }
}
