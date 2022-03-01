using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebCoreMvc.DataAccess.Abstract;
using WebCoreMvc.Models;
using Microsoft.EntityFrameworkCore;
namespace WebCoreMvc.DataAccess.Concrete
{
    public class UserRepository : IUserRepository
    {
        public List<User> GetAll()
        {
            using (var context = new SimpleDbContext())
            {
                return context.Set<User>().ToList();

            }
        }

        public User GetById(int id)
        {
            using (var context = new SimpleDbContext())
            {
                return context.Set<User>().SingleOrDefault(u=>u.Id== id);
                /*
                 * Select * From Users u
                 * where u.Id=?
                 */
            }
        }
        public bool Add(User user)
        {
            using (var context = new SimpleDbContext())
            {
                var addedUser= context.Entry(user);
                addedUser.State = EntityState.Added;
                context.SaveChanges();
                return true;
            }
        }

        public bool Update(User user)
        {
            using (var context = new SimpleDbContext())
            {
                var updatedUser = context.Entry(user);
                updatedUser.State = EntityState.Modified;
                context.SaveChanges();
                return true;
            }
        }
        public bool DeleteById(int id)
        {
            var user=this.GetById(id);
            using (var context = new SimpleDbContext())
            {
                var deletedUser = context.Entry(user);
                deletedUser.State = EntityState.Deleted;
                context.SaveChanges();
                return true;
            }

        }
    }
}
