using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace The_Talent_Troupe.Models
{
    public partial class BPurchase
    {
        public string? Id { get; set; } //id provided by firebase
        public string userid { get;set; }
        public string planName { get; set; }
        public double amountToSave { get; set; }
        public double monthlyContribution { get; set; }
        public DateOnly dateOfCreation { get; set; }
        public string comments { get; set; }
        public string timeToSave { get; set; }
    }
}