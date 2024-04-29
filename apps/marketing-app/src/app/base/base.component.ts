import { Component, OnInit } from '@angular/core';
import { ZEventService } from '@zumlo/ui';

@Component({
  selector: 'z-base',
  template: `<z-loader></z-loader><z-home #scroller class="bg-[#665472]" (scroll)="onScroll($event, scroller)"
   (sendClassToBase)="sendClassToBase($event)" [ngClass]="{'responsive-toggle-menu': showMenuBar}"></z-home>`,
  styles: ``,
})
export class BaseComponent implements OnInit {
  showMenuBar: boolean = false;

  constructor(private event: ZEventService) { }

  ngOnInit(): void { }

  onScroll(event: any, scroller: any) {
    this.event.scroll.next({
      event, scroller
    });
  }

  sendClassToBase(event: any) {
    this.showMenuBar = event;
  }
}
