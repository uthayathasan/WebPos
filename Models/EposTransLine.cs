using System;
using System.Collections.Generic;
namespace WebPos.Models
{
    public class EposTransLine
    {
        public decimal Amount{get;set;}=0;
        public string Barcode{get;set;}="";
        public bool BarPrint{get;set;}=false;
        public bool BarPrinted{get;set;}=false;
        public DateTime? BarPrintedTime{get;set;}
        public string DepartmentId{get;set;}="";
        public string Description{get;set;}="";
        public decimal DiscountAmount{get;set;}=0;
        public bool Discountable{get;set;}=false;
        public decimal DiscountPercentage{get;set;}=0;
        public int Elno{get;set;}=0;
        public int EntryType{get;set;}=0;
        public string FreeText{get;set;}="";
        public bool IsChange{get;set;}=false;
        public bool IsModifier{get;set;}=false;
        public bool IsRefund{get;set;}=false;
        public string ItemGroup{get;set;}="";
        public string ItemSubGroup{get;set;}="";
        public bool KitchenPrint{get;set;}=false;
        public bool KitchenPrinted{get;set;}=false;
        public DateTime? KitchenPrintedTime{get;set;}
        public int LineNo{get;set;}=0;
        public bool LineStatus{get;set;}=false;
        public int LinkedOfferId{get;set;}=0;
        public string MainItemNo{get;set;}="";
        public bool Mandatory{get;set;}=false;
        public decimal NetAmount{get;set;}=0;
        public string Number{get;set;}="";
        public string OfferID{get;set;}="";
        public decimal OfferQuantity{get;set;}=0;
        public bool OfferTrigger{get;set;}=false;
        public int OrderType{get;set;}=0;
        public int PaymentType{get;set;}=0;
        public decimal Price{get;set;}=0;
        public string PrintGroup{get;set;}="";
        public decimal Quantity{get;set;}=0;
        public bool Scale{get;set;}=false;
        public bool Scanned{get;set;}=false;
        public bool Served{get;set;}=false;
        public bool SplitGroup{get;set;}=false;
        public string StaffId{get;set;}="";
        public string StoreId{get;set;}="";
        public bool TempItem{get;set;}=false;
        public string TillId{get;set;}="";
        public decimal TotalCost{get;set;}=0;
        public DateTime TransDate{get;set;}
        public int TransId{get;set;}=0;
        public decimal UnitCost{get;set;}=0;
        public decimal VatAmount{get;set;}=0;
        public string VatCode{get;set;}="";
        public decimal VatRate{get;set;}=0;

    }
}