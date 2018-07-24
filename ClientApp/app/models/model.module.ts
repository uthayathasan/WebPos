import { NgModule } from "@angular/core";
import { Repository } from "./repository";
import {QzTrayService} from "./QzTrayService";
@NgModule({
    providers: [Repository,QzTrayService]
})
export class ModelModule { }