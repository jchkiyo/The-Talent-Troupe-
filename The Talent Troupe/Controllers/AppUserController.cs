using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using The_Talent_Troupe.Models;

namespace The_Talent_Troupe.Controllers
{

    [Route("api/AppUser")]
    [ApiController]
    public class AppUserController : Controller
    {
        private const string NAME_COL = "Name";
        private const string AUTHSCHEME = "UserSecurity";
        private const string LOGIN_SQL =
        @"SELECT * FROM AppUser
           WHERE Id = '{0}' AND Password = HASHBYTES('SHA1', '{1}')";

        private const string LASTLOGIN_SQL =
           @"UPDATE AppUser SET LastLogin=GETDATE() WHERE Id='{0}'";
        String message="";
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

        [HttpPost("Login")]
        public IActionResult Login(AppUser user)
        {
            // if (!AuthenticateUser(user.Id, user.Password,
            //                       out ClaimsPrincipal principal))
            // {
            //     message="Incorrect Username or Password";
            //     return BadRequest(message);
            
            // }
            // else
            // {
            //     HttpContext.SignInAsync(
            //        CookieAuthenticationDefaults.AuthenticationScheme,
            //        principal,
            //    new AuthenticationProperties
            //    {
            //        IsPersistent = true
            //    });

            //     // Update the Last Login Timestamp of the User
            //     int num_affected = DBUtl.ExecSQL(LASTLOGIN_SQL, user.Id);

            //     if (num_affected!=0)
            //     {
            //         message = "success";
            //         return Ok(message);
            //     }
            //     return Ok(1);

               
            // }
            return Ok(1);
        }

        private bool AuthenticateUser(string uid, string pw,
                                      out ClaimsPrincipal principal)
        {
            principal = null;

            DataTable ds = DBUtl.GetTable(LOGIN_SQL, uid, pw);
            if (ds.Rows.Count == 1)
            {
                principal =
                   new ClaimsPrincipal(
                      new ClaimsIdentity(
                         new Claim[] {
                        new Claim(ClaimTypes.NameIdentifier, uid),
                        new Claim(ClaimTypes.Name, ds.Rows[0][NAME_COL].ToString()),
                       
                         },
                         CookieAuthenticationDefaults.AuthenticationScheme));
                return true;
            }
            return false;
        }






    }
}
