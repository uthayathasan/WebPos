import { Injectable} from "@angular/core";
import{EposTransLine} from "../models/eposTransLine.model";
import{TillRepository} from "./tillRepository";
import {MenuLine} from "../models/menuLine.model";
import { FunctionKey } from "../models/functionKey.model";
@Injectable()
export class Cart{
    constructor(private trepo:TillRepository){
        this.paid=0;
        this.change=0;
        this.qty=0;
        this.price=0;
        this.journalInput="";
        this.maxQty=999;
        this.isError=false;

        this.displayLines.push("www.visualbusinessretail.com");
        this.displayLines.push("Support: 02080901449");
        this.displayLines.push("Customer Id: C00050");
        this.displayLines.push("Copyright @ 2018 VBR");

        this.orderTypeText="";
        /*this.orderTypeText="Table";//Table||Takeaway||Delivery
        this.orderType=0;//0||1||2
        this.orderNo=1;//OrderNo From No Series
        this.tableId=1;
        this.tableName="Table 1";
        this.seates="2";
        this.takeawayId=0;
        this.deliveryId=0;
        this.customerId=0;
        this.slipNo=0;
        this.transType=0;//0 sales||1 Refund*/

        this.menuHeaderId="MAIN";
        this.menuHeaderCurrentPage=1;
        this.menuLineCurrentPage=1;
        if(this.menuLine==null){
            this.menuLine=new MenuLine();
        }
        this.trepo.getMenuHeaders();
        this.trepo.getMenuLines(this.menuHeaderId);


        this.trepo.getFunctionKeys();
        if(this.functionKey==null){
            this.functionKey=new FunctionKey();
        }
        this.mod="START";

       
    }
    displayLines: Array<string>=new Array<string>();

    orderTypeText?:string;//Table||Takeaway||Delivery
    orderType?:number;//0||1||2
    orderNo?:number;//OrderNo From No Series
    tableId?:number;
    tableName?:string;
    seates?:string;
    takeawayId?:number;
    deliveryId?:number;
    customerId?:number;
    slipNo?:number;
    transType?:number;//0 sales||1 Refund

    qty?:number;
    price?:number;
    journalText?:string;
    journalInput?:string;
    maxQty?:number;

    paid?:number;
    change?:number;

    menuHeaderId?:string;
    menuHeaderCurrentPage?:number;
    menuLineCurrentPage?:number;
    menuLine?:MenuLine;

    isError?:boolean;

    mod?:string;
    functionKey?:FunctionKey;

   
    getMaxLineNo():number{
        try{
            if(this.trepo.eposTransLines!=null&&this.trepo.eposTransLines.length>0){
                return this.trepo.eposTransLines.reduce((oa,u)=>Math.max(oa,u.lineNo),0);
            }else{
                return 0;
            }
        }catch{
            return 0;
        }
    }
    
    getItemCount():number{
        try{
            if(this.trepo.eposTransLines!=null&&this.trepo.eposTransLines.length>0){
                return this.trepo.eposTransLines.filter(l=>((!l.lineStatus)&&(l.entryType==0)&&(!l.isCharge)))
                .map(q=>q.quantity).reduce((s,u)=>s+u+0);
            }else{
                return 0;
            }
        }catch{
            return 0;
        }
    }   
    getPurchaseTotalIncDiscount():number{
        try{
            if(this.trepo.eposTransLines!=null&&this.trepo.eposTransLines.length>0){
                return this.trepo.eposTransLines.filter(l=>((!l.lineStatus)&&(l.entryType==0)))
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
            if(this.trepo.eposTransLines!=null&&this.trepo.eposTransLines.length>0){
                return this.trepo.eposTransLines.filter(l=>((!l.lineStatus)&&(l.entryType==0)))
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
            if(this.trepo.eposTransLines!=null&&this.trepo.eposTransLines.length>0){
                return this.trepo.eposTransLines.filter(l=>((!l.lineStatus)))
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
            if(this.trepo.eposTransLines!=null&&this.trepo.eposTransLines.length>0){
                return this.trepo.eposTransLines.filter(l=>((!l.lineStatus)&&(l.entryType==0)))
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
            if(this.trepo.eposTransLines!=null&&this.trepo.eposTransLines.length>0){
                this.paid= this.trepo.eposTransLines.filter(l=>((!l.lineStatus)&&(l.entryType==2)&&(!l.isChange)))
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
            if(this.trepo.eposTransLines!=null&&this.trepo.eposTransLines.length>0){
                this.change= this.trepo.eposTransLines.filter(l=>((!l.lineStatus)&&(l.entryType==2)&&(l.isChange)))
                        .map(e=>e.netAmount).reduce((s,u)=>s+u+0);
                        return this.change;
            }else{
                return this.change;
            }
        }catch{
            return this.change;
        }
    }
    focusTill(){
        document.getElementById("till").focus();
    }

}