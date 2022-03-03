using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebCoreMvc.Core.DataAccess;
using WebCoreMvc.DataAccess.Abstract;
using WebCoreMvc.Models;

namespace WebCoreMvc.DataAccess.Concrete
{
    public class CategoryRepository:BaseRepository<Category>,ICategoryRepository
    {
    }
}
