import { Item } from "../models/item.model";
import { MenuHeader } from "../models/menuHeader.model";
import { MenuLine } from "../models/menuLine.model";
import {FunctionKey} from "../models/functionKey.model";
import{ EposTransaction } from "../models/eposTransaction.model";
import{EposTransLine} from "../models/eposTransLine.model";
import{TableStatus} from "../models/tableStatus.model";
import{Vat} from "../models/vat.model";
import {TakeawayStatus} from "../models/takeawayStatus.model";

import { Injectable } from "@angular/core";
import { RequestMethod, Request, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import{Repository} from "../models/repository";
const menuHeadersUrl="/api/menuHeaders";
const menuLinesUrl="/api/menuLines";
const itemsUrl = "/api/items";
const eposTransactionsUrl="/api/eposTransactions";
const eposTransLinesUrl="/api/eposTransLines";
const functionKeysUrl="/api/functionKeys";
const tablesUrl="/api/tables";
const vatUrl="/api/vats";
const takeawayUrl="/api/takeaways";
@Injectable()
export class TillRepository {

    constructor(private repo:Repository){
        this.selectedEposTransLine=new EposTransLine;
        this.eposTransLines =new Array();
        this.eposTransLines.length=0;

        this.getVats();
    }

    getVats(){
        let url=vatUrl+"?customerId="+this.repo.filter.customerId;
        url +="&storeId="+this.repo.filter.storeId;
        this.repo.sendRequest(RequestMethod.Get, url)
        .subscribe(response=>this.vats=response);
    }
    getVatRateById(id:string):number{
        let vatRate=0;
        try{
            vatRate=this.vats.filter(x=>x.id==id).map(y=>y.rate)[0];
        }
        catch{
            vatRate=0;
        }
        if(isNaN(vatRate)){
            vatRate=0;
        }
       return vatRate;
    }

    getItem(id: string) {
        let url=itemsUrl+ "/" + id;
        url +="?customerId="+this.repo.filter.customerId;
        url +="&storeId="+this.repo.filter.storeId;
        this.repo.sendRequest(RequestMethod.Get, url)
        .subscribe(response => this.item = response);
        }
    
    getMenuLines(id: string){
        let url=menuLinesUrl+"/"+id;
        url +="?customerId="+this.repo.filter.customerId;
        url +="&storeId="+this.repo.filter.storeId;
        this.repo.sendRequest(RequestMethod.Get, url)
        .subscribe(response =>this.menuLines = response);
    }
    getMenuHeaders(){
        let url=menuHeadersUrl+"?customerId="+this.repo.filter.customerId;
        url +="&storeId="+this.repo.filter.storeId;
        this.repo.sendRequest(RequestMethod.Get, url)
        .subscribe(response =>this.menuHeaders = response);
    }
    getFunctionKeys(){
        let url=functionKeysUrl+"?customerId="+this.repo.filter.customerId;
        url +="&storeId="+this.repo.filter.storeId;
        this.repo.sendRequest(RequestMethod.Get, url)
        .subscribe(response=>this.functionKeys=response);

    }
   /*
    getEposTransaction(id:number){
        let url=eposTransactionsUrl+"/"+id;
        url +="?customerId="+this.repo.filter.customerId;
        url +="&storeId="+this.repo.filter.storeId;
        url +="&tillId="+this.repo.filter.tillId;
        this.repo.sendRequest(RequestMethod.Get, url)
        .subscribe(response =>this.eposTransaction = response);
    }*/
    updateEposTransLine(id: number, changes: Map<string, any>){
        let patch = [];
        changes.forEach((value, key) =>patch.push({ op: "replace", path: key, value: value }));
        this.apiBusy=true;
        let url=eposTransLinesUrl+"/"+id;
        url +="?customerId="+this.repo.filter.customerId;
        url +="&storeId="+this.repo.filter.storeId;
        url +="&tillId="+this.repo.filter.tillId;
        this.repo.sendRequest(RequestMethod.Patch, url,patch)
        .subscribe(response =>{
            let result = response;
            this.apiBusy=false;
            if(result>0){
                let trans_id=this.selectedEposTransLine.transId;
                this.getEposTransLines(trans_id);
            }
        });
    }
    getEposTransLines(id:number){
        this.apiBusy=true;
        let url=eposTransLinesUrl+"/"+id;
        url +="?customerId="+this.repo.filter.customerId;
        url +="&storeId="+this.repo.filter.storeId;
        url +="&tillId="+this.repo.filter.tillId;
        this.repo.sendRequest(RequestMethod.Get, url)
        .subscribe(response =>{
            this.apiBusy=false;
            this.eposTransLines = response;
            if(this.eposTransLines.length>0){
                let maxlineNo=this.eposTransLines.reduce((oa,u)=>Math.max(oa,u.lineNo),0);
                this.selectedEposTransLine=this.eposTransLines.filter(l=>l.lineNo==maxlineNo)[0];
            }else{
                this.selectedEposTransLine=new EposTransLine;
            }
        });
    }
    setSelectedLine(line:EposTransLine){
        this.selectedEposTransLine=line;
    }

   
    getTables(){
        this.apiBusy=true;
        let url=tablesUrl+"?customerId="+this.repo.filter.customerId;
        url +="&storeId="+this.repo.filter.storeId;
        url +="&tillId="+this.repo.filter.tillId;
        this.repo.sendRequest(RequestMethod.Get, url)
        .subscribe(response =>{
            this.apiBusy=false;
            this.tableStatus = response;
        });
    }
    setSelectedTable(line:TableStatus){
        this.selectedTableLine=line;
    }

    getTakeaways(){
        this.apiBusy=true;
        let url=takeawayUrl +"?customerId="+this.repo.filter.customerId;
        url +="&storeId="+this.repo.filter.storeId;
        url +="&tillId="+this.repo.filter.tillId;
        this.repo.sendRequest(RequestMethod.Get, url)
        .subscribe(response=>{
            this.apiBusy=false;
            this.takeawayStatus=response;
        });
    }
    setSelectedTakeaway(line:TakeawayStatus){
        this.selectedTakeawayLine=line;
    }
    set apiBusy(val:boolean){
        this.repo.apiBusy=val;
    }
    get apiBusy(){
        return this.repo.apiBusy;
    }

    vats:Vat[];
    item:Item;
    menuHeaders:MenuHeader[];
    menuLines:MenuLine[];
    functionKeys:FunctionKey[];
    eposTransaction:EposTransaction;
    eposTransLines:EposTransLine[];
    selectedEposTransLine:EposTransLine;
    tableStatus:TableStatus[];
    selectedTableLine:TableStatus;
    takeawayStatus:TakeawayStatus[];
    selectedTakeawayLine:TakeawayStatus;
    specialTag?:string;
}