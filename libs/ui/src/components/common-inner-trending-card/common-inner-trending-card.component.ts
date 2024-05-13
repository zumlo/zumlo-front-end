import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'z-common-inner-trending-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-inner-trending-card.component.html',
  styleUrl: './common-inner-trending-card.component.scss',
})
export class CommonInnerTrendingCardComponent {
  @Input() config:any;
  @Output() changed = new EventEmitter();
}
