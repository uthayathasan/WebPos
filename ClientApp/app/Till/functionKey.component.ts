import { Component,OnInit } from '@angular/core';
import { Repository } from "../models/repository";
import { Cart } from './cart';
import {FunctionKey} from "../models/functionKey.model";
@Component({
    selector: "function-key",
    templateUrl: "./functionKey.component.html"
})
export class FunctionKeyComponent{
    constructor(private repo: Repository,private cart: Cart) {}
    ngOnInit(){}
    get functionKeys1(): FunctionKey[]{
        if( this.repo.functionKeys!=null){
            return this.repo.functionKeys.filter(m=>m.mod.toUpperCase()==this.cart.mod)
            .filter(l=>l.index%3==1);
        }else{
            this.repo.functionKeys;
        }
    }
    get functionKeys2(): FunctionKey[]{
        if( this.repo.functionKeys!=null){
            return this.repo.functionKeys.filter(m=>m.mod.toUpperCase()==this.cart.mod)
            .filter(l=>l.index%3==2);
        }else{
            this.repo.functionKeys;
        }
    }
    get functionKeys3(): FunctionKey[]{
        if( this.repo.functionKeys!=null){
            return this.repo.functionKeys.filter(m=>m.mod.toUpperCase()==this.cart.mod)
            .filter(l=>l.index%3==0);
        }else{
            this.repo.functionKeys;
        }
    }
    setFunctionKey(line:FunctionKey){
        this.cart.functionKey=line;
    }
    get functionKey():FunctionKey{
        return this.cart.functionKey;
    }
}