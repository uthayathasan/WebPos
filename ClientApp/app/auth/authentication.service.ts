import { Injectable } from "@angular/core";
import { Repository } from "../models/repository";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { Http, RequestMethod, Request, Response } from "@angular/http";
import "rxjs/add/observable/of";
import{Staff} from "../models/staff.model";
@Injectable()
export class AuthenticationService {
    constructor(private repo: Repository,private router: Router) { }
    authenticated: boolean = false;
    callbackUrl: string;
    userId:string;
    password:string;
    login() {
        this.authenticated = false;
        if(this.repo.staffs!=null){
            let logedInStaff=this.repo.staffs.filter(u => u.userId == this.userId && u.password==this.password);
            if(logedInStaff.length>0)
            {
                this.repo.logedInStaff=logedInStaff[0];
                this.authenticated = true;
                this.repo.device.userId=this.userId;
                this.repo.device.password=this.password;
                this.repo.storeSessionData('device',this.repo.device);
                this.router.navigateByUrl(this.callbackUrl || "");
            }
            else
            {
                this.authenticated = false;
            }
        }
    }

    logout() {
        this.authenticated = false;
        this.repo.logedInStaff=null;
        this.repo.device.userId="";
        this.repo.device.password="";
        this.userId="";
        this.password="";
        this.repo.sendRequest(RequestMethod.Post, "/api/session/" + 'device',this.repo.device)
        .subscribe(response => {
            this.repo.exitFullScreen();
            location.reload();
        });
    }
}