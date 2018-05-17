using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using  WebPos.Models;
namespace WebPos.DataAccess{
    public class VatDA{
        public List<Vat> GetVatsByStoreIdCustomerId(string connectionString,string CustomerId,string StoreId )
        {
            List<Vat> lm=new List<Vat>();
            string Sql="";
            #region SQL
            Sql +="select ID,[Description],Rate from ";
            Sql +=CustomerId+"_"+StoreId+"_"+"VAT ";
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
                        Vat m=new Vat();
                        #region Fill Model
                        try{m.Id=reader.GetString(0);}catch{}
                        try{m.Description=reader.GetString(1);}catch{}
                        try{m.Rate=reader.GetDecimal(2);}catch{}
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