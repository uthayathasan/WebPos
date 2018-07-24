import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ModelModule } from './models/model.module';

import {RoutingConfig}from "./app.routing";
import {TillModule} from "./Till/till.module";

import { AuthModule } from "./auth/auth.module";

import { ErrorHandler } from "@angular/core";
import { ErrorHandlerService } from "./errorHandler.service";

const eHandler = new ErrorHandlerService();
export function handler() {
  return eHandler;
}
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,FormsModule, HttpModule, ModelModule,TillModule,RoutingConfig,AuthModule],
  providers: [
    { provide: ErrorHandlerService, useFactory: handler},{ provide: ErrorHandler, useFactory: handler}],
    bootstrap: [AppComponent]
})
export class AppModule { }
