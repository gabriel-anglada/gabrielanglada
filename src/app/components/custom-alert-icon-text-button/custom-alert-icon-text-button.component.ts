import { Component, Input, AfterViewInit } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'custom-alert',
  templateUrl: './custom-alert-icon-text-button.component.html',
  styleUrls: ['./custom-alert-icon-text-button.component.scss'],
  animations: [
    trigger('deployed', [
      state('false', style({height: '0px'})),
      state('true', style({height: '110px'} )),
      transition('false <=> true', animate('400ms ease'))
    ]),
  ]
})

export class CustomAlertWithIcon implements AfterViewInit {
  @Input('icon') icon: string;
  @Input('text') text: string;
  @Input('buttonText') buttonText: string;
  @Input('showAlert') showAlert: boolean;

  constructor(){
  }

  ngAfterViewInit() {
  }
}
