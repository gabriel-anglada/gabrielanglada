import {Component, ElementRef, ViewChild} from '@angular/core';
import {OnsModalElement} from "onsenui";

@Component({
  selector: 'modal-search-moves',
  templateUrl: './search-moves-modal.component.html',
  // styleUrls: ['./search-moves-modal.component.scss']
})
export class SearchMovesModalComponent {

  @ViewChild('modal') modal;

  constructor() {}

  onApplyFilter(modal) {
    this.onClose(modal);
  }

  onClose(modal) {
    modal.hide();
  }
}
