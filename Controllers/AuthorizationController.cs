using Microsoft.AspNetCore.Mvc;
using WebPos.Models;
using WebPos.DataAccess;
using System.Collections.Generic;
namespace WebPos.Controllers
{
    [Route("/api/authorizations")]
    public class AuthorizationController:Controller
    {
        private Repository repo;
        public AuthorizationController(Repository _repo)
        {
            repo=_repo;
        }
        [HttpGet]
        public IEnumerable<Authorization> GetAuthorization(string customerId,string storeId)
        {
            return repo.GetAuthorizations(customerId,storeId);
        }

    }
}