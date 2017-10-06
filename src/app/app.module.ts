import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import {appRoutes, MODAL_COMPONENTS, PAGE_COMPONENTS} from './app.routing';
import {OnsenModule} from 'ngx-onsenui';
import {RouterModule} from '@angular/router';
import { GlobalPositionAccountsComponent } from './components/global-position-accounts/global-position-accounts.component';
import { GlobalPosCardsComponent } from './components/global-position-cards/global-position-cards.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormElementsModule} from './components/form-elements/form-elements.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {APP_PROVIDERS} from './providers/app.providers';
import {APP_PIPES} from './pipes/app.pipes';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    PAGE_COMPONENTS,
    MODAL_COMPONENTS,
    APP_PIPES,
    GlobalPositionAccountsComponent,
    GlobalPosCardsComponent
  ],
  imports: [
    // Angular core Modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true } // <-- debugging purposes only
      //{ enableTracing: true } // <-- debugging purposes only
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
    OnsenModule,
    BootstrapModalModule
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
