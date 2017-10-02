import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {InputComponent} from './input.component';
import {SelectComponent} from './select.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    InputComponent,
    SelectComponent
  ],
  declarations: [
    InputComponent,
    SelectComponent
  ],
  providers: [],
})
export class FormElementsModule { }
