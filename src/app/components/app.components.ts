import {ComponentLibrary} from './componet-library/component-library.component';
import {CardBlue} from './card-blue/card-blue.component';
import {CardBlueSoft} from './card-blue-soft/card-blue-soft.component';
import {CardMovementLine} from './card-movement-line/card-movement-line.component';
import {TagComponent} from './tag/tag.component';
import {SuccessAlertComponent} from './dialogs/alerts/successAlert/successAlert.component';
import {ErrorAlertComponent} from './dialogs/alerts/errorAlert/errorAlert.component';
import {GlobalPosCardsComponent} from './global-position-cards/global-position-cards.component';
import {GlobalPositionAccountsComponent} from './global-position-accounts/global-position-accounts.component';

export const APP_COMPONENTS = [
  ComponentLibrary,
  CardBlue,
  CardBlueSoft,
  CardMovementLine,
  TagComponent,
  ErrorAlertComponent,
  SuccessAlertComponent,
  GlobalPositionAccountsComponent,
  GlobalPosCardsComponent
];
