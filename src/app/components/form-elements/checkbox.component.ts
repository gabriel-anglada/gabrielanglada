import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import {InputComponent} from './input.component';

@Component({
  selector: 'bml-checkbox',
  templateUrl: './checkbox.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    }]
})
export class CheckboxComponent extends InputComponent {
  constructor() {
    super();
  }

  // change events from the input
  public onChange(event) {
    console.log(event.target.checked);
    this.data = this.value = event.target.checked;
    // update the form
    this.propagateChange(this.data);
  }
}
