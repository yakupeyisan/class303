using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebCoreMvc.DataAccess.Abstract;
using WebCoreMvc.DataAccess.Concrete;

namespace WebCoreMvc.Controllers
{
    public class CategoryController : Controller
    {
        private ICategoryRepository _categoryRepository;

        public CategoryController()
        {
            _categoryRepository = new CategoryRepository();
        }

        public IActionResult Index()
        {
            ViewBag.categories = this._categoryRepository.GetAll();
            return View();
        }
    }
}
