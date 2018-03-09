import { Component,OnInit } from '@angular/core';
import { Repository } from "../models/repository";
import { EposTransLine } from "../models/eposTransLine.model"
import { Cart } from './cart';

@Component({
    selector: "journal-lines",
    templateUrl: "./journal.component.html"
})
export class JournalComponent{
    constructor(private repo: Repository,private cart:Cart) {}
    inputValue:any;
    ngOnInit(){
        this.cart.slipNo=1204594;
        this.repo.getEposTransaction(this.cart.slipNo);
        this.repo.getEposTransLines(this.cart.slipNo);
    }

    onKey(event:KeyboardEvent){
        if(event.keyCode==13){
            this.inputValue = this.cart.journalInputElementValue;
            this.journalText=this.inputValue;
        }
    }
    getInputValue(){
        this.inputValue = this.cart.journalInputElementValue;
        this.journalText=this.inputValue;
    }
    focusJournalInput(){
        this.cart.focusJournalInput();
    }
    get journalText():string{
        return this.cart.journalText;
    }
    set journalText(newText:string){
        this.cart.journalText=newText;
    }

    get eposTranslines():EposTransLine[]{
        return this.repo.eposTransLines;
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

}