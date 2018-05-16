import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Cart } from './cart';
import {FunctionKey} from "../models/functionKey.model";
import { TillRepository } from './tillRepository';
@Component({
    selector: "function-key",
    templateUrl: "./functionKey.component.html"
})
export class FunctionKeyComponent{
    constructor(private trepo:TillRepository,private cart: Cart,private router:Router) {}
    ngOnInit(){}
    get functionKeys1(): FunctionKey[]{
        if( this.trepo.functionKeys!=null){
            return this.trepo.functionKeys.filter(m=>m.mod.toUpperCase()==this.cart.mod.toUpperCase())
            .filter(l=>l.index%3==1);
        }else{
            this.trepo.functionKeys;
        }
    }
    get functionKeys2(): FunctionKey[]{
        if( this.trepo.functionKeys!=null){
            return this.trepo.functionKeys.filter(m=>m.mod.toUpperCase()==this.cart.mod.toUpperCase())
            .filter(l=>l.index%3==2);
        }else{
            this.trepo.functionKeys;
        }
    }
    get functionKeys3(): FunctionKey[]{
        if( this.trepo.functionKeys!=null){
            return this.trepo.functionKeys.filter(m=>m.mod.toUpperCase()==this.cart.mod.toUpperCase())
            .filter(l=>l.index%3==0);
        }else{
            this.trepo.functionKeys;
        }
    }
    setFunctionKey(line:FunctionKey){
        this.cart.functionKey=line;
        this.applyJob(line);
    }
    get functionKey():FunctionKey{
        return this.cart.functionKey;
    }

    private applyJob(line:FunctionKey){
        if(line.job=="TABLE"){
            //this.trepo.testEsp();
            this.trepo.getTables();
            this.trepo.selectedTableLine=null;
            this.router.navigateByUrl("/tables")
            
        }
    }
}