using Microsoft.AspNetCore.Mvc;
using WebPos.Models;
using WebPos.DataAccess;
using System.Collections.Generic;
namespace WebPos.Controllers
{
    [Route("api/items")]
    public class ItemController:Controller
    {
        private Repository repo;
        public ItemController(Repository _repo)
        {
            repo=_repo;
        }
        [HttpGet("{id}")]
        public Item GetItem(string id,string customerId,string storeId)
        {
            #region Get Item CustomerId & StoreId
            List<Item>lm=repo.GetItemByItemNoStoreIdCustomerId(customerId,storeId,id);
            if(lm.Count>0)
            {
                return lm[0];
            }
            else
            {
                Item m=new Item();
                m.ItemNo="Not Found";
                return m;
            }
            #endregion Get Item CustomerId & StoreId
        }
    }
}