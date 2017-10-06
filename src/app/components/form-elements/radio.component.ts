import {
  AfterContentInit, Component, ContentChildren, forwardRef, Input, QueryList,
} from '@angular/core';
import {NG_VALUE_ACCESSOR, NG_VALIDATORS} from '@angular/forms';
import {InputComponent} from './input.component';

@Component({
  selector: 'bml-radio-group',
  templateUrl: './radio-group.component.html'
})
export class RadioGroupComponent extends InputComponent implements AfterContentInit{

  @Input('label') label = '';
  @ContentChildren(forwardRef(() => RadioButtonComponent)) _radios: QueryList<RadioButtonComponent>;

  ngAfterContentInit() {
    console.log(this._radios);
    this._radios.forEach(radio => {
      radio.setParenGroup(this);
    });
  }

  updateCheckedRadio(value) {
    this._radios.forEach(radio => {
      radio.writeValue(value);
    });
  }
}

@Component({
  selector: 'bml-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true,
    }]
})
export class RadioButtonComponent extends InputComponent{

  private checked: boolean;
  private _group: RadioGroupComponent;
  @Input('value') value;
  @Input('formControlName') formControlName;
  @Input('form') form;

  public writeValue(val: any) {
    this.checked = val === this.value;
  }

  // change events from the input
  public onChange(event) {
    this.data = event.target.checked ? this.value : null;
    this.checked = event.target.checked;
    this._group.updateCheckedRadio(this.value);
    // update the form
    this.propagateChange(this.data);
  }

  public setParenGroup(group: RadioGroupComponent) {
    this._group = group;
  }
}
