import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'z-add-widgets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-widgets.component.html',
  styleUrl: './add-widgets.component.scss',
})
export class AddWidgetsComponent {
  @Input() config!: any;
  @Output() changed = new EventEmitter();
  showWidgetDropdown: boolean = false;
constructor(private render: Renderer2){}
  showWidget() {
    this.showWidgetDropdown = true;
    if (this.showWidgetDropdown)
      this.render.setStyle(document.body, 'overflow', 'hidden');
  }
}