import { Item } from "./item.model";
import { MenuHeader } from "./menuHeader.model";
import { MenuLine } from "./menuLine.model";
import {FunctionKey} from "./functionKey.model";
import{ EposTransaction } from "./eposTransaction.model";
import{EposTransLine} from "./eposTransLine.model";
import{Staff} from "./staff.model";
import{Device} from "./device.model";

import { Injectable } from "@angular/core";
import { Http, RequestMethod, Request, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Filter } from "./configClasses.repository";


const itemsUrl = "/api/items";
const menuHeadersUrl="/api/menuHeaders";
const menuLinesUrl="/api/menuLines";
const eposTransactionsUrl="/api/eposTransactions";
const eposTransLinesUrl="/api/eposTransLines";
const devicesUrl="/api/devices";
const functionKeysUrl="/api/functionKeys";

@Injectable()
export class Repository {
    
    private filterObject = new Filter();

    constructor(private http: Http){}
    
    setDevice(response:any){
        if(response!=null){
            if(response.DeviceId!="")
            {
                this.device =new Device;
                this.device.deviceId=response.DeviceId;
                this.device.customerId=response.CustomerId;
                this.device.storeId=response.StoreId;
                this.device.tillId=response.TillId;
                this.device.storeName=response.StoreName;
                this.device.userId=response.UserId;
                this.device.password=response.Password;
                this.filter.customerId=this.device.customerId;
                this.filter.storeId=this.device.storeId;
                this.filter.tillId=this.device.tillId; 
            }
        }
    }
    getDevices(id:string){
        if(id!=""){
            let url=devicesUrl+"/"+id;
            this.sendRequest(RequestMethod.Get, url)
            .subscribe(responce=>{
                this.device=responce;
                if((this.device.customerId!="")&&(this.device.storeId!=""))
                {
                    this.filter.customerId=this.device.customerId;
                    this.filter.storeId=this.device.storeId;
                    this.filter.tillId=this.device.tillId;
                }else{
                    this.device=null;
                }          
            });
        }else{
            this.device=null;
        }
    }
    clearDevices(){
        this.device.deviceId="";
        this.device.customerId="";
        this.device.storeId="";
        this.device.tillId="";
        this.device.storeName="";
        this.device.userId="";
        this.device.password="";
        this.storeSessionData('device',this.device);
        this.device=null;
    }
    getItem(id: string) {
        let url=itemsUrl+ "/" + id;
        url +="?customerId="+this.filter.customerId;
        url +="&storeId="+this.filter.storeId;
        this.sendRequest(RequestMethod.Get, url)
        .subscribe(response => this.item = response);
        }

    getMenuLines(id: string){
        let url=menuLinesUrl+"/"+id;
        url +="?customerId="+this.filter.customerId;
        url +="&storeId="+this.filter.storeId;
        this.sendRequest(RequestMethod.Get, url)
        .subscribe(response =>this.menuLines = response);
    }
    getMenuHeaders(){
        let url=menuHeadersUrl+"?customerId="+this.filter.customerId;
        url +="&storeId="+this.filter.storeId;
        this.sendRequest(RequestMethod.Get, url)
        .subscribe(response =>this.menuHeaders = response);
    }
    getFunctionKeys(){
        let url=functionKeysUrl+"?customerId="+this.filter.customerId;
        url +="&storeId="+this.filter.storeId;
        this.sendRequest(RequestMethod.Get, url)
        .subscribe(response=>this.functionKeys=response);

    }
    getEposTransaction(id:number){
        let url=eposTransactionsUrl+"/"+id;
        url +="?customerId="+this.filter.customerId;
        url +="&storeId="+this.filter.storeId;
        url +="&tillId="+this.filter.tillId;
        this.sendRequest(RequestMethod.Get, url)
        .subscribe(response =>this.eposTransaction = response);
    }
    getEposTransLines(id:number){
        let url=eposTransLinesUrl+"/"+id;
        url +="?customerId="+this.filter.customerId;
        url +="&storeId="+this.filter.storeId;
        url +="&tillId="+this.filter.tillId;
        this.sendRequest(RequestMethod.Get, url)
        .subscribe(response =>this.eposTransLines = response);
    }

    getStaffs(){
        let url="/api/account/login";
        url +="?customerId="+this.filter.customerId;
        url +="&storeId="+this.filter.storeId;
        this.sendRequest(RequestMethod.Get, url)
        .subscribe(response =>this.staffs = response);   
    }    

    storeSessionData(dataType: string, data: any) {
        return this.sendRequest(RequestMethod.Post, "/api/session/" + dataType, data)
        .subscribe(response => { });
    }
    getSessionData(dataType: string): Observable<any> {
        return this.sendRequest(RequestMethod.Get, "/api/session/" + dataType);
    }

    private sendRequest(verb: RequestMethod, url: string,data?: any): Observable<any> {
        return this.http.request(new Request({
            method: verb, url: url, body: data})).map(response =>{
                return response.headers.get("Content-Length") != "0"? response.json() : null;
            });
        }
    
    
    fullscreen(){
        let elem = document.getElementById("pos"); 
        if(!this.isFullScreen()){
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            }
        }else
        {
            document.webkitExitFullscreen();
        }

    }
    isFullScreen()
    {
        if(document.webkitIsFullScreen){
            return true;
        }else{
            return false;
        }
    }

    
    device:Device;
    item:Item;
    menuHeaders:MenuHeader[];
    menuLines:MenuLine[];
    functionKeys:FunctionKey[];
    eposTransaction:EposTransaction;
    eposTransLines:EposTransLine[];
    staffs:Staff[];
    logedInStaff:Staff;

    get filter(): Filter {
        return this.filterObject;
    }
}