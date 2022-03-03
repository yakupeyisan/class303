using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebCoreMvc.Core.Model;

namespace WebCoreMvc.Models
{
    public class Category:IModel
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public Category()
        {
        }
        public Category(int id,string name)
        {
            Id = id;
            Name = name;
        }

    }
}
