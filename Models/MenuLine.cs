using System;
using System.Collections.Generic;
namespace WebPos.Models
{
    public class MenuLine
    {
        public string BootstrapButton{get;set;}="btn-info";
        public string Colour{get;set;}="-16744193";
        public string Description{get;set;}="";
        public string HtmlColour{get;set;}="#3385ff";
        public string ImagePath{get;set;}="";
        public bool IsImage{get;set;}=false;
        public int KeyCommand{get;set;}=0;
        public int KeyId{get;set;}=0;
        public string KeyValue{get;set;}="";
        public string MenuId{get;set;}="";

    }
}