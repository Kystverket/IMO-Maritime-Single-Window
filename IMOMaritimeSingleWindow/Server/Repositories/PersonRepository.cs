using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Repositories
{
    public class PersonRepository : EFConcreteRepository<Person, Guid>, IPersonRepository<Guid>
    {
        public PersonRepository(open_ssnContext_base context) : base(context)
        {
        }
    }
}
