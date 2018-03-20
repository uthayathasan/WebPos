import {Component,OnInit} from "@angular/core";
import { AuthenticationService } from "./authentication.service";
import { Repository } from "../models/repository";
import{Device} from "../models/device.model";
@Component({
    templateUrl: "authentication.component.html"
    })
    export class AuthenticationComponent {
        constructor(private authService: AuthenticationService,private repo: Repository) { }
        ngOnInit(){
            if(this.repo.staffs==null){
            this.repo.getStaffs();
            }
        }
        showError: boolean = false;
        login() {
            this.showError = false;
            this.authService.login();
            if(!this.authService.authenticated){
                this.showError = true;
            }
            else
            {
                this.repo.makeFullScreen();
            }
        }
        
        get Device():Device{
            return this.repo.device;
        }
        get UserId():string{
            return this.authService.userId;
        }
        set UserId(newUserId:string){
            this.authService.userId=newUserId;
        }
        get Password():string{
            return this.authService.password;
        }
        set Password(newPassword:string){
            this.authService.password=newPassword;
        }
    }
    