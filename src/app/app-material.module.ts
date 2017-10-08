import {NgModule} from "@angular/core";
import {MatSliderModule, MatProgressSpinnerModule} from "@angular/material";

@NgModule({
  imports: [
    MatSliderModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatSliderModule,
    MatProgressSpinnerModule
  ]
})
export class AppMaterialModule {
}
