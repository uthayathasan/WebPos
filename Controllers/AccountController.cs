using Microsoft.AspNetCore.Mvc;
using WebPos.Models;
using WebPos.DataAccess;
using System.Collections.Generic;
namespace WebPos.Controllers
{
    [Route("/api/account/login")]
    public class AccountController:Controller
    {
        private Repository repo;
        public AccountController(Repository _repo)
        {
            repo=_repo;
        }
        [HttpGet]
        public IEnumerable<Staff> GetStaffs(string customerId,string storeId)
        {
            return repo.GetStaffDetails(customerId,storeId);
        }
    }
}