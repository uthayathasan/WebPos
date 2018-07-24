import{ EposTransaction } from "../models/eposTransaction.model";
import{EposTransLine} from "../models/eposTransLine.model";

import{Repository} from "../models/repository";
import{TillRepository} from "./tillRepository";
import { Cart } from './cart';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { RequestMethod, Request, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

const itemsUrl = "/api/items";
const eposTransactionsUrl="/api/eposTransactions";
const eposTransLinesUrl="/api/eposTransLines";
const postSalesUrl="/api/postSales";
const voidSalesUrl="/api/voidSales";
@Injectable()
export class EposTransactionRepository{
    constructor(private repo:Repository,private tRepo:TillRepository,private cart:Cart,private router:Router){}
    busy?:boolean;
    createTransactionAndinsertTransLineFromItemNo(id:string){
        let m=new EposTransaction();
        m.counterPrint=false;
        m.customerId=this.cart.customerId;
        m.deliveryId=this.cart.deliveryId;
        m.floor="";
        m.id=0;
        m.infoItem=0;
        m.invoicedDate=this.repo.minDate;
        m.invoicePrinted=false;
        m.loyaltyCard="";
        m.membershipNo="";
        m.orderNo=this.cart.orderNo;
        m.orderType=this.cart.orderType;
        m.orderTypeText=this.cart.orderTypeText;
        m.seats=this.cart.seates;
        m.slipNo=this.cart.slipNo;
        m.staffId=this.repo.logedInStaff.userId;
        m.storeId=this.repo.device.storeId;
        m.takeawayId=this.cart.takeawayId;
        m.tableId=this.cart.tableId;
        m.tableName=this.cart.tableName;
        m.tillId=this.repo.device.tillId;
        m.transDate=this.repo.currentDateTime;
        m.transType=this.cart.transType;
        m.transactionText=this.cart.orderTypeText;

        let result=0;
        let url=eposTransactionsUrl;
        url +="?customerId="+this.repo.filter.customerId;
        url +="&storeId="+this.repo.filter.storeId;
        url +="&tillId="+this.repo.filter.tillId;
        if((this.cart.slipNo==0)&&(!this.busy)){
            this.busy=true;
            this.repo.apiBusy=true;
            this.repo.sendRequest(RequestMethod.Post, url, m).subscribe(response => {
                result = response;
                this.busy=false;
                if(result>0){
                    this.cart.slipNo=result;
                    let turl=eposTransactionsUrl+"/"+this.cart.slipNo;
                    turl +="?customerId="+this.repo.filter.customerId;
                    turl +="&storeId="+this.repo.filter.storeId;
                    turl +="&tillId="+this.repo.filter.tillId;
                    this.repo.sendRequest(RequestMethod.Get, turl)
                    .subscribe(response =>{
                        this.tRepo.eposTransaction = response;
                        this.cart.orderTypeText=this.tRepo.eposTransaction.orderTypeText;
                        this.cart.orderType=this.tRepo.eposTransaction.orderType;
                        this.cart.orderNo=this.tRepo.eposTransaction.orderNo;
                        this.cart.tableId=this.tRepo.eposTransaction.tableId;
                        this.cart.tableName=this.tRepo.eposTransaction.tableName;
                        this.cart.seates=this.tRepo.eposTransaction.seats;
                        this.cart.takeawayId=this.tRepo.eposTransaction.takeawayId;
                        this.cart.deliveryId=this.tRepo.eposTransaction.deliveryId;
                        this.cart.customerId=this.tRepo.eposTransaction.customerId;
                        this.cart.slipNo=this.tRepo.eposTransaction.slipNo;
                        this.cart.transType=this.tRepo.eposTransaction.transType;
                        if(this.cart.transType==0){
                            this.cart.mod="Sales";
                        }
                        if(this.cart.transType==1){
                            this.cart.mod="Refund";
                        }
                        this.repo.apiBusy=false;
                    });
                    this.insertTransLineFromItemNo(id);
                }
            });
        }else{
            this.insertTransLineFromItemNo(id);
        }
    }

    insertTransLineFromItemNo(id:string){
        this.repo.apiBusy=true;
        if(this.cart.slipNo>0){
        let url=itemsUrl+ "/" + id;
        url +="?customerId="+this.repo.filter.customerId;
        url +="&storeId="+this.repo.filter.storeId;
        this.repo.sendRequest(RequestMethod.Get, url)
        .subscribe(
            response => {
                this.tRepo.item = response;
                let canAdd=true;
                this.repo.apiBusy=false;
                if(id==this.tRepo.item.itemNo){
                    if(this.tRepo.item.priceEntry){
                        let price=parseInt(this.cart.journalInput);
                        if((price==0)||(this.cart.journalInput=="")){
                            this.cart.isError=true;
                            this.cart.journalText="Please Enter the Price";
                            canAdd=false;
                        }else{
                            if(this.cart.qty==0){this.cart.qty=1;}
                            this.cart.price=price/100.0;
                            this.cart.journalInput="";
                            this.cart.isError=false;
                            this.cart.journalText=this.tRepo.item.description +" @ "+(this.cart.qty*this.cart.price).toFixed(2);
                        }
                    }else{
                        if(this.cart.qty==0){
                            if(this.cart.journalInput!=""){
                                let q=parseInt(this.cart.journalInput);
                                if(this.cart.maxQty<q){
                                    this.cart.journalText="Allowed Maximum Quantity "+this.cart.maxQty.toString();
                                    this.cart.isError=true;
                                    canAdd=false;
                                }
                                else if(q>0){
                                    this.cart.qty=q;
                                }
                                else if(isNaN(q)){
                                    canAdd=false;
                                    this.cart.isError=true;
                                    this.cart.journalText="Invalid Quantity!";
                                }
                            }
                        }
                        if(this.cart.qty==0){this.cart.qty=1;}
                        if(this.cart.orderType==0){
                            this.cart.price=this.tRepo.item.price;
                        }else if(this.cart.orderType==1){
                            this.cart.price=this.tRepo.item.takeawayPrice;
                        }else if(this.cart.orderType==2){
                            this.cart.price=this.tRepo.item.deliveryPrice;
                        }
                        if(this.cart.price==0){
                            this.cart.price=this.tRepo.item.price;
                        }
                        
                        if(canAdd){
                            this.cart.isError=false;
                            this.cart.journalText=this.tRepo.item.description +" @ "+(this.cart.qty*this.cart.price).toFixed(2);
                        }else{
                            this.cart.qty=0;
                            this.cart.price=0;

                        }
                    }
                    if(canAdd){
                        if(this.cart.transType==1){this.cart.qty=-1*this.cart.qty}
                        let m=new EposTransLine();
                        m.amount=this.cart.qty*this.cart.price;
                        m.barcode=this.tRepo.item.barcode;
                        m.barPrint=this.tRepo.item.barPrint;
                        m.barPrinted=false;
                        m.barPrintedTime=this.repo.minDate;
                        m.departmentId=this.tRepo.item.department;
                        m.description=this.tRepo.item.description;
                        m.discountAmount=0;
                        m.discountable=this.tRepo.item.discountAllowed;
                        m.discountPercentage=0;
                        m.elno=0;
                        m.entryType=0;
                        m.freeText="";
                        m.isCharge=this.tRepo.item.isCharge;
                        m.isChange=false;
                        m.isModifier=false;
                        m.isRefund=false;
                        if(this.cart.transType==1){
                            m.isRefund=true;
                        }
                        m.itemGroup=this.tRepo.item.itemGroup;
                        m.itemSubGroup=this.tRepo.item.itemSubGroup;
                        m.kitchenPrint=this.tRepo.item.kitchenPrint;
                        m.kitchenPrinted=false;
                        m.kitchenPrintedTime=this.repo.minDate;
                        m.lineNo=this.cart.getMaxLineNo()+1;
                        m.lineStatus=false;
                        m.linkedOfferId=0;
                        m.mainItemNo="";
                        m.mandatory=false;
                        m.netAmount=this.cart.qty*this.cart.price;
                        m.number=this.tRepo.item.itemNo;
                        m.offerID="";
                        m.offerQuantity=0;
                        m.offerTrigger=false;
                        m.orderType=this.cart.orderType;
                        m.paymentType=0;
                        m.price=this.cart.price;
                        m.printGroup=this.tRepo.item.printGroup;
                        m.quantity=this.cart.qty;
                        m.scale=this.tRepo.item.scale;
                        m.scanned=false;
                        if(m.barcode!=""){
                            m.scanned=true;
                        }
                        m.served=false;
                        m.splitGroup=false;
                        m.staffId=this.repo.logedInStaff.userId;
                        m.storeId=this.repo.device.storeId;
                        m.tempItem=false;
                        m.tillId=this.repo.device.tillId;
                        m.totalCost=this.tRepo.item.unitCost*this.cart.qty;
                        m.transDate= this.repo.currentDateTime;
                        m.transId=this.cart.slipNo;
                        m.unitCost=this.tRepo.item.unitCost;
                        
                        m.vatCode=this.tRepo.item.vatCode;
                        m.vatRate=this.tRepo.getVatRateById(m.vatCode);
                        m.vatAmount=m.netAmount*m.vatRate/100;

                        this.tRepo.eposTransLines.unshift(m);
                        this.tRepo.selectedEposTransLine=m;
                        let result=0;
                        let url=eposTransLinesUrl;
                        url +="?customerId="+this.repo.filter.customerId;
                        url +="&storeId="+this.repo.filter.storeId;
                        url +="&tillId="+this.repo.filter.tillId;
                        this.repo.apiBusy=true;
                        this.repo.sendRequest(RequestMethod.Post, url, m).subscribe(response => {
                            result = response;
                            if(result>0){
                                this.repo.apiBusy=false;
                                this.tRepo.getEposTransLines(this.cart.slipNo);
                                this.cart.qty=0;
                                this.cart.price=0;
                                this.cart.journalInput="";
                            }
                        });
                    }
                }
                else{
                    this.cart.isError=true;
                    this.cart.journalText="Item Not Found";
                    this.repo.apiBusy=false;
                }
            });
        }
    }

    insertCashPayment(amount?:number){
        this.repo.apiBusy=true;
        let m=new EposTransLine();
        let qty=-1;
        m.amount=qty*amount;
        m.barcode="";
        m.barPrint=false;
        m.barPrinted=false;
        m.barPrintedTime=this.repo.minDate;
        m.departmentId='';
        m.description='Cash Payment';
        m.discountAmount=0;
        m.discountable=false;
        m.discountPercentage=0;
        m.elno=0;
        m.entryType=2;
        m.freeText="";
        m.isCharge=false;
        m.isChange=false;
        m.isModifier=false;
        m.isRefund=false;
        if(this.cart.transType==1){
            m.isRefund=true;
        }
        m.itemGroup='';
        m.itemSubGroup='';
        m.kitchenPrint=false;
        m.kitchenPrinted=false;
        m.kitchenPrintedTime=this.repo.minDate;
        m.lineNo=this.cart.getMaxLineNo()+1;
        m.lineStatus=false;
        m.linkedOfferId=0;
        m.mainItemNo="";
        m.mandatory=false;
        m.netAmount=qty*amount;
        m.number="1";
        m.offerID="";
        m.offerQuantity=0;
        m.offerTrigger=false;
        m.orderType=this.cart.orderType;
        m.paymentType=1;
        m.price=amount;
        m.printGroup="";
        m.quantity=qty;
        m.scale=false;
        m.scanned=false;
        m.served=false;
        m.splitGroup=false;
        m.staffId=this.repo.logedInStaff.userId;
        m.storeId=this.repo.device.storeId;
        m.tempItem=false;
        m.tillId=this.repo.device.tillId;
        m.totalCost=0;
        m.transDate= this.repo.currentDateTime;
        m.transId=this.cart.slipNo;
        m.unitCost=0;
        
        m.vatCode="";
        m.vatRate=0;
        m.vatAmount=0;

        this.tRepo.eposTransLines.unshift(m);
        this.tRepo.selectedEposTransLine=m;
        let result=0;
        let url=eposTransLinesUrl;
        url +="?customerId="+this.repo.filter.customerId;
        url +="&storeId="+this.repo.filter.storeId;
        url +="&tillId="+this.repo.filter.tillId;
        this.repo.sendRequest(RequestMethod.Post, url, m).subscribe(response => {
            result = response;
            this.repo.apiBusy=false;
            if(result>0){
                this.apiBusy=true;                
                let url=eposTransLinesUrl+"/"+this.cart.slipNo;
                url +="?customerId="+this.repo.filter.customerId;
                url +="&storeId="+this.repo.filter.storeId;
                url +="&tillId="+this.repo.filter.tillId;
                this.repo.sendRequest(RequestMethod.Get, url)
                .subscribe(response =>{
                    this.apiBusy=false;
                    this.tRepo.eposTransLines = response;
                    if(this.tRepo.eposTransLines.length>0){
                        let maxlineNo=this.tRepo.eposTransLines.reduce((oa,u)=>Math.max(oa,u.lineNo),0);
                        this.tRepo.selectedEposTransLine=this.tRepo.eposTransLines.filter(l=>l.lineNo==maxlineNo)[0];
                    }else{
                        this.tRepo.selectedEposTransLine=new EposTransLine;
                    }

                    this.cart.qty=0;
                    this.cart.price=0;
                    this.cart.journalInput="";
                    if(this.cart.getTotal()<0){
                        this.cart.isError=false;
                        this.cart.journalText="Change @ "+(-1*this.cart.getTotal()).toFixed(2);
                        this.insertCashChange(-1*this.cart.getTotal());
                    }
                    else if(this.cart.getTotal()==0)
                    {
                        this.apiBusy=true;
                        this.cart.isError=false;
                        this.cart.journalText="Posting ... ";
                        //post component
                        this.cart.posting="Posting ...";
                        if(this.cart.orderType==0){
                            this.cart.header= this.cart.orderTypeText+" Id: "+this.cart.tableId+" Seats: "+this.cart.seates;
                        }else if(this.cart.orderType==1){
                            this.cart.header= this.cart.orderTypeText+" Id: "+this.cart.takeawayId;
                        }else if(this.cart.orderType==2){
                            this.cart.header= this.cart.orderTypeText+" Id: "+this.cart.deliveryId;
                        }else{
                            this.cart.header= this.cart.orderTypeText
                        }
                        this.cart.salesAmount=this.cart.getPurchaseTotalExcDiscount();
                        this.cart.noOfitems=this.cart.getItemCount();
                        this.cart.paidAmount=this.cart.getPaidAmount();
                        this.cart.changeAmount=this.cart.getChangeAmount();
                        this.cart.discountAmount=this.cart.getDiscount();
                        this.router.navigateByUrl("/post");
                        //post component
                        this.apiBusy=true;                
                        let url=postSalesUrl;
                        url +="?customerId="+this.repo.filter.customerId;
                        url +="&storeId="+this.repo.filter.storeId;
                        url +="&tillId="+this.repo.filter.tillId;
                        url +="&slipNo="+this.cart.slipNo;
                        this.repo.sendRequest(RequestMethod.Post, url)
                        .subscribe(response =>{
                            result = response;
                            this.apiBusy=false;
                            if(result>0){
                                this.cart.setNextTransaction();
                                this.cart.posting="POSTED";
                            }
                        });
                    }
                });
            }
        });
    }

    insertCashChange(amount?:number){
        this.repo.apiBusy=true;
        let m=new EposTransLine();
        let qty=1;
        m.amount=qty*amount;
        m.barcode="";
        m.barPrint=false;
        m.barPrinted=false;
        m.barPrintedTime=this.repo.minDate;
        m.departmentId='';
        m.description="Change";
        m.discountAmount=0;
        m.discountable=false;
        m.discountPercentage=0;
        m.elno=0;
        m.entryType=2;
        m.freeText="";
        m.isCharge=false;
        m.isChange=true;
        m.isModifier=false;
        m.isRefund=false;
        if(this.cart.transType==1){
            m.isRefund=true;
        }
        m.itemGroup='';
        m.itemSubGroup='';
        m.kitchenPrint=false;
        m.kitchenPrinted=false;
        m.kitchenPrintedTime=this.repo.minDate;
        m.lineNo=this.cart.getMaxLineNo()+1;
        m.lineStatus=false;
        m.linkedOfferId=0;
        m.mainItemNo="";
        m.mandatory=false;
        m.netAmount=qty*amount;
        m.number="1";
        m.offerID="";
        m.offerQuantity=0;
        m.offerTrigger=false;
        m.orderType=this.cart.orderType;
        m.paymentType=1;
        m.price=amount;
        m.printGroup="";
        m.quantity=qty;
        m.scale=false;
        m.scanned=false;
        m.served=false;
        m.splitGroup=false;
        m.staffId=this.repo.logedInStaff.userId;
        m.storeId=this.repo.device.storeId;
        m.tempItem=false;
        m.tillId=this.repo.device.tillId;
        m.totalCost=0;
        m.transDate= this.repo.currentDateTime;
        m.transId=this.cart.slipNo;
        m.unitCost=0;
        
        m.vatCode="";
        m.vatRate=0;
        m.vatAmount=0;

        this.tRepo.eposTransLines.unshift(m);
        this.tRepo.selectedEposTransLine=m;
        let result=0;
        let url=eposTransLinesUrl;
        url +="?customerId="+this.repo.filter.customerId;
        url +="&storeId="+this.repo.filter.storeId;
        url +="&tillId="+this.repo.filter.tillId;
        this.repo.sendRequest(RequestMethod.Post, url, m).subscribe(response => {
            this.repo.apiBusy=false;
            result = response;
            if(result>0){
                this.apiBusy=true;                
                let url=eposTransLinesUrl+"/"+this.cart.slipNo;
                url +="?customerId="+this.repo.filter.customerId;
                url +="&storeId="+this.repo.filter.storeId;
                url +="&tillId="+this.repo.filter.tillId;
                this.repo.sendRequest(RequestMethod.Get, url)
                .subscribe(response =>{
                    this.apiBusy=false;
                    this.tRepo.eposTransLines = response;
                    if(this.cart.getTotal()==0)
                    {
                        this.apiBusy=true;
                        this.cart.isError=false;
                        this.cart.journalText="Posting ... ";
                        //post component
                        if(this.cart.orderType==0){
                            this.cart.header= this.cart.orderTypeText+" Id: "+this.cart.tableId+" Seats: "+this.cart.seates;
                        }else if(this.cart.orderType==1){
                            this.cart.header= this.cart.orderTypeText+" Id: "+this.cart.takeawayId;
                        }else if(this.cart.orderType==2){
                            this.cart.header= this.cart.orderTypeText+" Id: "+this.cart.deliveryId;
                        }else{
                            this.cart.header= this.cart.orderTypeText
                        }
                        this.cart.salesAmount=this.cart.getPurchaseTotalExcDiscount();
                        this.cart.noOfitems=this.cart.getItemCount();
                        this.cart.paidAmount=this.cart.getPaidAmount();
                        this.cart.changeAmount=this.cart.getChangeAmount();
                        this.cart.discountAmount=this.cart.getDiscount();
                        this.router.navigateByUrl("/post");
                        //post component
                        this.apiBusy=true;                
                        let url=postSalesUrl;
                        url +="?customerId="+this.repo.filter.customerId;
                        url +="&storeId="+this.repo.filter.storeId;
                        url +="&tillId="+this.repo.filter.tillId;
                        url +="&slipNo="+this.cart.slipNo;
                        this.repo.sendRequest(RequestMethod.Post, url)
                        .subscribe(response =>{
                            result = response;
                            this.apiBusy=false;
                            if(result>0){
                                this.cart.setNextTransaction();
                                this.cart.posting="POSTED";
                            }
                        });
                    }
                });
                this.cart.qty=0;
                this.cart.price=0;
                this.cart.journalInput="";
            }
        });
    }
    voidAll(){
        this.repo.apiBusy=true;
        let result=0;
        let url=voidSalesUrl;
        url +="?customerId="+this.repo.filter.customerId;
        url +="&storeId="+this.repo.filter.storeId;
        url +="&tillId="+this.repo.filter.tillId;
        url +="&slipNo="+this.cart.slipNo;
        this.repo.sendRequest(RequestMethod.Post, url).subscribe(response => {
            result=response;
            this.repo.apiBusy=false;
            this.cart.setNextTransaction();
            this.router.navigateByUrl("/till");
        });
    }
    get apiBusy():boolean{
        return this.repo.apiBusy;
    }
    set apiBusy(val:boolean){
        this.repo.apiBusy=val;
    }
}