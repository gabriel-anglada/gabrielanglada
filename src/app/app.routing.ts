import {AccountPageComponent} from './pages/account/account.component';
import {AccountInfoPageComponent} from './pages/account-info/account-info.component';
import {SearchMovesModalComponent} from './components/modals/search-moves/search-moves-modal.component';
import {Routes} from '@angular/router';
import {OnsenUIPageComponent} from './pages/onsen-ui/onsen-ui.component';
import {FlexBoxTestsPageComponent} from './pages/flexbox-tests/flexbox-tests.component';
import {CardsPageComponent} from './pages/cards/cards.component';
import {NotificationsPageComponent} from "./pages/notifications/notifications.component";
import { GlobalPosComponent } from './pages/global-pos/global-pos.component';
import { ComponentLibrary } from './components/componet-library/component-library.component';
import { CardBlue } from './components/card-blue/card-blue.component';
import { CardBlueSoft } from './components/card-blue-soft/card-blue-soft.component';
import { TagDarkBlue } from './components/tag-dark-blue/tag-dark-blue.component';
import { TagPurple } from './components/tag-purple/tag-purple.component';
import { CardMovementLine } from './components/card-movement-line/card-movement-line.component';
import { AccountLine } from './components/account-line/account-line.component';

export const appRoutes: Routes = [
  { path: 'account', component: AccountPageComponent },
  { path: 'account-info',      component: AccountInfoPageComponent },
  { path: 'cards',      component: CardsPageComponent },
  { path: 'components', component: ComponentLibrary },
  { path: 'notifications',      component: NotificationsPageComponent },
  { path: 'onsen-ui',      component: OnsenUIPageComponent },
  { path: 'flexbox',      component: FlexBoxTestsPageComponent },
  { path: 'global-pos', component: GlobalPosComponent },
  { path: '' , redirectTo: '/onsen-ui', pathMatch: 'full' },
  { path: '**', component: GlobalPosComponent }
];

export const PAGE_COMPONENTS = [
  AccountLine,
  AccountPageComponent,
  AccountInfoPageComponent,
  OnsenUIPageComponent,
  FlexBoxTestsPageComponent,
  CardsPageComponent,
  NotificationsPageComponent,
  GlobalPosComponent
];

export const MODAL_COMPONENTS = [
  SearchMovesModalComponent,
  ComponentLibrary,
  CardBlue,
  CardBlueSoft,
  CardMovementLine,
  TagDarkBlue,
  TagPurple,
];
