using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Department
    {
        public int DepartmentId { get; set; }
        public int LocationId { get; set; }
        public int? DepartmentNo { get; set; }
        public string ShortName { get; set; }
        public bool? IsActive { get; set; }

        public Location Location { get; set; }
    }
}
