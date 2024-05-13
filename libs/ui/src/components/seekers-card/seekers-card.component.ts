import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'z-seekers-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seekers-card.component.html',
  styleUrl: './seekers-card.component.scss',
})
export class SeekersCardComponent {
  @Input() config:any;
  @Output() changed = new EventEmitter();
}
