using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace WebPos.Models{
     public class Staff
     {
        [Required]
        public string UserId{get;set;}
        [Required]
        public string Password{get;set;}
        public string Name{get;set;}="";
        public string Address1{get;set;}="";
        public string Address2{get;set;}="";
        public string City{get;set;}="";
        public string PostCode{get;set;}="";
        public string Telephone{get;set;}="";
        public string Email{get;set;}="";
        public string Role{get;set;}="";
       
        
     }
}