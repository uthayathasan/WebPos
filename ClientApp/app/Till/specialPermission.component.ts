import { Component,OnInit } from '@angular/core';
import{TillRepository} from "./tillRepository";
import { Router } from "@angular/router";

@Component({
    selector: "special-permission",
    templateUrl: "./specialPermission.component.html"
})
export class SpecialPermissionComponent{
    constructor(private trepo:TillRepository,private router:Router) {}
    ngOnInit(){
        this.focusTxt="";
        this.userId="";
        this.password="";
    }
    get specialTag():string{
        return this.trepo.specialTag;
    }
    focus(id:string){
        this.focusTxt=id;
    }
    enterTxt(val:string){
        if(this.focusTxt=="userId"){
            this.userId=this.userId+val;
        }else if(this.focusTxt=="password"){
            this.password=this.password+val;
        }
    }
    enterBtn(){
        if(this.userId==""){
            this.focusTxt="userId";
            document.getElementById("username").focus();
        }else if(this.password==""){
            this.focusTxt="password";
            document.getElementById("userpassword").focus();
        }
    }
    exitBtn(){
        this.router.navigateByUrl("/till");
    }
    clearBtn(){
        if(this.focusTxt=="userId"){
            this.userId="";
            document.getElementById("username").focus();
        }else if(this.focusTxt=="password"){
            this.password="";
            document.getElementById("userpassword").focus();
        }
    }
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
    private focusTxt?:string;
    
}