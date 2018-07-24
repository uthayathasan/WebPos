import { Component,OnInit,NgZone } from '@angular/core';
import { ErrorHandlerService } from "./errorHandler.service";
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
  private lastError: string[];
  constructor(private repo:Repository,private router:Router,private authService: AuthenticationService,errorHandler: ErrorHandlerService,ngZone:NgZone){
    errorHandler.errors.subscribe(error => {
      ngZone.run(()=>this.lastError = error);
      });
  }
  
  ngOnInit(){
    this.router.navigateByUrl("");
    this.repo.getDevice().subscribe(responce=>{
      this.repo.setDevice(responce);
      if(this.repo.device!=null){
        if((this.repo.device.userId!="")&&(this.repo.device.password!="")){
          this.authService.userId=this.repo.device.userId;
          this.authService.password=this.repo.device.password;
        }
      }
      if((this.repo.device!=null)&&(!this.authService.authenticated)){
        this.router.navigateByUrl("/login");
      }
      if(this.repo.device==null){
        this.router.navigateByUrl("");
      }
    });
  }
  get apiBusy(){
    return this.repo.apiBusy;
  }
  get error(): string[] {
    return this.lastError;
  }
  clearError() {
    this.repo.apiBusy=false;
    this.lastError = null;
    this.router.navigateByUrl("");
    location.reload();
  }
  get Device():Device{
    return this.repo.device;
  }
  changeScreenSize(){
   this.repo.ChangeScreenSize();
  }
  gohome(){
    this.router.navigateByUrl("");
  }
}
