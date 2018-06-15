using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using  WebPos.Models;
namespace WebPos.DataAccess
{
    public class AuthorizationDA
    {
        public List<Authorization> GetAuthorizations(string  connectionString,string CustomerId,string StoreId)
        {
            List<Authorization> lm =new List<Authorization>();
            string Sql="";
            #region SQL
            Sql +="select Tag,Name,BackOffice,[Admin],Manager, ";
            Sql +="Supervisor,Cashier,Staff,[Type],RootTag, ";
            Sql +="ChildTag,[LineNo],Live  ";
            Sql +="from "+CustomerId+"_"+StoreId+"_"+"Authorization ";
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
                        Authorization m=new Authorization();
                        #region Fill Modal
                        //Tag,Name,BackOffice,[Admin],Manager,
                        #region Line 1
                        try{m.Tag=reader.GetString(0);}catch{}
                        try{m.Name=reader.GetString(1);}catch{}
                        try{m.BackOffice=reader.GetBoolean(2);}catch{}
                        try{m.Admin=reader.GetBoolean(3);}catch{}
                        try{m.Manager=reader.GetBoolean(4);}catch{}
                        #endregion Line 1
                        //Supervisor,Cashier,Staff,[Type],RootTag,
                        #region  Line 2
                        try{m.Supervisor=reader.GetBoolean(5);}catch{}
                        try{m.Cashier=reader.GetBoolean(6);}catch{}
                        try{m.Staff=reader.GetBoolean(7);}catch{}
                        try{m.Type=reader.GetString(8);}catch{}
                        try{m.RootTag=reader.GetString(9);}catch{}
                        #endregion Line 2
                        //ChildTag,[LineNo],Live
                        #region Line 3
                        try{m.ChildTag=reader.GetString(10);}catch{}
                        try{m.LineNo=reader.GetInt32(11);}catch{}
                        try{m.Live=reader.GetBoolean(12);}catch{}
                        #endregion Line 3
                        #endregion Fill Modal
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