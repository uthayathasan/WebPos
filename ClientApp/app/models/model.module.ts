import { NgModule } from "@angular/core";
import { Repository } from "./repository";
import {QzTrayService} from "./QzTrayService";
import { LocalStorageModule } from '@ngx-pwa/local-storage';
@NgModule({
    imports: [LocalStorageModule],
    providers: [Repository,QzTrayService]
})
export class ModelModule { }