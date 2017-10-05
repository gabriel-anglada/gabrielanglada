import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-blue-soft',
  templateUrl: './card-blue-soft.component.html',
  styleUrls: ['./card-blue-soft.component.scss']
})

export class CardBlueSoft {
  @Input('cardAmount') cardAmount: number;
  @Input('cardNumber') cardNumber: string;

  constructor(){
  }
}
