using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using WebPos.Models;
namespace WebPos.DataAccess{
    public class TakeawayStatusDA
    {
         public List<TakeawayStatus> GetTakeawayStatusByStoreIdCustomerId(string  connectionString,string CustomerId,string StoreId,string TillId)
         {
            List<TakeawayStatus> lm=new List<TakeawayStatus>();
            string Epos_Transaction=CustomerId+"_"+StoreId+"_"+TillId+"_"+"EPOS_Transaction ";
            string Epos_Trans_Line=CustomerId+"_"+StoreId+"_"+TillId+"_"+"EPOS_Trans_Line ";
            string StoreSettings=CustomerId+"_"+StoreId+"_"+"StoreSettings ";
            string Sql="";
            #region SQL
            Sql +="declare @TakeawayLines Table ";
            Sql +="(TakeawayId int) ";

            Sql +="declare @id int ";
            Sql +="set @id=1 ";

            Sql +="while @id<=90 ";
            Sql +="begin ";
            Sql +="insert into @TakeawayLines ";
            Sql +="(TakeawayId) ";
            Sql +="values(@id) ";
            Sql +="set @id=@id+1 ";
            Sql +="end ";

            Sql +="declare @TakeawayStatusDetails Table ";
            Sql +="(SlipNo int,Takeaway_Id int,Customer_Id int,NoOfItems int,NoOfKitchenItems int,NoOfNonServedItems int,Total decimal(20,5),CounterPrint bit) ";
            Sql +="insert into @TakeawayStatusDetails ";
            Sql +="(SlipNo,Takeaway_Id,Customer_Id) ";
            Sql +="select Slip_No,Takeaway_Id,Customer_Id from "+ Epos_Transaction;
            Sql +="where Takeaway_Id>0 ";

            Sql +="update @TakeawayStatusDetails ";
            Sql +="set NoOfItems= E.NoOfItems from( ";
            Sql +="select Trans_Id,sum(Quantity) NoOfItems from "+  Epos_Trans_Line ;
            Sql +="where Line_Status=0 and Entry_Type=0 and IsCharge=0 ";
            Sql +="group by Trans_Id) as E ";
            Sql +="where SlipNo=E.Trans_Id ";

            Sql +="update @TakeawayStatusDetails ";
            Sql +="set NoOfKitchenItems= E.NoOfKitchenItems from( ";
            Sql +="select Trans_Id,sum(Quantity) NoOfKitchenItems from "+Epos_Trans_Line ;
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

            Sql +="select Trans_ID,sum(Quantity) NoOfNonServedItems from "+Epos_Trans_Line ;
            Sql +="where Line_Status=0 and Kitchen_Print=1 and Kitchen_Printed=1 and  Quantity>0 and IsCharge=0 and ";
            Sql +="Entry_Type='0' and Served=0 and DATEADD(mi,@delayTime,Kitchen_Printed_Time)<GETDATE()  ";
            Sql +="group by Trans_ID ";

            Sql +="update @TakeawayStatusDetails ";
            Sql +="set NoOfNonServedItems=N.NoOfNonServedItems ";
            Sql +="from (select Trans_ID,NoOfNonServedItems from @NonServedTransactions) as N  ";
            Sql +="where SlipNo=N.Trans_ID ";

            Sql +="update @TakeawayStatusDetails ";
            Sql +="set Total=E.Total from( ";
            Sql +="select Trans_Id,SUM(Net_Amount) Total from "+Epos_Trans_Line ;
            Sql +="where Line_Status=0 and Entry_Type=0 group by Trans_ID) as E ";
            Sql +="where SlipNo=E.Trans_ID ";

            Sql +="update @TakeawayStatusDetails ";
            Sql +="set CounterPrint=ET.Counter_Print ";
            Sql +="from (select Slip_No, Counter_Print from " +Epos_Transaction+ ") as ET ";
            Sql +="where SlipNo=ET.Slip_No ";

            Sql +="declare @Final Table ";
            Sql +="(Takeaway_Id int,SlipNo int,Customer_Id int,NoOfItems int,NoOfKitchenItems int,NoOfNonServedItems int,Total decimal(20,5),CounterPrint bit) ";
            Sql +="insert into @Final ";
            Sql +="(Takeaway_Id,SlipNo,Customer_Id,NoOfItems,NoOfKitchenItems,NoOfNonServedItems,Total,CounterPrint) ";
            Sql +="select TakeawayId,SlipNo,Customer_Id,NoOfItems,NoOfKitchenItems,NoOfNonServedItems,Total,CounterPrint ";
            Sql +="from @TakeawayLines TL left join @TakeawayStatusDetails TS  ";
            Sql +="on TL.TakeawayId=Ts.Takeaway_Id ";

            Sql +="update @Final ";
            Sql +="set SlipNo=0 ";
            Sql +="where SlipNo is null ";

            Sql +="update @Final ";
            Sql +="set Customer_Id=0 ";
            Sql +="where Customer_Id is null ";

            Sql +="update @Final ";
            Sql +="set NoOfItems=0 ";
            Sql +="where NoOfItems is null ";

            Sql +="update @Final ";
            Sql +="set NoOfKitchenItems=0 ";
            Sql +="where NoOfKitchenItems is null ";

            Sql +="update @Final ";
            Sql +="set NoOfNonServedItems=0 ";
            Sql +="where NoOfNonServedItems is null ";

            Sql +="update @Final ";
            Sql +="set Total=0 ";
            Sql +="where Total is null ";

            Sql +="update @Final ";
            Sql +="set CounterPrint=0 ";
            Sql +="where CounterPrint is null ";

            Sql +="select Takeaway_Id,SlipNo,Customer_Id,NoOfItems,NoOfKitchenItems,NoOfNonServedItems,Total,CounterPrint ";
            Sql +="from @Final ";

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
                        TakeawayStatus m=new TakeawayStatus();
                        //Takeaway_Id,SlipNo,Customer_Id,NoOfItems,NoOfKitchenItems,
                        #region Fill Model
                        try{m.TakeawayId=reader.GetInt32(0);}catch{}
                        try{m.SlipNo=reader.GetInt32(1);}catch{}
                        try{m.CustomerId=reader.GetInt32(2);}catch{}
                        try{m.NoOfItems=reader.GetInt32(3);}catch{}
                        try{m.NoOfKitchenItems=reader.GetInt32(4);}catch{}
                        //NoOfNonServedItems,Total,CounterPrint
                        try{m.NoOfNonServedItems=reader.GetInt32(5);}catch{}
                        try{m.Total=reader.GetDecimal(6);}catch{}
                        try{m.CounterPrint=reader.GetBoolean(7);}catch{}

                        if(m.SlipNo==0) m.Colour="blue";
                        if(m.SlipNo>0) m.Colour="green";
                        if(m.NoOfNonServedItems>0) m.Colour="red";
                        if(m.CounterPrint) m.Colour="yellow";
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