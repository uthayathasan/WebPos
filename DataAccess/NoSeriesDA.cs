using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using WebPos.Models;
namespace WebPos.DataAccess
{
    public class NoSeriesDA
    {
        public int GetLastTransNo(string  connectionString,string CustomerId,string StoreId,string TillId)
        {
            int last_trans_no=0;
            #region SQL
            string Sql="select Last_Trans_No from "+CustomerId+"_"+StoreId+"_"+TillId+"_"+"No_Series " ;
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
                        last_trans_no=reader.GetInt32(0);
                    }
                    reader.Close();
                }
            }
            #endregion Execute SQL
            return last_trans_no;
        }

        public int UpdateLastTransNo(string  connectionString,string CustomerId,string StoreId,string TillId,int val)
        {
            int result=0;
            #region SQL
            string Sql="update "+CustomerId+"_"+StoreId+"_"+TillId+"_"+"No_Series ";
            Sql +="set Last_Trans_No=@Last_Trans_No ";
            #endregion SQL
            #region Execute SQL
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(Sql, connection))
                {
                    #region Param
                    SqlParameter param  = new SqlParameter();
                    param.ParameterName="@Last_Trans_No";
                    param.Value=val;
                    param.DbType=DbType.Int32;
                    command.Parameters.Add(param);
                    #endregion Param

                    result=command.ExecuteNonQuery();
                }
            }
            #endregion Execute SQL

            return result;
        }
    }
}