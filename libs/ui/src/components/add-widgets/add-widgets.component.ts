import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumbodropdownComponent } from '../jumbodropdown/jumbodropdown.component';

@Component({
  selector: 'z-add-widgets',
  standalone: true,
  imports: [CommonModule, JumbodropdownComponent],
  templateUrl: './add-widgets.component.html',
  styleUrl: './add-widgets.component.scss',
})
export class AddWidgetsComponent {
  @Input() config!: any;
  @Output() changed = new EventEmitter();
  showWidgetDropdown: boolean = false;
}