import {AfterViewInit, Component, OnDestroy, OnInit,ViewEncapsulation } from '@angular/core';
import {ModalFactory} from 'ngx-onsenui';
import {SearchMovesModalComponent} from '../../components/modals/search-moves/search-moves-modal.component';

@Component({
  selector: 'ons-page[account]',
  templateUrl: 'account.component.html',
  styleUrls: ['./account.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountPageComponent implements AfterViewInit, OnDestroy, OnInit {

  private _modal: any;
  private _destroyModal: Function;

  constructor(private modalFactory: ModalFactory) {}
  private accountMovements: Array<any> = [];

  ngAfterViewInit() {
  }

  ngOnInit() {
    this.accountMovements = [
      {date: "3 May", name: "Suministros Luz - Endesa S.L. Corporation", balance: 12.56, total: 12867, type: 'positive' },
      {date: "2 May", name: "Ingreso nómina Banco Mediolanum", balance: -12.56, total: 5345, type: 'negative' },
      {date: "3 May", name: "Suministros Luz - Endesa S.L. Corporation", balance: 12.56, total: 234234, type: 'positive' },
      {date: "2 May", name: "Ingreso nómina Banco Mediolanum", balance: -12.56, total: 34232, type: 'negative' },
      {date: "5 May", name: "Suministros Luz - Endesa S.L. Corporation", balance: 12.56, total: 4234, type: 'positive' },
      {date: "3 May", name: "Ingreso nómina Banco Mediolanum", balance: 12.56, total: 342423, type: 'negative' },
      {date: "2 May", name: "Suministros Luz - Endesa S.L. Corporation", balance: 12.56, total: 3424, type: 'positive' },
      {date: "3 May", name: "Ingreso nómina Banco Mediolanum", balance: -322.56, total: 4234, type: 'negative' },
      {date: "2 May", name: "Suministros Luz - Endesa S.L. Corporation", balance: 12.56, total: 12867, type: 'positive' },
      {date: "3 May", name: "Ingreso nómina Banco Mediolanum", balance: -45.56, total: 76776, type: 'negative' },
    ];

    this.modalFactory
      .createModal(SearchMovesModalComponent)
      .then(({modal, destroy}) => {
        this._modal = modal;
        this._destroyModal = destroy;
      });
  }

  onSearchModalOpen() {
    if (this._modal) {
      this._modal.show({animation: 'fade'});
    }
  }

  ngOnDestroy() {
    this._destroyModal();
  }
}
