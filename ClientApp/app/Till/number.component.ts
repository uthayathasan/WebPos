import { Component,OnInit } from '@angular/core';
import { Cart } from './cart';
import { Repository } from '../models/repository';
import { Router } from "@angular/router";
@Component({
    selector: "number-lines",
    templateUrl: "./number.component.html"
})
export class NumberComponent{
    constructor(private cart:Cart,private repo:Repository,private router:Router) {}
    gohome(){
         this.router.navigateByUrl("");
    }
    get deviceId():string{
       return this.repo.device.deviceId;
    }
    get tillId():string{
        return this.repo.device.tillId;
    }
}