import { Routes } from '@angular/router';
import { TodayComponent } from './pages/today/today';
import { Week } from './pages/week/week';
import { Journey } from './pages/journey/journey';

export const routes: Routes = [
  { path: '', redirectTo: 'today', pathMatch: 'full' },
  { path: 'today', component: TodayComponent },
  { path: 'week', component: Week },
  { path: 'journey', component: Journey },
];
