import {Routes, RouterModule} from '@angular/router';

import {ContactUsComponent} from './contactus/contactus.component';
import {HomeComponent} from './home/home.component';
import {SportsComponent} from './sports/sports.component';
import {SportsAquaticsComponent} from './sports/aquatics/aquatics.component';
import {NotExistComponent} from './not_exist/not_exist.component';
import {MapsComponent} from './maps/maps.component';
import {GalleryComponent} from './gallery/gallery.component';

import {GALLERY_ROUTES} from './gallery/gallery.routes';

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'contactus', component: ContactUsComponent},
    {path: 'home', component: HomeComponent},
    {path: 'sports', component: SportsComponent},
    {path: 'sports-aquatics', component: SportsAquaticsComponent},
    {path:'maps',component:MapsComponent},
    {path: 'gallery', component: GalleryComponent, children: GALLERY_ROUTES},
    {path: '**', component: NotExistComponent}
];

export const routerModule = RouterModule.forRoot(APP_ROUTES);
