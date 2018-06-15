using System;
using System.Collections.Generic;
using WebPos;
using WebPos.Models;

namespace WebPos.DataAccess
{
    public  class Repository
    {
        private string ConnectionString="";
        public Repository()
        {
            ConnectionString=Startup.ConnectionString;
        }
        #region Authorization
        public List<Authorization> GetAuthorizations(string CustomerId,string StoreId)
        {
            AuthorizationDA authorizationDa =new AuthorizationDA();
            return authorizationDa.GetAuthorizations(ConnectionString,CustomerId,StoreId);
        }
        #endregion Authorization
        #region Item
        public List<Item> GetItemByItemNoOrBarcodeStoreIdCustomerId(string CustomerId,string StoreId,string id)
        {
            ItemDA itemDa =new ItemDA();
            List<ItemBarcode> lb=itemDa.GetitemBarcodeByBarcodeStoreIdCustomerId(ConnectionString,CustomerId,StoreId,id);
            if(lb.Count>0){
                string ItemNo=lb[0].ItemNo;
                List<Item> li=itemDa.GetItemByItemNoStoreIdCustomerId(ConnectionString,CustomerId,StoreId,ItemNo);
                if(li.Count>0){
                    if(lb[0].Price>0){
                        li[0].Price=lb[0].Price;
                    }
                    if(lb[0].TakeawayPrice>0){
                        li[0].TakeawayPrice=lb[0].TakeawayPrice;
                    }
                    if(lb[0].DeliveryPrice>0){
                        li[0].DeliveryPrice=lb[0].DeliveryPrice;
                    }
                    if(!String.IsNullOrEmpty(lb[0].Description.Trim())){
                        li[0].Description=lb[0].Description;
                    }
                }
                return li;
            }
            else{
                return itemDa.GetItemByItemNoStoreIdCustomerId(ConnectionString,CustomerId,StoreId,id);
            }
        }
        #endregion Item
        #region Vat
        public List<Vat> GetVatsByStoreIdCustomerId(string CustomerId,string StoreId)
        {
            VatDA vatDa=new VatDA();
            return vatDa.GetVatsByStoreIdCustomerId(ConnectionString,CustomerId,StoreId);
        }
        #endregion Vat
        #region Menu
        public List<MenuHeader> GetMenuHeadersByStoreIdCustomerId(string CustomerId,string StoreId)
        {
            MenuHeaderDA menuHeaderDa=new MenuHeaderDA();
            return menuHeaderDa.GetMenuHeadersByStoreIdCustomerId(ConnectionString,CustomerId,StoreId);
        }

        public List<MenuLine> GetMenuLinesByMenuIdStoreIdCustomerId(string CustomerId,string StoreId,string MenuId)
        {
            MenuLineDA menuLineDa=new MenuLineDA();
            return menuLineDa.GetMenuLinesByStoreIdCustomerId(ConnectionString,CustomerId,StoreId,MenuId);
        }
        #endregion Menu
        #region FunctionKeys
        public List<FunctionKey> GetFunctionKeysByStoreIdCustomerId(string CustomerId,string StoreId)
        {
            FunctionKeyDA functionKeyDa= new FunctionKeyDA();
            return functionKeyDa.GetFunctionKeys(ConnectionString,CustomerId,StoreId);
        }
        #endregion FunctionKeys
        #region EposTransaction
        public List<EposTransaction> GetTransactionBySlipNo(string CustomerId,string StoreId,string TillId,int SlipNo)
        {
            EposTransactionDA eposTransactionDa=new EposTransactionDA();
            return eposTransactionDa.GetTranactionBySlipNo(ConnectionString,CustomerId,StoreId,TillId,SlipNo);
        }
        public int InsertTransaction(EposTransaction m,string CustomerId,string StoreId,string TillId)
        {
            EposTransactionDA eposTransactionDa=new EposTransactionDA();
            return eposTransactionDa.InsertTransaction(ConnectionString,CustomerId,StoreId,TillId,m);
        }
        #endregion EposTransaction
        #region EposTransLine
        public List<EposTransLine> GetTransLinesByTransId(string CustomerId,string StoreId,string TillId,int TransId)
        {
            EposTransLineDA eposTransLineDa=new EposTransLineDA();
            return eposTransLineDa.GetTransLinesByTransId(ConnectionString,CustomerId,StoreId,TillId,TransId);
        }
        public List<EposTransLine> GetTransLinesByElNo(string CustomerId,string StoreId,string TillId,int ELNo)
        {
            EposTransLineDA eposTransLineDa=new EposTransLineDA();
            return  eposTransLineDa.GetTransLinesByELNo(ConnectionString,CustomerId,StoreId,TillId,ELNo);
        }
        public int InsertTransLine(EposTransLine m,string CustomerId,string StoreId,string TillId)
        {
            EposTransLineDA eposTransLineDa=new EposTransLineDA();
            return eposTransLineDa.InsertTransLine(ConnectionString,CustomerId,StoreId,TillId,m);
        }
        public int UpdateTransLineByELNo(EposTransLine m,string CustomerId,string StoreId,string TillId)
        {
            EposTransLineDA eposTransLineDa=new EposTransLineDA();
            return eposTransLineDa.UpdateTransLineByELNo(ConnectionString,CustomerId,StoreId,TillId,m);
        }
        #endregion EposTransLine
        #region PostSales
        public int PostSales(string CustomerId,string StoreId,string TillId,int SlipNo)
        {
            PostSalesDA postSalesDa =new PostSalesDA();
            return postSalesDa.PostSales(ConnectionString,CustomerId,StoreId,TillId,SlipNo);
        }
        #endregion PostSales
        #region Select Order Table Takeaway 
        public List<TableStatus> GetTableStatus(string CustomerId,string StoreId,string TillId)
        {
            TableStatusDA tableStatusDa=new TableStatusDA();
            return tableStatusDa.GetTableStatusByStoreIdCustomerId(ConnectionString,CustomerId,StoreId,TillId);
        }
        public List<TakeawayStatus> GetTakeawayStatus(string CustomerId,string StoreId,string TillId)
        {
            TakeawayStatusDA takeawayStatusDa=new TakeawayStatusDA();
            return takeawayStatusDa.GetTakeawayStatusByStoreIdCustomerId(ConnectionString,CustomerId,StoreId,TillId);
        }
        #endregion Select Order Table Takeaway 
        #region Staff
        public List<Staff> GetStaffDetails(string CustomerId,string StoreId)
        {
            StaffDA staffDa=new StaffDA();
            return staffDa.GetStaffDetailsByStoreIdCustomerId(ConnectionString,CustomerId,StoreId);
        }
        #endregion Staff

        #region Device
        public List<Device> GetDeviceDetails(string deviceId)
        {
            DeviceDA deviceDa=new DeviceDA();
            return deviceDa.GetDeviceDetails(ConnectionString,deviceId);
        }
        #endregion Device
    }
}