using System;
using System.Collections.Generic;
namespace WebPos.Models
{
    public class TableStatus
    {
        public bool CounterPrint{get;set;}=false;
        public int CustomerId { get; set; }
        public string Floor{get;set;}="";
        public string Seats { get; set; }="";
        public bool Show { get; set; }=false;
        public int SlipNo { get; set; }=0;
        public int NoOfItems { get; set; }
        public int NoOfKitchenItems { get; set; }
        public int NoOfNonServedItems { get; set; }
        public int TableID { get; set; }=0;
        public string TableName { get; set; }="";
        public decimal Total{get;set;}=0;
        public int x { get; set; }=0;
        public int y { get; set; }=0;
    }
}