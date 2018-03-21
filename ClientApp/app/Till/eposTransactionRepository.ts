import{ EposTransaction } from "../models/eposTransaction.model";
import{EposTransLine} from "../models/eposTransLine.model";

import{Repository} from "../models/repository";
import{TillRepository} from "./tillRepository";
import { Cart } from './cart';

import { Injectable } from "@angular/core";
import { RequestMethod, Request, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { promise } from "selenium-webdriver";

const itemsUrl = "/api/items";
const eposTransactionsUrl="/api/eposTransactions";
const eposTransLinesUrl="/api/eposTransLines";
@Injectable()
export class EposTransactionRepository{
    constructor(private repo:Repository,private tRepo:TillRepository,private cart:Cart){}

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
        if(this.cart.slipNo==0){
            this.repo.sendRequest(RequestMethod.Post, url, m).subscribe(response => {
                result = response;
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
                    });
                    this.insertTransLineFromItemNo(id);
                }
            });
        }else{
            this.insertTransLineFromItemNo(id);
        }
    }

    insertTransLineFromItemNo(id:string){
        if(this.cart.slipNo>0){
        let url=itemsUrl+ "/" + id;
        url +="?customerId="+this.repo.filter.customerId;
        url +="&storeId="+this.repo.filter.storeId;
        this.repo.sendRequest(RequestMethod.Get, url)
        .subscribe(
            response => {
                this.tRepo.item = response;
                if(id==this.tRepo.item.itemNo){
                    if(this.tRepo.item.priceEntry){
                        let price=parseInt(this.cart.journalInput);
                        if((price==0)||(this.cart.journalInput=="")){
                            this.cart.journalText="Please Enter the Price";
                        }else{
                            if(this.cart.qty==0){this.cart.qty=1;}
                            this.cart.price=price/100.0;
                            this.cart.journalInput="";
                            this.cart.journalText=this.tRepo.item.description +" @ "+(this.cart.qty*this.cart.price).toFixed(2);
                        }
                    }else{
                        if(this.cart.qty==0){this.cart.qty=1;}
                        this.cart.price=this.tRepo.item.price;
                        this.cart.journalText=this.tRepo.item.description +" @ "+(this.cart.qty*this.cart.price).toFixed(2);
                    }
                    let m=new EposTransLine();
                    m.amount=this.cart.qty*this.cart.price;
                    m.barcode=this.tRepo.item.barcode;
                    m.departmentId=this.tRepo.item.department;
                    m.description=this.tRepo.item.description;
                    m.entryType=0;
                    m.itemGroup=this.tRepo.item.itemGroup;
                    m.itemSubGroup=this.tRepo.item.itemSubGroup;
                    m.lineNo=this.cart.getMaxLineNo()+1;
                    m.netAmount=this.cart.qty*this.cart.price;
                    m.number=this.tRepo.item.itemNo;
                    m.orderType=this.cart.orderType;
                    m.price=this.cart.price;
                    m.printGroup=this.tRepo.item.printGroup;
                    m.quantity=this.cart.qty;
                    m.staffId=this.repo.logedInStaff.userId;
                    m.storeId=this.repo.device.storeId;
                    m.tillId=this.repo.device.tillId;
                    m.totalCost=this.tRepo.item.unitCost*this.cart.qty;
                    m.transDate= this.repo.currentDateTime;
                    m.transId=this.cart.slipNo;
                    m.unitCost=this.tRepo.item.unitCost;
                    m.vatCode=this.tRepo.item.vatCode;
                    m.barPrintedTime= this.repo.minDate;
                    m.kitchenPrintedTime=this.repo.minDate;                        
                    let result=0;
                    let url=eposTransLinesUrl;
                    url +="?customerId="+this.repo.filter.customerId;
                    url +="&storeId="+this.repo.filter.storeId;
                    url +="&tillId="+this.repo.filter.tillId;
                    this.repo.sendRequest(RequestMethod.Post, url, m).subscribe(response => {
                        result = response;
                        if(result>0){
                            this.tRepo.getEposTransLines(this.cart.slipNo);
                            this.cart.qty=0;
                            this.cart.price=0;
                            this.cart.journalInput="";
                        }
                    });
                }
                else{
                this.cart.journalText="Item Not Found";
                }
            });
        }
    }
}