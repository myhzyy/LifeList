import { Routes } from '@angular/router';
import { TodayComponent } from './pages/today/today';
import { Week } from './pages/week/week';

export const routes: Routes = [
  { path: '', redirectTo: 'today', pathMatch: 'full' },
  { path: 'today', component: TodayComponent },
  { path: 'week', component: Week },
];
