using System.Collections.Generic;
using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.EntityFrameworkCore.Query;
using Microsoft.EntityFrameworkCore.Query.SqlExpressions;
using Microsoft.EntityFrameworkCore.Sqlite.Query.Internal;

namespace IMOMaritimeSingleWindow.Tests.Data
{
    // Lets controllers that call Npgsql's EF.Functions.ILike run against SQLite, whose LIKE is case-insensitive for ASCII
    public class SqliteIlikeTranslatorProvider : SqliteMethodCallTranslatorProvider
    {
        public SqliteIlikeTranslatorProvider(RelationalMethodCallTranslatorProviderDependencies dependencies)
            : base(dependencies)
        {
            AddTranslators(new IMethodCallTranslator[] { new IlikeTranslator(dependencies.SqlExpressionFactory) });
        }

        private class IlikeTranslator : IMethodCallTranslator
        {
            private readonly ISqlExpressionFactory _sqlExpressionFactory;

            public IlikeTranslator(ISqlExpressionFactory sqlExpressionFactory)
            {
                _sqlExpressionFactory = sqlExpressionFactory;
            }

            public SqlExpression Translate(
                SqlExpression instance,
                MethodInfo method,
                IReadOnlyList<SqlExpression> arguments,
                IDiagnosticsLogger<DbLoggerCategory.Query> logger)
            {
                // arguments[0] is the DbFunctions instance
                if (method.Name == "ILike" && arguments.Count == 3)
                {
                    return _sqlExpressionFactory.Like(arguments[1], arguments[2]);
                }

                return null;
            }
        }
    }
}
