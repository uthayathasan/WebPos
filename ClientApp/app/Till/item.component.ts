import { Component,OnInit } from '@angular/core';
import { TillRepository } from "./tillRepository";
import { Item } from "../models/item.model"
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector: "item-details",
    templateUrl: "./item.component.html"
})
export class ItemComponent{
    constructor(private trepo: TillRepository,private router: Router,private activeRoute: ActivatedRoute) {}
    ngOnInit(){
        let id=this.activeRoute.snapshot.params["id"];
        if(id){
            this.trepo.getItem(id);
        }else{
            this.router.navigateByUrl("/");
        }
    }
    get item():Item{
        return this.trepo.item;
    }
}