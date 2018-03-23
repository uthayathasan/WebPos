using Microsoft.AspNetCore.Mvc;
using WebPos.Models;
using WebPos.DataAccess;
using System.Collections.Generic;
namespace WebPos.Controllers
{
    [Route("api/tables")]
    public class TablesController:Controller
    {
        private Repository repo;
        public TablesController(Repository _repo)
        {
            repo=_repo;
        }
        [HttpGet]
        public IEnumerable<TableStatus> GetTables(string customerId,string storeId,string tillId)
        {
             List<TableStatus> lm=repo.GetTableStatus(customerId,storeId,tillId);
             if(lm.Count>0)
             {
                 return lm;
             }
             else
             {
                 return new List<TableStatus>();
             }
        }

    }
}