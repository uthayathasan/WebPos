import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Cart } from './cart';
import {FunctionKey} from "../models/functionKey.model";
import { TillRepository } from './tillRepository';
import{Repository} from "../models/repository";
import{QzTrayService} from "../models/QzTrayService";
import { AuthenticationService } from "../auth/authentication.service";
@Component({
    selector: "function-key",
    templateUrl: "./functionKey.component.html",
    styleUrls: ['./functionKey.component.css']
})
export class FunctionKeyComponent{
    constructor(private repo:Repository,private trepo:TillRepository,private cart: Cart,private router:Router,
        private authService: AuthenticationService,private qzprinter:QzTrayService) {}

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
                    if(this.cart.slipNo==0)
                    {
                        this.trepo.eposTransLines.length=0;
                        this.trepo.eposTransaction=null;
                    }
                    this.cart.journalText="";
                    this.cart.isError=false;
                    this.trepo.getTables();
                    this.trepo.selectedTableLine=null;
                    this.router.navigateByUrl("/tables");
                }
                else if(line.job.toUpperCase()=="TAKE AWAY"){
                    if(this.cart.slipNo==0)
                    {
                        this.trepo.eposTransLines.length=0;
                        this.trepo.eposTransaction=null;
                    }
                    this.cart.journalText="";
                    this.cart.isError=false;
                    this.trepo.getTakeaways();
                    this.trepo.selectedTakeawayLine=null;
                    this.router.navigateByUrl("/takeaways");
                }
                else if(line.job.toUpperCase()=="LOG OFF"){
                    this.authService.logout();
                }
                else if(line.job.toUpperCase()=="PRINT LAST"){
                    let pr=this.qzprinter.getPrinters();
                    console.log(pr);
                }
            }
            else if(line.mod.toUpperCase()=="SALES")
            {
                if(line.job.toUpperCase()=="MAIN")
                {
                    this.cart.setNextTransaction();
                }
                else if(line.job.toUpperCase()=="VOID LINE")
                {
                    if(this.trepo.eposTransLines.length>0)
                    {
                        if(this.trepo.selectedEposTransLine.elno>0)
                        {
                            let role=this.repo.logedInStaff.role;
                            let isAuthorised=false;
                            if(this.trepo.selectedEposTransLine.kitchenPrinted)
                            {
                                let tag="Kitchen Void Line";
                                if(this.repo.getIsAuthorised(tag,role)){
                                    isAuthorised=true;
                                }
                            }else{
                                let tag="Void Line";
                                if(this.repo.getIsAuthorised(tag,role)){
                                    isAuthorised=true;
                                }
                            }
                            if(isAuthorised){
                                this.trepo.selectedEposTransLine.lineStatus=true;
                                let elno=this.trepo.selectedEposTransLine.elno;
                                let changes = new Map<string, any>();
                                changes.set("lineStatus", true);
                                this.trepo.updateEposTransLine(elno,changes);
                                this.cart.isError=true;
                                this.cart.journalText="Sales Line Voided!";
                            }else{
                                this.cart.isError=true;
                                this.cart.journalText="Permission Denied!";
                            }
                        }
                    }
                }
                else if(line.job.toUpperCase()=="VOID ALL")
                {
                    if(this.cart.slipNo>0)
                    {
                        this.trepo.specialTag="VOID ALL";
                        this.router.navigateByUrl("/specialPermission");
                    }
                }
            }
        }
    }
}