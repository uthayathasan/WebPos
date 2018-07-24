using Microsoft.AspNetCore.Mvc;
using WebPos.Models;
using WebPos.DataAccess;
using System.Collections.Generic;
namespace WebPos.Controllers
{
    [Route("api/voidSales")]
    public class VoidSalesController:Controller
    {
        private Repository repo;
        public VoidSalesController(Repository _repo)
        {
            repo=_repo;
        }

        [HttpPost]
        public IActionResult VoidTranaction(string customerId,string storeId,string tillId,int slipNo)
        {
            int result=repo.VoidAll(customerId,storeId,tillId,slipNo);
            return  Ok(result);
        }
    }
}