import { Component } from '@angular/core';

@Component({
  selector: 'app-global-pos',
  templateUrl: './global-pos.component.html',
  styleUrls: ['./global-pos.component.scss']
})
export class GlobalPosComponent {
    locale: string;
    total = 120456.03;
    finance = 20456.03;
    investment = 34689.02;
}
