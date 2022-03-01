using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebCoreMvc.Models;

namespace WebCoreMvc.DataAccess.Abstract
{
    interface IUserRepository
    {
        List<User> GetAll();
        User GetById(int id);
        bool Add(User user);
        bool Update(User user);
        bool DeleteById(int id);
    }
}
