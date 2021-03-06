using System;
using System.Collections.Generic;
namespace WebPos.Models
{
    public class EposTransaction
    {
        public bool CounterPrint{get;set;}=false;
        public int CustomerId{get;set;}=0;
        public int DeliveryId{get;set;}=0;
        public string Floor{get;set;}="";
        public int Id{get;set;}=0;
        public int InfoItem{get;set;}=0;
        public DateTime? InvoicedDate{get;set;}
        public bool InvoicePrinted{get;set;}=false;
        public string LoyaltyCard{get;set;}="";
        public string MembershipNo{get;set;}="";
        public int OrderNo{get;set;}=0;
        public int OrderType{get;set;}=0;
        public string OrderTypeText{get;set;}="";
        public string Seats{get;set;}="";
        public int SlipNo{get;set;}=0;
        public string StaffId{get;set;}="";
        public string StoreId{get;set;}="";
        public int TakeawayId{get;set;}=0;
        public int TableId{get;set;}=0;
        public string TableName{get;set;}="";
        public string TillId{get;set;}="";
        public DateTime? TransDate{get;set;}
        public int TransType{get;set;}=0;
        public string TransactionText{get;set;}="";
    }
}