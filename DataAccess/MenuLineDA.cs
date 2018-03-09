using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using WebPos.Models;
namespace WebPos.DataAccess
{
    public class MenuLineDA
    {
        public List<MenuLine> GetMenuLinesByStoreIdCustomerId(string connectionString,string CustomerId,string StoreId,string MenuId)
        {
            List<MenuLine> lm=new List<MenuLine>();
            string sql="";
            #region SQL
             sql+="select Bootstrap_Button,Colour,[Description],Html_Colour,ImagePath,";
             sql+="ISImage,Key_Command,[Key_ID],Key_Value,Menu_ID ";
             sql+="from "+CustomerId+"_"+StoreId+"_"+"Menu_Line ";
             sql+="where Menu_ID=@Menu_ID ";
             sql+="order by [Key_ID] ";
            #endregion SQL
            #region Execute SQL
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    #region Param
                    SqlParameter param  = new SqlParameter();
                    param.ParameterName="@Menu_ID";
                    param.Value=MenuId;
                    param.DbType=DbType.String;
                    param.Size=20;
                    command.Parameters.Add(param);
                    #endregion Param
                    SqlDataReader reader = command.ExecuteReader();
                    while(reader.Read())
                    {
                        MenuLine m=new MenuLine();
                        #region Fill Model
                        m.BootstrapButton=reader.GetString(0);
                        m.Colour=reader.GetString(1);
                        m.Description=reader.GetString(2);
                        m.HtmlColour=reader.GetString(3);
                        m.ImagePath=reader.GetString(4);
                        m.IsImage=reader.GetBoolean(5);
                        m.KeyCommand=reader.GetInt32(6);
                        m.KeyId=reader.GetInt32(7);
                        m.KeyValue=reader.GetString(8);
                        m.MenuId=reader.GetString(9);
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