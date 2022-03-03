using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebCoreMvc.Core.DataAccess
{
    public interface IBaseRepository<T>
    {
        List<T> GetAll();
        T GetById(int id);
        bool Add(T model);
        bool Update(T model);
        bool DeleteById(int id);
    }
}
