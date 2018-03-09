import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {MenuBtnComponent} from"./menuBtn.component";
import {JournalComponent} from "./journal.component";
import {ItemComponent} from "./item.component";
import {TillComponent}from "./till.component";
import {DetailsComponent} from "./details.component";
import{NumberComponent} from "./number.component";
import {FunctionKeyComponent} from "./functionKey.component";
import{TimeComponent} from "./time.component";
import{Cart} from './cart'
import{TillRepository} from './tillRepository';
@NgModule({
    declarations: [MenuBtnComponent,JournalComponent,TillComponent,ItemComponent,DetailsComponent,
                    NumberComponent,FunctionKeyComponent,TimeComponent],
    imports: [BrowserModule],
    providers: [Cart,TillRepository]
    })
export class TillModule{}