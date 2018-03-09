import { Injectable} from "@angular/core";
import{EposTransLine} from "../models/eposTransLine.model";
import {Repository} from "../models/repository";
import {MenuLine} from "../models/menuLine.model";
import { FunctionKey } from "../models/functionKey.model";
@Injectable()
export class Cart{
    constructor(private repo: Repository){
        this.paid=0;
        this.change=0;
        this.qty=0;
        this.price=0;
        
        this.displayLines.push("www.visualbusinessretail.com");
        this.displayLines.push("Support: 02080901449");
        this.displayLines.push("Customer Id: C00050");
        this.displayLines.push("Copyright @ 2018 VBR");

        this.orderType="Table";
        this.orderId=2;
        this.seates="1";
        this.slipNo=0;

        this.menuHeaderId="MAIN";
        this.menuHeaderCurrentPage=1;
        this.menuLineCurrentPage=1;
        if(this.menuLine==null){
            this.menuLine=new MenuLine();
        }
        this.repo.getMenuHeaders();
        this.repo.getMenuLines(this.menuHeaderId);


        this.repo.getFunctionKeys();
        if(this.functionKey==null){
            this.functionKey=new FunctionKey();
        }
        this.mod="START";
    }
    displayLines: Array<string>=new Array<string>();


    orderType?:string;
    orderId?:number;
    seates?:string;

    qty?:number;
    price?:number;
    journalText?:string;

    paid?:number;
    change?:number;

    slipNo?:number;

    menuHeaderId?:string;
    menuHeaderCurrentPage?:number;
    menuLineCurrentPage?:number;
    menuLine?:MenuLine;

    mod?:string;
    functionKey?:FunctionKey;

    
    
    getItemCount():number{
        if(this.repo.eposTransLines!=null&&this.repo.eposTransLines.length>0){
            return this.repo.eposTransLines.filter(l=>((!l.lineStatus)&&(l.entryType==0))).length;
        }else{
            return 0;
        }
    }   
    getPurchaseTotalIncDiscount():number{
        try{
            if(this.repo.eposTransLines!=null&&this.repo.eposTransLines.length>0){
                return this.repo.eposTransLines.filter(l=>((!l.lineStatus)&&(l.entryType==0)))
                    .map(e=>e.amount).reduce((s,u)=>s+u+0);
            }else{
                return 0;
            }
        }catch{
            return 0;
        }
    }
    getPurchaseTotalExcDiscount():number{
        try{
            if(this.repo.eposTransLines!=null&&this.repo.eposTransLines.length>0){
                return this.repo.eposTransLines.filter(l=>((!l.lineStatus)&&(l.entryType==0)))
                        .map(e=>e.netAmount).reduce((s,u)=>s+u+0);
            }else{
                return 0;
            }
        }catch{
            return 0;
        }
    }
    getTotal():number{
        try{
            if(this.repo.eposTransLines!=null&&this.repo.eposTransLines.length>0){
                return this.repo.eposTransLines.filter(l=>((!l.lineStatus)))
                        .map(e=>e.netAmount).reduce((s,u)=>s+u+0);
            }
            else{
                return 0;
            }
        }catch{
            return 0;
        }
    }
    getDiscount():number{
        try{
            if(this.repo.eposTransLines!=null&&this.repo.eposTransLines.length>0){
                return this.repo.eposTransLines.filter(l=>((!l.lineStatus)&&(l.entryType==0)))
                        .map(e=>e.discountAmount).reduce((s,u)=>s+u+0);
            }else{
                return 0;
            }
        }catch{
            return 0;
        }
    }
    getPaidAmount():number{
        try{
            if(this.repo.eposTransLines!=null&&this.repo.eposTransLines.length>0){
                this.paid= this.repo.eposTransLines.filter(l=>((!l.lineStatus)&&(l.entryType==2)&&(!l.isChange)))
                        .map(e=>e.netAmount).reduce((s,u)=>s+u+0);
                        return this.paid;
            }else{
                return this.paid;
            }
        }catch{
            return this.paid;
        }
    }
    getChangeAmount():number{
        try{
            if(this.repo.eposTransLines!=null&&this.repo.eposTransLines.length>0){
                this.change= this.repo.eposTransLines.filter(l=>((!l.lineStatus)&&(l.entryType==2)&&(l.isChange)))
                        .map(e=>e.netAmount).reduce((s,u)=>s+u+0);
                        return this.change;
            }else{
                return this.change;
            }
        }catch{
            return this.change;
        }
    }
    focusJournalInput(){
        document.getElementById("journalInput").focus();
    }

    get journalInputElementValue():any{
        return (<HTMLInputElement>document.getElementById("journalInput")).value;
    }
    

}