import{TakeawayStatus} from "../models/takeawayStatus.model";
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
    selector: "takeaways-component",
    templateUrl: "./takeaways.component.html"
})
export class TakeawaysComponent{
    constructor(private trepo:TillRepository,private repo:Repository,private cart: Cart,private router:Router) {}
    ngOnInit(){}

    get TakeawayCol1():TakeawayStatus[]{
        if(this.trepo.takeawayStatus!=null){
            return this.trepo.takeawayStatus.filter(x=>x.takeawayId%10==1);
        }
        else{
            return this.trepo.takeawayStatus;
        }
    }

    get TakeawayCol2():TakeawayStatus[]{
        if(this.trepo.takeawayStatus!=null){
            return this.trepo.takeawayStatus.filter(x=>x.takeawayId%10==2);
        }
        else{
            return this.trepo.takeawayStatus;
        }
    }

    get TakeawayCol3():TakeawayStatus[]{
        if(this.trepo.takeawayStatus!=null){
            return this.trepo.takeawayStatus.filter(x=>x.takeawayId%10==3);
        }
        else{
            return this.trepo.takeawayStatus;
        }
    }

    get TakeawayCol4():TakeawayStatus[]{
        if(this.trepo.takeawayStatus!=null){
            return this.trepo.takeawayStatus.filter(x=>x.takeawayId%10==4);
        }
        else{
            return this.trepo.takeawayStatus;
        }
    }

    get TakeawayCol5():TakeawayStatus[]{
        if(this.trepo.takeawayStatus!=null){
            return this.trepo.takeawayStatus.filter(x=>x.takeawayId%10==5);
        }
        else{
            return this.trepo.takeawayStatus;
        }
    }

    get TakeawayCol6():TakeawayStatus[]{
        if(this.trepo.takeawayStatus!=null){
            return this.trepo.takeawayStatus.filter(x=>x.takeawayId%10==6);
        }
        else{
            return this.trepo.takeawayStatus;
        }
    }

    get TakeawayCol7():TakeawayStatus[]{
        if(this.trepo.takeawayStatus!=null){
            return this.trepo.takeawayStatus.filter(x=>x.takeawayId%10==7);
        }
        else{
            return this.trepo.takeawayStatus;
        }
    }

    get TakeawayCol8():TakeawayStatus[]{
        if(this.trepo.takeawayStatus!=null){
            return this.trepo.takeawayStatus.filter(x=>x.takeawayId%10==8);
        }
        else{
            return this.trepo.takeawayStatus;
        }
    }

    get TakeawayCol9():TakeawayStatus[]{
        if(this.trepo.takeawayStatus!=null){
            return this.trepo.takeawayStatus.filter(x=>x.takeawayId%10==9);
        }
        else{
            return this.trepo.takeawayStatus;
        }
    }

    get TakeawayCol10():TakeawayStatus[]{
        if(this.trepo.takeawayStatus!=null){
            return this.trepo.takeawayStatus.filter(x=>x.takeawayId%10==0);
        }
        else{
            return this.trepo.takeawayStatus;
        }
    }

    private back(){
        this.trepo.selectedTakeawayLine=null;
        this.router.navigateByUrl("/till");
    }
    private selectTakeaway(line:TakeawayStatus){
        this.trepo.selectedTakeawayLine=line;
        if(line.slipNo>0){
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
                }else{
                    this.trepo.eposTransaction=null;
                    this.trepo.getTakeaways();
                }
            });
        }else{
            this.cart.orderTypeText="Takeaway";
            this.cart.orderType=1;
            //this.cart.orderNo=this.trepo.eposTransaction.orderNo;
            this.cart.tableId=0;
            this.cart.tableName="";
            this.cart.seates="";
            this.cart.takeawayId=this.trepo.selectedTakeawayLine.takeawayId;
            this.cart.deliveryId=0;
            //this.cart.customerId==this.trepo.eposTransaction.customerId;
            this.cart.slipNo=0;
            this.cart.transType=0;
            if(this.cart.mod.toUpperCase()=="REFUND")
            {
                this.cart.transType=1;
            }
            if(this.cart.mod.toUpperCase()=="START")
            {
                this.cart.mod="Sales";
            }
            this.router.navigateByUrl("/till");
        }
    }
}