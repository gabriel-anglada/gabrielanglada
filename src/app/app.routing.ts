import {AccountPageComponent} from './pages/account/account.component';
import {AccountInfoPageComponent} from './pages/account-info/account-info.component';
import {SearchMovesModalComponent} from './components/modals/search-moves/search-moves-modal.component';
import {Routes} from '@angular/router';
import {OnsenUIPageComponent} from './pages/onsen-ui/onsen-ui.component';
import {FlexBoxTestsPageComponent} from './pages/flexbox-tests/flexbox-tests.component';

export const appRoutes: Routes = [
  { path: 'account', component: AccountPageComponent },
  { path: 'account-info',      component: AccountInfoPageComponent },
  { path: 'onsen-ui',      component: OnsenUIPageComponent },
  { path: 'flexbox',      component: FlexBoxTestsPageComponent },
  { path: '',
    redirectTo: '/onsen-ui',
    pathMatch: 'full'
  },
  { path: '**', component: OnsenUIPageComponent }
];

export const PAGE_COMPONENTS = [
  AccountPageComponent,
  AccountInfoPageComponent,
  OnsenUIPageComponent,
  FlexBoxTestsPageComponent
];

export const MODAL_COMPONENTS = [
  SearchMovesModalComponent
];
