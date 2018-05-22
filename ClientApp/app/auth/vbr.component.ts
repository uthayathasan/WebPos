import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Repository } from '../models/repository';
import { AuthenticationService } from "./authentication.service";
import { Staff } from '../models/staff.model';
import { Device } from '../models/device.model';
@Component({
    selector: 'vbr-root',
    templateUrl: './vbr.component.html',
  })
  export class VbrComponent {
    constructor(private authService: AuthenticationService,private router:Router,private repo:Repository){}
    id:string;
    apply(){
      this.repo.getDevices(this.id);
      this.router.navigateByUrl("");
    }
    
    claerDevice(){
      this.router.navigateByUrl("clear");
    }
    login(){
      this.router.navigateByUrl("login");
    }
    logOut(){
      this.authService.logout();
    }
    goToTill(){
      this.router.navigateByUrl("till");
    }

    get Device():Device{
      return this.repo.device;
    }
    get Authenticated():boolean{
      return this.authService.authenticated;
    }
    get LogedInStaff():Staff{
      return this.repo.logedInStaff;
    }
  }