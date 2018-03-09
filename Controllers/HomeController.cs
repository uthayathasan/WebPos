using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebPos.DataAccess;
using WebPos.Models;

namespace WebPos.Controllers
{
    public class HomeController : Controller
    {
        private Repository repo;
        public HomeController(Repository _repo)
        {
            repo=_repo;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
