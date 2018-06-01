using System;
using System.Collections.Generic;
namespace WebPos.Models
{
    public class PostedTransaction
    {
        public bool CounterPrint{get;set;}=false;
        public int CustomerId{get;set;}=0;
        public int DeliveryId{get;set;}=0;
        public string Floor{get;set;}="";
        public int Id{get;set;}=0;
        public int InfoItem{get;set;}=0;
        public string InvoicedDate{get;set;}=ConstValues.MinDate;
        public bool InvoicePrinted{get;set;}=false;
        public string LoyaltyCard{get;set;}="";
        public string MembershipNo{get;set;}="";
        public int OrderNo{get;set;}=0;
        public int OrderType{get;set;}=0;
        public string OrderTypeText{get;set;}="";
        public bool Printed{get;set;}=false;
        public string ShiftReportID{get;set;}="";
        public decimal SalesAmount{get;set;}=0;
        public string SalesType{get;set;}="";
        public string Seats{get;set;}="";
        public int SlipNo{get;set;}=0;
        public string StaffId{get;set;}="";
        public string StoreId{get;set;}="";
        public int TableId{get;set;}=0;
        public string TableName{get;set;}="";
        public int TakeawayId{get;set;}=0;
        public string TillId{get;set;}="";
        public string TransDate{get;set;}=ConstValues.MinDate;
        public int TransType{get;set;}=0;
        public string TransactionText{get;set;}="";
        public string ZReportID{get;set;}="";
    }
}