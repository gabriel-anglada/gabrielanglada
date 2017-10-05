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
  }
}
