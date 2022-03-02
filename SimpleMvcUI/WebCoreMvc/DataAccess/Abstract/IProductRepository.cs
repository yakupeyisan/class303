using System.Collections.Generic;
using WebCoreMvc.Models;

namespace WebCoreMvc.DataAccess.Abstract
{
    interface IProductRepository
    {
        List<Product> GetAll();
        List<Product> GetAllByCategoryId(int categoryId);
        Product GetById(int id);
        bool Add(Product product);
        bool Update(Product product);
        bool DeleteById(int id);
    }
}
