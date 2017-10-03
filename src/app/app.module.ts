import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import {FAB_COMPONENTS} from './components/fab.component';
import {appRoutes, MODAL_COMPONENTS, PAGE_COMPONENTS} from './app.routing';
import {OnsenModule} from 'ngx-onsenui';
import {RouterModule} from '@angular/router';
import { GlobalPositionAccountsComponent } from './components/global-position-accounts/global-position-accounts.component';
import { GlobalPosCardsComponent } from './components/global-position-cards/global-position-cards.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormElementsModule} from './components/form-elements/form-elements.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {APP_PROVIDERS} from "./providers/app.providers";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    // Angular core Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    // Custom Modules
    FormElementsModule,
    // Third Party Modules
    OnsenModule
  ],
  entryComponents: [
    PAGE_COMPONENTS,
    MODAL_COMPONENTS
  ],
  providers: [
    APP_PROVIDERS
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
