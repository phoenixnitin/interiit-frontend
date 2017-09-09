import {Routes, RouterModule} from '@angular/router';

import {ContactUsComponent} from './contactus/contactus.component';
import {HomeComponent} from './home/home.component';

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'contactus', component: ContactUsComponent},
    {path: 'home', component: HomeComponent}
];

export const routerModule = RouterModule.forRoot(APP_ROUTES);