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
        public string ImageUrl{ get; set; }
        public string Name{ get; set; }
        public float Price{ get; set; }
        public string Description { get; set; }

        public Product()
        {
        }

        public Product(int ıd, int categoryId, string ımageUrl, string name, float price, string description)
        {
            Id = ıd;
            CategoryId = categoryId;
            ImageUrl = ımageUrl;
            Name = name;
            Price = price;
            Description = description;
        }
    }
}
