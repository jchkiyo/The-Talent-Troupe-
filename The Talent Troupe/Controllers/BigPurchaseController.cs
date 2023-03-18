using Microsoft.AspNetCore.Mvc;
using FireSharp.Config;
using FireSharp.Interfaces;
using FireSharp.Response;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using The_Talent_Troupe.Models;

namespace The_Talent_Troupe.Controllers
{

   [Route("api/BigPurchase")]
   [ApiController]
    public class BigPurchaseController : Controller
    {
        IFirebaseConfig config = new FirebaseConfig
        {
            AuthSecret = "9oKtIlrF0t9714Jt5kuwEE8jFO1zN2ZXVbBuRKSs",
            BasePath= "https://thetalenttroupe-d0f5f.firebaseio.com/"

        };
        IFirebaseClient client;

        [HttpPost("CreatePlan")]
        public IActionResult CreatePlan (BPurchase bigpurchase)
        {
            
            try{
                client = new FireSharp.FirebaseClient(config);
                var data = bigpurchase;
                PushResponse response = client.Push("BigPurchase/", data);
                data.Id= response.Result.name;
        
                SetResponse setResponse = client.Set("BigPurchase/"+ data.Id, data);

                if(setResponse.StatusCode ==System.Net.HttpStatusCode.OK)
                {
                    return Ok("Successfully added");
                }
                else{
                    return BadRequest("An error occured");
                }
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        //get the specific plan
        [HttpGet("GetSpecificPlan/{Id}")]
        public IActionResult GetUserPlan(String Id)
        {
            client = new FireSharp.FirebaseClient(config);
            FirebaseResponse response = client.Get("BigPurchase/"+ Id);
            
            BPurchase data= JsonConvert.DeserializeObject<BPurchase>(response.Body);
            
            return Ok(data);
        }
        //get plans based that belongs to the specific users
        [HttpGet("GetUserPlans/{userid}")]
        public IActionResult GetUserPlans(String userid){
           
            client = new FireSharp.FirebaseClient(config);
            FirebaseResponse response= client.Get("BigPurchase/");
            var userPlans= response.ResultAs<Dictionary<string, BPurchase>>();
            var filtered = userPlans.Values.Where(plan=> plan.userid == userid);
            return Ok(filtered);
           
        }


       
        }





    }

