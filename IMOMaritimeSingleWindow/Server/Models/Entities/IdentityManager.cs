//using System;
//using System.IO;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Identity;
//using Newtonsoft.Json;
//using AutoMapper;
//using IMOMaritimeSingleWindow.ViewModels;

//namespace IMOMaritimeSingleWindow.Models.Entities
//{
//    public class IdentityManager<TUser, TUserKey, TRole, TRoleKey>

//        where TUserKey : IEquatable<TUserKey>
//        where TRoleKey : IEquatable<TRoleKey>
//        where TUser : IdentityUser<TUserKey>
//        where TRole : IdentityRole<TRoleKey>

        
//    {
//        private readonly UserManager<ApplicationUser> _userManager;
//        private readonly RoleManager<ApplicationRole> _roleManager;
//        private readonly IMapper _mapper;

//        public IdentityManager(UserManager<ApplicationUser> userManager, RoleManager<ApplicationRole> roleManager, IMapper mapper)
//        {
//            _userManager = userManager;
//            _roleManager = roleManager;
//            _mapper = mapper;
//        }

//        public async Task EnsureSeeded()
//        {
//            if (!_userManager.Users.Any())
//            {
//                var users = JsonConvert.DeserializeObject<List<RegistrationWithPasswordViewModel>>(File.ReadAllText("seed" + Path.DirectorySeparatorChar + "users.json"));
//                foreach(var user in users)
//                {
//                    var userIdentity = _mapper.Map<ApplicationUser>(user);
//                    await _userManager.CreateAsync(userIdentity, user.Password);
//                }
//                context.AddRange(types);
//                context.SaveChanges();
//            }

//            //Ensure we have some status
//            if (!context.Status.Any())
//            {
//                var stati = JsonConvert.DeserializeObject<List<Status>>(File.ReadAllText(@"seed" + Path.DirectorySeparatorChar + "status.json"));
//                context.AddRange(stati);
//                context.SaveChanges();

//            }
//            //Ensure we create initial Threat List
//            if (!context.Threats.Any())
//            {
//                List<Threat> threats = JsonConvert.DeserializeObject<List<Threat>>(File.ReadAllText(@"seed" + Path.DirectorySeparatorChar + "threats.json"));
//                context.Threats.AddRange(threats);
//                context.SaveChanges();
//            }
//        }

//    }

    

//}
