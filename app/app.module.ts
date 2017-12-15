import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {HttpModule} from '@angular/http'; 

import {ContactUsComponent} from './contactus/contactus.component';
import {NavbarComponent} from './navbar/navbar.component'
import {HomeComponent} from './home/home.component';
import {UpdateComponent} from './update/update.component';
import {NotificationComponent} from './notifications/notification.component';
import {SportsComponent} from './sports/sports.component';
import {UpdateService} from './navbar/notification.service';
import {NotExistComponent} from './not_exist/not_exist.component';
import {UpdateSoonComponent} from './updated_soon/update_soon.component';
import {SportsAquaticsComponent} from './sports/aquatics/aquatics.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ImageGalleryComponent} from './gallery/ImageGallery/image.gallery.component';
import {VideoGalleryComponent} from './gallery/VideoGallery/video.gallery.component';
import {ScheduleandResultComponent} from './scheduleandresult/scheduleandresult.component';
import {RootComponent} from './scheduleandresult/root/root.component';
import {AthleticsComponent} from './scheduleandresult/athletics/athletics.component';
import {BadmintonComponent} from './scheduleandresult/badminton/badminton.component';
import {BasketBallComponent} from './scheduleandresult/basketball/basketball.component';
import {CricketComponent} from './scheduleandresult/cricket/cricket.component';
import {FootBallComponent} from './scheduleandresult/football/football.component';
import {HockeyComponent} from './scheduleandresult/hockey/hockey.component';
import {SquashComponent} from './scheduleandresult/squash/squash.component';
import {TableTennisComponent} from './scheduleandresult/tabletennis/tabletennis.component';
import {TennisComponent} from './scheduleandresult/tennis/tennis.component';
import {VolleyBallComponent} from './scheduleandresult/volleyball/volleyball.component';
import {WeightLiftingComponent} from './scheduleandresult/weightlifting/weightlifting.component';
import {WaterPoloComponent} from './scheduleandresult/waterpolo/waterpolo.component';
import {SwimmingComponent} from './scheduleandresult/swimming/swimming.component';
import {ContactCoreComponent} from './contactus/cores/core.component';
import {GeneralChampionshipComponent} from './scheduleandresult/general_championship/general_championship.component';
// import {ContactCoordComponent} from './contactus/coords/coord.component';
import {EventComponent} from './events/events.component';
import {MapComponent} from './map/map.component';
import {SocialCampaignComponent} from './socialcampaign/socialcampaign';
import {LiveComponent} from './live/live.component';

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
     NotificationComponent,
     SportsComponent,
     NavbarComponent,
     NotExistComponent,
     UpdateSoonComponent,
     SportsAquaticsComponent,
     GalleryComponent,
     ImageGalleryComponent,
     VideoGalleryComponent,
     ScheduleandResultComponent,
     RootComponent,
     AthleticsComponent,
     BadmintonComponent,
     BasketBallComponent,
     CricketComponent,
     FootBallComponent,
     HockeyComponent,
     SquashComponent,
     TableTennisComponent,
     TennisComponent,
     VolleyBallComponent,
     WeightLiftingComponent,
     WaterPoloComponent,
     SwimmingComponent,
     GeneralChampionshipComponent,
     ContactCoreComponent,
     // ContactCoordComponent,
     MapComponent,
     EventComponent,
     SocialCampaignComponent,
     LiveComponent
      ],
  providers:[
     UpdateService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}
