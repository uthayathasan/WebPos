using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using WebPos.Models;
namespace WebPos.DataAccess
{
    public class PostedTransactionDA
    {
        public int InsertTransaction(string  connectionString,string CustomerId,string StoreId,PostedTransaction m)
        {
            int result=0;
            #region SQL
            string Sql="insert into "+CustomerId+"_"+StoreId+"_"+"Posted_Transaction ";
            Sql +="(Counter_Print,Customer_Id,Delivery_ID,[Floor],ID, ";
            Sql +="InfoItem,Invoiced_Date,InvoicePrinted,Loyalty_Card,Membership_No, ";
            Sql +="Order_No,Order_Type,Order_Type_Text,Printed,Shift_Report_ID, ";
            Sql +="Sales_Amount,Sales_Type,Seats,Slip_No,Staff_Id, ";
            Sql +="Store_Id,Table_ID,Table_Name,Takeaway_Id,Till_ID, ";
            Sql +="Trans_Date,Trans_Type,TransactionText,Z_Report_ID) ";

            Sql +="values ";
            Sql +="(@Counter_Print,@Customer_Id,@Delivery_ID,@Floor,@ID, ";//ok
            Sql +="@InfoItem,@Invoiced_Date,@InvoicePrinted,@Loyalty_Card,@Membership_No, ";//ok
            Sql +="@Order_No,@Order_Type,@Order_Type_Text,@Printed,@Shift_Report_ID, ";//ok
            Sql +="@Sales_Amount,@Sales_Type,@Seats,@Slip_No,@Staff_Id, ";//ok
            Sql +="@Store_Id,@Table_ID,@Table_Name,@Takeaway_Id,@Till_ID, ";//ok
            Sql +="@Trans_Date,@Trans_Type,@TransactionText,@Z_Report_ID) ";//ok
            #endregion SQL
            #region Execute SQL
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(Sql, connection))
                {
                    #region Param
                    //@Counter_Print,@Customer_Id,@Delivery_ID,@Floor,@ID,
                    #region Line 1

                    #region @Counter_Print
                    SqlParameter param  = new SqlParameter();
                    param.ParameterName="@Counter_Print";
                    param.Value=m.CounterPrint;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @Counter_Print

                    #region @Customer_Id
                    param  = new SqlParameter();
                    param.ParameterName="@Customer_Id";
                    param.Value=m.CustomerId;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @Customer_Id

                    #region @Delivery_ID
                    param  = new SqlParameter();
                    param.ParameterName="@Delivery_ID";
                    param.Value=m.DeliveryId;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @Delivery_ID

                    #region @Floor
                    param  = new SqlParameter();
                    param.ParameterName="@Floor";
                    param.Value=m.Floor;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion @Floor

                    #region @ID
                    param  = new SqlParameter();
                    param.ParameterName="@ID";
                    param.Value=m.Id;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @ID

                    #endregion Line 1

                    //@InfoItem,@Invoiced_Date,@InvoicePrinted,@Loyalty_Card,@Membership_No,
                    #region Line 2

                    #region @InfoItem
                    param  = new SqlParameter();
                    param.ParameterName="@InfoItem";
                    param.Value=m.InfoItem;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @InfoItem

                    #region @Invoiced_Date
                    param  = new SqlParameter();
                    param.ParameterName="@Invoiced_Date";
                    param.Value=m.InvoicedDate;
                    param.DbType=DbType.DateTime;
                    command.Parameters.Add(param);
                    #endregion @Invoiced_Date

                    #region @InvoicePrinted
                    param  = new SqlParameter();
                    param.ParameterName="@InvoicePrinted";
                    param.Value=m.InvoicePrinted;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @InvoicePrinted

                    #region @Loyalty_Card
                    param  = new SqlParameter();
                    param.ParameterName="@Loyalty_Card";
                    param.Value=m.LoyaltyCard;
                    param.DbType=DbType.String;
                    param.Size=50;
                    command.Parameters.Add(param);
                    #endregion @Loyalty_Card

                    #region @Membership_No
                    param  = new SqlParameter();
                    param.ParameterName="@Membership_No";
                    param.Value=m.MembershipNo;
                    param.DbType=DbType.String;
                    param.Size=50;
                    command.Parameters.Add(param);
                    #endregion @Membership_No

                    #endregion Line 2
                    
                    //@Order_No,@Order_Type,@Order_Type_Text,@Printed,@Shift_Report_ID,
                    #region Line 3

                    #region @Order_No
                    param  = new SqlParameter();
                    param.ParameterName="@Order_No";
                    param.Value=m.OrderNo;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @Order_No

                    #region @Order_Type
                    param  = new SqlParameter();
                    param.ParameterName="@Order_Type";
                    param.Value=m.OrderType;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @Order_Type

                    #region  @Order_Type_Text
                    param  = new SqlParameter();
                    param.ParameterName="@Order_Type_Text";
                    param.Value=m.OrderTypeText;
                    param.DbType=DbType.String;
                    param.Size=50;
                    command.Parameters.Add(param);
                    #endregion @Order_Type_Text

                    #region  @Printed
                    param  = new SqlParameter();
                    param.ParameterName="@Printed";
                    param.Value=m.Printed;
                    param.DbType=DbType.Boolean;
                    command.Parameters.Add(param);
                    #endregion @Printed

                    #region @Shift_Report_ID
                    param  = new SqlParameter();
                    param.ParameterName="@Shift_Report_ID";
                    param.Value=m.ShiftReportID;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion @Shift_Report_ID

                    #endregion Line 3
                    
                    //@Sales_Amount,@Sales_Type,@Seats,@Slip_No,@Staff_Id,
                    #region Line 4

                    #region @Sales_Amount
                    param  = new SqlParameter();
                    param.ParameterName="@Sales_Amount";
                    param.Value=m.SalesAmount;
                    param.DbType=DbType.Decimal;
                    command.Parameters.Add(param);
                    #endregion @Sales_Amount

                    #region @Sales_Type
                    param  = new SqlParameter();
                    param.ParameterName="@Sales_Type";
                    param.Value=m.SalesType;
                    param.DbType=DbType.String;
                    param.Size=50;
                    command.Parameters.Add(param);
                    #endregion @Sales_Type

                    #region @Seats
                    param  = new SqlParameter();
                    param.ParameterName="@Seats";
                    param.Value=m.Seats;
                    param.DbType=DbType.String;
                    param.Size=50;
                    command.Parameters.Add(param);
                    #endregion @Seats

                    #region @Slip_No
                    param  = new SqlParameter();
                    param.ParameterName="@Slip_No";
                    param.Value=m.SlipNo;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @Slip_No

                    #region @Staff_Id
                    param  = new SqlParameter();
                    param.ParameterName="@Staff_Id";
                    param.Value=m.StaffId;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion @Staff_Id
                    #endregion Line 4
                    
                    //@Store_Id,@Table_ID,@Table_Name,@Takeaway_Id,@Till_ID,
                    #region Line 5

                    #region  @Store_Id
                    param  = new SqlParameter();
                    param.ParameterName="@Store_Id";
                    param.Value=m.StoreId;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion @Store_Id

                    #region  @Table_ID
                    param  = new SqlParameter();
                    param.ParameterName="@Table_ID";
                    param.Value=m.TableId;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @Table_ID

                    #region @Table_Name
                    param  = new SqlParameter();
                    param.ParameterName="@Table_Name";
                    param.Value=m.TableName;
                    param.DbType=DbType.String;
                    param.Size=50;
                    command.Parameters.Add(param);
                    #endregion @Table_Name

                    #region @Takeaway_Id
                    param  = new SqlParameter();
                    param.ParameterName="@Takeaway_Id";
                    param.Value=m.TakeawayId;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @Takeaway_Id

                    #region @Till_ID
                    param  = new SqlParameter();
                    param.ParameterName="@Till_ID";
                    param.Value=m.TillId;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion @Till_ID

                    #endregion Line 5

                    //@Trans_Date,@Trans_Type,@TransactionText,@Z_Report_ID
                    #region Line 6

                    #region @Trans_Date
                    param  = new SqlParameter();
                    param.ParameterName="@Trans_Date";
                    param.Value=m.TransDate;
                    param.DbType=DbType.DateTime;
                    command.Parameters.Add(param);
                    #endregion @Trans_Date

                    #region @Trans_Type
                    param  = new SqlParameter();
                    param.ParameterName="@Trans_Type";
                    param.Value=m.TransType;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @Trans_Type

                    #region @TransactionText
                    param  = new SqlParameter();
                    param.ParameterName="@TransactionText";
                    param.Value=m.TransactionText;
                    param.DbType=DbType.String;
                    param.Size=50;
                    command.Parameters.Add(param);
                    #endregion @TransactionText

                    #region  @Z_Report_ID
                    param  = new SqlParameter();
                    param.ParameterName="@Z_Report_ID";
                    param.Value=m.ZReportID;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion @Z_Report_ID
                    #endregion Line 6

                    #endregion Param
                    result=command.ExecuteNonQuery();
                }
            }
            #endregion Execute SQL

            return result;
        }
    }
}