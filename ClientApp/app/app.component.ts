import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthenticationService } from "./auth/authentication.service";
import { Repository } from './models/repository';
import { Device } from './models/device.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private repo:Repository,private router:Router,private authService: AuthenticationService){}
  
  ngOnInit(){
    this.repo.getSessionData("device").subscribe(response =>{
      if(response!=null){
          this.repo.setDevice(response);
          if((response.UserId!="")&&(response.Password!=""))
          {
            this.authService.userId=response.UserId;
            this.authService.password=response.Password;
          }
      }
    });
    if((this.repo.device!=null)&&(!this.authService.authenticated)){
      this.router.navigateByUrl("/login");
    }
    if(this.repo.device==null){
      this.router.navigateByUrl("");
    }
    
  }
  get Device():Device{
    return this.repo.device;
  }
  changeScreen(){
   this.repo.ChangeScreen();
  }
  gohome(){
    this.router.navigateByUrl("");
  }
}
