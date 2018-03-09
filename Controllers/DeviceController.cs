using Microsoft.AspNetCore.Mvc;
using WebPos.Models;
using WebPos.DataAccess;
using System.Collections.Generic;
namespace WebPos.Controllers
{
     [Route("api/devices")]
    public class DeviceController:Controller
    {
        private Repository repo;
        public DeviceController(Repository _repo)
        {
            repo=_repo;
        }
        [HttpGet("{id}")]
        public Device GetDeviceById(string id)
        {
            List<Device> lm=repo.GetDeviceDetails(id);
            if(lm.Count>0)
            {
                return lm[0];
            }
            else
            {
                return new Device();
            }
        }
    }
}