import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'z-reminder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reminder.component.html',
  styleUrl: './reminder.component.scss',
})
export class ReminderComponent {
  @Input() config!: any;
  @Output() changed = new EventEmitter();
}
