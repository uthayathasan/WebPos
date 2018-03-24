using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using WebPos.Models;
namespace WebPos.DataAccess{
    public class MenuHeaderDA
    {
        public List<MenuHeader> GetMenuHeadersByStoreIdCustomerId(string connectionString,string CustomerId,string StoreId)
        {
            List<MenuHeader> lm =new List<MenuHeader>();
            string Sql="";
            #region SQL
            Sql+="select Bootstrap_Button,Colour,Html_Colour,[Description],Menu_ID,Priority_No,Hotline_No ";
            Sql+="from "+CustomerId+"_"+StoreId+"_"+"Menu_Header " ;
            Sql+="order by Priority_No ";
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
                        MenuHeader m=new MenuHeader();
                        #region Fill Model
                        try{m.BootstrapButton=reader.GetString(0);}catch{}
                        try{m.Colour=reader.GetString(1);}catch{}
                        try{m.HtmlColour=reader.GetString(2);}catch{}
                        try{m.Description=reader.GetString(3);}catch{}
                        try{m.MenuId=reader.GetString(4);}catch{}
                        try{m.PriorityNo=reader.GetInt32(5);}catch{}
                        try{m.HotlineNo=reader.GetInt32(6);}catch{}
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