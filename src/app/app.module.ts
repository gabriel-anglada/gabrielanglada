import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { FAB_COMPONENTS } from './components/fab.component';
import {appRoutes, MODAL_COMPONENTS, PAGE_COMPONENTS} from './app.routing';
import {OnsenModule} from 'ngx-onsenui';
import {RouterModule} from '@angular/router';
import { GlobalPositionAccountsComponent } from './components/global-position-accounts/global-position-accounts.component';
import { GlobalPosCardsComponent } from './components/global-position-cards/global-position-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    PAGE_COMPONENTS,
    MODAL_COMPONENTS,
    FAB_COMPONENTS,
    GlobalPositionAccountsComponent,
    GlobalPosCardsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    // Third Parties
    OnsenModule
  ],
  entryComponents: [
    PAGE_COMPONENTS,
    MODAL_COMPONENTS
  ],
  providers: [ { provide: LOCALE_ID, useValue : 'es-ES'} ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
