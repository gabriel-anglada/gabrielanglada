import { Component } from '@angular/core';

@Component({
  selector: 'app-global-pos',
  templateUrl: './global-pos.component.html',
  styleUrls: ['./global-pos.component.scss']
})
export class GlobalPosComponent {
    locale: string;
    title = "Posición Global";
    total = 120456.03;
    finance = 20456.03;
    invest = 34689.02;
    unica = 124673.89;
    freedom = 124673.89;
}
