using Microsoft.AspNetCore.Mvc;
using WebPos.Models;
using WebPos.DataAccess;
using System.Collections.Generic;
namespace WebPos.Controllers{
    [Route("api/menuLines")]
    public class MenuLineController:Controller
    {
        private Repository repo;
        public MenuLineController(Repository _repo)
        {
            repo=_repo;
        }
        [HttpGet("{id}")]
        public IEnumerable<MenuLine> GetMenuLines(string id,string customerId,string storeId)
        {
            #region Get Menu Lines CustomerId & StoreId
            List<MenuLine> lm=repo.GetMenuLinesByMenuIdStoreIdCustomerId(customerId,storeId,id);
            if(lm.Count>0)
            {
                return lm;
            }
            else
            {
                return new List<MenuLine>();
            }
            #endregion Get Menu Lines CustomerId & StoreId
        }
    }
}