import { NgModule,CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import {ContactUsComponent} from './contactus/contactus.component';
import {NavbarComponent} from './navbar/navbar.component'
import {HomeComponent} from './home/home.component';
import {UpdateComponent} from './update/update.component';
import {SportsComponent} from './sports/sports.component';
import {UpdateService} from './update/update.service';
import {NotExistComponent} from './not_exist/not_exist.component';
import {SportsAquaticsComponent} from './sports/aquatics/aquatics.component';
import {MapsComponent} from './maps/maps.component';

import {routerModule} from './app.routes';


@NgModule({
  imports:      [
     BrowserModule,
     routerModule,
     
      ],
  declarations: [
     AppComponent,
     ContactUsComponent,
     HomeComponent,
     UpdateComponent,
     SportsComponent,
     NavbarComponent,
     NotExistComponent,
     SportsAquaticsComponent,
     MapsComponent
      ],
  providers:[
     UpdateService
  ],
  bootstrap:    [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  
})
export class AppModule { 

}
