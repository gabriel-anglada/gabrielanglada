import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'ons-page[bizum-activate]',
  templateUrl: 'activate.component.html',
})
export class BizumActivateComponent implements AfterViewInit, OnInit {

  form: FormGroup;
  accounts: any[];

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.accounts = [
      {key: '1', value: 'Cuenta corriente 1'},
      {key: '2', value: 'Cuenta corriente 2'},
      {key: '3', value: 'Cuenta corriente 3'},
    ];
  }

  createForm() {
    this.form = this.fb.group({
      account: '1',
      phone: ['', Validators.required],
      alias: ['', Validators.required],
      accepted: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    console.log(this.form.controls.radio);
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
  }
}
