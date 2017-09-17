import {Routes, RouterModule} from '@angular/router';

import {ContactUsComponent} from './contactus/contactus.component';
import {HomeComponent} from './home/home.component';
import {SportsComponent} from './sports/sports.component';
import {NotExistComponent} from './not_exist/not_exist.component';

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'contactus', component: ContactUsComponent},
    {path: 'home', component: HomeComponent},
    {path: 'sports', component: SportsComponent},
    {path: '**', component: NotExistComponent}
];

export const routerModule = RouterModule.forRoot(APP_ROUTES);