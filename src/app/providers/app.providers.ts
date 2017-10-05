import {TranslateProvider} from './translate.provider';
import { LOCALE_ID } from '@angular/core';

export const APP_PROVIDERS = [
  TranslateProvider,
  { provide: LOCALE_ID, useValue: 'es-ES'}
];
