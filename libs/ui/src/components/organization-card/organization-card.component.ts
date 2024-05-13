import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'z-organization-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organization-card.component.html',
  styleUrl: './organization-card.component.scss',
})
export class OrganizationCardComponent {
  hover:boolean  = false;
  @Input() config:any;
  @Output() changed = new EventEmitter();
}
