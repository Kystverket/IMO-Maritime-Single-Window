using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Repositories;
using IMOMaritimeSingleWindow.Tests.Data;

namespace IMOMaritimeSingleWindow.Tests
{
    public class TestBase
    {
        public open_ssnContext InMemoryDatabaseContext;
        protected readonly UnitOfWork UnitOfWork;
        public TestBase()
        {
            InMemoryDatabaseContext = StorageBuilder.GetInMemContext();
            UnitOfWork = (UnitOfWork)StorageBuilder.GetUnitOfWork(InMemoryDatabaseContext);
        }
    }
}
