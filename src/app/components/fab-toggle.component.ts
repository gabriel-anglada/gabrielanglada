import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fab-toggle',
  template: `
    <button
      class="fab-toggle"
      (click)="onClick.emit($event)">
      <ng-content></ng-content>
    </button>
  `
})
export class FabToggleComponent {
  @Input() icon;
  @Output() onClick = new EventEmitter();
}
