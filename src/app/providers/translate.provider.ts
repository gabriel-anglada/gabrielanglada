import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

/*
 Generated class for the Auth provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class TranslateProvider {
  /**
   * @TODO move default language to a general configuration
   */
  private _defaultLang: string = 'es';

  constructor(private translate: TranslateService) {

    // this language will be used as a fallback when a translation isn't found in the current language
    //@TODO move this locale negotiation logic to a service
    let lang = ['es', 'en'].indexOf(translate.getBrowserLang()) >= 0 ? 'es' : this._defaultLang;
    translate.setDefaultLang(lang);
    translate.use(lang);

    console.log(lang);
  }

  getDefaultLang(): string {
    return this.translate.defaultLang;
  }

  getCurrentLang(): string {
    return this.translate.currentLang;
  }
}
