import { Component } from '@angular/core';
import { CardBlue } from '../card-blue/card-blue.component';

@Component({
  selector: 'global-position-cards',
  templateUrl: './global-position-cards.component.html',
  styleUrls: ['./global-position-cards.component.scss']
})

export class GlobalPosCardsComponent {
  private cardNumber = "1234 1234 1234 1234";
  private cardAmount = 1234.56;
}
