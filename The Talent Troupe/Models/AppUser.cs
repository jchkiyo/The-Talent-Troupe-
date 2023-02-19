using System;
using System.Collections.Generic;

namespace The_Talent_Troupe.Models;

public partial class AppUser
{
    public string Id { get; set; }

    public string Name { get; set; }

    public byte[] Password { get; set; }
}
