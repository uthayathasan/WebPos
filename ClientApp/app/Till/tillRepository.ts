import { Item } from "../models/item.model";
import { MenuHeader } from "../models/menuHeader.model";
import { MenuLine } from "../models/menuLine.model";
import {FunctionKey} from "../models/functionKey.model";
import{ EposTransaction } from "../models/eposTransaction.model";
import{EposTransLine} from "../models/eposTransLine.model";


import { Injectable } from "@angular/core";
import { Http, RequestMethod, Request, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import{Repository} from "../models/repository";

const itemsUrl = "/api/items";
const menuHeadersUrl="/api/menuHeaders";
const menuLinesUrl="/api/menuLines";
const eposTransactionsUrl="/api/eposTransactions";
const eposTransLinesUrl="/api/eposTransLines";
const functionKeysUrl="/api/functionKeys";

@Injectable()
export class TillRepository {

    constructor(private http: Http,private repo:Repository){}
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
    getEposTransaction(id:number){
        let url=eposTransactionsUrl+"/"+id;
        url +="?customerId="+this.repo.filter.customerId;
        url +="&storeId="+this.repo.filter.storeId;
        url +="&tillId="+this.repo.filter.tillId;
        this.repo.sendRequest(RequestMethod.Get, url)
        .subscribe(response =>this.eposTransaction = response);
    }
    getEposTransLines(id:number){
        let url=eposTransLinesUrl+"/"+id;
        url +="?customerId="+this.repo.filter.customerId;
        url +="&storeId="+this.repo.filter.storeId;
        url +="&tillId="+this.repo.filter.tillId;
        this.repo.sendRequest(RequestMethod.Get, url)
        .subscribe(response =>this.eposTransLines = response);
    }

    item:Item;
    menuHeaders:MenuHeader[];
    menuLines:MenuLine[];
    functionKeys:FunctionKey[];
    eposTransaction:EposTransaction;
    eposTransLines:EposTransLine[];


}