using Microsoft.AspNetCore.Mvc;
using WebPos.Models;
using WebPos.DataAccess;
using System.Collections.Generic;
namespace WebPos.Controllers{
    [Route("api/vats")]
    public class VatController:Controller
    {
        private Repository repo;
        public VatController(Repository _repo){
            repo=_repo;
        }
        [HttpGet]
        public IEnumerable<Vat> GetVats(string customerId,string storeId)
        {
            #region Get Vats  CustomerId & StoreId
            List<Vat> lm=repo.GetVatsByStoreIdCustomerId(customerId,storeId);
            if(lm.Count>0){
                 return lm;
            }
            else{
                 return new List<Vat>();
            }
            #endregion Get Vats  CustomerId & StoreId
        }
    }
}