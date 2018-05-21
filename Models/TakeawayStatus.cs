using System;
using System.Collections.Generic;
namespace WebPos.Models{
    public class TakeawayStatus
    {
        public int TakeawayId{get;set;}=0;
        public int SlipNo{get;set;}=0;
        public int CustomerId{get;set;}=0;
        public int NoOfItems{get;set;}=0;
        public int NoOfKitchenItems{get;set;}=0;
        public int NoOfNonServedItems{get;set;}=0;
        public decimal Total{get;set;}=0;

        public bool CounterPrint{get;set;}=false;
        public string Colour{get;set;}="blue";
    }
}