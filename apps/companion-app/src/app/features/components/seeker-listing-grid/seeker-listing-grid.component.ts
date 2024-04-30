import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from '@zumlo/ui';

@Component({
  selector: 'z-seeker-listing-grid',
  standalone: true,
  imports: [TabsComponent],
  templateUrl: './seeker-listing-grid.component.html',
  styleUrl: './seeker-listing-grid.component.scss',
})
export class SeekerListingGridComponent {}
