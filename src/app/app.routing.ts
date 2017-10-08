import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';

export const appRoutes: Routes = [
  /**
   * Default routes
   */
  { path: 'home', component: HomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

export const PAGE_COMPONENTS = [
  HomeComponent
];
