import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'ons-page[cards]',
  templateUrl: 'cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsPageComponent implements AfterViewInit {

  private cards: Array<any>;

  constructor() {}

  ngAfterViewInit() {
    this.cards = [
      {image: 'assets/bml-visa-debito-1.png'},
      {image: 'assets/bml-visa-debito-1.png'},
      {image: 'assets/bml-visa-debito-1.png'},
      {image: 'assets/bml-visa-debito-1.png'},
      {image: 'assets/bml-visa-debito-1.png'},
      {image: 'assets/bml-visa-debito-1.png'}
    ];
  }
}
