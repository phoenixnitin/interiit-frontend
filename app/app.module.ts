import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import {ContactUsComponent} from './contactus/contactus.component';
import {HomeComponent} from './home/home.component';

import {routerModule} from './app.routes'

@NgModule({
  imports:      [
     BrowserModule,
     routerModule
      ],
  declarations: [
     AppComponent,
     ContactUsComponent,
     HomeComponent
      ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
