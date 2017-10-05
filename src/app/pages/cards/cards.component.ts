import { OnInit, Component, Input } from '@angular/core';
import { ClientCardModel } from '../../models/client-card.model';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'ons-page[cards]',
  templateUrl: 'cards.component.html',
  styleUrls: ['./cards.component.scss'],
  animations: [
    trigger('desplegado', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('200ms ease-out')),
      transition('default => rotated', animate('200ms ease-in'))
    ]),
    trigger('contentDeploy', [
      state('default', style({height: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded => default', animate('300ms ease')),
      transition('default => expanded', animate('300ms ease'))
    ])
  ]
})
export class CardsPageComponent implements OnInit {
  private currentCard: ClientCardModel;
  private cards: Array<ClientCardModel>;

  //for animation triggers
  private state = 'default';
  private content = 'default';

  //default value, remove once proper data has been provided
  private price = 37.45;

  constructor() {}

  ngOnInit() {
    console.log('ngOnInit');

    this.cards = [
      new ClientCardModel("1243 5432 6532 9357", "Pau Roger Garcia", 1234, 13434, 14324, 342341, "assets/mock/bml-visa-debito-1.png"),
      new ClientCardModel("7566 7245 2364 3245", "Marc Mikel Garcia", 75671, 4321, 15435, 2343241, "assets/mock/bml-visa-debito-1.png"),
      new ClientCardModel("3453 5451 4773 2435", "Roger Ferran Garcia", 5451, 1565, 65641, 123432, "assets/mock/bml-visa-debito-1.png"),
      new ClientCardModel("8775 3253 4654 2647", "Mikel Carles Garcia", 23431, 5461, 345341, 234321, "assets/mock/bml-visa-debito-1.png"),
      new ClientCardModel("3423 1343 3455 2145", "Ariel Alex Garcia", 1756756, 65461, 15345, 22341, "assets/mock/bml-visa-debito-1.png"),
      new ClientCardModel("0898 1234 7764 4324", "Pepe Machinegun Garcia", 1345345, 12323, 23421, 234431, "assets/mock/bml-visa-debito-1.png"),
    ];
    this.currentCard = this.cards[0];
  }

  //event fired method when user swipes
  userSwiped(ev){
    this.currentCard = this.cards[ev.activeIndex];
  }

  //animation state changer method for collapsible component
  expand() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
    this.content = (this.content === 'default' ? 'expanded' : 'default');
  }
}
