import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'ons-page[notifications]',
  templateUrl: 'notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsPageComponent implements AfterViewInit {

  private notifications: Array<any>;

  constructor() {}

  ngAfterViewInit() {
    this.notifications = [
      {date: '10/02/2017', text: 'Le informamos que su codo de activación es 45668'},
      {date: '10/02/2017', text: 'Le informamos que su codo de activación es 45668'},
      {date: '10/02/2017', text: 'Le informamos que su codo de activación es 45668'},
      {date: '10/02/2017', text: 'Le informamos que su codo de activación es 45668'},
      {date: '10/02/2017', text: 'Le informamos que su codo de activación es 45668'}
    ];
  }
}
