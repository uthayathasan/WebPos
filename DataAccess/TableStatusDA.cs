using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using WebPos.Models;
namespace WebPos.DataAccess
{
    public class TableStatusDA
    {
        public List<TableStatus> GetTableStatusByStoreIdCustomerId(string  connectionString,string CustomerId,string StoreId,string TillId)
        {
            List<TableStatus> lm=new List<TableStatus>();
            string Epos_Transaction=CustomerId+"_"+StoreId+"_"+TillId+"_"+"EPOS_Transaction ";
            string Epos_Trans_Line=CustomerId+"_"+StoreId+"_"+TillId+"_"+"EPOS_Trans_Line ";
            string TableLines=CustomerId+"_"+StoreId+"_"+"Table_Lines ";
            string StoreSettings=CustomerId+"_"+StoreId+"_"+"StoreSettings ";
            string Sql="";
            #region SQL
            Sql +="declare @Final Table ";
            Sql +="(TableId int,Seats varchar(20),TableName varchar(50),x int,y int, ";
            Sql +="Show bit,SlipNo int,CustomerId int,NoOfItems int,NoOfKitchenItems int, ";
            Sql +="NoOfNonServedItems int,Total decimal(20,5),CounterPrint bit,[Floor] varchar(20)) ";

            Sql +="insert into @Final ";
            Sql +="(TableId,TableName,x,y,Show,[Floor]) ";
            Sql +="select Table_Id,Table_Name,x,y,Show,[Floor] from "+TableLines;

            Sql +="update @Final ";
            Sql +="set [Floor]='' ";
            Sql +="where [Floor] is null ";

            Sql +="update @Final ";
            Sql +="set Seats=0 ";
            Sql +="where Seats is null ";

            Sql +="update @Final ";
            Sql +="set SlipNo=0 ";
            Sql +="where SlipNo is null ";

            Sql +="update @Final ";
            Sql +="set CustomerId=0 ";
            Sql +="where CustomerId is null ";

            Sql +="update @Final ";
            Sql +="set NoOfItems=0 ";
            Sql +="where NoOfItems is null ";

            Sql +="update @Final ";
            Sql +="set NoOfKitchenItems=0 ";
            Sql +="where NoOfKitchenItems is null ";

            Sql +="update @Final ";
            Sql +="set NoOfNonServedItems=0 ";
            Sql +="where  NoOfNonServedItems is null ";

            Sql +="update @Final ";
            Sql +="set Total=0 ";
            Sql +="where Total is null ";

            Sql +="update @Final ";
            Sql +="set CounterPrint=0 ";
            Sql +="where  CounterPrint is null ";

            Sql +="Update @Final ";
            Sql +="set SlipNo=L.Slip_No,CustomerId=L.Customer_Id,Seats=L.Seats ";
            Sql +="from (select Slip_No,Table_Id,Seats,Customer_Id from " + Epos_Transaction+") L ";
            Sql +="where L.Table_Id=TableId ";

            Sql +="Update @Final ";
            Sql +="set NoOfItems=E.NoOfItems ";
            Sql +="from (select Trans_Id,sum(Quantity) NoOfItems from " +Epos_Trans_Line ;
            Sql +="where Line_Status=0 and Entry_Type=0 and IsCharge=0 ";
            Sql +="group by Trans_Id) as E ";
            Sql +="where SlipNo=E.Trans_Id ";

            Sql +="Update @Final ";
            Sql +="set NoOfKitchenItems= E.NoOfKitchenItems from( ";
            Sql +="select Trans_Id,sum(Quantity) NoOfKitchenItems from "+ Epos_Trans_Line;
            Sql +="where Line_Status=0 and Entry_Type=0 and Quantity>0 and Kitchen_Print=1 and IsCharge=0 ";
            Sql +="group by Trans_Id) as E ";
            Sql +="where SlipNo=E.Trans_Id ";

            Sql +="declare @delayTime int ";
            Sql +="set @delayTime=(select DelayTime from " +StoreSettings+") ";
            Sql +="if(@delayTime is null) ";
            Sql +="begin ";
            Sql +="set @delayTime=30 ";
            Sql +="end ";

            Sql +="declare @NonServedTransactions Table ";
            Sql +="(Trans_ID int,NoOfNonServedItems int) ";

            Sql +="insert into @NonServedTransactions ";
            Sql +="(Trans_ID,NoOfNonServedItems) ";

            Sql +="select Trans_ID,sum(Quantity) NoOfNonServedItems from "+Epos_Trans_Line;
            Sql +="where Line_Status=0 and Kitchen_Print=1 and Kitchen_Printed=1 and  Quantity>0 and IsCharge=0 and ";
            Sql +="Entry_Type='0' and Served=0 and DATEADD(mi,@delayTime,Kitchen_Printed_Time)<GETDATE() ";
            Sql +="group by Trans_ID ";

            Sql +="update @Final ";
            Sql +="set NoOfNonServedItems=N.NoOfNonServedItems ";
            Sql +="from (select Trans_ID,NoOfNonServedItems from @NonServedTransactions) N ";
            Sql +="where SlipNo=N.Trans_ID ";

            Sql +="update @Final ";
            Sql +="set Total=E.Total ";
            Sql +="from(select Trans_Id,SUM(Net_Amount) Total from "+Epos_Trans_Line ;
            Sql +="where Line_Status=0 and Entry_Type=0 group by Trans_ID) E ";
            Sql +="where SlipNo=E.Trans_ID ";

            Sql +="update @Final ";
            Sql +="set CounterPrint=ET.Counter_Print ";
            Sql +="from (select Slip_No, Counter_Print from "+Epos_Transaction+") ET ";
            Sql +="where SlipNo=ET.Slip_No ";

            Sql +="select CounterPrint,CustomerId,[Floor],Seats,Show,SlipNo, ";
            Sql +="NoOfItems,NoOfKitchenItems,NoOfNonServedItems,TableId, ";
            Sql +="TableName,Total,x,y from @Final ";
            #endregion SQL

            #region Execute SQL
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(Sql, connection))
                {
                    SqlDataReader reader = command.ExecuteReader();
                    while(reader.Read())
                    {
                        TableStatus m=new TableStatus();
                        #region Fill Model
                        try{m.CounterPrint=reader.GetBoolean(0);}catch{}
                        try{m.CustomerId=reader.GetInt32(1);}catch{}
                        try{m.Floor=reader.GetString(2);}catch{}
                        try{m.Seats=reader.GetString(3);}catch{}
                        try{m.Show=reader.GetBoolean(4);}catch{}
                        try{m.SlipNo=reader.GetInt32(5);}catch{}
                        try{m.NoOfItems=reader.GetInt32(6);}catch{}
                        try{m.NoOfKitchenItems=reader.GetInt32(7);}catch{}
                        try{m.NoOfNonServedItems=reader.GetInt32(8);}catch{}
                        try{m.TableID=reader.GetInt32(9);}catch{}
                        try{m.TableName=reader.GetString(10);}catch{}
                        try{m.Total=reader.GetDecimal(11);}catch{}
                        try{m.x=reader.GetInt32(12);}catch{}
                        try{m.y=reader.GetInt32(13);}catch{}
                        if(m.SlipNo==0) m.Colour="blue";
                        if(m.SlipNo>0) m.Colour="green";
                        if(m.NoOfNonServedItems>0) m.Colour="red";
                        if(m.CounterPrint) m.Colour="yellow";
                        if(!m.Show) m.Colour="white";
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