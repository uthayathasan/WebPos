import { Component,OnInit } from '@angular/core';
import { Cart } from './cart';
import { Repository } from '../models/repository';
import { Router } from "@angular/router";
import{EposTransactionRepository} from "./epostransactionRepository";
@Component({
    selector: "number-lines",
    templateUrl: "./number.component.html",
    styleUrls: ['./number.component.css']
})
export class NumberComponent{
    constructor(private cart:Cart,private repo:Repository,private eRepo:EposTransactionRepository,private router:Router) {}
    private clickStr?:string;
    ngOnInit(){
        this.clickStr="";
    }
    gohome(){
         this.router.navigateByUrl("");
    }
    get deviceId():string{
       return this.repo.device.deviceId;
    }
    get tillId():string{
        return this.repo.device.tillId;
    }
    numberClick(no:string){
       this.cart.journalInput=this.cart.journalInput+no;
       this.clickStr=no;
    }
    enterClick(){
        if(this.cart.journalInput!=""){
            let id=this.cart.journalInput;
            this.cart.journalInput="";
            if(this.cart.orderTypeText!=""){
              if(this.cart.slipNo==0){
                  this.eRepo.createTransactionAndinsertTransLineFromItemNo(id);
              }else{
                  this.eRepo.insertTransLineFromItemNo(id);
              }
            }
            else{
              this.cart.isError=true;
              this.cart.journalText="Please select the order type!";
            }
          }
    }
    clearClick(){
        this.cart.journalInput="";
        this.cart.journalText="";
        this.cart.qty=0;
        this.cart.price=0;
        this.cart.isError=false;
        this.clickStr="Clear";
    }
    get clickBtn():string{
        return  this.clickStr;
    }
    setToQty(){
        let x=parseInt(this.cart.journalInput);
        if(x>0){
            if(x<this.cart.maxQty){
                this.cart.qty=x;
                this.cart.isError=false;
                this.cart.journalText=x.toString()+" X";
                this.cart.journalInput="";
            }else{
                this.cart.qty=0;
                this.cart.journalText="Allowed Maximum Quantity "+this.cart.maxQty.toString();
                this.cart.isError=true;
            }
        }
        this.clickStr="X";
    }

    get cash0():number{
        return this.cart.cash0;
    }
    get cash4():number{
        return this.cart.cash4;
    }
    get cash8():number{
        return this.cart.cash8;
    }
    get cash12():number{
        return this.cart.cash12;
    }
}