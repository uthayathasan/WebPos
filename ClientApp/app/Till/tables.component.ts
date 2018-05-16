import{TableStatus} from "../models/tableStatus.model";
import { Component,OnInit } from '@angular/core';
import { Cart } from './cart';
import{TillRepository} from "./tillRepository";
import{Repository} from "../models/repository";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
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

    get tables():TableStatus[]{
        return this.trepo.tableStatus;
    }
    
    private back(){
        this.trepo.selectedTableLine=null;
        this.router.navigateByUrl("/till")
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
                    this.router.navigateByUrl("/till");
                }
            });
        }
    }
}