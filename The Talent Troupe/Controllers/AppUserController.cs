using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using The_Talent_Troupe.Models;

namespace The_Talent_Troupe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppUserController : Controller
    {
        private AppDbContext _dbContext;
        public AppUserController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpGet("Users")]
        public IActionResult GetAllUsers()
        {
            DbSet<AppUser> dbs = _dbContext.AppUser;
             var appuser = dbs.ToList();
             return Ok(appuser);
       
        }
        [HttpGet("Use")]
        public IActionResult GetAllUsers2()
        {
            return Ok("test");

        }





    }
}
