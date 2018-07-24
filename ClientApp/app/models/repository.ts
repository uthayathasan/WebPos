import{Staff} from "./staff.model";
import{Device} from "./device.model";
import{Authorization} from "./authorization.model";

import { Injectable } from "@angular/core";
import { Http, RequestMethod, Request, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Filter } from "./configClasses.repository";
import { ErrorHandlerService, ValidationError } from "../errorHandler.service";
import "rxjs/add/operator/catch";

import { LocalStorage } from '@ngx-pwa/local-storage';

const devicesUrl="/api/devices";
const staffUrl="/api/account/login";
const authorizationUrl="/api/authorizations";

@Injectable()
export class Repository {
    
    private filterObject = new Filter();

    constructor(private http: Http,private localStorage: LocalStorage){
        this.apiBusy=true;
        this.getDevice().subscribe(responce=>{
            this.setDevice(responce);
            if(responce!=null){
                this.getStaffs();
            }
            this.apiBusy=false;
        });
    }

    get currentDateTime():string{
        let d=new Date(Date.now());
        let ds=d.getFullYear().toString()+"-"+(d.getMonth()+1).toString()+"-"+d.getDate().toString()+" ";
        ds=ds+ d.getHours().toString()+":"+d.getMinutes().toString()+":"+d.getSeconds().toString();
        return ds;
    }
    get minDate():string{
        return "1900-01-01 00:00:00";
    }
    setDevice(device:Device){
        if(device!=null){
            if(device.deviceId!="")
            {
                this.device=device;
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

    getStaffs(){
        let url=staffUrl;
        url +="?customerId="+this.filter.customerId;
        url +="&storeId="+this.filter.storeId;
        this.sendRequest(RequestMethod.Get, url)
        .subscribe(response =>this.staffs = response);   
    }
    getAuthorizations(){
        this.apiBusy=true;
        let url=authorizationUrl;
        url +="?customerId="+this.filter.customerId;
        url +="&storeId="+this.filter.storeId;
        this.sendRequest(RequestMethod.Get, url)
        .subscribe(response =>{
            this.authorizations = response;
            this.apiBusy=false;
        });  
    }
    getIsAuthorised(tag:string,role:string):boolean{
        let result=false;
        let authTag=this.authorizations.filter(x=>x.tag==tag);
        if(role=="Admin"){
            result=authTag.map(y=>y.admin)[0];
        }else if(role=="Manager"){
            result=authTag.map(y=>y.manager)[0];
        }else if(role=="Supervisor"){
            result=authTag.map(y=>y.supervisor)[0];
        }else if(role=="Cashier"){
            result=authTag.map(y=>y.cashier)[0];
        }else if(role=="Staff"){
            result=authTag.map(y=>y.staff)[0];
        }
        return result;
    }
    //Ref: https://www.npmjs.com/package/@ngx-pwa/local-storage
    storeDevice(device:Device){
        this.localStorage.setItem('device', device).subscribe(() => {});
    }
    getDevice():Observable<any>{
        return this.localStorage.getItem<Device>('device');
    }
    clearDevice(){
        this.localStorage.removeItem('device').subscribe(() => {});
    }
    public sendRequest(verb: RequestMethod, url: string,data?: any): Observable<any> {
        return this.http.request(new Request({
            method: verb, url: url, body: data})).map(response =>{
                return response.headers.get("Content-Length") != "0"? response.json() : null;
            }).catch((errorResponse: Response) => {
                if (errorResponse.status == 400 ) {
                    let jsonData: string;
                    try {
                        jsonData = errorResponse.json();
                    } catch (e) {
                        //throw new Error("Network Error");
                        throw new Error(errorResponse.toString());
                    }
                    let messages = Object.getOwnPropertyNames(jsonData).map(p => jsonData[p]);
                    throw new ValidationError(messages);
                }
                //throw new Error("Network Error");
                throw new Error(errorResponse.toString());
            });
        }
    ChangeScreenSize(){
        let elem = document.getElementById("pos"); 
        if(!document.webkitIsFullScreen){
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
    exitFullScreen(){
        document.webkitExitFullscreen();
    }
    
    makeFullScreen(){
        let elem = document.getElementById("pos"); 
        elem.webkitRequestFullscreen();
    }
    device:Device;
    staffs:Staff[];
    logedInStaff:Staff;
    authorizations:Authorization[];
    apiBusy?:boolean;
    get filter(): Filter {
        return this.filterObject;
    }
}