import { Component,OnInit } from '@angular/core';
import { Cart } from './cart';
import { Repository } from '../models/repository';
import { Router } from "@angular/router";
@Component({
    selector: "number-lines",
    templateUrl: "./number.component.html"
})
export class NumberComponent{
    constructor(private cart:Cart,private repo:Repository,private router:Router) {}
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
}