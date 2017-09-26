import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-fab-button',
  template: `
    <button
      #button
      class="fab-item {{ buttonClass }}"
      (click)="onClick.emit($event)"
      [attr.data-label]="label">
      <ng-content></ng-content>
    </button>
  `
})
export class FabButtonComponent {
  @Input() label;
  @Input('class') buttonClass;
  @Output() onClick = new EventEmitter();
  @ViewChild('button') element;
}
