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
        #region Item
        public List<Item> GetItemByItemNoStoreIdCustomerId(string CustomerId,string StoreId,string Item_No)
        {
            ItemDA itemDa =new ItemDA();
            return itemDa.GetItemByItemNoStoreIdCustomerId(ConnectionString,CustomerId,StoreId,Item_No);
        }
        #endregion Item
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
        #endregion EposTransaction
        #region EposTransLine
        public List<EposTransLine> GetTransLinesByTransId(string CustomerId,string StoreId,string TillId,int TransId)
        {
            EposTransLineDA eposTransLineDa=new EposTransLineDA();
            return eposTransLineDa.GetTransLinesByTransId(ConnectionString,CustomerId,StoreId,TillId,TransId);
        }
        public int InsertTransLine(EposTransLine m,string CustomerId,string StoreId,string TillId)
        {
            EposTransLineDA eposTransLineDa=new EposTransLineDA();
            return eposTransLineDa.InsertTransLine(ConnectionString,CustomerId,StoreId,TillId,m);
        }
        #endregion EposTransLine

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