import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'z-jumbodropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jumbodropdown.component.html',
  styleUrl: './jumbodropdown.component.scss',
})
export class JumbodropdownComponent {
  @Input() config!: any;
  @Output() changed = new EventEmitter();
  showWidgetDropdown!: boolean;

constructor(private render: Renderer2){}
  closeWidget() {
    this.render.removeStyle(document.body, 'overflow');
    this.showWidgetDropdown = false;
  }
}
