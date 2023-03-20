using Microsoft.AspNetCore.Mvc;
using FireSharp.Config;
using FireSharp.Interfaces;
using FireSharp.Response;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using The_Talent_Troupe.Models;
using Microsoft.AspNetCore.Cors;
namespace The_Talent_Troupe.Controllers
{
   [EnableCors("Policy1")]
   [Route("api/RetirementPlanner")]
   [ApiController]
    public class RetirementPlannerController : Controller
    {
        IFirebaseConfig config = new FirebaseConfig
        {
            AuthSecret = "9oKtIlrF0t9714Jt5kuwEE8jFO1zN2ZXVbBuRKSs",
            BasePath= "https://thetalenttroupe-d0f5f.firebaseio.com/"

        };
        IFirebaseClient client;

        [HttpPost("CreateRetirement")]
        public IActionResult CreatePlan (RetirementPlanner retirement)
        {
            
            try{
                client = new FireSharp.FirebaseClient(config);
                var data = retirement;
                PushResponse response = client.Push("RetirementPlanner/", data);
                data.Id= response.Result.name;
        
                SetResponse setResponse = client.Set("RetirementPlanner/"+ data.Id, data);

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
        [HttpGet("GetSpecificRetirement/{Id}")]
        public IActionResult GetSpecificRetirement(String Id)
        {
            client = new FireSharp.FirebaseClient(config);
            FirebaseResponse response = client.Get("RetirementPlanner/"+ Id);
            
            RetirementPlanner data= JsonConvert.DeserializeObject<RetirementPlanner>(response.Body);
            
            return Ok(data);
        }
        //get plans based that belongs to the specific users
        [HttpGet("GetUserRetirements/{userid}")]
        public IActionResult GetUserRetirements(String userid){
           
            client = new FireSharp.FirebaseClient(config);
            FirebaseResponse response= client.Get("RetirementPlanner/");
            var userPlans= response.ResultAs<Dictionary<string, RetirementPlanner>>();
            var filtered = userPlans.Values.Where(plan=> plan.userid == userid);
            return Ok(filtered);
           
        }


       
        }





    }