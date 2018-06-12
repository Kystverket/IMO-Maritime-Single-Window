using System;
using System.Data.Common;
using System.IO;
using IMOMaritimeSingleWindow.Data;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

public class ContextFactory : IDisposable
{
    private DbConnection _connection;

    private DbContextOptions<TestContext> CreateOptions()
    {
        return new DbContextOptionsBuilder<TestContext>()
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