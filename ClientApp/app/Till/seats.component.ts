import{TableStatus} from "../models/tableStatus.model";
import { Component,OnInit } from '@angular/core';
import { Cart } from './cart';
import{TillRepository} from "./tillRepository";
import{Repository} from "../models/repository";
import { Router } from "@angular/router";

import { RequestMethod, Request, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
@Component({
    selector: "seats-component",
    templateUrl: "./seats.component.html"
})
export class SeatsComponent{
    constructor(private trepo:TillRepository,private repo:Repository,private cart: Cart,private router:Router) {}
    ngOnInit(){
        this.seats="";
    }

    get SelectedTable():TableStatus{
        return this.trepo.selectedTableLine;
    }
    seats?:string;

    setSeats(val:string){
        if(this.seats.length<2){
            this.seats=this.seats+val;
        }
    }
    clearSeats(){
        this.seats="";
    }

    enterSeats(){
        if((this.seats.length>0)&&(this.seats!="0")){
            this.trepo.selectedTableLine.seats=this.seats;
            this.cart.orderTypeText="Table";
            this.cart.orderType=0;
            //this.cart.orderNo=this.trepo.eposTransaction.orderNo;
            this.cart.tableId=this.trepo.selectedTableLine.tableID;
            this.cart.tableName=this.trepo.selectedTableLine.tableName;
            this.cart.seates=this.seats;
            this.cart.takeawayId=0;
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

    exitSeats(){
        this.trepo.selectedTableLine=null;
        this.router.navigateByUrl("/till");
    }
}