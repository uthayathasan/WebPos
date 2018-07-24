import { Component,OnInit } from '@angular/core';
import{EposTransactionRepository} from "./epostransactionRepository";
import{TillRepository} from "./tillRepository";
import{Repository} from "../models/repository";
import { Router } from "@angular/router";

@Component({
    selector: "special-permission",
    templateUrl: "./specialPermission.component.html"
})
export class SpecialPermissionComponent{
    constructor(private repo:Repository, private trepo:TillRepository,private etrepo:EposTransactionRepository, private router:Router) {}
    ngOnInit(){
        this.focusTxt="";
        this.userId="";
        this.password="";
        document.getElementById("username").focus();
        this.focusTxt="userId";
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
    showMessage:boolean =false;
    private focusTxt?:string;

    login(){
        if((this.userId!="")&&(this.password!="")){
            let logedInStaff=this.repo.staffs.filter(u => u.userId == this.userId && u.password==this.password);
            if(logedInStaff.length>0){
                this.showError=false;
                let role=logedInStaff[0].role;
                if(this.trepo.specialTag=="VOID ALL"){
                    if(this.repo.getIsAuthorised('Void All',role)){
                        this.etrepo.voidAll();
                    }else{
                        this.showMessage=true;
                    }
                }
            }else{
                this.showError=true;
            }
        }
    }

    
    
}