using Microsoft.AspNetCore.Mvc;
using WebPos.Models;
using WebPos.DataAccess;
using System.Collections.Generic;
namespace WebPos.Controllers
{
    [Route("api/eposTransactions")]
    public class EposTransactionController:Controller
    {
        private Repository repo;
        public EposTransactionController(Repository _repo)
        {
            repo=_repo;
        }
        [HttpGet("{id}")]
        public EposTransaction GetTransactionById(int id,string customerId,string storeId,string tillId)
        {
            #region Get Transaction CustomerId & StoreId & TillId
            List<EposTransaction> lm=repo.GetTransactionBySlipNo(customerId,storeId,tillId,id);
            if(lm.Count>0)
            {
                return lm[0];
            }
            else
            {
                return new EposTransaction();
            }
            #endregion Get Transaction CustomerId & StoreId & TillId
        }
        [HttpPost]
        public IActionResult InsertTransaction([FromBody] EposTransaction m,string customerId,string storeId,string tillId)
        {
            if(ModelState.IsValid){
                int result = repo.InsertTransaction(m,customerId,storeId,tillId);
                return Ok(result);
            }
            else{
                return BadRequest(ModelState);
            }
        }
    }
}