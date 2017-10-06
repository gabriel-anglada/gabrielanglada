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

  private checked: boolean;

  public writeValue(val: any) {
    this.checked = !!val;
  }

  // change events from the input
  public onChange(event) {
    this.data = this.checked = event.target.checked;
    // update the form
    this.propagateChange(this.data);
  }
}
