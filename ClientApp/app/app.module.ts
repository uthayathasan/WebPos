import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ModelModule } from './models/model.module';

import {RoutingConfig}from "./app.routing";
import {TillModule} from "./Till/till.module";
import {TillComponent}from "./Till/till.component";
import { AuthModule } from "./auth/auth.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,FormsModule, HttpModule, ModelModule,TillModule,RoutingConfig,AuthModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
