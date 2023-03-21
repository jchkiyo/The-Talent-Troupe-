using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace The_Talent_Troupe.Models
{
    public partial class RetirementPlanner
    {
        public string? Id { get; set; } //id provided by firebase
        public string userid { get;set; }
        public int age { get; set; }
        public int retirementage { get; set; }
        public int yearsofincome { get; set; }
        public double savepermonth { get; set; }
        public double desiredretirement { get; set; }
        

        
    }
}