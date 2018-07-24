using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using WebPos.Models;
namespace WebPos.DataAccess
{
    public class VoidAllDA
    {
        public int VoidAll(string  connectionString,string CustomerId,string StoreId,string TillId,int SlipNo)
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
            if(result==1)
            {
                VoidedTransLineDA voidedTransLineDa=new VoidedTransLineDA();
                EposTransLineDA eposTransLineDa=new EposTransLineDA();
                List<EposTransLine> list_epos_trans_line=eposTransLineDa.
                GetTransLinesByTransId(connectionString,CustomerId,StoreId,TillId,SlipNo);
                for(int i=0;i<list_epos_trans_line.Count;i++)
                {
                    EposTransLine epos_trans_line=list_epos_trans_line[i];
                    
                    VoidedTransLine voided_trans_line=new VoidedTransLine();
                    #region Fill Voided Line
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
                    voided_trans_line.TransId=epos_trans_line.TransId;
                    voided_trans_line.UnitCost=epos_trans_line.UnitCost;
                    voided_trans_line.VatAmount=epos_trans_line.VatAmount;
                    voided_trans_line.VatCode=epos_trans_line.VatCode;
                    voided_trans_line.VatRate=epos_trans_line.VatRate;
                    voided_trans_line.ShiftReportId="";
                    voided_trans_line.ZReportID="";
                    voided_trans_line.IsVoidLine=false;
                    #endregion Fill Voided Line
                    int val= voidedTransLineDa.InsertVoidedLine(connectionString,CustomerId,StoreId,voided_trans_line);
                    if(val>0)
                    {
                        eposTransLineDa.DeleteTransLineByELNO(connectionString,CustomerId,StoreId,TillId,epos_trans_line.Elno);
                    }
                }
                VoidedTransaction voided_transaction=new VoidedTransaction();
                EposTransaction epos_transaction=list_epos_transaction[0];
                #region Fill Voided Transaction
                voided_transaction.CounterPrint=epos_transaction.CounterPrint;
                voided_transaction.CustomerId=epos_transaction.CustomerId;
                voided_transaction.DeliveryId=epos_transaction.DeliveryId;
                voided_transaction.Floor=epos_transaction.Floor;
                voided_transaction.Id=epos_transaction.Id;
                voided_transaction.InfoItem=epos_transaction.InfoItem;
                voided_transaction.InvoicedDate=epos_transaction.InvoicedDate;
                voided_transaction.InvoicePrinted=epos_transaction.InvoicePrinted;
                voided_transaction.LoyaltyCard=epos_transaction.LoyaltyCard;
                voided_transaction.MembershipNo=epos_transaction.MembershipNo;
                voided_transaction.OrderNo=epos_transaction.OrderNo;
                voided_transaction.OrderType=epos_transaction.OrderType;
                voided_transaction.OrderTypeText=epos_transaction.OrderTypeText;
                voided_transaction.Seats=epos_transaction.Seats;
                voided_transaction.SlipNo=epos_transaction.SlipNo;
                voided_transaction.StaffId=epos_transaction.StaffId;
                voided_transaction.StoreId=epos_transaction.StoreId;
                voided_transaction.TakeawayId=epos_transaction.TakeawayId;
                voided_transaction.TableId=epos_transaction.TableId;
                voided_transaction.TableName=epos_transaction.TableName;
                voided_transaction.TillId=epos_transaction.TillId;
                voided_transaction.TransDate=epos_transaction.TransDate;
                voided_transaction.TransType=epos_transaction.TransType;
                voided_transaction.TransactionText=epos_transaction.TransactionText;
                voided_transaction.ShiftReportId="";
                voided_transaction.ZReportId="";
                #endregion Fill Voided Transaction
                VoidedTransactionDA voidedTransactionDa=new VoidedTransactionDA();
                int res=voidedTransactionDa.InsertVoidedTransaction(connectionString,CustomerId,StoreId,voided_transaction);
                if(res>0)
                {
                    eposTransactionDa.DeleteTransactionBySlipNo(connectionString,CustomerId,StoreId,TillId,epos_transaction.SlipNo);
                }
            }
            return result;
        }
    }
}