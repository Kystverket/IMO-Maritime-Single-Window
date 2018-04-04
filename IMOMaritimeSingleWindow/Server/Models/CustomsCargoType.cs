using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class CustomsCargoType
    {
        public CustomsCargoType()
        {
            CustomsCargo = new HashSet<CustomsCargo>();
        }

        public int CustomsCargoTypeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<CustomsCargo> CustomsCargo { get; set; }
    }
}
