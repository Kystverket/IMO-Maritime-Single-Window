using System;
using System.Collections.Generic;
using System.Text;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Repositories;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Tests.Data;
using IMOMaritimeSingleWindow.ViewModels.Mappings;

using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Identity.Stores;
using Microsoft.AspNetCore.Identity;
using AutoMapper;
using NUnit.Framework;
using System.Threading.Tasks;
using Xunit;

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
