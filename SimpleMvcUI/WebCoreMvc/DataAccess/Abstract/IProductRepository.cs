using System.Collections.Generic;
using WebCoreMvc.Core.DataAccess;
using WebCoreMvc.Models;

namespace WebCoreMvc.DataAccess.Abstract
{
    interface IProductRepository: IBaseRepository<Product>
    {
        List<Product> GetAllByCategoryId(int categoryId);
        List<ProductDto> GetAllWithCategory();
    }
}
