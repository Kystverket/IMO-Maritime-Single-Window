using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class PersonOnBoardType
    {
        public PersonOnBoardType()
        {
            PersonOnBoard = new HashSet<PersonOnBoard>();
        }

        public int PersonOnBoardTypeId { get; set; }
        public string Name { get; set; }

        public ICollection<PersonOnBoard> PersonOnBoard { get; set; }
    }
}
