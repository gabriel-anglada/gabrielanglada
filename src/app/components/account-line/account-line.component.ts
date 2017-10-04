import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'account-line',
  templateUrl: './account-line.component.html',
  styleUrls: ['./account-line.component.scss']
})

export class AccountLine implements AfterViewInit {
  @Input('account') account: any;

  constructor(){
  }
  ngAfterViewInit() {
    var balances: HTMLCollection = document.getElementsByClassName('item-balance');
    for(var i = 0; i < balances.length; i++ ){
      if ( parseFloat(balances[i].innerHTML) < 0 ){
        (<HTMLElement>balances[i]).style.color = '#e63241';
      } else {
        (<HTMLElement>balances[i]).style.color = '#00a046';
      }
    }
  }
}
