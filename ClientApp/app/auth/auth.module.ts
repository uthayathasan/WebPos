import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationComponent } from "./authentication.component";
import {VbrComponent} from "./vbr.component";
import {ClearDeviceComponent} from "./clearDevice.component";

@NgModule({
    imports: [RouterModule, FormsModule, BrowserModule],
    declarations: [VbrComponent,ClearDeviceComponent,AuthenticationComponent],
    providers: [AuthenticationService]
})
export class AuthModule { }