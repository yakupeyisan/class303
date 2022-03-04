using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebCoreMvc.Models
{
    public class ProductDto
    {
        public int Id{ get; set; }
        public string CategoryName { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public float Price { get; set; }
        public string Description { get; set; }
    }
}
