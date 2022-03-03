using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebCoreMvc.Core.DataAccess;
using WebCoreMvc.Models;

namespace WebCoreMvc.DataAccess.Abstract
{
    public interface ICategoryRepository:IBaseRepository<Category>
    {
    }
}
