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

    }
}
