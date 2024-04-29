import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'z-common-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-card.component.html',
  styleUrl: './common-card.component.scss',
})
export class CommonCardComponent {
  @Input() config!: any;
  @Output() changed = new EventEmitter();
}
