using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class ApplicationPersonHistory
    {
        public int ApplicationPersonHistoryId { get; set; }
        public int ApplicationPersonId { get; set; }

        public ApplicationPerson ApplicationPerson { get; set; }
    }
}
