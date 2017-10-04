import { Component, Input } from '@angular/core';

@Component({
  selector: 'tag-dark-blue',
  templateUrl: './tag-dark-blue.component.html',
  styleUrls: ['./tag-dark-blue.component.scss']
})

export class TagDarkBlue {
  @Input('title') title: string;
  @Input('amount') amount: string;
  constructor(){
  }
}
