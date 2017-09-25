import {Routes, RouterModule} from '@angular/router';

import {RootComponent} from './root/root.component';
import {WaterPoloComponent} from './waterpolo/waterpolo.component';

export const SCHEDULEANDRESULT_ROUTES: Routes = [
    {path: '', component:RootComponent},
    {path: 'waterpolo', component: WaterPoloComponent}
];