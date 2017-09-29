import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {FAB_COMPONENTS} from './components/fab.component';
import {appRoutes, MODAL_COMPONENTS, PAGE_COMPONENTS} from './app.routing';
import {OnsenModule} from 'ngx-onsenui';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PAGE_COMPONENTS,
    MODAL_COMPONENTS
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
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
