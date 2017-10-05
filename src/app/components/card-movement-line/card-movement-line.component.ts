import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'card-movement-line',
  templateUrl: './card-movement-line.component.html',
  styleUrls: [
    './card-movement-line.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})

export class CardMovementLine {
  @Input('movement') movement: any;
}
