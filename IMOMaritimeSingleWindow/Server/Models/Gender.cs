using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Gender
    {
        public Gender()
        {
            PersonOnBoard = new HashSet<PersonOnBoard>();
        }
        public int GenderId { get; set; }
        public string Description { get; set; }
        public ICollection<PersonOnBoard> PersonOnBoard { get; set; }
    }
}
