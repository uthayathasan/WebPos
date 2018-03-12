using System;
using System.Collections.Generic;
namespace  WebPos.Models{
    public class Item
    {
        #region 1-10
        public bool BarPrint{get;set;}=false;
        public string Barcode{get;set;}="";
        public bool Blocked{get;set;}=false;
        public decimal DeliveryPrice{get;set;}=0;
        public string Department{get;set;}="";
        public string Description{get;set;}="";
        public bool DiscountAllowed{get;set;}=false;
        public decimal Inventory{get;set;}=0;
        public bool IsSubItem{get;set;}=false;
        public string ItemGroup{get;set;}="";
        #endregion 1-10
        #region 11-20
        public string ItemNo{get;set;}="";
        public string ItemSubGroup{get;set;}="";
        public bool KitchenPrint{get;set;}=false;
        public string LastModified{get;set;}=ConstValues.MinDate;
        public string LastSalesDate{get;set;}=ConstValues.MinDate;
        public bool Maintain{get;set;}=false;
        public decimal Margin{get;set;}=0;
        public string OuterEAN{get;set;}="";
        public decimal PackCost{get;set;}=0;
        public string PackDescription{get;set;}="";
        #endregion 11-20
        #region 21-30
        public decimal PackQuantity{get;set;}=1;
        public string PackUnitOfMeasure{get;set;}="";
        public decimal PeakPrice{get;set;}=0;
        public decimal Price{get;set;}=0;
        public bool PriceEntry{get;set;}=false;
        public string PrintGroup{get;set;}="";
        public bool QuantityEntry{get;set;}=false;
        public decimal ReOrderPoint{get;set;}=0;
        public decimal ReOrderQuantity{get;set;}
        public decimal RRP{get;set;}=0;
        #endregion 21-30
        #region 31-40
        public bool Scale{get;set;}=false;
        public bool SubMenuAvailable{get;set;}=false;
        public decimal TakeawayPrice{get;set;}=0;
        public decimal TotalVolumeOrWeight{get;set;}=0;
        public decimal UnitCost{get;set;}=0;
        public decimal UnitVolumeOrWeight{get;set;}=0;
        public string VatCode{get;set;}="";
        public string VendorItemNo{get;set;}="";
        public string VendorNo{get;set;}="";
        public bool WetStock{get;set;}=false;
        #endregion 31-40
    }
}