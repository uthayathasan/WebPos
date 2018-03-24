using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using  WebPos.Models;
namespace WebPos.DataAccess
{
    public class DeviceDA
    {
        public List<Device> GetDeviceDetails(string  connectionString,string deviceId)
        {
            List<Device> lm=new List<Device>();
            string Sql="";
            #region SQL
            Sql +="select DeviceId,CustomerId,StoreId,TillId,StoreName from DeviceDetails ";
            Sql +="where DeviceId=@DeviceId ";
            #endregion SQL
            #region Execute SQL
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(Sql, connection))
                {
                    #region Param
                    SqlParameter param  = new SqlParameter();
                    param.ParameterName="@DeviceId";
                    param.Value=deviceId;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion Param
                    SqlDataReader reader = command.ExecuteReader();
                    while(reader.Read())
                    {
                        Device m=new Device();
                        #region  Fill Model
                        try{m.DeviceId=reader.GetString(0);}catch{}
                        try{m.CustomerId=reader.GetString(1);}catch{}
                        try{m.StoreId=reader.GetString(2);}catch{}
                        try{m.TillId=reader.GetString(3);}catch{}
                        try{m.StoreName=reader.GetString(4);}catch{}
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