import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {HttpModule} from '@angular/http'; 

import {ContactUsComponent} from './contactus/contactus.component';
import {NavbarComponent} from './navbar/navbar.component'
import {HomeComponent} from './home/home.component';
import {UpdateComponent} from './update/update.component';
import {SportsComponent} from './sports/sports.component';
import {UpdateService} from './update/update.service';
import {NotExistComponent} from './not_exist/not_exist.component';
import {SportsAquaticsComponent} from './sports/aquatics/aquatics.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ImageGalleryComponent} from './gallery/ImageGallery/image.gallery.component';
import {VideoGalleryComponent} from './gallery/VideoGallery/video.gallery.component';
import {ScheduleandResultComponent} from './scheduleandresult/scheduleandresult.component';
import {RootComponent} from './scheduleandresult/root/root.component';
import {WaterPoloComponent} from './scheduleandresult/waterpolo/waterpolo.component';
import {ContactCoreComponent} from './contactus/cores/core.component';
// import {ContactCoordComponent} from './contactus/coords/coord.component';
import {MapComponent} from './map/map.component';

import {routerModule} from './app.routes';


@NgModule({
  imports:      [
     BrowserModule,
     routerModule,
     HttpModule
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
     GalleryComponent,
     ImageGalleryComponent,
     VideoGalleryComponent,
     ScheduleandResultComponent,
     RootComponent,
     WaterPoloComponent,
     ContactCoreComponent,
     // ContactCoordComponent,
     MapComponent
      ],
  providers:[
     UpdateService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}
