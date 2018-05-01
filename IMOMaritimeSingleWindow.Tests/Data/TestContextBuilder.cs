using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Data;

namespace IMOMaritimeSingleWindow.Tests.Data
{
    public static class TestContextBuilder
    {


        public static open_ssnContext GetInMemContext()
        {
            var options = new DbContextOptionsBuilder<open_ssnContext>()
                      .UseInMemoryDatabase(Guid.NewGuid().ToString())
                      .Options;
            var context = new open_ssnContext(options);

            //optionally fill database with data




            return context;
        }

    }
    

}
