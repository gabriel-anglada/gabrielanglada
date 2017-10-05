import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-blue',
  templateUrl: './card-blue.component.html',
  styleUrls: ['./card-blue.component.scss']
})


export class CardBlue {
  @Input('cardAmount') cardAmount: number;
  @Input('cardNumber') cardNumber: string;
  constructor(){
  }
}
