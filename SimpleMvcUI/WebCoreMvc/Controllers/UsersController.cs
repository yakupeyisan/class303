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
    public class UsersController : Controller
    {
        private IUserRepository _userRepository;
        public UsersController()
        {
            _userRepository = new UserRepository();
        }
        public IActionResult Index()
        {
            ViewBag.users = _userRepository.GetAll();
            return View();
        }
        public IActionResult Add()
        {
            return View();
        }
        public IActionResult Update(int id)
        {
            var user=this._userRepository.GetById(id);
            ViewBag.user = user;
            return View();
        }
        public IActionResult Save(User user)
        {
            if (user.Id == 0)
            {
                this._userRepository.Add(user);
            }
            else
            {
                this._userRepository.Update(user);
            }
            return RedirectToAction("Index");
        }
        public IActionResult Delete(int id)
        {
            this._userRepository.DeleteById(id);
            return RedirectToAction("Index");
        }
    }
}
