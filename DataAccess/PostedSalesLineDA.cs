using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using WebPos.Models;
namespace WebPos.DataAccess
{
    public class PostedSalesLineDA
    {
        public int InsertSalesLine(string  connectionString,string CustomerId,string StoreId,PostedSalesLine m)
        {
            int result=0;
            #region SQL
            string Sql="insert into "+CustomerId+"_"+StoreId+"_"+"Posted_Sales_Line ";
            Sql +="(Amount,Bar_Print,Bar_Printed,Bar_Printed_Time,Barcode, ";
            Sql +="Customer_ID,[DayofYear],Department_ID,[Description],Discount_Amount, ";
            Sql +="Discount_Percentage,Discountable,Entry_Type,Free_Text,IsChange, ";
            Sql +="IsCharge,IsModifier,IsRefund,Generated,HourOfDay, ";
            Sql +="Item_Group,Item_Sub_Group,Kitchen_Print,Kitchen_Printed,Kitchen_Printed_Time, ";
            Sql +="Line_No,Line_Status,LinkedOfferId,loyaltycard,Main_Item_No, ";
            Sql +="Mandatory,Membership_No,MonthOfYear,Net_Amount,Number, ";
            Sql +="OfferID,OfferQuantity,OfferTrigger,OrderText,OrderType, ";
            Sql +="Payment_Type,Price,Print_Group,Quantity,QuarterOfYear, ";
            Sql +="Shift_Report_ID,Scale,Scanned,Served,Split_Group, ";
            Sql +="Staff_Id,Store_ID,Temp_Item,Till_Id,Total_Cost, ";
            Sql +="Trans_Date,Trans_ID,Unit_Cost,VAT_Amount,VAT_Code, ";
            Sql +="WeekOfYear,YearOfYear,Z_Report_ID) ";

            Sql +="values ";
            Sql +="(@Amount,@Bar_Print,@Bar_Printed,@Bar_Printed_Time,@Barcode, ";//ok
            Sql +="@Customer_ID,@DayofYear,@Department_ID,@Description,@Discount_Amount, ";//ok
            Sql +="@Discount_Percentage,@Discountable,@Entry_Type,@Free_Text,@IsChange, ";//ok
            Sql +="@IsCharge,@IsModifier,@IsRefund,@Generated,@HourOfDay, ";//ok
            Sql +="@Item_Group,@Item_Sub_Group,@Kitchen_Print,@Kitchen_Printed,@Kitchen_Printed_Time, ";//ok
            Sql +="@Line_No,@Line_Status,@LinkedOfferId,@loyaltycard,@Main_Item_No, ";//ok
            Sql +="@Mandatory,@Membership_No,@MonthOfYear,@Net_Amount,@Number, ";//ok
            Sql +="@OfferID,@OfferQuantity,@OfferTrigger,@OrderText,@OrderType, ";//ok
            Sql +="@Payment_Type,@Price,@Print_Group,@Quantity,@QuarterOfYear, ";//ok
            Sql +="@Shift_Report_ID,@Scale,@Scanned,@Served,@Split_Group, ";//ok
            Sql +="@Staff_Id,@Store_ID,@Temp_Item,@Till_Id,@Total_Cost, ";//ok
            Sql +="@Trans_Date,@Trans_ID,@Unit_Cost,@VAT_Amount,@VAT_Code, ";
            Sql +="@WeekOfYear,@YearOfYear,@Z_Report_ID) ";
            #endregion SQL
            #region Execute SQL
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(Sql, connection))
                {
                    #region Param
                    //@Amount,@Bar_Print,@Bar_Printed,@Bar_Printed_Time,@Barcode,
                    #region Line 1
                    #region @Amount
                    SqlParameter param  = new SqlParameter();
                    param.ParameterName="@Amount";
                    param.Value=m.Amount;
                    param.DbType=DbType.Decimal;
                    command.Parameters.Add(param);
                    #endregion @Amount
                    
                    #region  @Bar_Print
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

                    #region @Barcode
                    param  = new SqlParameter();
                    param.ParameterName="@Barcode";
                    param.Value=m.Barcode;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion @Barcode
                    #endregion Line 1

                    //@Customer_ID,@DayofYear,@Department_ID,@Description,@Discount_Amount
                    #region Line 2
                    #region @Customer_ID
                    param  = new SqlParameter();
                    param.ParameterName="@Customer_ID";
                    param.Value=m.CustomerId;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @Customer_ID

                    #region @DayofYear
                    param  = new SqlParameter();
                    param.ParameterName="@DayofYear";
                    param.Value=m.DayofYear;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @DayofYear

                    #region @Department_ID
                    param  = new SqlParameter();
                    param.ParameterName="@Department_ID";
                    param.Value=m.DepartmentId;
                    param.DbType=DbType.String;
                    param.Size=50;
                    command.Parameters.Add(param);
                    #endregion @Department_ID

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

                    #endregion Line 2

                    //@Discount_Percentage,@Discountable,@Entry_Type,@Free_Text,@IsChange,
                    #region Line 3

                    #region @Discount_Percentage
                    param  = new SqlParameter();
                    param.ParameterName="@Discount_Percentage";
                    param.Value=m.DiscountPercentage;
                    param.DbType=DbType.Decimal;
                    command.Parameters.Add(param);
                    #endregion @Discount_Percentage

                    #region @Discountable
                    param  = new SqlParameter();
                    param.ParameterName="@Discountable";
                    param.Value=m.Discountable;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @Discountable

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

                    #region  @IsChange
                    param  = new SqlParameter();
                    param.ParameterName="@IsChange";
                    param.Value=m.IsChange;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @IsChange

                    #endregion Line 3

                    //@IsCharge,@IsModifier,@IsRefund,@Generated,@HourOfDay, 
                    #region Line 4

                    #region @IsCharge
                    param  = new SqlParameter();
                    param.ParameterName="@IsCharge";
                    param.Value=m.IsCharge;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @IsCharge

                    #region @IsModifier
                    param  = new SqlParameter();
                    param.ParameterName="@IsModifier";
                    param.Value=m.IsModifier;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @IsModifier

                    #region  @IsRefund
                    param  = new SqlParameter();
                    param.ParameterName="@IsRefund";
                    param.Value=m.IsRefund;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @IsRefund

                    #region @Generated
                    param  = new SqlParameter();
                    param.ParameterName="@Generated";
                    param.Value=m.Generated;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @Generated

                    #region  @HourOfDay
                    param  = new SqlParameter();
                    param.ParameterName="@HourOfDay";
                    param.Value=m.HourOfDay;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @HourOfDay

                    #endregion Line 4

                    //@Item_Group,@Item_Sub_Group,@Kitchen_Print,@Kitchen_Printed,@Kitchen_Printed_Time
                    #region Line 5

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

                    #region @Kitchen_Print
                    param  = new SqlParameter();
                    param.ParameterName="@Kitchen_Print";
                    param.Value=m.KitchenPrint;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @Kitchen_Print

                    #region @Kitchen_Printed
                    param  = new SqlParameter();
                    param.ParameterName="@Kitchen_Printed";
                    param.Value=m.KitchenPrinted;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @Kitchen_Printed

                    #region @Kitchen_Printed_Time
                    param  = new SqlParameter();
                    param.ParameterName="@Kitchen_Printed_Time";
                    param.Value=m.KitchenPrintedTime;
                    param.DbType=DbType.DateTime;
                    command.Parameters.Add(param);
                    #endregion @Kitchen_Printed_Time

                    #endregion Line 5

                    //@Line_No,@Line_Status,@LinkedOfferId,@loyaltycard,@Main_Item_No,
                    #region  Line 6

                    #region @Line_No
                    param  = new SqlParameter();
                    param.ParameterName="@Line_No";
                    param.Value=m.LineNo;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @Line_No

                    #region @Line_Status
                    param  = new SqlParameter();
                    param.ParameterName="@Line_Status";
                    param.Value=m.LineStatus;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @Line_Status

                    #region @LinkedOfferId
                    param  = new SqlParameter();
                    param.ParameterName="@LinkedOfferId";
                    param.Value=m.LinkedOfferId;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @LinkedOfferId

                    #region  @Loyaltycard
                    param  = new SqlParameter();
                    param.ParameterName="@loyaltycard";
                    param.Value=m.Loyaltycard;
                    param.DbType=DbType.String;
                    param.Size=50;
                    command.Parameters.Add(param);
                    #endregion @Loyaltycard

                    #region @Main_Item_No
                    param  = new SqlParameter();
                    param.ParameterName="@Main_Item_No";
                    param.Value=m.MainItemNo;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion @Main_Item_No

                    #endregion Line 6

                    //@Mandatory,@Membership_No,@MonthOfYear,@Net_Amount,@Number,
                    #region Line 7
                    
                    #region @Mandatory
                    param  = new SqlParameter();
                    param.ParameterName="@Mandatory";
                    param.Value=m.Mandatory;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @Mandatory

                    #region @Membership_No
                    param  = new SqlParameter();
                    param.ParameterName="@Membership_No";
                    param.Value=m.MembershipNo;
                    param.DbType=DbType.String;
                    param.Size=50;
                    command.Parameters.Add(param);
                    #endregion @Membership_No
                    
                    #region @MonthOfYear
                    param  = new SqlParameter();
                    param.ParameterName="@MonthOfYear";
                    param.Value=m.MonthOfYear;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @MonthOfYear
                    
                    #region @Net_Amount
                    param  = new SqlParameter();
                    param.ParameterName="@Net_Amount";
                    param.Value=m.NetAmount;
                    param.DbType=DbType.Decimal;
                    command.Parameters.Add(param);
                    #endregion @Net_Amount

                    #region @Number
                    param  = new SqlParameter();
                    param.ParameterName="@Number";
                    param.Value=m.Number;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion @Number

                    #endregion Line 7
                   
                    //@OfferID,@OfferQuantity,@OfferTrigger,@OrderText,@OrderType,
                    #region Line 8

                    #region @OfferID
                    param  = new SqlParameter();
                    param.ParameterName="@OfferID";
                    param.Value=m.OfferId;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion @OfferID

                    #region @OfferQuantity
                    param  = new SqlParameter();
                    param.ParameterName="@OfferQuantity";
                    param.Value=m.OfferQuantity;
                    param.DbType=DbType.Decimal;
                    command.Parameters.Add(param);
                    #endregion @OfferQuantity

                    #region @OfferTrigger
                    param  = new SqlParameter();
                    param.ParameterName="@OfferTrigger";
                    param.Value=m.OfferTrigger;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @OfferTrigger

                    #region @OrderText
                    param  = new SqlParameter();
                    param.ParameterName="@OrderText";
                    param.Value=m.OrderText;
                    param.DbType=DbType.String;
                    param.Size=50;
                    command.Parameters.Add(param);
                    #endregion @OrderText

                    #region @OrderType
                    param  = new SqlParameter();
                    param.ParameterName="@OrderType";
                    param.Value=m.OrderType;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @OrderType
                    #endregion Line 8
                   
                    //@Payment_Type,@Price,@Print_Group,@Quantity,@QuarterOfYear,
                    #region Line 9

                    #region @Payment_Type
                    param  = new SqlParameter();
                    param.ParameterName="@Payment_Type";
                    param.Value=m.PaymentType;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @Payment_Type

                    #region @Price
                    param  = new SqlParameter();
                    param.ParameterName="@Price";
                    param.Value=m.Price;
                    param.DbType=DbType.Decimal;
                    command.Parameters.Add(param);
                    #endregion @Price

                    #region @Print_Group
                    param  = new SqlParameter();
                    param.ParameterName="@Print_Group";
                    param.Value=m.PrintGroup;
                    param.DbType=DbType.String;
                    param.Size=10;
                    command.Parameters.Add(param);
                    #endregion @Print_Group

                    #region @Quantity
                    param  = new SqlParameter();
                    param.ParameterName="@Quantity";
                    param.Value=m.Quantity;
                    param.DbType=DbType.Decimal;
                    command.Parameters.Add(param);
                    #endregion @Quantity

                    #region @QuarterOfYear
                    param  = new SqlParameter();
                    param.ParameterName="@QuarterOfYear";
                    param.Value=m.QuarterOfYear;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @QuarterOfYear

                    #endregion Line 9

                    //@Shift_Report_ID,@Scale,@Scanned,@Served,@Split_Group,
                    #region Line 10

                    #region  @Shift_Report_ID
                    param  = new SqlParameter();
                    param.ParameterName="@Shift_Report_ID";
                    param.Value=m.ShiftReportId;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion @Shift_Report_ID
                    
                    #region @Scale
                    param  = new SqlParameter();
                    param.ParameterName="@Scale";
                    param.Value=m.Scale;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @Scale

                    #region @Scanned
                    param  = new SqlParameter();
                    param.ParameterName="@Scanned";
                    param.Value=m.Scanned;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @Scanned

                    #region @Served
                    param  = new SqlParameter();
                    param.ParameterName="@Served";
                    param.Value=m.Served;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @Served

                    #region @Split_Group
                    param  = new SqlParameter();
                    param.ParameterName="@Split_Group";
                    param.Value=m.SplitGroup;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @Split_Group

                    #endregion Line 10
                    
                    //@Staff_Id,@Store_ID,@Temp_Item,@Till_Id,@Total_Cost,
                    #region Line 11

                    #region @Staff_Id
                    param  = new SqlParameter();
                    param.ParameterName="@Staff_Id";
                    param.Value=m.StaffId;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion @Staff_Id

                    #region @Store_ID
                    param  = new SqlParameter();
                    param.ParameterName="@Store_ID";
                    param.Value=m.StoreId;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion @Store_ID

                    #region  @Temp_Item
                    param  = new SqlParameter();
                    param.ParameterName="@Temp_Item";
                    param.Value=m.TempItem;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @Temp_Item

                    #region @Till_Id
                    param  = new SqlParameter();
                    param.ParameterName="@Till_Id";
                    param.Value=m.TillId;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion @Till_Id

                    #region @Total_Cost
                    param  = new SqlParameter();
                    param.ParameterName="@Total_Cost";
                    param.Value=m.TotalCost;
                    param.DbType=DbType.Decimal;
                    command.Parameters.Add(param);
                    #endregion @Total_Cost

                    #endregion Line 11
                    
                    //@Trans_Date,@Trans_ID,@Unit_Cost,@VAT_Amount,@VAT_Code,
                    #region Line 12

                    #region @Trans_Date
                    param  = new SqlParameter();
                    param.ParameterName="@Trans_Date";
                    param.Value=m.TransDate;
                    param.DbType=DbType.DateTime;
                    command.Parameters.Add(param);
                    #endregion @Trans_Date

                    #region @Trans_ID
                    param  = new SqlParameter();
                    param.ParameterName="@Trans_ID";
                    param.Value=m.TransId;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @Trans_ID

                    #region @Unit_Cost
                    param  = new SqlParameter();
                    param.ParameterName="@Unit_Cost";
                    param.Value=m.UnitCost;
                    param.DbType=DbType.Decimal;
                    command.Parameters.Add(param);
                    #endregion @Unit_Cost

                    #region  @VAT_Amount
                    param  = new SqlParameter();
                    param.ParameterName="@VAT_Amount";
                    param.Value=m.VatAmount;
                    param.DbType=DbType.Decimal;
                    command.Parameters.Add(param);
                    #endregion @VAT_Amount

                    #region @VAT_Code
                    param  = new SqlParameter();
                    param.ParameterName="@VAT_Code";
                    param.Value=m.VatCode;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion @VAT_Code

                    #endregion Line 12
                    
                    //@WeekOfYear,@YearOfYear,@Z_Report_ID
                    #region Line 13

                    #region @WeekOfYear
                    param  = new SqlParameter();
                    param.ParameterName="@WeekOfYear";
                    param.Value=m.WeekOfYear;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @WeekOfYear

                    #region @YearOfYear
                    param  = new SqlParameter();
                    param.ParameterName="@YearOfYear";
                    param.Value=m.YearOfYear;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @YearOfYear

                    #region @Z_Report_ID
                    param  = new SqlParameter();
                    param.ParameterName="@Z_Report_ID";
                    param.Value=m.ZReportID;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion @Z_Report_ID

                    #endregion Line 13
                    #endregion Param
                    result=command.ExecuteNonQuery();
                }
            }
            #endregion Execute SQL
            return result;
        }
    }
}