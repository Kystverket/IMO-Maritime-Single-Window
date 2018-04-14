using System.IO;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models.Entities;

namespace IMOMaritimeSingleWindow.Extensions
{
    public static class UserDbContextExtension
    {
        public static void EnsureSeeded(this UserDbContext context)
        {
            if (!context.Test.Any())
            {
                var testEntries = JsonConvert.DeserializeObject<List<Test>>(File.ReadAllText("Seed" + Path.DirectorySeparatorChar + "test-entries.json"));
                context.AddRange(testEntries);
                context.SaveChanges();
            }
        }
    }
}
