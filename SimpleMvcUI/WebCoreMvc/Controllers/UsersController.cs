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
            ViewBag.users = this._userRepository.GetAll();
            return View();
        }
        public IActionResult Add(string message=null)
        {
            ViewBag.message = message;
            return View();
        }
        public IActionResult Update(int id,string message=null)
        {
            var user=this._userRepository.GetById(id);
            if (user == null)
            {
                return RedirectToAction("Index");
            }
            ViewBag.message = message;
            ViewBag.user = user;
            return View();
        }
        public IActionResult Save(User user)
        {
            string route = (user.Id == 0) ? "Add" : "Update";
            if (user.FirstName == null)
            {
                return RedirectToAction(route,new ErrorResult(user.Id,"Please enter FirstName"));
            }
            if (user.LastName == null)
            {
                return RedirectToAction(route, new ErrorResult(user.Id, "Please enter LastName"));
            }
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
