using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebCoreMvc.DataAccess.Abstract;
using WebCoreMvc.Models;
using Microsoft.EntityFrameworkCore;
using WebCoreMvc.Core.DataAccess;

namespace WebCoreMvc.DataAccess.Concrete
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
       
    }
}
