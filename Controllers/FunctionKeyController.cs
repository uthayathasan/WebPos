using Microsoft.AspNetCore.Mvc;
using WebPos.Models;
using WebPos.DataAccess;
using System.Collections.Generic;
namespace WebPos.Controllers{
    [Route("api/functionKeys")]
    public class FunctionKeyController:Controller
    {
        private Repository repo;
        public FunctionKeyController(Repository _repo)
        {
            repo=_repo;
        }
         [HttpGet]
        public IEnumerable<FunctionKey> GetFunctionKeys(string customerId,string storeId)
        {
            #region Get Function Keys CustomerId & StoreId
            List<FunctionKey> lm=repo.GetFunctionKeysByStoreIdCustomerId(customerId,storeId);
            if(lm.Count>0)
            {
                return lm;
            }
            else
            {
                return new List<FunctionKey>();
            }
            #endregion Get Function Keys CustomerId & StoreId
        }
    }
}