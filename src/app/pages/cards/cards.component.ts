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
      {image: 'assets/mock/bml-visa-debito-1.png'},
      {image: 'assets/mock/bml-visa-debito-1.png'},
      {image: 'assets/mock/bml-visa-debito-1.png'},
      {image: 'assets/mock/bml-visa-debito-1.png'},
      {image: 'assets/mock/bml-visa-debito-1.png'},
      {image: 'assets/mock/bml-visa-debito-1.png'}
    ];
  }
}
