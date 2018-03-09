using Microsoft.AspNetCore.Mvc;
using WebPos.Models;
using WebPos.DataAccess;
using System.Collections.Generic;
namespace WebPos.Controllers{
    [Route("api/menuHeaders")]
    public class MenuHeaderController:Controller
    {
        private Repository repo;
        public MenuHeaderController(Repository _repo)
        {
            repo=_repo;
        }
        [HttpGet]
        public IEnumerable<MenuHeader> GetMenuHeaders(string customerId,string storeId)
        {
            #region Get Menu Headers CustomerId & StoreId
            List<MenuHeader> lm=repo.GetMenuHeadersByStoreIdCustomerId(customerId,storeId);
            if(lm.Count>0)
            {
                return lm;
            }
            else
            {
                return new List<MenuHeader>();
            }
            #endregion Get Menu Headers CustomerId & StoreId
        }

        
    }
}