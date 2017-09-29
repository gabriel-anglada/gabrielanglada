import {
  AfterViewInit, Component, ElementRef, NgZone, OnDestroy, OnInit, Renderer,
  ViewChild
} from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'ons-page[onsen-ui]',
  templateUrl: 'onsen-ui.component.html',
  styleUrls: ['./onsen-ui.component.scss']
})
export class OnsenUIPageComponent implements AfterViewInit, OnDestroy, OnInit {

  pullToRefreshMessage: string = 'Pull down to refresh';
  items: number[] = [1, 2, 3, 4, 5];
  inputValue: string = '';
  rangeValue: number = 2;
  selectedModifier: string = 'basic';
  progressValue: number = 0;
  modifiers = [
    {value: 'basic', label: 'Basic'},
    {value: 'material', label: 'Material'},
    {value: 'underbar', label: 'Underbar'}
  ];
  currentGesture: string = 'Waiting Gesture';
  @ViewChild('detectArea', {read: ElementRef}) detectArea: ElementRef;

  constructor(private _ngZone: NgZone, private renderer: Renderer) {
    setInterval(() => {
      this.progressValue = (this.progressValue + 10) % 110;
    }, 800);
  }

  onAction($event) {
    setTimeout(() => {
      $event.done();
      this.items.push(0);
    }, 1000);
  }

  onChangeState($event) {
    switch ($event.state) {
      case 'initial':
        this.pullToRefreshMessage = 'Pull down to refresh';
        break;
      case 'preaction':
        this.pullToRefreshMessage = 'Release to refresh';
        break;
      case 'action':
        this.pullToRefreshMessage = 'Loading data...';
        break;
    }
  }

  alert() {
    ons.notification.alert('Hello, world!');
  }

  confirm() {
    ons.notification.confirm({
      message: 'This dialog can be canceled by tapping the background or using the back button on your device.',
      cancelable: true,
      callback: i => {
        if (i == -1) {
          ons.notification.alert({message: 'You canceled it!'});
        }
      }
    });
  }

  prompt() {
    ons.notification.prompt({
      message: 'What is the meaning of Life, the Universe and Everything?',
      callback: answer => {
        if (answer === '42') {
          ons.notification.alert({message: 'That\'s the correct answer!'});
        } else {
          ons.notification.alert({message: 'Incorrect! Please try again!'});
        }
      }
    });
  }

  toast() {
    ons.notification.toast('Hello, world!', {timeout: 2000});
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    let eventTypes: string[] = ['drag', 'dragleft', 'dragright', 'dragup', 'dragdown', 'hold', 'release', 'swipe', 'swipeleft', 'swiperight', 'swipeup', 'swipedown', 'tap', 'doubletap', 'pinch', 'pinchin', 'pinchout', 'touch', 'transform', 'rotate'];
    for (let eventType of eventTypes) {
      this.renderer.listen(this.detectArea.nativeElement, eventType, (event) => {
        console.log(event.type);
        this.currentGesture = event.type;
      });
    }
  }

  ngOnDestroy() {
  }
}
