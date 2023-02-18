using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Dynamic;
using System.Globalization;
using System.IO;
using System.Reflection;

public static class DBUtl
{
   public static string DB_CONNECTION;
   public static string DB_Message;

   public static DateTime DB_SERVER_DT
   {
      get
      {
         string dt = String.Format("{0:dd-MM-yyyy HH:mm:ss}",
                                   GetTable("SELECT GETDATE()").Rows[0][0]);
         return DateTime.ParseExact(dt, "dd-MM-yyyy HH:mm:ss", CultureInfo.InvariantCulture);
      }
   }

   public static DateTime DB_SERVER_SG_DT
   {
      get
      {
         string dt = String.Format("{0:dd-MM-yyyy HH:mm:ss}",
                                   GetTable("SELECT GETDATE() AT TIME ZONE 'UTC' AT TIME ZONE 'Singapore Standard Time'").Rows[0][0]);
         return DateTime.ParseExact(dt, "dd-MM-yyyy HH:mm:ss", CultureInfo.InvariantCulture);
      }
   }

   static DBUtl()
   {
      IConfiguration config =
         new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json")
            .Build();
      string env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
      if (env.Equals("Development"))
         DB_CONNECTION = config.GetConnectionString("DefaultConnection");
      else if (env.Equals("Production"))
         DB_CONNECTION = config.GetConnectionString("ProductionConnection");
   }

   public static List<dynamic> GetList(string sql, params object[] list)
   {
      return GetTable(sql, list).ToDynamic();
   }

   public static List<ModelClass> GetList<ModelClass>(string sql, params object[] list)
   {
      return GetTable(sql, list).ToStatic<ModelClass>();
   }

   private static List<DTO> ToStatic<DTO>(this DataTable dt)
   {
      var list = new List<DTO>();
      foreach (DataRow row in dt.Rows)
      {
         DTO obj = (DTO)Activator.CreateInstance(typeof(DTO));
         foreach (DataColumn column in dt.Columns)
         {
            PropertyInfo Prop = obj.GetType().GetProperty(column.ColumnName, BindingFlags.Public | BindingFlags.Instance);
            if (row[column] == DBNull.Value)
               Prop?.SetValue(obj, null);
            else
               Prop?.SetValue(obj, row[column]);
         }
         list.Add(obj);
      }
      return list;
   }

   private static List<dynamic> ToDynamic(this DataTable dt)
   {
      var dynamicDt = new List<dynamic>();
      foreach (DataRow row in dt.Rows)
      {
         dynamic dyn = new ExpandoObject();
         foreach (DataColumn column in dt.Columns)
         {
            var dic = (IDictionary<string, object>)dyn;
            dic[column.ColumnName] = row[column];
         }
         dynamicDt.Add(dyn);
      }
      return dynamicDt;
   }

   public static DataTable GetTable(string sql, params object[] list)
   {
      List<String> escParams = new List<String>();
      foreach (object o in list)
      {
         escParams.Add(EscQuote(o?.ToString()));
      }
      string escSQL = String.Format(sql, escParams.ToArray());

      DataTable dt = new DataTable();
      using (SqlConnection dbConn = new SqlConnection(DB_CONNECTION))
      using (SqlDataAdapter dAdptr = new SqlDataAdapter(escSQL, dbConn))
      {
         try
         {
            dAdptr.Fill(dt);
            return dt;
         }

         catch (System.Exception ex)
         {
            DB_Message = ex.Message;
            return null;
         }
      }
   }

   public static int ExecSQL(string sql, params object[] list)
   {
      List<String> escParams = new List<String>();
      foreach (object o in list)
      {
         if (o == null)
            escParams.Add("");
         else
            escParams.Add(EscQuote(o.ToString()));
      }
      string escSQL = String.Format(sql, escParams.ToArray());

      int rowsAffected = 0;
      using (SqlConnection dbConn = new SqlConnection(DB_CONNECTION))
      using (SqlCommand dbCmd = dbConn.CreateCommand())
      {
         try
         {
            dbConn.Open();
            dbCmd.CommandText = escSQL;
            rowsAffected = dbCmd.ExecuteNonQuery();
         }

         catch (System.Exception ex)
         {
            DB_Message = ex.Message;
            rowsAffected = -1;
         }
      }
      return rowsAffected;
   }

   public static string EscBraces(this string line)
   {
      return line?.Replace("{", "{{").Replace("}", "}}");
   }

   public static string EscQuote(this string line)
   {
      return line?.Replace("'", "''");
   }
}
