import { Component, Input } from '@angular/core';

@Component({
  selector: 'tag-purple',
  templateUrl: './tag-purple.component.html',
  styleUrls: ['./tag-purple.component.scss']
})

export class TagPurple {
  @Input('title') title: string;
  @Input('amount') amount: string;
  constructor(){
  }
}
