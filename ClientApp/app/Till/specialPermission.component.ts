import { Component,OnInit } from '@angular/core';
import{TillRepository} from "./tillRepository";
import { Router } from "@angular/router";

@Component({
    selector: "special-permission",
    templateUrl: "./specialPermission.component.html"
})
export class SpecialPermissionComponent{
    constructor(private trepo:TillRepository,private router:Router) {}
    ngOnInit(){}
    
    get UserId():string{
        return this.userId;
    }
    set UserId(newUserId:string){
        this.userId=newUserId;
    }
    get Password():string{
        return this.password;
    }
    set Password(newPassword:string){
        this.password=newPassword;
    }
    private userId?:string;
    private password?:string;
    showError: boolean = false;
}