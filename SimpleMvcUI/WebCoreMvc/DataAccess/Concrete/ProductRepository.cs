using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebCoreMvc.Core.DataAccess;
using WebCoreMvc.DataAccess.Abstract;
using WebCoreMvc.Models;

namespace WebCoreMvc.DataAccess.Concrete
{
    public class ProductRepository : BaseRepository<Product>, IProductRepository
    {
        public List<Product> GetAllByCategoryId(int categoryId)
        {
            using (var context = new SimpleDbContext())
            {
                return context.Set<Product>().Where(p => p.CategoryId == categoryId).ToList();
            }
        }
        public List<ProductDto> GetAllWithCategory()
        {
            using (var context = new SimpleDbContext())
            {
                var result = from p in context.Products
                             join c in context.Categories on p.CategoryId equals c.Id
                            select new ProductDto() { 
                                 Id=p.Id,
                                 CategoryName=c.Name,
                                 Name=p.Name,
                                ImageUrl =p.ImageUrl,
                                 Price=p.Price,
                                 Description=p.Description
                             };
                return result.ToList();
            }
        }

    }
}
