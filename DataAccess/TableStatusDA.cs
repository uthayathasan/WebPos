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
            Sql +="set SlipNo=L.Slip_No,CustomerId=L.Customer_Id ";
            Sql +="from (select Slip_No,Table_Id,Seats,Customer_Id from " + Epos_Transaction+") L ";
            Sql +="where L.Table_Id=TableId ";

            Sql +="Update @Final ";
            Sql +="set NoOfItems=E.NoOfItems ";
            Sql +="from (select Trans_Id,sum(Quantity) NoOfItems from " +Epos_Trans_Line ;
            Sql +="where Line_Status=0 and Entry_Type=0 and Quantity>0 and IsCharge=0 ";
            Sql +="group by Trans_Id) as E ";
            Sql +="where SlipNo=E.Trans_Id ";

            Sql +="Update @Final ";
            Sql +="set NoOfKitchenItems= E.NoOfKitchenItems from( ";
            Sql +="select Trans_Id,sum(Quantity) NoOfKitchenItems from C00050_S0001_T1_Epos_Trans_Line ";
            Sql +="where Line_Status=0 and Entry_Type=0 and Quantity>0 and Kitchen_Print=1 and IsCharge=0 ";
            Sql +="group by Trans_Id) as E ";
            Sql +="where SlipNo=E.Trans_Id ";

            Sql +="";
            #endregion SQL
            return lm;
        }
    }
}