using System;
using System.Collections.Generic;
namespace  WebPos.Models{
    public class ItemBarcode
    {
        public string ItemNo{get;set;}="";
        public string Barcode{get;set;}="";
        public string Description{get;set;}="";
        public bool MarkedPrice{get;set;}=false;
        public decimal Price{get;set;}=0;
        public decimal TakeawayPrice{get;set;}=0;
        public decimal DeliveryPrice{get;set;}=0;
        public string Size{get;set;}="";
        public string Colour{get;set;}="";
    }
}