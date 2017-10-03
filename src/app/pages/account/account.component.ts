import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ModalFactory} from 'ngx-onsenui';
import {SearchMovesModalComponent} from '../../components/modals/search-moves/search-moves-modal.component';

@Component({
  selector: 'ons-page[account]',
  templateUrl: 'account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountPageComponent implements AfterViewInit, OnDestroy, OnInit {

  private movements: Array<any> = [];
  private _modal: any;
  private _destroyModal: Function;

  constructor(private modalFactory: ModalFactory) {}

  ngAfterViewInit() {
    this.movements = [
      {date: '3 may', concept: 'Suministros Luz - Endesa S.L. Corporation', charge: -32.87, global:12.483, type:'negative'},
      {date: '2 may', concept: 'Ingreso nómina Banco Mediolanum', charge: 12.56, global:12.867, type:'positive'},
      {date: '3 may', concept: 'Suministros Luz - Endesa S.L. Corporation', charge: -32.87, global:12.483, type:'negative'},
      {date: '2 may', concept: 'Ingreso nómina Banco Mediolanum', charge: 12.56, global:12.867, type:'positive'},
      {date: '3 may', concept: 'Suministros Luz - Endesa S.L. Corporation', charge: -32.87, global:12.483, type:'negative'},
      {date: '2 may', concept: 'Ingreso nómina Banco Mediolanum', charge: 12.56, global:12.867, type:'positive'},
      {date: '3 may', concept: 'Suministros Luz - Endesa S.L. Corporation', charge: -32.87, global:12.483, type:'negative'},
      {date: '2 may', concept: 'Ingreso nómina Banco Mediolanum', charge: 12.56, global:12.867, type:'positive'},
      {date: '3 may', concept: 'Suministros Luz - Endesa S.L. Corporation', charge: -32.87, global:12.483, type:'negative'},
      {date: '2 may', concept: 'Ingreso nómina Banco Mediolanum', charge: 12.56, global:12.867, type:'positive'},
    ];
  }

  ngOnInit() {
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
