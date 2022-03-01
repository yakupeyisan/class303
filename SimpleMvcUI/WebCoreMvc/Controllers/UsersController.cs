using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebCoreMvc.Models;

namespace WebCoreMvc.Controllers
{
    public class UsersController : Controller
    {
        public IActionResult Index()
        {
            List<User> users = new List<User>();
            users.Add(new User(1, "Büşra", "Sarıkaya"));
            users.Add(new User(2, "Mikdat", "Gürses"));
            ViewBag.users = users;
            return View();
        }
    }
}
