import { Component,OnInit } from '@angular/core';
import { TillRepository } from "./tillRepository";
import{Cart} from "./cart";
import{EposTransactionRepository} from "./epostransactionRepository";
import { MenuLine } from "../models/menuLine.model";
import { MenuHeader } from "../models/menuHeader.model";
@Component({
    selector: "menu-btn",
    templateUrl: "./menuBtn.component.html"
})
export class MenuBtnComponent {
    constructor(private trepo: TillRepository,private cart:Cart,private eRepo:EposTransactionRepository) {}
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
        if( this.trepo.menuLines!=null){
            return this.trepo.menuLines.filter(l=>l.keyId%2==1).slice(pageIndex,pageIndex+this.linesPerPage);
        }else{
            this.trepo.menuLines;
        }
    }
    get menuLines2(): MenuLine[]{
        let pageIndex=(this.cart.menuLineCurrentPage-1)*this.linesPerPage;
        if(this.trepo.menuLines!=null){
            return this.trepo.menuLines.filter(l=>l.keyId%2==0).slice(pageIndex,pageIndex+this.linesPerPage);
        }else{
            this.trepo.menuLines;
        }
    }
    get menuHeaders(): MenuHeader[]{
        let pageIndex=(this.cart.menuHeaderCurrentPage-1)*this.linesPerPage;
        if(this.trepo.menuHeaders!=null){
            return this.trepo.menuHeaders.slice(pageIndex,pageIndex+this.linesPerPage);
        }
        else
        {
            return this.trepo.menuHeaders;
        }
    }
    get  TotalMenuHeaderPages(): number{
        if(this.trepo.menuHeaders!=null){
            return (Math.ceil(this.trepo.menuHeaders.length/this.linesPerPage));
        }else{
            return 0;
        }
    }
    get MenuLinePages():number[]{
        if(this.trepo.menuLines!=null){
            let btnPerPage=this.linesPerPage*2;
            return Array(Math.ceil(this.trepo.menuLines.length/btnPerPage)).fill(0).map((x, i) => i + 1);
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
        if((line.keyCommand==1)&&(line.keyValue.trim()!=""))
        {
            this.cart.menuHeaderId=line.keyValue;
            this.trepo.getMenuLines(line.keyValue);
            this.cart.menuLineCurrentPage=1;
        }
        else{
            if(line.keyValue.trim()!=""){
                if(this.cart.slipNo==0){
                    this.eRepo.createTransactionAndinsertTransLineFromItemNo(line.keyValue);
                }else{
                this.eRepo.insertTransLineFromItemNo(line.keyValue);
                }
            }
        }
    }
    setMenuHeaderId(id:string){
        this.cart.menuHeaderId=id;
        this.cart.menuLineCurrentPage=1;
        this.trepo.getMenuLines(id);
    }
}