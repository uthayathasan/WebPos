using System;
using System.Collections.Generic;
namespace WebPos.Models
{
    public class PostedSalesLine
    {
        public decimal Amount{get;set;}=0;
        public bool BarPrint{get;set;}=false;
        public bool BarPrinted{get;set;}=false;
        public string BarPrintedTime{get;set;}=ConstValues.MinDate;
        public string Barcode{get;set;}="";
        public int CustomerID{get;set;}=0;
        public int DayofYear{get;set;}=0;
        public string DepartmentId{get;set;}="";
        public string Description{get;set;}="";
        public decimal DiscountAmount{get;set;}=0;
        public decimal DiscountPercentage{get;set;}=0;
        public bool Discountable{get;set;}=false;
        public int EntryType{get;set;}=0;
        public string FreeText{get;set;}="";
        public bool IsChange{get;set;}=false;
        public bool IsCharge{get;set;}=false;
        public bool IsModifier{get;set;}=false;
        public bool IsRefund{get;set;}=false;

        public bool Generated{get;set;}=false;
        public int HourOfDay{get;set;}=0;
        public string ItemGroup{get;set;}="";
        public string ItemSubGroup{get;set;}="";
        public bool KitchenPrint{get;set;}=false;
        public bool KitchenPrinted{get;set;}=false;
        public string KitchenPrintedTime{get;set;}=ConstValues.MinDate;
        public int LineNo{get;set;}=0;
        public bool LineStatus{get;set;}=false;
        public int LinkedOfferId{get;set;}=0;
        public string loyaltycard{get;set;}="";
        public string MainItemNo{get;set;}="";
        public bool Mandatory{get;set;}=false;
        public string MembershipNo{get;set;}="";
        public int MonthOfYear{get;set;}=0;
        public decimal NetAmount{get;set;}=0;
        public string Number{get;set;}="";
        public string OfferId{get;set;}="";
        public decimal OfferQuantity{get;set;}=0;
        public bool OfferTrigger{get;set;}=false;
        public string OrderText{get;set;}="";
        public int OrderType{get;set;}=0;
        public int PaymentType{get;set;}=0;
        public decimal Price{get;set;}=0;
        public string PrintGroup{get;set;}="";
        public decimal Quantity{get;set;}=0;
        public int QuarterOfYear{get;set;}=0;
        public string ShiftReportId{get;set;}="";
        public bool Scale{get;set;}=false;
        public bool Scanned{get;set;}=false;
        public bool Served{get;set;}=false;
        public bool SplitGroup{get;set;}=false;
        public string StaffId{get;set;}="";
        public string StoreId{get;set;}="";
        public bool TempItem{get;set;}=false;
        public string TillId{get;set;}="";
        public decimal TotalCost{get;set;}=0;
        public string TransDate{get;set;}=ConstValues.MinDate;
        public int TransId{get;set;}=0;
        public decimal UnitCost{get;set;}=0;
        public decimal VatAmount{get;set;}=0;
        public string VatCode{get;set;}="";
        public int WeekOfYear{get;set;}=0;
        public int YearOfYear{get;set;}=0;
        public string ZReportID{get;set;}="";
    }
}