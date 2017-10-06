import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {InputComponent} from './input.component';
import {SelectComponent} from './select.component';
import {CheckboxComponent} from './checkbox.component';
import {RadioButtonComponent, RadioGroupComponent} from './radio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    InputComponent,
    SelectComponent,
    CheckboxComponent,
    RadioGroupComponent,
    RadioButtonComponent
  ],
  declarations: [
    InputComponent,
    SelectComponent,
    CheckboxComponent,
    RadioGroupComponent,
    RadioButtonComponent
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class FormElementsModule { }
