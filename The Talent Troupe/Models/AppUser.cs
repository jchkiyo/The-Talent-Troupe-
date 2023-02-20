using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace The_Talent_Troupe.Models;

public partial class AppUser
{
    public string Id { get; set; }

    public string Name { get; set; }

    [DataType(DataType.Password)]
    public string Password { get; set; }
}
