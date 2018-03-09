using System;
using System.Collections.Generic;
namespace  WebPos.Models
{
    public class FunctionKey
    {
        public int Index{get;set;}=0;
        public string Mod{get;set;}="";
        public string Description{get;set;}="";
        public string Job{get;set;}="";
        public string Colour{get;set;}="-10739748";
        public string HtmlColour{get;set;}="#0A5B1F";
        public string BootstrapButton{get;set;}="btn-success";
        public bool Visible{get;set;}=true;
    }
}