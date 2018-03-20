import { Component,OnInit } from '@angular/core';
import { Cart } from './cart';
@Component({
    selector: "details-lines",
    templateUrl: "./details.component.html"
})
export class DetailsComponent{
    constructor(private cart:Cart) {}

    get purchaseTotalIncDiscount():number{
        return this.cart.getPurchaseTotalIncDiscount();
    }
    get purchaseTotalExcDiscount():number{
        return this.cart.getPurchaseTotalExcDiscount();
    }
    get noOfItems():number{
        return this.cart.getItemCount();
    }
    get total():number{
        return this.cart.getTotal();
    }
    get discount():number{
        return this.cart.getDiscount();
    }
    get paid():number{
        return this.cart.getPaidAmount();
    }
    get change():number{
        return this.cart.getChangeAmount();
    }
    get displayLines():string []{
        return this.cart.displayLines;
    }
    get orderType():string{
        return this.cart.orderTypeText;
    }
    get orderId():number{
        return this.cart.orderId;
    }
    get seats():string{
        return this.cart.seates;
    }
    get mod():string{
        return this.cart.mod;
    }
}