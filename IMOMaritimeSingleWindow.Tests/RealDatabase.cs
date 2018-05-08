using System;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Repositories;
using IMOMaritimeSingleWindow.Tests.Data;

namespace IMOMaritimeSingleWindow.Tests
{
    public class RealDatabase
    {
        public open_ssnContext DatabaseContext;
        protected readonly UnitOfWork UnitOfWork;
        public RealDatabase()
        {
            DatabaseContext = StorageBuilder.GetContext();
            UnitOfWork = (UnitOfWork)StorageBuilder.GetUnitOfWork(DatabaseContext);
        }
    }
}
