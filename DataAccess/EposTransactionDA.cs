using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using  WebPos.Models;
namespace WebPos.DataAccess
{
    public class EposTransactionDA
    {
        public int InsertTransaction(string  connectionString,string CustomerId,string StoreId,string TillId,EposTransaction m)
        {
            int SlipNo=0;
            string Sql="";
            #region SQL
            Sql +="declare @Slip_No int ";
            Sql +="set @Slip_No=(select TOP 1 Last_No_Used from "+CustomerId+"_"+StoreId+"_"+TillId+"_"+"No_Series) ";
            Sql +="if(@Slip_No is null) ";
            Sql +="begin ";
            Sql +="set @Slip_No=1000000 ";
            Sql +="end ";
            Sql +="set @Slip_No=@Slip_No+1 ";

            Sql +="declare @Order_No int ";
            Sql +="set @Order_No=(select TOP 1 Order_No from "+CustomerId+"_"+StoreId+"_"+TillId+"_"+"No_Series) ";
            Sql +="if(@Order_No is null) ";
            Sql +="begin ";
            Sql +="set @Order_No=0 ";
            Sql +="end ";
            Sql +="set @Order_No=@Order_No+1 ";

            Sql +="insert into "+CustomerId+"_"+StoreId+"_"+TillId+"_"+"EPOS_Transaction ";
            Sql +="(Counter_Print,Customer_Id,Delivery_ID,[Floor], ";
            Sql +="InfoItem,Invoiced_Date,InvoicePrinted,Loyalty_Card,Membership_No, ";
            Sql +="Order_No,Order_Type,Order_Type_Text,Seats,Slip_No, ";
            Sql +="Staff_Id,Store_Id,Takeaway_Id,Table_ID,Table_Name, ";
            Sql +="Till_ID,Trans_Date,Trans_Type,TransactionText) ";
            Sql +="values ";
            Sql +="(@Counter_Print,@Customer_Id,@Delivery_ID,@Floor, ";
            Sql +="@InfoItem,@Invoiced_Date,@InvoicePrinted,@Loyalty_Card,@Membership_No, ";
            Sql +="@Order_No,@Order_Type,@Order_Type_Text,@Seats,@Slip_No, ";
            Sql +="@Staff_Id,@Store_Id,@Takeaway_Id,@Table_ID,@Table_Name, ";
            Sql +="@Till_ID,@Trans_Date,@Trans_Type,@TransactionText) ";

            Sql +="update "+CustomerId+"_"+StoreId+"_"+TillId+"_"+"No_Series ";
            Sql +="set Last_No_Used = @Slip_No ";

            Sql +="update "+CustomerId+"_"+StoreId+"_"+TillId+"_"+"No_Series ";
            Sql +="set Order_No = @Order_No ";
            
            Sql +="select @Slip_No ";

            #endregion SQL
            #region Execute SQL
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(Sql, connection))
                {
                    #region Param
                    //@Counter_Print,@Customer_Id,@Delivery_ID,@Floor,
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
                    //@Order_No,@Order_Type,@Order_Type_Text,@Seats,@Slip_No,
                    #region Line 3
                    #region @Order_No
                    /*
                    param  = new SqlParameter();
                    param.ParameterName="@Order_No";
                    param.Value=m.OrderNo;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    */
                    #endregion @Order_No
                    #region @Order_Type
                    param  = new SqlParameter();
                    param.ParameterName="@Order_Type";
                    param.Value=m.OrderType;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @Order_Type
                    #region @Order_Type_Text
                    param  = new SqlParameter();
                    param.ParameterName="@Order_Type_Text";
                    param.Value=m.OrderTypeText;
                    param.DbType=DbType.String;
                    param.Size=50;
                    command.Parameters.Add(param);
                    #endregion @Order_Type_Text
                    #region @Seats
                    param  = new SqlParameter();
                    param.ParameterName="@Seats";
                    param.Value=m.Seats;
                    param.DbType=DbType.String;
                    param.Size=50;
                    command.Parameters.Add(param);
                    #endregion @Seats
                    #region @Slip_No
                    /*
                    param  = new SqlParameter();
                    param.ParameterName="@Slip_No";
                    param.Value=m.SlipNo;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    */
                    #endregion @Slip_No
                    #endregion Line 3
                    //@Staff_Id,@Store_Id,@Takeaway_Id,@Table_ID,@Table_Name,
                    #region Line 4
                    #region @Staff_Id
                    param  = new SqlParameter();
                    param.ParameterName="@Staff_Id";
                    param.Value=m.StaffId;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion @Staff_Id
                    #region @Store_Id
                    param  = new SqlParameter();
                    param.ParameterName="@Store_Id";
                    param.Value=m.StoreId;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion @Store_Id
                    #region @Takeaway_Id
                    param  = new SqlParameter();
                    param.ParameterName="@Takeaway_Id";
                    param.Value=m.TakeawayId;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion @Takeaway_Id
                    #region @Table_ID
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
                    #endregion Line 4
                    //@Till_ID,@Trans_Date,@Trans_Type,@TransactionText
                    #region Line 5
                    #region @Till_ID
                    param  = new SqlParameter();
                    param.ParameterName="@Till_ID";
                    param.Value=m.TillId;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion @Till_ID
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
                    #endregion Line 5
                    #endregion Param

                    var result=command.ExecuteScalar();
                    int.TryParse(result.ToString().Trim(),out SlipNo);
                }
            }
            #endregion Execute SQL
            return SlipNo;
        }
        public List<EposTransaction> GetTranactionBySlipNo(string  connectionString,string CustomerId,string StoreId,string TillId, int SlipNo)
        {
            List<EposTransaction> lm=new List<EposTransaction>();
            string Sql="";
            #region SQL
            Sql +="select Counter_Print,Customer_Id,Delivery_ID,[Floor],Id,InfoItem,";
            Sql +="Invoiced_Date,InvoicePrinted,Loyalty_Card,Membership_No,Order_No,";
            Sql +="Order_Type,Order_Type_Text,Seats,Slip_No,Staff_Id,Store_Id,";
            Sql +="Takeaway_Id,Table_ID,Table_Name,Till_ID,Trans_Date,Trans_Type,TransactionText ";
            Sql +="from "+CustomerId+"_"+StoreId+"_"+TillId+"_"+"EPOS_Transaction ";
            Sql +="where Slip_No=@Slip_No ";
            #endregion SQL
            #region Execute SQL
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(Sql, connection))
                {
                    #region Param
                    SqlParameter param  = new SqlParameter();
                    param.ParameterName="@Slip_No";
                    param.Value=SlipNo;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion Param
                    SqlDataReader reader = command.ExecuteReader();
                    while(reader.Read())
                    {
                        EposTransaction m=new EposTransaction();
                        #region Fill Model
                        //Counter_Print,Customer_Id,Delivery_ID,[Floor],Id,InfoItem,
                        #region Line 1
                        try{m.CounterPrint=reader.GetBoolean(0);}catch{}
                        try{m.CustomerId=reader.GetInt32(1);}catch{}
                        try{m.DeliveryId=reader.GetInt32(2);}catch{}
                        try{m.Floor=reader.GetString(3);}catch{}
                        try{m.Id=reader.GetInt32(4);}catch{}
                        try{m.InfoItem=reader.GetInt32(5);}catch{}
                        #endregion Line 1
                        //Invoiced_Date,InvoicePrinted,Loyalty_Card,Membership_No,Order_No,
                        #region Line 2
                        try{m.InvoicedDate=reader.GetDateTime(6).ToString("yyyy-MM-dd HH:mm:ss");}catch{}
                        try{m.InvoicePrinted=reader.GetBoolean(7);}catch{}
                        try{m.LoyaltyCard=reader.GetString(8);}catch{}
                        try{m.MembershipNo=reader.GetString(9);}catch{}
                        try{m.OrderNo=reader.GetInt32(10);}catch{}
                        #endregion Line 2
                        //Order_Type,Order_Type_Text,Seats,Slip_No,Staff_Id,Store_Id,
                        #region Line 3
                        try{m.OrderType=reader.GetInt32(11);}catch{}
                        try{m.OrderTypeText=reader.GetString(12);}catch{}
                        try{m.Seats=reader.GetString(13);}catch{}
                        try{m.SlipNo=reader.GetInt32(14);}catch{}
                        try{m.StaffId=reader.GetString(15);}catch{}
                        try{m.StoreId=reader.GetString(16);}catch{}
                        #endregion Line 3
                        //Takeaway_Id,Table_ID,Table_Name,Till_ID,Trans_Date,Trans_Type,TransactionText
                        #region Line 4
                        try{m.TakeawayId=reader.GetInt32(17);}catch{}
                        try{m.TableId=reader.GetInt32(18);}catch{}
                        try{m.TableName=reader.GetString(19);}catch{}
                        try{m.TillId=reader.GetString(20);}catch{}
                        try{m.TransDate=reader.GetDateTime(21).ToString("yyyy-MM-dd HH:mm:ss");}catch{}
                        try{m.TransType=reader.GetInt32(22);}catch{}
                        try{m.TransactionText=reader.GetString(23);}catch{}
                        #endregion Line 4
                        #endregion Fill Model
                        lm.Add(m);
                    }
                }
            }
            #endregion Execute SQL
            return lm;
        }
    }
}