using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using  WebPos.Models;
namespace WebPos.DataAccess{
    public class ItemDA
    {
        
        public List<ItemBarcode> GetitemBarcodeByBarcodeStoreIdCustomerId(string connectionString,string CustomerId,string StoreId ,string Barcode)
        {
            List<ItemBarcode> lm=new List<ItemBarcode>();
            string Sql="";
            #region SQL
            Sql +="select Item_No,Barcode,[Description],Marked_Price,Price, ";
            Sql +="Takeaway_Price,Delivery_Price,Size,Colour ";
            Sql +="from "+CustomerId+"_"+StoreId+"_"+"Item_Barcode ";
            Sql +="where Barcode=@Barcode ";
            #endregion SQL
            #region Execute SQL
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(Sql, connection))
                {
                    #region Param
                    SqlParameter param  = new SqlParameter();
                    param.ParameterName="@Barcode";
                    param.Value=Barcode;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion Param
                    SqlDataReader reader = command.ExecuteReader();
                    while(reader.Read())
                    {
                        ItemBarcode m=new ItemBarcode();
                        #region Fill Model
                        //Item_No,Barcode,[Description],Marked_Price,Price
                        #region Line 1
                        try{m.ItemNo=reader.GetString(0);}catch{}
                        try{m.Barcode=reader.GetString(1);}catch{}
                        try{m.Description=reader.GetString(2);}catch{}
                        try{m.MarkedPrice=reader.GetBoolean(3);}catch{}
                        try{m.Price=reader.GetDecimal(4);}catch{}
                        #endregion Line 1
                        //Takeaway_Price,Delivery_Price,Size,Colour
                        #region Line 2
                        try{m.TakeawayPrice=reader.GetDecimal(5);}catch{}
                        try{m.DeliveryPrice=reader.GetDecimal(6);}catch{}
                        try{m.Size=reader.GetString(7);}catch{}
                        try{m.Colour=reader.GetString(8);}catch{}
                        #endregion Line 2
                        #endregion Fill Model
                        lm.Add(m);
                    }

                }
            }
            #endregion Execute SQL
            return lm;
        }
        public List<Item> GetItemByItemNoStoreIdCustomerId(string connectionString,string CustomerId,string StoreId ,string Item_No)
        {
            List<Item> lm=new List<Item>();
            string Sql="";
            #region SQL
            Sql +="select Bar_Print,Barcode,Blocked,Delivery_Price,Department, ";
            Sql +="[Description],Discount_Allowed,Inventory,IsSubItem,Item_Group, ";
            Sql +="Item_No,Item_Sub_Group,Kitchen_Print,Last_Modified,Last_Sales_Date, ";
            Sql +="Maintain,Margin,Outer_EAN,Pack_Cost,Pack_Description, ";
            Sql +="Pack_Quantity,Pack_Unit_Of_Measure,Peak_Price,Price,Price_Entry, ";
            Sql +="Print_Group,Quantity_Entry,ReOrder_Point,ReOrder_Quantity,RRP, ";
            Sql +="Scale,Sub_Menu_Available,Takeaway_Price,Total_Volume_Or_Weight,Unit_Cost, ";
            Sql +="Unit_Volume_Or_Weight,Vat_Code,Vendor_Item_No,Vendor_No,Wet_Stock,IsCharge from ";
            Sql +=CustomerId+"_"+StoreId+"_"+"Item ";
            Sql +="where Item_No=@Item_No ";
            #endregion SQL
            #region Execute SQL
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(Sql, connection))
                {
                    #region Param
                    SqlParameter param  = new SqlParameter();
                    param.ParameterName="@Item_No";
                    param.Value=Item_No;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion Param
                    SqlDataReader reader = command.ExecuteReader();
                    while(reader.Read())
                    {
                        Item m =new Item();
                        #region Fill Model
                        //Bar_Print,Barcode,Blocked,Delivery_Price,Department
                        #region Line 1
                        try{m.BarPrint=reader.GetBoolean(0);} catch{}
                        try{m.Barcode=reader.GetString(1);}catch{}
                        try{m.Blocked=reader.GetBoolean(2);}catch{}
                        try{m.DeliveryPrice=reader.GetDecimal(3);}catch{}
                        try{m.Department=reader.GetString(4);}catch{}
                        #endregion Line 1
                        //[Description],Discount_Allowed,Inventory,IsSubItem,Item_Group
                        #region Line 2
                        try{m.Description=reader.GetString(5);}catch{}
                        try{m.DiscountAllowed=reader.GetBoolean(6);}catch{}
                        try{m.Inventory=reader.GetDecimal(7);}catch{}
                        try{m.IsSubItem=reader.GetBoolean(8);}catch{}
                        try{m.ItemGroup=reader.GetString(9);}catch{}
                        #endregion Line 2
                        //Item_No,Item_Sub_Group,Kitchen_Print,Last_Modified,Last_Sales_Date,
                        #region Line 3
                        try{m.ItemNo=reader.GetString(10);}catch{}
                        try{m.ItemSubGroup=reader.GetString(11);}catch{}
                        try{m.KitchenPrint=reader.GetBoolean(12);}catch{}
                        try{m.LastModified=reader.GetDateTime(13).ToString("yyyy-MM-dd HH:mm:ss");}catch{}
                        try{m.LastSalesDate=reader.GetDateTime(14).ToString("yyyy-MM-dd HH:mm:ss");}catch{}
                        #endregion Line 3
                        //Maintain,Margin,Outer_EAN,Pack_Cost,Pack_Description
                        #region Line 4
                        try{m.Maintain=reader.GetBoolean(15);}catch{}
                        try{m.Margin=reader.GetDecimal(16);}catch{}
                        try{m.OuterEAN=reader.GetString(17);}catch{}
                        try{m.PackCost=reader.GetDecimal(18);}catch{}
                        try{m.PackDescription=reader.GetString(19);}catch{}
                        #endregion Line 4
                        //Pack_Quantity,Pack_Unit_Of_Measure,Peak_Price,Price,Price_Entry,
                        #region Line 5
                        try{m.PackQuantity=reader.GetDecimal(20);}catch{}
                        try{m.PackUnitOfMeasure=reader.GetString(21);}catch{}
                        try{m.PeakPrice=reader.GetDecimal(22);}catch{}
                        try{m.Price=reader.GetDecimal(23);}catch{}
                        try{m.PriceEntry=reader.GetBoolean(24);}catch{}
                        #endregion Line 5
                        //Print_Group,Quantity_Entry,ReOrder_Point,ReOrder_Quantity,RRP
                        #region Line 6
                        try{m.PrintGroup=reader.GetString(25);}catch{}
                        try{m.QuantityEntry=reader.GetBoolean(26);}catch{}
                        try{m.ReOrderPoint=reader.GetDecimal(27);}catch{}
                        try{m.ReOrderQuantity=reader.GetDecimal(28);}catch{}
                        try{m.RRP=reader.GetDecimal(29);}catch{}
                        #endregion Line 6
                        //Scale,Sub_Menu_Available,Takeaway_Price,Total_Volume_Or_Weight,Unit_Cost
                        #region Line 7
                        try{m.Scale=reader.GetBoolean(30);}catch{}
                        try{m.SubMenuAvailable=reader.GetBoolean(31);}catch{}
                        try{m.TakeawayPrice=reader.GetDecimal(32);}catch{}
                        try{m.TotalVolumeOrWeight=reader.GetDecimal(33);}catch{}
                        try{m.UnitCost=reader.GetDecimal(34);}catch{}
                        #endregion Line 7
                        //Unit_Volume_Or_Weight,Vat_Code,Vendor_Item_No,Vendor_No,Wet_Stock,Ischarge
                        #region Line 8
                        try{m.UnitVolumeOrWeight=reader.GetDecimal(35);}catch{}
                        try{m.VatCode=reader.GetString(36);}catch{}
                        try{m.VendorItemNo=reader.GetString(37);}catch{}
                        try{m.VendorNo=reader.GetString(38);}catch{}
                        try{m.WetStock=reader.GetBoolean(39);}catch{}
                        try{m.IsCharge=reader.GetBoolean(40);}catch{}
                        #endregion Line 8
                        #endregion Fill Model
                        lm.Add(m);
                    }
                    reader.Close();

                }
            }
            #endregion Execute SQL
            return lm;
        }
        public List<Item> GetItembyItemNoCustomerId(string connectionString,string CustomerId,string Item_No)
        {
            List<Item> lm=new List<Item>();
            string Sql="";
            #region SQL
            Sql +="select Bar_Print,Barcode,Blocked,Delivery_Price,Department, ";
            Sql +="[Description],Discount_Allowed,Inventory,IsSubItem,Item_Group, ";
            Sql +="Item_No,Item_Sub_Group,Kitchen_Print,Last_Modified,Last_Sales_Date, ";
            Sql +="Maintain,Margin,Outer_EAN,Pack_Cost,Pack_Description, ";
            Sql +="Pack_Quantity,Pack_Unit_Of_Measure,Peak_Price,Price,Price_Entry, ";
            Sql +="Print_Group,Quantity_Entry,ReOrder_Point,ReOrder_Quantity,RRP, ";
            Sql +="Scale,Sub_Menu_Available,Takeaway_Price,Total_Volume_Or_Weight,Unit_Cost, ";
            Sql +="Unit_Volume_Or_Weight,Vat_Code,Vendor_Item_No,Vendor_No,Wet_Stock,IsCharge from ";
            Sql +=CustomerId+"_"+"Item ";
            Sql +="where Item_No=@Item_No ";
            #endregion SQL
            #region Execute SQL
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(Sql, connection))
                {
                    #region Param
                    SqlParameter param  = new SqlParameter();
                    param.ParameterName="@Item_No";
                    param.Value=Item_No;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion Param
                    SqlDataReader reader = command.ExecuteReader();
                    while(reader.Read())
                    {
                        Item m =new Item();
                        #region Fill Model
                        //Bar_Print,Barcode,Blocked,Delivery_Price,Department
                        #region Line 1
                        try{m.BarPrint=reader.GetBoolean(0);} catch{}
                        try{m.Barcode=reader.GetString(1);}catch{}
                        try{m.Blocked=reader.GetBoolean(2);}catch{}
                        try{m.DeliveryPrice=reader.GetDecimal(3);}catch{}
                        try{m.Department=reader.GetString(4);}catch{}
                        #endregion Line 1
                        //[Description],Discount_Allowed,Inventory,IsSubItem,Item_Group
                        #region Line 2
                        try{m.Description=reader.GetString(5);}catch{}
                        try{m.DiscountAllowed=reader.GetBoolean(6);}catch{}
                        try{m.Inventory=reader.GetDecimal(7);}catch{}
                        try{m.IsSubItem=reader.GetBoolean(8);}catch{}
                        try{m.ItemGroup=reader.GetString(9);}catch{}
                        #endregion Line 2
                        //Item_No,Item_Sub_Group,Kitchen_Print,Last_Modified,Last_Sales_Date,
                        #region Line 3
                        try{m.ItemNo=reader.GetString(10);}catch{}
                        try{m.ItemSubGroup=reader.GetString(11);}catch{}
                        try{m.KitchenPrint=reader.GetBoolean(12);}catch{}
                        try{m.LastModified=reader.GetDateTime(13).ToString("yyyy-MM-dd HH:mm:ss");}catch{}
                        try{m.LastSalesDate=reader.GetDateTime(14).ToString("yyyy-MM-dd HH:mm:ss");}catch{}
                        #endregion Line 3
                        //Maintain,Margin,Outer_EAN,Pack_Cost,Pack_Description
                        #region Line 4
                        try{m.Maintain=reader.GetBoolean(15);}catch{}
                        try{m.Margin=reader.GetDecimal(16);}catch{}
                        try{m.OuterEAN=reader.GetString(17);}catch{}
                        try{m.PackCost=reader.GetDecimal(18);}catch{}
                        try{m.PackDescription=reader.GetString(19);}catch{}
                        #endregion Line 4
                        //Pack_Quantity,Pack_Unit_Of_Measure,Peak_Price,Price,Price_Entry,
                        #region Line 5
                        try{m.PackQuantity=reader.GetDecimal(20);}catch{}
                        try{m.PackUnitOfMeasure=reader.GetString(21);}catch{}
                        try{m.PeakPrice=reader.GetDecimal(22);}catch{}
                        try{m.Price=reader.GetDecimal(23);}catch{}
                        try{m.PriceEntry=reader.GetBoolean(24);}catch{}
                        #endregion Line 5
                        //Print_Group,Quantity_Entry,ReOrder_Point,ReOrder_Quantity,RRP
                        #region Line 6
                        try{m.PrintGroup=reader.GetString(25);}catch{}
                        try{m.QuantityEntry=reader.GetBoolean(26);}catch{}
                        try{m.ReOrderPoint=reader.GetDecimal(27);}catch{}
                        try{m.ReOrderQuantity=reader.GetDecimal(28);}catch{}
                        try{m.RRP=reader.GetDecimal(29);}catch{}
                        #endregion Line 6
                        //Scale,Sub_Menu_Available,Takeaway_Price,Total_Volume_Or_Weight,Unit_Cost
                        #region Line 7
                        try{m.Scale=reader.GetBoolean(30);}catch{}
                        try{m.SubMenuAvailable=reader.GetBoolean(31);}catch{}
                        try{m.TakeawayPrice=reader.GetDecimal(32);}catch{}
                        try{m.TotalVolumeOrWeight=reader.GetDecimal(33);}catch{}
                        try{m.UnitCost=reader.GetDecimal(34);}catch{}
                        #endregion Line 7
                        //Unit_Volume_Or_Weight,Vat_Code,Vendor_Item_No,Vendor_No,Wet_Stock,Ischarge
                        #region Line 8
                        try{m.UnitVolumeOrWeight=reader.GetDecimal(35);}catch{}
                        try{m.VatCode=reader.GetString(36);}catch{}
                        try{m.VendorItemNo=reader.GetString(37);}catch{}
                        try{m.VendorNo=reader.GetString(38);}catch{}
                        try{m.WetStock=reader.GetBoolean(39);}catch{}
                        try{m.IsCharge=reader.GetBoolean(40);}catch{}
                        #endregion Line 8
                        #endregion Fill Model
                        lm.Add(m);
                    }
                    reader.Close();
                }
            }
            #endregion Execute SQL
            return lm;
        }

    }
}