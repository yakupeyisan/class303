using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebCoreMvc.DataAccess.Abstract;
using WebCoreMvc.DataAccess.Concrete;
using WebCoreMvc.Models;

namespace WebCoreMvc.Controllers
{
    public class ProductsController : Controller
    {
        private IProductRepository _productRepository;
        private ICategoryRepository _categoryRepository;

        public ProductsController()
        {
            _productRepository = new ProductRepository();
            _categoryRepository = new CategoryRepository();
        }

        public IActionResult Index()
        {
            ViewBag.products = this._productRepository.GetAllWithCategory();
            return View();
        }
        public IActionResult Add(string message)
        {
            ViewBag.categories = this._categoryRepository.GetAll();
            ViewBag.message = message;
            return View();
        }
        public IActionResult Update(int id, string message)
        {
            var product = this._productRepository.GetById(id);
            if (product == null)
            {
                RedirectToAction("Index");
            }
            ViewBag.product = product;
            ViewBag.message = message;
            return View();
        }

        public IActionResult Save(Product product)
        {
            string route = (product.Id == 0) ? "Add" : "Update";
            if (product.CategoryId == 0)
            {
                return RedirectToAction(route, new ErrorResult(product.Id, "Please select CategoryId"));
            }
            if (product.ImageUrl == null)
            {
                return RedirectToAction(route, new ErrorResult(product.Id, "Please enter ImageUrl"));
            }
            if (product.Name == null)
            {
                return RedirectToAction(route, new ErrorResult(product.Id, "Please enter Name"));
            }
            if (product.Price == 0)
            {
                return RedirectToAction(route, new ErrorResult(product.Id, "Please enter Price"));
            }
            if (product.Description == null)
            {
                return RedirectToAction(route, new ErrorResult(product.Id, "Please enter Description"));
            }
            if (product.Id == 0)
            {
                this._productRepository.Add(product);
            }
            else
            {
                this._productRepository.Update(product);
            }
            return RedirectToAction("Index");
        }
        public IActionResult Delete(int id)
        {
            this._productRepository.DeleteById(id);
            return RedirectToAction("Index");
        }
    }
}
