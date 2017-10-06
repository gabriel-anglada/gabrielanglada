import { Component, Input } from '@angular/core';

@Component({
  selector: 'tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})

export class TagComponent {
  @Input('bg-color') bgColor: string = 'bg-primary-two';

  constructor(){}
}
