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
        protected open_ssnContext Context;
        protected readonly UnitOfWork UnitOfWork;
        protected readonly RoleStore RoleStore;

        public RoleTestBase()
        {
            //Context = StorageBuilder.GetContext();
            //UnitOfWork = (UnitOfWork)StorageBuilder.GetUnitOfWork(Context);
            InMemoryDatabaseContext = StorageBuilder.GetInMemContextUserAndRoleData();
            UnitOfWork = (UnitOfWork)StorageBuilder.GetUnitOfWork(InMemoryDatabaseContext);
            var configuration = new MapperConfiguration(cfg => cfg.AddProfile<IdentityEntitiesToModelsMappingProfile>());
            //var configuration = new MapperConfiguration(cfg => new IdentityEntitiesToModelsMappingProfile());
            var mapper = configuration.CreateMapper();
            RoleStore = new RoleStore(UnitOfWork, mapper);
        }
    }
}
