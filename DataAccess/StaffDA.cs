using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using WebPos.Models;
namespace WebPos.DataAccess
{
     public class StaffDA
     {
         public List<Staff> GetStaffDetailsByStoreIdCustomerId(string connectionString,string CustomerId,string StoreId)
         {
            List<Staff> lm=new List<Staff>();
            string Sql="";
            #region SQL
            Sql+="select UserId,[Password],Name,Address1,Address2, ";
            Sql+="City,PostCode,Telephone,Email,[Role] from  ";
            Sql+=CustomerId+"_"+StoreId+"_"+"Staff " ;
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
                        Staff m=new Staff();
                        #region Fill Model
                        try{m.UserId=reader.GetString(0);}catch{}
                        try{m.Password=reader.GetString(1);}catch{}
                        try{m.Name=reader.GetString(2);}catch{}
                        try{m.Address1=reader.GetString(3);}catch{}
                        try{m.Address2=reader.GetString(4);}catch{}
                        try{m.City=reader.GetString(5);}catch{}
                        try{m.PostCode=reader.GetString(6);}catch{}
                        try{m.Telephone=reader.GetString(7);}catch{}
                        try{m.Email=reader.GetString(8);}catch{}
                        try{m.Role=reader.GetString(9);}catch{}
                        #endregion Fill Model
                        lm.Add(m);
                    }
                    reader.Close();
                }
            }
            #endregion Execute SQL
            if(lm.Count>0) return lm;
            else return new List<Staff>();
         }
     }
}