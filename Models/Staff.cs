using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace WebPos.Models{
     public class Staff
     {
        public string Name{get;set;}="";

        [Required]
        public string UserId{get;set;}
        [Required]
        public string Password{get;set;}
     }
}