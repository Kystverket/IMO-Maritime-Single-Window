using System;
using System.Data.Common;
using System.IO;
using IMOMaritimeSingleWindow.Data;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using TestContext = IMOMaritimeSingleWindow.Data.TestContext;

public class ContextFactory : IDisposable
{
    private DbConnection _connection;

    private DbContextOptions<open_ssnContext_base> CreateOptions()
    {
        return new DbContextOptionsBuilder<open_ssnContext_base>()
                        .UseSqlite(_connection)
                        .Options;
    }

    public TestContext CreateContext()
    {
        if (_connection == null)
        {
            _connection = new SqliteConnection("DataSource=:memory:");
            _connection.Open();

            var options = CreateOptions();
            using (var context = new TestContext(options))
            {
                context.Database.EnsureCreated();
            }
        }

        return new TestContext(CreateOptions());
    }

    public void Dispose()
    {
        if (_connection != null)
        {
            _connection.Dispose();
            _connection = null;
        }
    }
}