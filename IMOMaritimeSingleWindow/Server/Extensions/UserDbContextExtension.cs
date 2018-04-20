using System.IO;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Identity; using IMOMaritimeSingleWindow.Identity.Models;

namespace IMOMaritimeSingleWindow.Extensions
{
    public static class UserDbContextExtension
    {
        public static void EnsureSeeded(this userdbContext context)
        {
            /*
            if (!context.Test.Any())
            {
                var testEntries = JsonConvert.DeserializeObject<List<Test>>(File.ReadAllText("Seed" + Path.DirectorySeparatorChar + "test-entries.json"));
                context.AddRange(testEntries);
                context.SaveChanges();
            }
            */
        }
    }
}
