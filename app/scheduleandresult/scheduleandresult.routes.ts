import {Routes, RouterModule} from '@angular/router';

import {RootComponent} from './root/root.component';
import {AthleticsComponent} from './athletics/athletics.component';
import {BadmintonComponent} from './badminton/badminton.component';
import {BasketBallComponent} from './basketball/basketball.component';
import {CricketComponent} from './cricket/cricket.component';
import {FootBallComponent} from './football/football.component';
import {HockeyComponent} from './hockey/hockey.component';
import {SquashComponent} from './squash/squash.component';
import {TableTennisComponent} from './tabletennis/tabletennis.component';
import {TennisComponent} from './tennis/tennis.component';
import {VolleyBallComponent} from './volleyball/volleyball.component';
import {WeightLiftingComponent} from './weightlifting/weightlifting.component';
import {WaterPoloComponent} from './waterpolo/waterpolo.component';
import {SwimmingComponent} from './swimming/swimming.component';
import {UpdateSoonComponent} from '../updated_soon/update_soon.component';
import {GeneralChampionshipComponent} from './general_championship/general_championship.component';
export const SCHEDULEANDRESULT_ROUTES: Routes = [
    {path: '', component:RootComponent},
    {path: 'waterpolo', component: WaterPoloComponent},
    {path: 'athletics', component: AthleticsComponent},
    {path: 'badminton', component: BadmintonComponent},
    {path: 'basketball', component: BasketBallComponent},
    {path: 'cricket', component: CricketComponent},
    {path: 'football', component: FootBallComponent},
    {path: 'hockey', component: HockeyComponent},
    {path: 'squash', component: SquashComponent},
    {path: 'tennis', component: TennisComponent},
    {path: 'tabletennis', component: TableTennisComponent},
    {path: 'volleyball', component: VolleyBallComponent},
    {path: 'weightlifting', component: WeightLiftingComponent},
    {path: 'waterpolo', component: UpdateSoonComponent},
    {path: 'swimming', component: SwimmingComponent},
    {path: 'general-championship', component: GeneralChampionshipComponent},
];