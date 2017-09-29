import {
  Component,
  Input,
  ContentChildren,
  ContentChild,
  ElementRef,
  HostListener, ViewChild, AfterContentInit
} from '@angular/core';
import {FabToggleComponent} from './fab-toggle.component';
import {FabButtonComponent} from './fab-button.component';


@Component({
  selector: 'app-fab',
  template: `
    <nav
      class="fab-menu"
      [class.active]="active">
      <div #backdrop class="backdrop"></div>
      <ng-content></ng-content>
    </nav>
  `,
  styleUrls: ['./fab.component.scss']
})
export class FabComponent implements AfterContentInit {

  @Input() angle = 180;
  @Input() radius = 100;

  private _active = false;
  private numButtons;
  private initialAngle;
  private incrementAngle;

  @ViewChild('backdrop') backdrop;

  @ContentChild(FabToggleComponent) toggle;
  @ContentChildren(FabButtonComponent) buttons;

  get active() {
    return this._active;
  }

  set active(val) {
    this.updateButtons(val);
    this._active = val;
  }

  constructor(public element: ElementRef) {
    this.element = element.nativeElement;
  }

  ngAfterContentInit() {
    this.toggle.onClick.subscribe((event) => {
      event.stopPropagation();
      this.active = !this.active;
    });

    this.numButtons = this.buttons.length || 0;
    this.initialAngle = (this.angle / 2 + 90) * Math.PI / 180;
    this.incrementAngle = (this.angle / (this.numButtons - 1)) * Math.PI / 180;
  }

  getTranslate(idx) {
    let x = this.radius * Math.cos(this.initialAngle - idx * this.incrementAngle);
    let y = - this.radius * Math.sin(this.initialAngle - idx * this.incrementAngle);
    return `translate3d(${ x }px,${ y }px,0)`;
  }

  updateButtons(active) {
    let idx = 0;
    for(let btn of this.buttons.toArray()) {
      let style = btn.element.nativeElement.style;
      style['transition-duration'] = active ? `${ 90 + (100 * idx) }ms` : '';
      style['transform'] = active ? this.getTranslate(idx) : '';
      idx++;
    }

    let backdropStyle = this.backdrop.nativeElement.style;
    backdropStyle['transition-duration'] = '100ms';
    backdropStyle['opacity'] = active ? 0.5 : 0;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event) {
    if(this.active) {
      this.active = false;
    }
  }
}

export const FAB_COMPONENTS = [
  FabToggleComponent,
  FabButtonComponent,
  FabComponent
];
