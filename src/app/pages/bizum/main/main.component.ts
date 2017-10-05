import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'ons-page[bizum-main]',
  templateUrl: 'main.component.html',
})
export class BizumMainComponent implements AfterViewInit, OnInit {

  private operations: Array<any> = [];

  constructor() {}

  ngAfterViewInit() {
    this.operations = [
      {concept: 'Viaje a Italia', amount: '35,00', status: 'pending', user: {fullname: 'Laura Rueda', image: 'assets/mock/user1.jpg'}},
      {concept: 'Cena empresa', amount: '25,00', status: 'sent', user: {fullname: 'Paula Fernández', image: 'assets/mock/user1.jpg'}},
      {concept: 'Viaje a Italia', amount: '115,00', status: 'sent', user: {fullname: 'Laura Rueda', image: 'assets/mock/user1.jpg'}},
      {concept: 'Cena empresa', amount: '2055,00', status: 'pending', user: {fullname: 'Paula Fernández', image: 'assets/mock/user1.jpg'}},
    ];
  }

  ngOnInit() {
  }
}
