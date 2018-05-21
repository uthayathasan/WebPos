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
   
    get orderTypeDetails():string{
        if(this.cart.orderType==0){
            return this.cart.orderTypeText+" Id: "+this.cart.tableId+" Seats: "+this.cart.seates;
        }else if(this.cart.orderType==1){
            return this.cart.orderTypeText+" Id: "+this.cart.takeawayId;
        }else if(this.cart.orderType==2){
            return this.cart.orderTypeText+" Id: "+this.cart.deliveryId;
        }else{
            return this.cart.orderTypeText
        }
    }
   
    get mod():string{
        return this.cart.mod.toUpperCase();
    }
}