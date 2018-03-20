import { Component,OnInit } from '@angular/core';
import { TillRepository } from "./tillRepository";
import { EposTransLine } from "../models/eposTransLine.model"
import { Cart } from './cart';

@Component({
    selector: "journal-lines",
    templateUrl: "./journal.component.html"
})
export class JournalComponent{
    constructor(private trepo: TillRepository,private cart:Cart) {}

    ngOnInit(){
        this.cart.slipNo=1206740;
        this.trepo.getEposTransaction(this.cart.slipNo);
        this.trepo.getEposTransLines(this.cart.slipNo);
    }
    get journalInput():string{
        return this.cart.journalInput;
    }
    get journalText():string{
        return this.cart.journalText;
    }
    set journalText(newText:string){
        this.cart.journalText=newText;
    }

    get eposTranslines():EposTransLine[]{
        return this.trepo.eposTransLines;
    }

    get qty():number{
        return this.cart.qty;
    }
    set qty(newQty:number){
        this.cart.qty=newQty;
    }
    get price():number{
        return this.cart.price;
    }
    set price(newPrice:number){
        this.cart.price=newPrice;
    }

    get isError():boolean{
      return  this.cart.isError;
    }

}