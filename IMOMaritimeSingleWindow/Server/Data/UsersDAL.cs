using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.Data
{
    public class UsersDAL
    {
        private readonly open_ssnContext _ssnContext;

        public UsersDAL(open_ssnContext ssnContext)
        {
            _ssnContext = ssnContext;
        }


        public Task<string> GetRoleNameAsync()
        {
            var results = (from person in _ssnContext.PersonRole
                           where person.PersonId.Equals(role.Id)
                           select person).Take(1).ToList();

            List<PersonRoleResult> resultList = new List<PersonRoleResult>();
            foreach (PersonRole p in results)
            {
                PersonRoleResult searchItem = new PersonRoleResult();
                searchItem.PersonId = p.PersonId;
                searchItem.RoleId = p.RoleId;

                //Find role name of person
                searchItem.RoleName = (from r in _ssnContext.Role
                                       where r.RoleId.Equals(p.RoleId)
                                       select r.RoleName).First().ToString();
                resultList.Add(searchItem);
            }

            return Task.FromResult<string>(resultList.First().ToString());
        }

    }
}
