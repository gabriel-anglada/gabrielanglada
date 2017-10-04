import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'account-movements-list',
  templateUrl: './account-movements-list.component.html',
  styleUrls: ['./account-movements-list.component.scss']
})

export class AccountMovementsList implements AfterViewInit {
  @Input('accountMovements') accountMovements: Array<any>;

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
