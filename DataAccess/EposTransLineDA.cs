using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using  WebPos.Models;
namespace WebPos.DataAccess
{
     public class EposTransLineDA
     {
         public List<EposTransLine> GetTransLinesByTransId(string  connectionString,string CustomerId,string StoreId,string TillId, int TransId)
         {
            List<EposTransLine> lm=new List<EposTransLine>();
            string Sql="";
            #region  SQL
            Sql +="select Amount,Barcode,Bar_Print,Bar_Printed,Bar_Printed_Time,";
            Sql +="Department_Id,[Description],Discount_Amount,Discountable,Discount_Percentage,";
            Sql +="ELNo,Entry_Type,Free_Text,IsModifier,Item_Group,";
            Sql +="Item_Sub_Group,Kitchen_Print,Kitchen_Printed,Kitchen_Printed_Time,";
            Sql +="Line_No,Line_Status,LinkedOfferId,Main_Item_No,Mandatory,";
            Sql +="Net_Amount,Number,OfferID,OfferQuantity,OfferTrigger,";
            Sql +="OrderType,Payment_Type,Price,Print_Group,Quantity,";
            Sql +="Scale,Scanned,Served,Split_Group,Staff_Id,";
            Sql +="Store_ID,Temp_Item,Till_Id,Total_Cost,Trans_Date,";
            Sql +="Trans_ID,Unit_Cost,VAT_Amount,VAT_Code,VAT_Rate ";
            Sql +="IsChange,IsRefund ";
            Sql +="from "+CustomerId+"_"+StoreId+"_"+TillId+"_"+"EPOS_Trans_Line ";
            Sql +="where Trans_ID=@Trans_ID ";
            Sql +="Order by Line_No desc ";
            #endregion SQL
            #region Execute SQL
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(Sql, connection))
                {
                    #region Param
                    SqlParameter param  = new SqlParameter();
                    param.ParameterName="@Trans_ID";
                    param.Value=TransId;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion Param
                    SqlDataReader reader = command.ExecuteReader();
                    while(reader.Read())
                    {
                        EposTransLine m=new EposTransLine();
                        #region Fill Model
                        //Amount,Barcode,Bar_Print,Bar_Printed,Bar_Printed_Time,
                        #region Line 1
                        try{m.Amount=reader.GetDecimal(0);}catch{}
                        try{m.Barcode=reader.GetString(1);}catch{}
                        try{m.BarPrint=reader.GetBoolean(2);}catch{}
                        try{m.BarPrinted=reader.GetBoolean(3);}catch{}
                        try{m.BarPrintedTime=reader.GetDateTime(4);}catch{}
                        #endregion Line 1
                        //Department_Id,[Description],Discount_Amount,Discountable,Discount_Percentage,
                        #region Line 2
                        try{m.DepartmentId=reader.GetString(5);}catch{}
                        try{m.Description=reader.GetString(6);}catch{}
                        try{m.DiscountAmount=reader.GetDecimal(7);}catch{}
                        try{m.Discountable=reader.GetBoolean(8);}catch{}
                        try{m.DiscountPercentage=reader.GetDecimal(9);}catch{}
                        #endregion Line 2
                        //ELNo,Entry_Type,Free_Text,IsModifier,Item_Group,
                        #region Line 3
                        try{m.Elno=reader.GetInt32(10);}catch{}
                        try{m.EntryType=reader.GetInt32(11);}catch{}
                        try{m.FreeText=reader.GetString(12);}catch{}
                        try{m.IsModifier=reader.GetBoolean(13);}catch{}
                        try{m.ItemGroup=reader.GetString(14);}catch{}
                        #endregion Line 3
                        //Item_Sub_Group,Kitchen_Print,Kitchen_Printed,Kitchen_Printed_Time,
                        #region Line 4
                        try{m.ItemSubGroup=reader.GetString(15);}catch{}
                        try{m.KitchenPrint=reader.GetBoolean(16);}catch{}
                        try{m.KitchenPrinted=reader.GetBoolean(17);}catch{}
                        try{m.KitchenPrintedTime=reader.GetDateTime(18);}catch{}
                        #endregion Line 4
                        //Line_No,Line_Status,LinkedOfferId,Main_Item_No,Mandatory,
                        #region Line 5
                        try{m.LineNo=reader.GetInt32(19);}catch{}
                        try{m.LineStatus=reader.GetBoolean(20);}catch{}
                        try{m.LinkedOfferId=reader.GetInt32(21);}catch{}
                        try{m.MainItemNo=reader.GetString(22);}catch{}
                        try{m.Mandatory=reader.GetBoolean(23);}catch{}
                        #endregion Line 5
                        //Net_Amount,Number,OfferID,OfferQuantity,OfferTrigger,
                        #region Line 6
                        try{m.NetAmount=reader.GetDecimal(24);}catch{}
                        try{m.Number=reader.GetString(25);}catch{}
                        try{m.OfferID=reader.GetString(26);}catch{}
                        try{m.OfferQuantity=reader.GetDecimal(27);}catch{}
                        try{m.OfferTrigger=reader.GetBoolean(28);}catch{}
                        #endregion Line 6
                        //OrderType,Payment_Type,Price,Print_Group,Quantity,
                        #region Line 7
                        try{m.OrderType=reader.GetInt32(29);}catch{}
                        try{m.PaymentType=reader.GetInt32(30);}catch{}
                        try{m.Price=reader.GetDecimal(31);}catch{}
                        try{m.PrintGroup=reader.GetString(32);}catch{}
                        try{m.Quantity=reader.GetDecimal(33);}catch{}
                        #endregion Line 7
                        //Scale,Scanned,Served,Split_Group,Staff_Id,
                        #region Line 8
                        try{m.Scale=reader.GetBoolean(34);}catch{}
                        try{m.Scanned=reader.GetBoolean(35);}catch{}
                        try{m.Served=reader.GetBoolean(36);}catch{}
                        try{m.SplitGroup=reader.GetBoolean(37);}catch{}
                        try{m.StaffId=reader.GetString(38);}catch{}
                        #endregion Line 8
                        //Store_ID,Temp_Item,Till_Id,Total_Cost,Trans_Date,
                        #region Line 9
                        try{m.StoreId=reader.GetString(39);}catch{}
                        try{m.TempItem=reader.GetBoolean(40);}catch{}
                        try{m.TillId=reader.GetString(41);}catch{}
                        try{m.TotalCost=reader.GetDecimal(42);}catch{}
                        try{m.TransDate=reader.GetDateTime(43);}catch{}
                        #endregion Line 9
                        //Trans_ID,Unit_Cost,VAT_Amount,VAT_Code,VAT_Rate
                        #region Line 10
                        try{m.TransId=reader.GetInt32(44);}catch{}
                        try{m.UnitCost=reader.GetDecimal(45);}catch{}
                        try{m.VatAmount=reader.GetDecimal(46);}catch{}
                        try{m.VatCode=reader.GetString(47);}catch{}
                        try{m.VatRate=reader.GetDecimal(48);}catch{}
                        #endregion Line 10
                        //IsChange,IsRefund
                        #region Line 11
                        try{m.IsChange=reader.GetBoolean(49);}catch{}
                        try{m.IsRefund=reader.GetBoolean(50);}catch{}
                        #endregion Line 11
                        #endregion Fill Model
                        lm.Add(m);
                    }
                }
            }
            #endregion Execute SQL
            return lm;
         }

         public int InsertTransLine(string  connectionString,string CustomerId,string StoreId,string TillId,EposTransLine m)
         {
            string Sql="";
            #region SQL
            Sql +="insert into " +CustomerId+"_"+StoreId+"_"+TillId+"_"+"EPOS_Trans_Line ";
            Sql +="(Amount,Barcode,Bar_Print,Bar_Printed,Bar_Printed_Time, ";
            Sql +="Department_Id,[Description],Discount_Amount,Discountable,Discount_Percentage, ";
            Sql +="Entry_Type,Free_Text,IsModifier,Item_Group,Item_Sub_Group, ";
            Sql +="Kitchen_Print,Kitchen_Printed,Kitchen_Printed_Time,Line_No,Line_Status, ";
            Sql +="LinkedOfferId,Main_Item_No,Mandatory,Net_Amount,Number, ";
            Sql +="OfferID,OfferQuantity,OfferTrigger,OrderType,Payment_Type, ";
            Sql +="Price,Print_Group,Quantity,Scale,Scanned, ";
            Sql +="Served,Split_Group,Staff_Id,Store_ID,Temp_Item, ";
            Sql +="Till_Id,Total_Cost,Trans_Date,Trans_ID,Unit_Cost, ";
            Sql +="VAT_Amount,VAT_Code,VAT_Rate,IsChange,IsRefund) ";
            Sql +="values ";
            Sql +="(@Amount,@Barcode,@Bar_Print,@Bar_Printed,@Bar_Printed_Time, ";
            Sql +="@Department_Id,@Description,@Discount_Amount,@Discountable,@Discount_Percentage, ";
            Sql +="@Entry_Type,@Free_Text,@IsModifier,@Item_Group,@Item_Sub_Group, ";
            Sql +="@Kitchen_Print,@Kitchen_Printed,@Kitchen_Printed_Time,@Line_No,@Line_Status, ";
            Sql +="@LinkedOfferId,@Main_Item_No,@Mandatory,@Net_Amount,@Number, ";
            Sql +="@OfferID,@OfferQuantity,@OfferTrigger,@OrderType,@Payment_Type, ";
            Sql +="@Price,@Print_Group,@Quantity,@Scale,@Scanned, ";
            Sql +="@Served,@Split_Group,@Staff_Id,@Store_ID,@Temp_Item, ";
            Sql +="@Till_Id,@Total_Cost,@Trans_Date,@Trans_ID,@Unit_Cost, ";
            Sql +="@VAT_Amount,@VAT_Code,@VAT_Rate,@IsChange,@IsRefund) ";
            #endregion SQL
            #region Execute SQL
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(Sql, connection))
                {
                    #region Param
                    //@Amount,@Barcode,@Bar_Print,@Bar_Printed,@Bar_Printed_Time,
                    #region Line 1
                    #region @Amount
                    SqlParameter param  = new SqlParameter();
                    param.ParameterName="@Amount";
                    param.Value=m.Amount;
                    param.DbType=DbType.Decimal;
                    command.Parameters.Add(param);
                    #endregion @Amount
                    #region @Barcode
                    param  = new SqlParameter();
                    param.ParameterName="@Barcode";
                    param.Value=m.Barcode;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion @Barcode
                    #region @Bar_Print
                    param  = new SqlParameter();
                    param.ParameterName="@Bar_Print";
                    param.Value=m.BarPrint;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @Bar_Print
                    #region @Bar_Printed
                    param  = new SqlParameter();
                    param.ParameterName="@Bar_Printed";
                    param.Value=m.BarPrinted;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @Bar_Printed
                    #region @Bar_Printed_Time
                    param  = new SqlParameter();
                    param.ParameterName="@Bar_Printed_Time";
                    param.Value=m.BarPrintedTime;
                    param.DbType=DbType.DateTime;
                    command.Parameters.Add(param);
                    #endregion @Bar_Printed_Time
                    #endregion Line 1
                    //@Department_Id,@Description,@Discount_Amount,@Discountable,@Discount_Percentage,
                    #region Line 2
                    #region @Department_Id
                    param  = new SqlParameter();
                    param.ParameterName="@Department_Id";
                    param.Value=m.DepartmentId;
                    param.DbType=DbType.String;
                    param.Size=50;
                    command.Parameters.Add(param);
                    #endregion @Department_Id
                    #region @Description
                    param  = new SqlParameter();
                    param.ParameterName="@Description";
                    param.Value=m.Description;
                    param.DbType=DbType.String;
                    param.Size=50;
                    command.Parameters.Add(param);
                    #endregion @Description
                    #region @Discount_Amount
                    param  = new SqlParameter();
                    param.ParameterName="@Discount_Amount";
                    param.Value=m.DiscountAmount;
                    param.DbType=DbType.Decimal;
                    command.Parameters.Add(param);
                    #endregion @Discount_Amount
                    #region @Discountable
                    param  = new SqlParameter();
                    param.ParameterName="@Discountable";
                    param.Value=m.Discountable;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @Discountable
                    #region @Discount_Percentage
                    param  = new SqlParameter();
                    param.ParameterName="@Discount_Percentage";
                    param.Value=m.DiscountPercentage;
                    param.DbType=DbType.Decimal;
                    command.Parameters.Add(param);
                    #endregion @Discount_Percentage
                    #endregion Line 2
                    //@Entry_Type,@Free_Text,@IsModifier,@Item_Group,@Item_Sub_Group,
                    #region Line 3
                    #region @Entry_Type
                    param  = new SqlParameter();
                    param.ParameterName="@Entry_Type";
                    param.Value=m.EntryType;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @Entry_Type
                    #region @Free_Text
                    param  = new SqlParameter();
                    param.ParameterName="@Free_Text";
                    param.Value=m.FreeText;
                    param.DbType=DbType.String;
                    param.Size=50;
                    command.Parameters.Add(param);
                    #endregion @Free_Text
                    #region @IsModifier
                    param  = new SqlParameter();
                    param.ParameterName="@IsModifier";
                    param.Value=m.IsModifier;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @IsModifier
                    #region @Item_Group
                    param  = new SqlParameter();
                    param.ParameterName="@Item_Group";
                    param.Value=m.ItemGroup;
                    param.DbType=DbType.String;
                    param.Size=50;
                    command.Parameters.Add(param);
                    #endregion @Item_Group
                    #region @Item_Sub_Group
                    param  = new SqlParameter();
                    param.ParameterName="@Item_Sub_Group";
                    param.Value=m.ItemSubGroup;
                    param.DbType=DbType.String;
                    param.Size=50;
                    command.Parameters.Add(param);
                    #endregion @Item_Sub_Group
                    #endregion Line 3
                    #endregion Param
                }
            }
            #endregion Execute SQL
            return 1;
         }
     }
}