import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Cart } from './cart';
import {FunctionKey} from "../models/functionKey.model";
import { TillRepository } from './tillRepository';
import{Repository} from "../models/repository";
import { AuthenticationService } from "../auth/authentication.service";
@Component({
    selector: "function-key",
    templateUrl: "./functionKey.component.html",
    styleUrls: ['./functionKey.component.css']
})
export class FunctionKeyComponent{
    constructor(private repo:Repository,private trepo:TillRepository,private cart: Cart,private router:Router,private authService: AuthenticationService) {}
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
        if(!this.repo.apiBusy)
        {
            if(line.mod.toUpperCase()=="START")
            {
                if(line.job.toUpperCase()=="TABLE"){
                    this.cart.journalText="";
                    this.cart.isError=false;
                    //this.trepo.testEsp();
                    this.trepo.getTables();
                    this.trepo.selectedTableLine=null;
                    this.router.navigateByUrl("/tables");
                }
                else if(line.job.toUpperCase()=="TAKE AWAY"){
                    this.cart.journalText="";
                    this.cart.isError=false;
                    this.trepo.getTakeaways();
                    this.trepo.selectedTakeawayLine=null;
                    this.router.navigateByUrl("/takeaways");
                }
                else if(line.job.toUpperCase()=="LOG OFF"){
                    this.authService.logout();
                }
            }
            else if(line.mod.toUpperCase()=="SALES")
            {
                if(line.job.toUpperCase()=="MAIN")
                {
                    this.trepo.eposTransLines.length=0;
                    this.trepo.eposTransaction=null;
                    this.cart.mod="Start";
                    
                    this.trepo.selectedTableLine=null;
                    
                    this.cart.orderTypeText="";
                    this.cart.orderType=0;
                    this.cart.orderNo=0;
                    this.cart.tableId=0;
                    this.cart.tableName="";
                    this.cart.seates="";
                    this.cart.takeawayId=0;
                    this.cart.deliveryId=0;
                    this.cart.customerId==0;
                    this.cart.slipNo=0;
                    this.cart.transType=0;
                    this.cart.isError=false;
                    this.cart.journalText="";
                }
            }
        }
    }
}