import {AccountPageComponent} from './pages/account/account.component';
import {AccountInfoPageComponent} from './pages/account-info/account-info.component';
import {Routes} from '@angular/router';
import {OnsenUIPageComponent} from './pages/onsen-ui/onsen-ui.component';
import {FlexBoxTestsPageComponent} from './pages/flexbox-tests/flexbox-tests.component';
import {CardsPageComponent} from './pages/cards/cards.component';
import {NotificationsPageComponent} from './pages/notifications/notifications.component';
import {GlobalPosComponent} from './pages/global-pos/global-pos.component';
import {ComponentLibrary} from './components/componet-library/component-library.component';
import {AccountMovementsList} from './components/account-movements-list/account-movements-list.component';
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
  /**
   * Testing components
   */
  { path: 'components', component: ComponentLibrary },
  { path: 'onsen-ui',      component: OnsenUIPageComponent },
  { path: 'flexbox',      component: FlexBoxTestsPageComponent },
  { path: '',
    redirectTo: '/global-pos',
    pathMatch: 'full'
  },
  /**
   * Default routes
   */
  { path: 'global-pos', component: GlobalPosComponent },
  { path: '**', component: GlobalPosComponent }
];

export const PAGE_COMPONENTS = [
  AccountMovementsList,
  AccountPageComponent,
  AccountInfoPageComponent,
  OnsenUIPageComponent,
  FlexBoxTestsPageComponent,
  CardsPageComponent,
  NotificationsPageComponent,
  BizumComponent,
  BizumMainComponent,
  BizumNotActivatedComponent,
  BizumActivateComponent,
  GlobalPosComponent
];
