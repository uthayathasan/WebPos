import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Repository } from '../models/repository';
import {Device} from '../models/device.model'
import { Location } from '@angular/common';
@Component({
    selector: 'clear-device',
    templateUrl: './clearDevice.component.html',
  })
  export class ClearDeviceComponent{
    constructor(private repo:Repository,private location: Location,private router:Router){}
    claerDevice(){
        this.repo.clearDevice();
        this.router.navigateByUrl("");
        location.reload();
      }
    Back(){
      if(this.repo.device==null){
        this.router.navigateByUrl("");
        location.reload();
      }else{
        this.router.navigateByUrl("");
      }
    }
    
    get Device():Device{
      return this.repo.device;
    }
  }