using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Repositories
{
    public class PersonRepository : Repository<Person, Guid>, IPersonRepository<Guid>
    {
        public PersonRepository(open_ssnContext context) : base(context)
        {
        }
    }
}
