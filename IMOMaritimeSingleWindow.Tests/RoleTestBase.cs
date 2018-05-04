using IMOMaritimeSingleWindow.Tests.Data;
using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Identity.Stores;
using AutoMapper;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Repositories;

namespace IMOMaritimeSingleWindow.Tests
{
    public class RoleTestBase
    {
        protected open_ssnContext InMemoryDatabaseContext;
        protected readonly UnitOfWork UnitOfWork;
        protected readonly RoleStore RoleStore;

        public RoleTestBase()
        {
            InMemoryDatabaseContext = StorageBuilder.GetInMemContextWithRoleData();
            UnitOfWork = (UnitOfWork)StorageBuilder.GetUnitOfWork(InMemoryDatabaseContext);
            var configuration = new MapperConfiguration(cfg => new IdentityEntitiesToModelsMappingProfile());
            var mapper = configuration.CreateMapper();
            RoleStore = new RoleStore(UnitOfWork, mapper);
        }
    }
}
