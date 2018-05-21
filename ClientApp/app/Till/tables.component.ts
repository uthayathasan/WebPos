import{TableStatus} from "../models/tableStatus.model";
import { Component,OnInit } from '@angular/core';
import { Cart } from './cart';
import{TillRepository} from "./tillRepository";
import{Repository} from "../models/repository";
import { Router } from "@angular/router";

import { RequestMethod, Request, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

const eposTransactionsUrl="/api/eposTransactions";
const eposTransLinesUrl="/api/eposTransLines";
@Component({
    selector: "tables-component",
    templateUrl: "./tables.component.html"
})
export class TablesComponent{
    constructor(private trepo:TillRepository,private repo:Repository,private cart: Cart,private router:Router) {}
    ngOnInit(){}

    
    get tablesCol1():TableStatus[]{
        if(this.trepo.tableStatus!=null){
            return this.trepo.tableStatus.filter(x=>x.tableID%10==1);
        }
        else{
            return this.trepo.tableStatus;
        }
    }
    get tablesCol2():TableStatus[]{
        if(this.trepo.tableStatus!=null){
            return this.trepo.tableStatus.filter(x=>x.tableID%10==2);
        }
        else{
            return this.trepo.tableStatus;
        }
    }
    get tablesCol3():TableStatus[]{
        if(this.trepo.tableStatus!=null){
            return this.trepo.tableStatus.filter(x=>x.tableID%10==3);
        }
        else{
            return this.trepo.tableStatus;
        }
    }
    get tablesCol4():TableStatus[]{
        if(this.trepo.tableStatus!=null){
            return this.trepo.tableStatus.filter(x=>x.tableID%10==4);
        }
        else{
            return this.trepo.tableStatus;
        }
    }
    get tablesCol5():TableStatus[]{
        if(this.trepo.tableStatus!=null){
            return this.trepo.tableStatus.filter(x=>x.tableID%10==5);
        }
        else{
            return this.trepo.tableStatus;
        }
    }
    get tablesCol6():TableStatus[]{
        if(this.trepo.tableStatus!=null){
            return this.trepo.tableStatus.filter(x=>x.tableID%10==6);
        }
        else{
            return this.trepo.tableStatus;
        }
    }
    get tablesCol7():TableStatus[]{
        if(this.trepo.tableStatus!=null){
            return this.trepo.tableStatus.filter(x=>x.tableID%10==7);
        }
        else{
            return this.trepo.tableStatus;
        }
    }
    get tablesCol8():TableStatus[]{
        if(this.trepo.tableStatus!=null){
            return this.trepo.tableStatus.filter(x=>x.tableID%10==8);
        }
        else{
            return this.trepo.tableStatus;
        }
    }
    get tablesCol9():TableStatus[]{
        if(this.trepo.tableStatus!=null){
            return this.trepo.tableStatus.filter(x=>x.tableID%10==9);
        }
        else{
            return this.trepo.tableStatus;
        }
    }
    get tablesCol10():TableStatus[]{
        if(this.trepo.tableStatus!=null){
            return this.trepo.tableStatus.filter(x=>x.tableID%10==0);
        }
        else{
            return this.trepo.tableStatus;
        }
    }
    private back(){
        this.trepo.selectedTableLine=null;
        this.router.navigateByUrl("/till");
    }
    private selectTable(line:TableStatus){
        this.trepo.selectedTableLine=line;
        if(line.slipNo>0)
        {
            let url=eposTransactionsUrl+"/"+line.slipNo;
            url +="?customerId="+this.repo.filter.customerId;
            url +="&storeId="+this.repo.filter.storeId;
            url +="&tillId="+this.repo.filter.tillId;
            this.repo.sendRequest(RequestMethod.Get, url)
            .subscribe(response =>{
                this.trepo.eposTransaction = response;
                
                if(this.trepo.eposTransaction.slipNo==line.slipNo)
                {
                    this.cart.orderTypeText=this.trepo.eposTransaction.orderTypeText;
                    this.cart.orderType=this.trepo.eposTransaction.orderType;
                    this.cart.orderNo=this.trepo.eposTransaction.orderNo;
                    this.cart.tableId=this.trepo.eposTransaction.tableId;
                    this.cart.tableName=this.trepo.eposTransaction.tableName;
                    this.cart.seates=this.trepo.eposTransaction.seats;
                    this.cart.takeawayId=this.trepo.eposTransaction.takeawayId;
                    this.cart.deliveryId=this.trepo.eposTransaction.deliveryId;
                    this.cart.customerId==this.trepo.eposTransaction.customerId;
                    this.cart.slipNo=this.trepo.eposTransaction.slipNo;
                    this.cart.transType=this.trepo.eposTransaction.transType;
                    this.trepo.getEposTransLines(line.slipNo);
                    if(this.cart.transType==0) this.cart.mod="Sales";
                    if(this.cart.transType==1) this.cart.mod="Refund";
                    this.router.navigateByUrl("/till");
                }
                else{
                    this.trepo.eposTransaction=null;
                    this.trepo.getTables();
                }
            });
        }
        else{
            this.router.navigateByUrl("/seats");
            //call seats
        }
    }
}