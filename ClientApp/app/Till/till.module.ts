import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import{TillRepository} from './tillRepository';
import{Cart} from './cart';
import{EposTransactionRepository} from "./epostransactionRepository";
import {MenuBtnComponent} from"./menuBtn.component";
import {JournalComponent} from "./journal.component";
import {ItemComponent} from "./item.component";
import {TillComponent}from "./till.component";
import {DetailsComponent} from "./details.component";
import{NumberComponent} from "./number.component";
import {FunctionKeyComponent} from "./functionKey.component";
import{TimeComponent} from "./time.component";
import {TablesComponent} from "./tables.component";
import {SeatsComponent} from "./seats.component";
import{TakeawaysComponent} from "./takeaway.component";
import {PostSalesComponent} from "./postSales.component";
import {SpecialPermissionComponent} from "./specialPermission.component";
@NgModule({
    declarations: [MenuBtnComponent,JournalComponent,TillComponent,ItemComponent,DetailsComponent,
                    NumberComponent,FunctionKeyComponent,TimeComponent,TablesComponent,SeatsComponent,
                    TakeawaysComponent,PostSalesComponent,SpecialPermissionComponent],
    imports: [RouterModule,FormsModule,BrowserModule],
    providers: [TillRepository,Cart,EposTransactionRepository]
    })
export class TillModule{}