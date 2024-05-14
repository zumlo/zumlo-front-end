import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { widgetsDropdown } from '../../models/widgetDropdown';
import { jumboDropdown } from '../../utils/jumboDropdown';

@Component({
  selector: 'z-jumbodropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jumbodropdown.component.html',
  styleUrl: './jumbodropdown.component.scss',
})
export class JumbodropdownComponent {
  configs: widgetsDropdown[] = jumboDropdown;
  @Input() show!:boolean;
  @Output() hideWidget = new EventEmitter();

  constructor(private render: Renderer2) {}
  
  //close widget dropdown
  closeWidget() {
    this.hideWidget.emit();
    this.render.removeStyle(document.body, 'overflow');
  }
}
