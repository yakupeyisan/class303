using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebCoreMvc.Core.Model;
using WebCoreMvc.Models;

namespace WebCoreMvc.Core.DataAccess
{
    public abstract class BaseRepository<T>
        where T : class, IModel,new()//
    {
        public virtual List<T> GetAll()
        {
            using (var context = new SimpleDbContext())
            {
                return context.Set<T>().ToList();

            }
        }

        public virtual T GetById(int id)
        {
            using (var context = new SimpleDbContext())
            {
                return context.Set<T>().SingleOrDefault(u => u.Id == id);
            }
        }
        public virtual bool Add(T model)
        {
            using (var context = new SimpleDbContext())
            {
                var addedModel = context.Entry(model);
                addedModel.State = EntityState.Added;
                context.SaveChanges();
                return true;
            }
        }

        public virtual bool Update(T model)
        {
            using (var context = new SimpleDbContext())
            {
                var updatedModel = context.Entry(model);
                updatedModel.State = EntityState.Modified;
                context.SaveChanges();
                return true;
            }
        }
        public virtual bool DeleteById(int id)
        {
            var model = this.GetById(id);
            using (var context = new SimpleDbContext())
            {
                var deletedModel = context.Entry(model);
                deletedModel.State = EntityState.Deleted;
                context.SaveChanges();
                return true;
            }

        }
    }
}
