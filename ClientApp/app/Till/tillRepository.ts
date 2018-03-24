import { Item } from "../models/item.model";
import { MenuHeader } from "../models/menuHeader.model";
import { MenuLine } from "../models/menuLine.model";
import {FunctionKey} from "../models/functionKey.model";
import{ EposTransaction } from "../models/eposTransaction.model";
import{EposTransLine} from "../models/eposTransLine.model";
import{TableStatus} from "../models/tableStatus.model";


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

@Injectable()
export class TillRepository {

    constructor(private repo:Repository){
        this.selectedEposTransLine=new EposTransLine;
        this.eposTransLines =new Array();
        this.eposTransLines.length=0;
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
    getEposTransLines(id:number){
        let url=eposTransLinesUrl+"/"+id;
        url +="?customerId="+this.repo.filter.customerId;
        url +="&storeId="+this.repo.filter.storeId;
        url +="&tillId="+this.repo.filter.tillId;
        this.repo.sendRequest(RequestMethod.Get, url)
        .subscribe(response =>{
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
     /*
    insertEposTransLine(line:EposTransLine){
        let result=0;
        let url=eposTransLinesUrl;
        url +="?customerId="+this.repo.filter.customerId;
        url +="&storeId="+this.repo.filter.storeId;
        url +="&tillId="+this.repo.filter.tillId;
        this.repo.sendRequest(RequestMethod.Post, url, line).subscribe(response => {
            result = response;});
    }
    */
    getTables(){
        let url=tablesUrl+"?customerId="+this.repo.filter.customerId;
        url +="&storeId="+this.repo.filter.storeId;
        url +="&tillId="+this.repo.filter.tillId;
        this.repo.sendRequest(RequestMethod.Get, url)
        .subscribe(response =>this.tableStatus = response);
    }

    item:Item;
    menuHeaders:MenuHeader[];
    menuLines:MenuLine[];
    functionKeys:FunctionKey[];
    eposTransaction:EposTransaction;
    eposTransLines:EposTransLine[];
    tableStatus:TableStatus[];
    selectedEposTransLine:EposTransLine;

}