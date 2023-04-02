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
        public string planName { get;set; }
        public int retirementage { get; set; }
        public int yearsOfRetirement { get; set; }
        public int AmountToSave { get; set; }
        public int AmountToSaveMonth { get; set; }
        public int percentageSave { get; set; }
        

        
    }
}