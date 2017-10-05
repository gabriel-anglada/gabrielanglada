import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'bml-input',
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    }]
})
export class InputComponent implements ControlValueAccessor, Validator {
  public value: string | number | boolean;
  public data: any;
  @Input('placeholder') placeholder = '';
  @Input('type') type = 'text';
  @Input('label') label = 'label';

  // this is the initial value set to the component
  public writeValue(val: any) {
    this.value = val || '';
  }

  // registers 'fn' that will be fired wheb changes are made
  // this is how we emit the changes back to the form
  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  // validates the form, returns null when valid else the validation object
  public validate(c: FormControl) {
    return null;
  }

  // not used, used for touch input
  public registerOnTouched() { }

  // change events from the input
  public onChange(event) {
    this.data = event.target.value;
    // update the form
    this.propagateChange(this.data);
  }

  // the method set in registerOnChange to emit changes back to the form
  public propagateChange = (_: any) => { };
}
