import { Component,OnInit } from '@angular/core';
import { Repository } from "../models/repository";
import { Item } from "../models/item.model"
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector: "item-details",
    templateUrl: "./item.component.html"
})
export class ItemComponent{
    constructor(private repo: Repository,private router: Router,private activeRoute: ActivatedRoute) {}
    ngOnInit(){
        let id=this.activeRoute.snapshot.params["id"];
        if(id){
            this.repo.getItem(id);
        }else{
            this.router.navigateByUrl("/");
        }
    }
    get item():Item{
        return this.repo.item;
    }
}