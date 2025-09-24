import { Routes } from '@angular/router';
import { TodayComponent } from './pages/today/today';
import { Week } from './pages/week/week';
import { Journey } from './pages/journey/journey';
import { DonePile } from './pages/done-pile/done-pile';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
  { path: '', redirectTo: 'today', pathMatch: 'full' },
  { path: 'today', component: TodayComponent },
  { path: 'week', component: Week },
  { path: 'journey', component: Journey },
  { path: 'donePile', component: DonePile },
  { path: 'profile', component: Profile },
];
