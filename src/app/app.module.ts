import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import {appRoutes, PAGE_COMPONENTS} from './app.routing';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {APP_PIPES} from './pipes/app.pipes';
import {APP_COMPONENTS} from './components/app.components';
import {AppTranslationModule} from "./app-translation.module";
import {AppMaterialModule} from "./app-material.module";

@NgModule({
  declarations: [
    AppComponent,
    PAGE_COMPONENTS,
    APP_COMPONENTS,
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
      { useHash: true }
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    // Custom modules
    AppTranslationModule,
    AppMaterialModule
  ],
  entryComponents: [
    PAGE_COMPONENTS,
    APP_COMPONENTS
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
