import {Component, ElementRef, ViewChild} from '@angular/core';
import {OnsModalElement} from "onsenui";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'modal-search-moves',
  templateUrl: './search-moves-modal.component.html',
  // styleUrls: ['./search-moves-modal.component.scss']
})
export class SearchMovesModalComponent {

  @ViewChild('modal') modal;

  form: FormGroup;
  selectOptions: any[];

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.selectOptions = [
      {key: '1', value: 'Opción 1'},
      {key: '2', value: 'Opción 2'},
      {key: '3', value: 'Opción 3'},
    ];
  }

  createForm() {
    let now = new Date();
    let nowString = now.toISOString().split('T')[0];
    now.setDate(now.getDate() - 1);
    let yesterdayString = now.toISOString().split('T')[0];

    this.form = this.fb.group({
      select: '3',
      fromDate: [yesterdayString, Validators.required],
      toDate: [nowString, Validators.required],
    });
  }

  onSubmit(modal) {
    console.log(this.form);
    this.onClose(modal);
  }

  onClose(modal) {
    modal.hide();
  }
}
