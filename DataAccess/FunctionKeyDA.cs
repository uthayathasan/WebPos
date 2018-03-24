using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using  WebPos.Models;
namespace WebPos.DataAccess
{
    public class FunctionKeyDA
    {
        public List<FunctionKey> GetFunctionKeys(string  connectionString,string CustomerId,string StoreId)
        {
            List<FunctionKey> lm=new List<FunctionKey>();
            string Sql="";
            #region Sql
            Sql +="select [Index],[Mod],[Description],[Job],Colour,Html_Colour,Bootstrap_Button,Visible ";
            Sql +="from "+CustomerId+"_"+StoreId+"_"+"FunctionKeys " ;
            Sql +="order by [Mod],[Index] ";
            #endregion Sql
            #region Execute SQL
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(Sql, connection))
                {
                    SqlDataReader reader = command.ExecuteReader();
                    while(reader.Read())
                    {
                        FunctionKey m=new FunctionKey();
                        #region Fill Model
                        //[Index],[Mod],[Description],[Function],Colour,Html_Colour,Bootstrap_Button,Visible
                        try{m.Index=reader.GetInt32(0);}catch{}
                        try{m.Mod=reader.GetString(1);}catch{}
                        try{m.Description=reader.GetString(2);}catch{}
                        try{m.Job=reader.GetString(3);}catch{}
                        try{m.Colour=reader.GetString(4);}catch{}
                        try{m.HtmlColour=reader.GetString(5);}catch{}
                        try{m.BootstrapButton=reader.GetString(6);}catch{}
                        try{m.Visible=reader.GetBoolean(7);}catch{}
                        #endregion Fill Model
                        lm.Add(m);
                    }
                    reader.Close();
                }
            }
            #endregion  Execute SQL
            return lm;
        }

    }
}