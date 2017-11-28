import {Routes, RouterModule} from '@angular/router';

import {RootComponent} from './root/root.component';
import {WaterPoloComponent} from './waterpolo/waterpolo.component';
import {SwimmingComponent} from './swimming/swimming.component';
import {UpdateSoonComponent} from '../updated_soon/update_soon.component';
export const SCHEDULEANDRESULT_ROUTES: Routes = [
    {path: '', component:RootComponent},
    {path: 'waterpolo', component: WaterPoloComponent},
    {path: 'athletics', component: UpdateSoonComponent},
    {path: 'badminton', component: UpdateSoonComponent},
    {path: 'basketball', component: UpdateSoonComponent},
    {path: 'cricket', component: UpdateSoonComponent},
    {path: 'football', component: UpdateSoonComponent},
    {path: 'hockey', component: UpdateSoonComponent},
    {path: 'squash', component: UpdateSoonComponent},
    {path: 'tennis', component: UpdateSoonComponent},
    {path: 'tabletennis', component: UpdateSoonComponent},
    {path: 'volleyball', component: UpdateSoonComponent},
    {path: 'weightlifting', component: UpdateSoonComponent},
    {path: 'waterpolo', component: UpdateSoonComponent},
    {path: 'swimming', component: SwimmingComponent},
];