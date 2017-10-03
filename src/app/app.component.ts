import { Component } from '@angular/core';
import {TranslateProvider} from './providers/translate.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateProvider) {}
}
