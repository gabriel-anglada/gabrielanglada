import {TranslateProvider} from './translate.provider';
import {LOCALE_ID} from '@angular/core';
import {DialogService} from '../services/custom-dialog-service.service';

export const APP_PROVIDERS = [
  TranslateProvider,
  { provide: LOCALE_ID, useValue: 'es'},
  DialogService
];
