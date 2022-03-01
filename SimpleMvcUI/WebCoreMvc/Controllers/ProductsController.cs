using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebCoreMvc.Models;

namespace WebCoreMvc.Controllers
{
    public class ProductsController : Controller
    {
        public IActionResult Index()
        {
            List<Product> products = new List<Product>();
            products.Add(new Product(1, "İkram", 3.4f));
            products.Add(new Product(2, "Biskrem", 6f));
            ViewBag.products = products;
            return View();
        }
    }
}
