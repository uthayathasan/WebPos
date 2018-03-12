using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using  WebPos.Models;
namespace WebPos.DataAccess
{
    public class EposTransactionDA
    {
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
                        try{m.InvoicedDate=reader.GetDateTime(6).ToString("yyyy-mm-dd hh:mm:ss");}catch{}
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
                        try{m.TransDate=reader.GetDateTime(21).ToString("yyyy-mm-dd hh:mm:ss");}catch{}
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