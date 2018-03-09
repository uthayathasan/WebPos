using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebPos.Models;
namespace WebPos.Controllers
{
    [Route("/api/session")]
    public class SessionValuesController : Controller
    {
        [HttpGet("device")]
        public IActionResult GetDevice() 
        {
            return Ok(HttpContext.Session.GetString("device"));
        }

        [HttpPost("device")]
        public void StoreCart([FromBody] Device device) {
            var jsonData = JsonConvert.SerializeObject(device);
            HttpContext.Session.SetString("device", jsonData);
        }
    }
}