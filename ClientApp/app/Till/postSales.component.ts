import { Cart } from './cart';
import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
    selector: "post-sales",
    templateUrl: "./postSales.component.html"
})
export class PostSalesComponent{
    constructor(private cart: Cart,private router: Router){}
    ngOnInit(){}
    get header(): string{
        return this.cart.header;
    }
    get salesAmount():number{
        return this.cart.salesAmount;
    }
    get noOfItems():number{
        return this.cart.noOfitems;
    }
    get paid():number{
        return this.cart.paidAmount;
    }
    get change():number{
        return this.cart.changeAmount;
    }
    get discount():number{
        return this.cart.discountAmount;
    }
    get posting():string{
        return this.cart.posting;
    }
    
    goToTill(){
        this.router.navigateByUrl("/till");
    }
}