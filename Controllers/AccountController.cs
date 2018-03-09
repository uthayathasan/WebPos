using Microsoft.AspNetCore.Mvc;
using WebPos.Models;
using WebPos.DataAccess;
using System.Collections.Generic;
namespace WebPos.Controllers
{
    public class AccountController:Controller
    {
        private Repository repo;
        public AccountController(Repository _repo)
        {
            repo=_repo;
        }
        [HttpGet("/api/account/login")]
        public IEnumerable<Staff> GetStaffs(string customerId,string storeId)
        {
            return repo.GetStaffDetails(customerId,storeId);
        }
    }
}