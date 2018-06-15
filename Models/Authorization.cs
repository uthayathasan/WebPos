using System;
using System.Collections.Generic;
namespace  WebPos.Models
{
    public class Authorization
    {
        public string Tag{get;set;}="";
        public string Name{get;set;}="";
        public bool BackOffice{get;set;}=false;
        public bool Admin{get;set;}=false;
        public bool Manager{get;set;}=false;
        public bool Supervisor{get;set;}=false;
        public bool Cashier{get;set;}=false;
        public bool Staff{get;set;}=false;
        public string Type{get;set;}="";
        public string RootTag{get;set;}="";
        public string ChildTag{get;set;}="";
        public int LineNo{get;set;}=0;
        public bool Live{get;set;}=false;
    }
}