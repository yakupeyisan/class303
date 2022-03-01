using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebCoreMvc.Models
{
    public class Product
    {
        public int Id { get; set; }
        public int CategoryId { get; set; }
        public string Name{ get; set; }
        public float Price{ get; set; }

        public Product()
        {
        }

        public Product(int id, string name, float price)
        {
            Id = id;
            Name = name;
            Price = price;
        }
    }
}
