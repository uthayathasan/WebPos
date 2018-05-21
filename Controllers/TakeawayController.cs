using Microsoft.AspNetCore.Mvc;
using WebPos.Models;
using WebPos.DataAccess;
using System.Collections.Generic;
namespace WebPos.Controllers
{
    [Route("api/takeaways")]
    public class TakeawayController:Controller
    {
        private Repository repo;
        public TakeawayController(Repository _repo)
        {
            repo=_repo;
        }
        [HttpGet]
        public IEnumerable<TakeawayStatus> GetTakeaways(string customerId,string storeId,string tillId)
        {
            List<TakeawayStatus> lm=repo.GetTakeawayStatus(customerId,storeId,tillId);
            if(lm.Count>0){
                return lm;
            }
            else{
                return new List<TakeawayStatus>();
            }
        }
    }
}