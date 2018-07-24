using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using WebPos.Models;
namespace WebPos.DataAccess
{
    public class PostSalesDA
    {
        //EposTransactionDA,EposTransLineDA,PostedTransactionDA,PostedSalesLineDA,NoSeriesDA
        public int PostSales(string  connectionString,string CustomerId,string StoreId,string TillId,int SlipNo)
        {
            int result=0;
            EposTransactionDA eposTransactionDa =new EposTransactionDA();
            List<EposTransaction> list_epos_transaction=eposTransactionDa.
            GetTranactionBySlipNo(connectionString,CustomerId,StoreId,TillId,SlipNo);
            if(list_epos_transaction.Count==1)
            {
                if(SlipNo==list_epos_transaction[0].SlipNo)
                {
                    result =1;
                }
            }
            int CashEntryLines = 0;
            decimal CashEntryAmount = 0;
            int CardEntryLines = 0;
            decimal CardEntryAmount = 0;
            int OtherPaymentLines = 0;
            decimal OtherPaymentAmount = 0;
            int EntryTypeOneLines = 0;
            decimal EntryTypeOneAmount = 0;
            int EntryTypeZeroLines=0;
            decimal EntryTypeZeroAmount=0;
            if(result==1)
            {
                NoSeriesDA noSeriesDa =new NoSeriesDA();
                int last_trans_no =noSeriesDa.GetLastTransNo(connectionString,CustomerId,StoreId,TillId);
                last_trans_no=last_trans_no+1;

                PostedSalesLineDA postedSalesLineDa =new PostedSalesLineDA();
                PostedTransactionDA postedTransactionDa =new PostedTransactionDA();
                VoidedTransLineDA voidedTransLineDa=new VoidedTransLineDA();
                #region EposTransLines

                EposTransLineDA eposTransLineDa=new EposTransLineDA();
                List<EposTransLine> list_epos_trans_line=eposTransLineDa.
                GetTransLinesByTransId(connectionString,CustomerId,StoreId,TillId,SlipNo);

                for(int i=0;i<list_epos_trans_line.Count;i++)
                {
                    EposTransLine epos_trans_line=list_epos_trans_line[i];
                    if (!epos_trans_line.LineStatus)
                    {
                        #region Find Payment Type
                        if(epos_trans_line.EntryType==2)
                        {
                            #region Cash
                            if(epos_trans_line.Number.Equals("1"))
                            {
                                CashEntryLines++;
                                CashEntryAmount += epos_trans_line.NetAmount;
                            }
                            #endregion Cash
                            #region CARD
                            else if(epos_trans_line.Number.Equals("2"))
                            {
                                CardEntryLines++;
                                CardEntryAmount += epos_trans_line.NetAmount;
                            }
                            #endregion 
                            #region Other
                            else 
                            {
                                OtherPaymentLines++;
                                OtherPaymentAmount += epos_trans_line.NetAmount;
                            }
                            #endregion Other
                        }
                        #endregion Find Payment Type
                        #region Entry Type One
                        else if(epos_trans_line.EntryType==1)
                        {
                            EntryTypeOneLines++;
                            EntryTypeOneAmount += epos_trans_line.NetAmount;
                        }
                        #endregion Entry Type One
                        #region Entry Type Zero
                        else if(epos_trans_line.EntryType==0)
                        {
                             EntryTypeZeroLines++;
                             EntryTypeZeroAmount +=epos_trans_line.NetAmount;
                        }
                        #endregion Entry Type Zero

                    }
                    else
                    {
                        #region Epos_Trans_Line To Void Line
                        VoidedTransLine voided_trans_line=new VoidedTransLine();
                        #region Fill
                        voided_trans_line.Amount=epos_trans_line.Amount;
                        voided_trans_line.Barcode=epos_trans_line.Barcode;
                        voided_trans_line.BarPrint=epos_trans_line.BarPrint;
                        voided_trans_line.BarPrinted=epos_trans_line.BarPrinted;
                        voided_trans_line.BarPrintedTime=epos_trans_line.BarPrintedTime;
                        voided_trans_line.DepartmentId=epos_trans_line.DepartmentId;
                        voided_trans_line.Description=epos_trans_line.Description;
                        voided_trans_line.DiscountAmount=epos_trans_line.DiscountAmount;
                        voided_trans_line.Discountable=epos_trans_line.Discountable;
                        voided_trans_line.DiscountPercentage=epos_trans_line.DiscountPercentage;
                        voided_trans_line.EntryType=epos_trans_line.EntryType;
                        voided_trans_line.FreeText=epos_trans_line.FreeText;
                        voided_trans_line.IsCharge=epos_trans_line.IsCharge;
                        voided_trans_line.IsChange=epos_trans_line.IsChange;
                        voided_trans_line.IsModifier=epos_trans_line.IsModifier;
                        voided_trans_line.IsRefund=epos_trans_line.IsRefund;
                        voided_trans_line.ItemGroup=epos_trans_line.ItemGroup;
                        voided_trans_line.ItemSubGroup=epos_trans_line.ItemSubGroup;
                        voided_trans_line.KitchenPrint=epos_trans_line.KitchenPrint;
                        voided_trans_line.KitchenPrinted=epos_trans_line.KitchenPrinted;
                        voided_trans_line.KitchenPrintedTime=epos_trans_line.KitchenPrintedTime;
                        voided_trans_line.LineNo=epos_trans_line.LineNo;
                        voided_trans_line.LineStatus=epos_trans_line.LineStatus;
                        voided_trans_line.LinkedOfferId=epos_trans_line.LinkedOfferId;
                        voided_trans_line.MainItemNo=epos_trans_line.MainItemNo;
                        voided_trans_line.Mandatory=epos_trans_line.Mandatory;
                        voided_trans_line.NetAmount=epos_trans_line.NetAmount;
                        voided_trans_line.Number=epos_trans_line.Number;
                        voided_trans_line.OfferID=epos_trans_line.OfferID;
                        voided_trans_line.OfferQuantity=epos_trans_line.OfferQuantity;
                        voided_trans_line.OfferTrigger=epos_trans_line.OfferTrigger;
                        voided_trans_line.OrderType=epos_trans_line.OrderType;
                        voided_trans_line.PaymentType=epos_trans_line.PaymentType;
                        voided_trans_line.Price=epos_trans_line.Price;
                        voided_trans_line.PrintGroup=epos_trans_line.PrintGroup;
                        voided_trans_line.Quantity=epos_trans_line.Quantity;
                        voided_trans_line.Scale=epos_trans_line.Scale;
                        voided_trans_line.Scanned=epos_trans_line.Scanned;
                        voided_trans_line.Served=epos_trans_line.Served;
                        voided_trans_line.SplitGroup=epos_trans_line.SplitGroup;
                        voided_trans_line.StaffId=epos_trans_line.StaffId;
                        voided_trans_line.StoreId=epos_trans_line.StoreId;
                        voided_trans_line.TempItem=epos_trans_line.TempItem;
                        voided_trans_line.TillId=epos_trans_line.TillId;
                        voided_trans_line.TotalCost=epos_trans_line.TotalCost;
                        voided_trans_line.TransDate=epos_trans_line.TransDate;
                        voided_trans_line.TransId=last_trans_no;
                        voided_trans_line.UnitCost=epos_trans_line.UnitCost;
                        voided_trans_line.VatAmount=epos_trans_line.VatAmount;
                        voided_trans_line.VatCode=epos_trans_line.VatCode;
                        voided_trans_line.VatRate=epos_trans_line.VatRate;
                        voided_trans_line.ShiftReportId="";
                        voided_trans_line.ZReportID="";
                        voided_trans_line.IsVoidLine=true;
                        #endregion Fill
                        voidedTransLineDa.InsertVoidedLine(connectionString,CustomerId,StoreId,voided_trans_line);
                        #endregion Epos_Trans_Line To Void Line
                    }
                    DateTime TransDate =Convert.ToDateTime(epos_trans_line.TransDate);
                    #region Epos_Trans_Line To Posted_Sales_Line
                    PostedSalesLine psl=new PostedSalesLine();
                    psl.Amount=epos_trans_line.Amount;
                    psl.BarPrint=epos_trans_line.BarPrint;
                    psl.BarPrinted=epos_trans_line.BarPrinted;
                    psl.BarPrintedTime=epos_trans_line.BarPrintedTime;
                    psl.Barcode=epos_trans_line.Barcode;
                    psl.CustomerId=list_epos_transaction[0].CustomerId;
                    psl.DayofYear=TransDate.DayOfYear;
                    psl.DepartmentId=epos_trans_line.DepartmentId;
                    psl.Description=epos_trans_line.Description;
                    psl.DiscountAmount=epos_trans_line.DiscountAmount;
                    psl.DiscountPercentage=epos_trans_line.DiscountPercentage;
                    psl.Discountable=epos_trans_line.Discountable;
                    psl.EntryType=epos_trans_line.EntryType;
                    psl.FreeText=epos_trans_line.FreeText;
                    psl.IsChange=epos_trans_line.IsChange;
                    psl.IsCharge=epos_trans_line.IsCharge;
                    psl.IsModifier=epos_trans_line.IsModifier;
                    psl.IsRefund=epos_trans_line.IsRefund;
                    psl.Generated=false;
                    psl.HourOfDay=TransDate.Hour;
                    psl.ItemGroup=epos_trans_line.ItemGroup;
                    psl.ItemSubGroup=epos_trans_line.ItemSubGroup;
                    psl.KitchenPrint=epos_trans_line.KitchenPrint;
                    psl.KitchenPrinted=epos_trans_line.KitchenPrinted;
                    psl.KitchenPrintedTime=epos_trans_line.KitchenPrintedTime;
                    psl.LineNo=epos_trans_line.LineNo;
                    psl.LineStatus=epos_trans_line.LineStatus;
                    psl.LinkedOfferId=epos_trans_line.LinkedOfferId;
                    psl.Loyaltycard=list_epos_transaction[0].LoyaltyCard;
                    psl.MainItemNo=epos_trans_line.MainItemNo;
                    psl.Mandatory=epos_trans_line.Mandatory;
                    psl.MembershipNo=list_epos_transaction[0].MembershipNo;
                    psl.MonthOfYear=TransDate.Month;
                    psl.NetAmount=epos_trans_line.NetAmount;
                    psl.Number=epos_trans_line.Number;
                    psl.OfferId=epos_trans_line.OfferID;
                    psl.OfferQuantity=epos_trans_line.OfferQuantity;
                    psl.OfferTrigger=epos_trans_line.OfferTrigger;
                    psl.OrderText=list_epos_transaction[0].OrderTypeText;
                    psl.OrderType=epos_trans_line.OrderType;
                    psl.PaymentType=epos_trans_line.PaymentType;
                    psl.Price=epos_trans_line.Price;
                    psl.PrintGroup=epos_trans_line.PrintGroup;
                    psl.Quantity=epos_trans_line.Quantity;
                    psl.QuarterOfYear=MathFunctions.GetQuarter(TransDate);
                    psl.ShiftReportId="";
                    psl.Scale=epos_trans_line.Scale;
                    psl.Scanned=epos_trans_line.Scanned;
                    psl.Served=epos_trans_line.Served;
                    psl.SplitGroup=epos_trans_line.SplitGroup;
                    psl.StaffId=epos_trans_line.StaffId;
                    psl.StoreId=epos_trans_line.StoreId;
                    psl.TempItem=epos_trans_line.TempItem;
                    psl.TillId=epos_trans_line.TillId;
                    psl.TotalCost=epos_trans_line.TotalCost;
                    psl.TransDate=epos_trans_line.TransDate;
                    psl.TransId=last_trans_no;
                    psl.UnitCost=epos_trans_line.UnitCost;
                    psl.VatAmount=epos_trans_line.VatAmount;
                    psl.VatCode=epos_trans_line.VatCode;
                    psl.WeekOfYear=MathFunctions.WeekOfYear(TransDate);
                    psl.YearOfYear=TransDate.Year;
                    psl.ZReportID="";
                    #endregion Epos_Trans_Line To Posted_Sales_Line

                    #region Stock
                    #endregion Stock
                    
                    int re_psl = postedSalesLineDa.InsertSalesLine(connectionString,CustomerId,StoreId,psl);
                    if(re_psl>0)
                    {
                        eposTransLineDa.DeleteTransLineByELNO(connectionString,CustomerId,StoreId,TillId,epos_trans_line.Elno);
                    }
                    if(psl.CustomerId>0)
                    {
                        #region Customer Posted Sales 
                        #endregion Customer Posted Sales
                    }

                }
                #endregion EposTransLines

                #region Epos_Transaction To Posted_Transaction
                EposTransaction epos_transaction =list_epos_transaction[0];
                PostedTransaction pt=new PostedTransaction();
                pt.CounterPrint=epos_transaction.CounterPrint;
                pt.CustomerId=epos_transaction.CustomerId;
                pt.DeliveryId=epos_transaction.DeliveryId;
                pt.Floor=epos_transaction.Floor;
                pt.Id=epos_transaction.Id;
                pt.InfoItem=epos_transaction.InfoItem;
                pt.InvoicedDate=epos_transaction.InvoicedDate;
                pt.InvoicePrinted=epos_transaction.InvoicePrinted;
                pt.LoyaltyCard=epos_transaction.LoyaltyCard;
                pt.MembershipNo=epos_transaction.MembershipNo;
                pt.OrderNo=epos_transaction.OrderNo;
                pt.OrderType=epos_transaction.OrderType;
                pt.OrderTypeText=epos_transaction.OrderTypeText;
                pt.Printed=false;
                pt.ShiftReportID="";
                pt.SalesAmount=EntryTypeZeroAmount;
                if ((CashEntryLines > 0) && (CardEntryLines == 0) && (OtherPaymentLines == 0))
                {
                    pt.SalesType = "Cash";
                }
                else if ((CashEntryLines == 0) && (CardEntryLines > 0) && (OtherPaymentLines == 0))
                {
                    pt.SalesType = "Card";
                }
                else
                {
                    pt.SalesType = "Other";
                }
                pt.Seats=epos_transaction.Seats;
                pt.SlipNo=last_trans_no;
                pt.StaffId=epos_transaction.StaffId;
                pt.StoreId=epos_transaction.StoreId;
                pt.TableId=epos_transaction.TableId;
                pt.TableName=epos_transaction.TableName;
                pt.TakeawayId=epos_transaction.TakeawayId;
                pt.TillId=epos_transaction.TillId;
                pt.TransDate=epos_transaction.TransDate;
                pt.TransType=epos_transaction.TransType;
                pt.TransactionText=epos_transaction.TransactionText;
                pt.ZReportID="";
                #endregion Epos_Transaction To Posted_Transaction
                int re_pt = postedTransactionDa.InsertTransaction(connectionString,CustomerId,StoreId,pt);
                if(re_pt>0)
                {
                    eposTransactionDa.DeleteTransactionBySlipNo(connectionString,CustomerId,StoreId,TillId,epos_transaction.SlipNo);
                    noSeriesDa.UpdateLastTransNo(connectionString,CustomerId,StoreId,TillId,last_trans_no);
                    #region Delete Delivery Lines
                    #endregion  Delete Delivery Lins
                }

            }

            return result;
        }
    }
}