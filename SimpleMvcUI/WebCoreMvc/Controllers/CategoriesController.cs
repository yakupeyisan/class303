using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebCoreMvc.DataAccess.Abstract;
using WebCoreMvc.DataAccess.Concrete;
using WebCoreMvc.Models;

namespace WebCoreMvc.Controllers
{
    public class CategoriesController : Controller
    {
        private ICategoryRepository _categoryRepository;

        public CategoriesController()
        {
            _categoryRepository = new CategoryRepository();
        }

        public IActionResult Index()
        {
            ViewBag.categories = this._categoryRepository.GetAll();
            return View();
        }
        public IActionResult Add(string message = null)
        {
            ViewBag.message = message;
            return View();
        }
        public IActionResult Update(int id, string message = null)
        {
            var category = this._categoryRepository.GetById(id);
            if (category == null)
            {
                return RedirectToAction("Index");
            }
            ViewBag.message = message;
            ViewBag.category = category;
            return View();
        }
        [HttpPost]
        public IActionResult Save(Category category)
        {
            string route = (category.Id == 0) ? "Add" : "Update";
            if (category.Name == null)
            {
                return BadRequest(new ErrorResult(category.Id, "Please enter Name"));
            }
            if (category.Id == 0)
            {
                this._categoryRepository.Add(category);
            }
            else
            {
                this._categoryRepository.Update(category);
            }
            return Ok(category);
        }
        public IActionResult Delete(int id)
        {
            this._categoryRepository.DeleteById(id);
            return RedirectToAction("Index");
        }
    }
}
