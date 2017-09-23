import {Routes, RouterModule} from '@angular/router';

import {ContactCoreComponent} from './cores/core.component';
import {ContactCoordComponent} from './coords/coord.component';

export const CONTACTUS_ROUTES: Routes = [
    {path: '', redirectTo: 'core', pathMatch: 'full'},
    {path: 'core', component: ContactCoreComponent},
    {path: 'coord', component: ContactCoordComponent}
    
];