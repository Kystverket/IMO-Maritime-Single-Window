using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Application
    {
        public Application()
        {
            ApplicationPerson = new HashSet<ApplicationPerson>();
            ApplicationRight = new HashSet<ApplicationRight>();
        }

        public int ApplicationId { get; set; }
        public string ApplicationName { get; set; }
        public string SystemName { get; set; }
        public bool IsPasswordRequired { get; set; }

        public ICollection<ApplicationPerson> ApplicationPerson { get; set; }
        public ICollection<ApplicationRight> ApplicationRight { get; set; }
    }
}
