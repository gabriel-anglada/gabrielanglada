import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import {appRoutes, PAGE_COMPONENTS} from './app.routing';
import {OnsenModule} from 'ngx-onsenui';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormElementsModule} from './components/form-elements/form-elements.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {APP_PROVIDERS} from './providers/app.providers';
import {APP_PIPES} from './pipes/app.pipes';
import {APP_COMPONENTS} from './components/app.components';
import {MODAL_COMPONENTS} from './modals/app.modals';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    PAGE_COMPONENTS,
    APP_COMPONENTS,
    MODAL_COMPONENTS,
    APP_PIPES
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
    APP_COMPONENTS,
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
