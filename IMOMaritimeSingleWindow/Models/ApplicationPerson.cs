using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class ApplicationPerson
    {
        public ApplicationPerson()
        {
            ApplicationPersonHistory = new HashSet<ApplicationPersonHistory>();
        }

        public int ApplicationPersonId { get; set; }
        public int ApplicationId { get; set; }
        public int PersonId { get; set; }

        public Application Application { get; set; }
        public Person Person { get; set; }
        public ICollection<ApplicationPersonHistory> ApplicationPersonHistory { get; set; }
    }
}
