using Microsoft.AspNetCore.Mvc;
using WebPos.Models;
using WebPos.DataAccess;
using System.Collections.Generic;
using Microsoft.AspNetCore.JsonPatch;

namespace WebPos.Controllers
{
    [Route("api/eposTransLines")]
    public class EposTransLineController:Controller
    {
        private Repository repo;
        public EposTransLineController(Repository _repo)
        {
            repo=_repo;
        }
        [HttpGet("{id}")]
        public IEnumerable<EposTransLine> GetTransLinesByTransId(int id,string customerId,string storeId,string tillId)
        {
            List<EposTransLine> lm=repo.GetTransLinesByTransId(customerId,storeId,tillId,id);
            if(lm.Count>0)
            {
                return lm;
            }
            else
            {
                return new List<EposTransLine>();
            }
        }
        [HttpPost]
        public IActionResult InsertTransLine([FromBody] EposTransLine m,string customerId,string storeId,string tillId)
        {
            if(ModelState.IsValid){
                int result = repo.InsertTransLine(m,customerId,storeId,tillId);
                return Ok(result);
            }
            else{
                return BadRequest(ModelState);
            }
        }
        [HttpPatch("{id}")]
        public IActionResult UpdateTransLine(int id,string customerId,string storeId,string tillId,[FromBody]JsonPatchDocument<EposTransLine> patch)
        {
            List<EposTransLine> lm=repo.GetTransLinesByElNo(customerId,storeId,tillId,id);
            EposTransLine m=lm[0];
            patch.ApplyTo(m,ModelState);
            if(ModelState.IsValid && TryValidateModel(m))
            {
                int result =repo.UpdateTransLineByELNo(m,customerId,storeId,tillId);
                return Ok(result);
            }else{
                return BadRequest(ModelState);
            }
        }
    }
}