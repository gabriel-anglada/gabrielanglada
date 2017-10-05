import {AccountPageComponent} from './pages/account/account.component';
import {AccountInfoPageComponent} from './pages/account-info/account-info.component';
import {SearchMovesModalComponent} from './components/modals/search-moves/search-moves-modal.component';
import {Routes} from '@angular/router';
import {OnsenUIPageComponent} from './pages/onsen-ui/onsen-ui.component';
import {FlexBoxTestsPageComponent} from './pages/flexbox-tests/flexbox-tests.component';
import {CardsPageComponent} from './pages/cards/cards.component';
import {NotificationsPageComponent} from './pages/notifications/notifications.component';
import {BizumComponent} from './pages/bizum/bizum.component';
import {BizumNotActivatedComponent} from './pages/bizum/not_activated/not_activated.component';
import {BizumActivateComponent} from './pages/bizum/activate/activate.component';
import {BizumMainComponent} from './pages/bizum/main/main.component';

export const appRoutes: Routes = [
  { path: 'account', component: AccountPageComponent },
  { path: 'account-info',      component: AccountInfoPageComponent },
  { path: 'cards',      component: CardsPageComponent },
  { path: 'notifications',      component: NotificationsPageComponent },
  { path: 'bizum', component: BizumComponent,
    children: [
      { path: '', component: BizumMainComponent },
      { path: 'not-activated', component: BizumNotActivatedComponent },
      { path: 'activate', component: BizumActivateComponent },
      { path: '**', component: BizumMainComponent }
    ]
  },
  { path: 'onsen-ui',      component: OnsenUIPageComponent },
  { path: 'flexbox',      component: FlexBoxTestsPageComponent },
  { path: '',
    redirectTo: '/account',
    pathMatch: 'full'
  },
  { path: '**', component: AccountPageComponent }
];

export const PAGE_COMPONENTS = [
  AccountPageComponent,
  AccountInfoPageComponent,
  OnsenUIPageComponent,
  FlexBoxTestsPageComponent,
  CardsPageComponent,
  NotificationsPageComponent,
  BizumComponent,
  BizumMainComponent,
  BizumNotActivatedComponent,
  BizumActivateComponent
];

export const MODAL_COMPONENTS = [
  SearchMovesModalComponent
];
