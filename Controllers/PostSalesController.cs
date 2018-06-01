using Microsoft.AspNetCore.Mvc;
using WebPos.Models;
using WebPos.DataAccess;
using System.Collections.Generic;
namespace WebPos.Controllers
{
     [Route("api/postSales")]
     public class PostSalesController:Controller
     {
        private Repository repo;
        public PostSalesController(Repository _repo)
        {
            repo=_repo;
        }

        [HttpPost]
        public IActionResult PostTranaction(string customerId,string storeId,string tillId,int slipNo)
        {
            int result=repo.PostSales(customerId,storeId,tillId,slipNo);
            return  Ok(result);
        }
     }
}