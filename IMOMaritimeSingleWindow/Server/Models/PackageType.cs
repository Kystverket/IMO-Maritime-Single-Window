using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class PackageType
    {
        public PackageType()
        {
            CargoItem = new HashSet<CargoItem>();
        }

        public long PackageTypeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<CargoItem> CargoItem { get; set; }
    }
}
