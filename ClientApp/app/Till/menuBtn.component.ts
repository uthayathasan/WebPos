import { Component,OnInit } from '@angular/core';
import { Repository } from "../models/repository";
import{Cart} from "./cart"
import { MenuLine } from "../models/menuLine.model";
import { MenuHeader } from "../models/menuHeader.model";
@Component({
    selector: "menu-btn",
    templateUrl: "./menuBtn.component.html"
})
export class MenuBtnComponent {
    constructor(private repo: Repository,private cart:Cart) {}
    ngOnInit(){
        this.linesPerPage=9;
    }
    
    linesPerPage?:number;

    get menuLine():MenuLine{
        return this.cart.menuLine;
    }

    get menuHeaderId():string{
        return this.cart.menuHeaderId;
    }

    get menuLines1(): MenuLine[]{
        let pageIndex=(this.cart.menuLineCurrentPage-1)*this.linesPerPage;
        if( this.repo.menuLines!=null){
            return this.repo.menuLines.filter(l=>l.keyId%2==1).slice(pageIndex,pageIndex+this.linesPerPage);
        }else{
            this.repo.menuLines;
        }
    }
    get menuLines2(): MenuLine[]{
        let pageIndex=(this.cart.menuLineCurrentPage-1)*this.linesPerPage;
        if(this.repo.menuLines!=null){
            return this.repo.menuLines.filter(l=>l.keyId%2==0).slice(pageIndex,pageIndex+this.linesPerPage);
        }else{
            this.repo.menuLines;
        }
    }
    get menuHeaders(): MenuHeader[]{
        let pageIndex=(this.cart.menuHeaderCurrentPage-1)*this.linesPerPage;
        if(this.repo.menuHeaders!=null){
            return this.repo.menuHeaders.slice(pageIndex,pageIndex+this.linesPerPage);
        }
        else
        {
            return this.repo.menuHeaders;
        }
    }
    get  TotalMenuHeaderPages(): number{
        if(this.repo.menuHeaders!=null){
            return (Math.ceil(this.repo.menuHeaders.length/this.linesPerPage));
        }else{
            return 0;
        }
    }
    get MenuLinePages():number[]{
        if(this.repo.menuLines!=null){
            let btnPerPage=this.linesPerPage*2;
            return Array(Math.ceil(this.repo.menuLines.length/btnPerPage)).fill(0).map((x, i) => i + 1);
        }else{
            return [];
        }
    }
    
    get CurrentMenuHeaderPage():number{
        return this.cart.menuHeaderCurrentPage;
    }
    get CurrentMenuLinePage():number{
        return this.cart.menuLineCurrentPage;
    }
    ChangeMenuHeaderPageNext(){
        if(this.cart.menuHeaderCurrentPage<this.TotalMenuHeaderPages){
            this.cart.menuHeaderCurrentPage++;
        }
        else{
            this.cart.menuHeaderCurrentPage=1;
        }
    }
    ChangeMenuHeaderPageBack(){
        if(this.cart.menuHeaderCurrentPage>1){
            this.cart.menuHeaderCurrentPage--;
        }
        else{
            this.cart.menuHeaderCurrentPage=this.TotalMenuHeaderPages;
        }
    }
    ChangeMenuLinePage(newPage:number){
        this.cart.menuLineCurrentPage=newPage;
    }
    setMenuLine(line:MenuLine)
    {
        this.cart.menuLine=line;
        if(line.keyCommand==1)
        {
            this.cart.menuHeaderId=line.keyValue;
            this.repo.getMenuLines(line.keyValue);
            this.cart.menuLineCurrentPage=1;
        }
        else{
            this.repo.eposTransLines.length=0;
            this.repo.getEposTransLines(1206740);
        }
    }
    setMenuHeaderId(id:string){
        this.cart.menuHeaderId=id;
        this.cart.menuLineCurrentPage=1;
        this.repo.getMenuLines(id);
    }

}