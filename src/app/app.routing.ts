import {Routes} from '@angular/router';
import {FABsComponent} from './pages/fabs/fabs';

export const appRoutes: Routes = [
  { path: 'fabs', component: FABsComponent },
  { path: '',
    redirectTo: '/fabs',
    pathMatch: 'full'
  },
  { path: '**', component: FABsComponent }
];
