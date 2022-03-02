using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebCoreMvc.DataAccess.Abstract;
using WebCoreMvc.Models;

namespace WebCoreMvc.DataAccess.Concrete
{
    public class ProductRepository : IProductRepository
    {
        public List<Product> GetAll()
        {
            using (var context = new SimpleDbContext())
            {
                return context.Set<Product>().ToList();
            }
        }
        public List<Product> GetAllByCategoryId(int categoryId)
        {
            using (var context = new SimpleDbContext())
            {
                return context.Set<Product>().Where(p=>p.CategoryId==categoryId).ToList();
            }
        }
        public Product GetById(int id)
        {
            using (var context = new SimpleDbContext())
            {
                return context.Set<Product>().SingleOrDefault(p=>p.Id==id);
            }
        }
        public bool Add(Product product)
        {
            using (var context = new SimpleDbContext())
            {
                var addedProduct = context.Entry(product);
                addedProduct.State = EntityState.Added;
                context.SaveChanges();
                return true;
            }
        }
        public bool Update(Product product)
        {
            using (var context = new SimpleDbContext())
            {
                var updatedProduct = context.Entry(product);
                updatedProduct.State = EntityState.Modified;
                context.SaveChanges();
                return true;
            }
        }
        public bool DeleteById(int id)
        {
            var product = this.GetById(id);
            using (var context = new SimpleDbContext())
            {
                var deletedProduct = context.Entry(product);
                deletedProduct.State = EntityState.Deleted;
                context.SaveChanges();
                return true;

            }
        }

    }
}
