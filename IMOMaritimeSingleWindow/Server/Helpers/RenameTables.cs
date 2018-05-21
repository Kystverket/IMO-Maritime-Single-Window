using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.Helpers
{
    public static class RenameTables
    {

        public static string RenameName(string name)
        {
            //Remove eventual plural name
            if (name[name.Length - 1] == 's')
                name = name.Remove(name.Length - 1, 1);
            name = name.Replace("AspNet", "");
            //name = name.Replace("AspNet", "Application");
            return name;
        }

    }
}
