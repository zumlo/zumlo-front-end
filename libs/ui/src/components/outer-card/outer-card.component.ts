import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'z-outer-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './outer-card.component.html',
  styleUrl: './outer-card.component.scss',
})
export class OuterCardComponent {
  @Input() config!: any;
  @Output() changed = new EventEmitter();
}
